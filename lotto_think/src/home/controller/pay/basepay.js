const Base = require('../base.js');

module.exports = class extends Base {
  async __before() {
    await super.__before();
    const user = await this.session('user');
    if (think.isEmpty(user) || think.isEmpty(user.id)) {
      return this.redirect('/login');
    }
  }

  async beforePay() {

  }

  async afterPay(userId, amount, quantity, orderDetails, payment, balance) {
    // 生成订单
    const OrdersModel = this.model('orders');
    const orders = {
      user_id: userId,
      amount,
      quantity,
      status: 2
    };
    const resultOrdersId = await OrdersModel.create(orders);
    orders.id = resultOrdersId;

    // 生成订单详情
    const OrderDetailModel = this.model('order_detail');
    await OrderDetailModel.createOrders(orderDetails.map(item => {
      item.orders_id = orders.id;
      item.status = 2;
      item.currency = payment.currency;
      item.ticket_status = 2;
      return item;
    }));

    // 生成支付订单
    const PaymentModel = this.model('payment');
    await PaymentModel.create({
      payment_id: payment.id,
      user_id: userId,
      orders_id: orders.id,
      pay_way: payment.pay_way,
      amount: amount,
      currency: payment.currency,
      status: 2
    });
    const ShopcartModel = this.model('shopcart');
    // 修正购物车状态
    await ShopcartModel.saveShopcarts(orderDetails.map(item => {
      return item.shopcart_id;
    }), {
      ticket_status: 2
    });
    // 构建资金流水
    const BalanceRecordModel = this.model('balance_record');
    await BalanceRecordModel.create({
      user_id: userId,
      payment_id: payment.id,
      orders_id: orders.id,
      amount,
      action: -1,
      memo: 'buy ticket'
    });

    // 修正资金
    const BalanceModel = this.model('balance');
    balance.amount = balance.amount - amount;
    await BalanceModel.saveBalance(balance.id, balance);
  }

  async createOrderFromShopCart(userId, shopcart, paymentId) {
    // 生成订单
    const OrdersModel = this.model('orders');
    const ordersId = await OrdersModel.create({
      user_id: userId,
      amount: shopcart.amount,
      quantity: shopcart.count,
      currency: 'USD',
      status: 1
    });
    think.logger.debug(ordersId);
    // 生成订单详情
    const OrderDetailModel = this.model('order_detail');
    await OrderDetailModel.createOrders(shopcart.orders.map(item => {
      item.orders_id = ordersId;
      item.status = 1;
      item.currency = 'USD';
      return item;
    }));
    // 生成支付订单
    const PaymentModel = this.model('payment');
    await PaymentModel.create({
      payment_id: paymentId,
      user_id: userId,
      orders_id: ordersId,
      pay_way: 'PAYPAL',
      amount: shopcart.amount,
      currency: 'USD',
      status: 1
    });
  }
};
