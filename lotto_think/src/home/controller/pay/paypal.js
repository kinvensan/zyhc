const Base = require('./basepay.js');

const moment = require('moment');
module.exports = class extends Base {
  async createAction() {
    // const orders = this.assign('orders');
    try {
      const user = await this.session('user');
      if (think.isEmpty(user) || think.isEmpty(user.id)) {
        return this.fail(5001, 'user not login!');
      }
      // todo 用户非法判断
      // 判定订单是否存在非法
      const ShopcartModel = this.model('shopcart');
      const orders = await ShopcartModel.queryOrdersByUserId(user.id);
      const shopcart = {};
      const expiredFlag = orders.findIndex(item => {
        return moment().isAfter(moment(item.draw_at * 1000));
      });
      if (expiredFlag > -1) {
        // 存在过期订单
        return this.fail(5001, 'some ticket is expired');
      }
      shopcart.orders = orders;
      shopcart.count = orders.length;
      shopcart.amount = orders.map(item => parseInt(item.ticket_amount)).reduce((x, y) => x + y, 0);

      // 请求创建订单
      const axiosResult = await this.service('paypal').axiosCreatePayment(shopcart.amount);
      think.logger.debug(axiosResult);
      if (!think.isEmpty(axiosResult.errno)) {
        return this.fail(5001, axiosResult.errmsg);
      }
      // 生成订单
      const OrdersModel = this.model('orders');
      const ordersId = await OrdersModel.create({
        user_id: user.id,
        amount: shopcart.amount,
        quantity: shopcart.count,
        currency: 'USD',
        status: 1
      });
      think.logger.debug(ordersId);
      // 生成订单详情
      const OrderDetailModel = this.model('order_detail');
      await OrderDetailModel.createOrders(orders.map(item => {
        item.orders_id = ordersId;
        item.status = 1;
        item.currency = 'USD';
        return item;
      }));
      // 生成支付订单
      const PaymentModel = this.model('payment');
      await PaymentModel.create({
        payment_id: axiosResult.id,
        user_id: user.id,
        orders_id: ordersId,
        pay_way: 'PAYPAL',
        amount: shopcart.amount,
        currency: 'USD',
        status: 1
      });
      return this.success(axiosResult);
    } catch (error) {
      return this.fail(5002, error);
    }
  }

  async executeAction() {
    try {
      const paymentID = this.post('paymentID');
      const payerID = this.post('payerID');
      think.logger.debug(this.post());
      // 查询paymentID 是否过期
      const PaymentModel = this.model('payment');
      const payment = await PaymentModel.findByPaymentId(paymentID);
      if (think.isEmpty(payment)) {
        this.fail('1000', 'payment sql error');
      }
      const axiosResult = this.service('paypal').axiosExecutePayment(paymentID, payerID);
      if (!think.isEmpty(axiosResult.errno)) {
        this.fail('5002', axiosResult.errmsg);
      }
      // 更新payment
      think.logger.debug(payment);
      await PaymentModel.savePayment(paymentID, {
        payer_id: payerID,
        status: 2
      });
      // 修正订单状态
      const OrdersModel = this.model('orders');
      await OrdersModel.saveOrders(payment.orders_id, {
        status: 2
      });
      // 修正详单状态
      const OrdersDetailModel = this.model('order_detail');
      await OrdersDetailModel.saveOrderDetail(payment.orders_id, {
        ticket_status: 2,
        status: 2
      });
      // 修正购物车状态
      const orderDetails = await OrdersDetailModel.queryByOrdersId(payment.orders_id);
      think.logger.debug(orderDetails);
      const ShopcartModel = this.model('shopcart');
      await ShopcartModel.saveShopcarts(orderDetails.map(item => {
        return item.shopcart_id;
      }), {
        ticket_status: 2
      });
      // 构建资金流水
      const BalanceRecordModel = this.model('balance_record');
      await BalanceRecordModel.createRecords([{
        user_id: payment.user_id,
        payment_id: payment.id,
        orders_id: payment.orders_id,
        amount: payment.amount,
        action: 1,
        memo: 'deposit ' + payment.amount
      }, {
        user_id: payment.user_id,
        payment_id: payment.id,
        orders_id: payment.orders_id,
        amount: payment.amount,
        action: -1,
        memo: 'buy ticket'
      }]);
      // 进行资金余额操作
      const BalanceModel = this.model('balance');
      const balance = await BalanceModel.findByUserId(payment.user_id);
      if (think.isEmpty(balance) || think.isEmpty(balance.amount)) {
        await BalanceModel.createBalance({
          user_id: payment.user_id,
          amount: 0
        });
      } else {
        await BalanceModel.incrementUserBalance({
          user_id: payment.user_id,
          amount: 0
        });
      }

      return this.success(axiosResult);
    } catch (error) {
      return this.fail(5002, error);
    }
  }
};
