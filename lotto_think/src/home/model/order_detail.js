'use strict';
const BaseModel = require('./base');
module.exports = class extends BaseModel {
  createOrders(orders) {
    return this.addMany(orders);
  }
  queryByOrdersId(ordersId) {
    return this.where({orders_id: ordersId}).select();
  }
  queryByOrdersIds(ordersIds) {
    if (!think.isEmpty(ordersIds)) {
      return this.where({orders_id: ['in', ordersIds]}).select();
    }
  }

  saveOrderDetail(ordersId, orderDetail) {
    if (!think.isEmpty(ordersId) && !think.isEmpty(orderDetail)) {
      orderDetail.updated_at = ['EXP', 'NOW()'];
      return this.where({orders_id: ordersId}).update(orderDetail);
    }
  }

  queryByDrawAt(winAt) {
    return this.field(['order_detail.id', 'order_detail.user_id', 'order_detail.lottery_id', 'order_detail.ticket_amount',
      'order_detail.ticket_number', 'order_detail.ticket_bets', 'order_detail.draw_at',
      'user.user_name,results.id as results_id', 'results.result as result'].join(','))
      .join(['results on order_detail.draw_at = results.last_draw_at ', 'user on user.id = order_detail.user_id']).where({status: 2, draw_at: ['>', winAt]}).select();
  }
};
