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
};
