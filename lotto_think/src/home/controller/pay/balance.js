'use strict';
const BasePay = require('./basePay.js');
const moment = require('moment');
module.exports = class extends BasePay {
  async indexAction() {
    const user = await this.session('user');
    // 判定订单是否存在非法
    const ShopcartModel = this.model('shopcart');
    const orders = await ShopcartModel.queryOrdersByUserId(user.id);
    if (orders.length === 0) {
      return this.fail(5001, 'no order need to pay!');
    }
    const shopcart = {};
    const expiredFlag = orders.findIndex(item => {
      return moment().isAfter(moment(item.draw_at * 1000));
    });
    if (expiredFlag > -1) {
      // 存在过期订单
      return this.fail(5001, 'some ticket expired!');
    }
    shopcart.orders = orders;
    shopcart.count = orders.length;
    shopcart.amount = orders.map(item => parseInt(item.ticket_amount)).reduce((x, y) => x + y, 0);

    // 判定余额是否足够支付
    const BalanceModel = this.model('balance');
    const balance = await BalanceModel.findByUserId(user.id);
    think.logger.debug(balance);
    if (think.isEmpty(balance) || think.isEmpty(balance.amount) || balance.amount < shopcart.amount) {
      return this.fail(5002, 'Balance is not enough.');
    }
    // 生成订单
    const OrdersModel = this.model('orders');
    const ordersId = await OrdersModel.create({
      user_id: user.id,
      amount: shopcart.amount,
      quantity: shopcart.count,
      currency: 'USD',
      status: 2
    });
    think.logger.debug(ordersId);
    // 生成订单详情
    const OrderDetailModel = this.model('order_detail');
    await OrderDetailModel.createOrders(orders.map(item => {
      item.orders_id = ordersId;
      item.status = 2;
      item.currency = 'USD';
      item.ticket_status = 2;
      return item;
    }));
    // 生成支付订单
    const PaymentModel = this.model('payment');
    const paymentId = await PaymentModel.create({
      payment_id: think.uuid(),
      user_id: user.id,
      orders_id: ordersId,
      pay_way: 'BANLANCE',
      amount: shopcart.amount,
      currency: 'USD',
      status: 2
    });
      // 修正购物车状态
    await ShopcartModel.saveShopcarts(orders.map(item => {
      return item.shopcart_id;
    }), {
      ticket_status: 2
    });
    // 构建资金流水
    const BalanceRecordModel = this.model('balance_record');
    await BalanceRecordModel.create({
      user_id: user.id,
      payment_id: paymentId,
      orders_id: ordersId,
      amount: shopcart.amount,
      action: -1,
      memo: 'buy ticket'
    });
    // 修正资金
    balance.amount = balance.amount - shopcart.amount;
    await BalanceModel.saveBalance(balance.id, balance);

    return this.success();
  }
};
