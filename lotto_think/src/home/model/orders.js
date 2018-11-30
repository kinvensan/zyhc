'use strict';
const BaseModel = require('./base');
module.exports = class extends BaseModel {
  saveOrders(ordersId, orders) {
    if (!think.isEmpty(ordersId) && !think.isEmpty(orders)) {
      orders.updated_at = ['EXP', 'NOW()'];
      return this.where({id: ordersId}).update(orders);
    }
  }

  queryByUserId(userId) {
    if (!think.isEmpty(userId)) {
      return this.where({user_id: userId, status: 2}).order('updated_at desc').select();
    }
  }
};
