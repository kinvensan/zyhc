'use strict';
const BaseModel = require('./base');

module.exports = class extends BaseModel {
  addTickets(tickets) {
    return this.addMany(tickets);
  }
  queryByUserId(userId) {
    return this.where({'user_id': userId, ticket_status: 1}).order('updated_at desc').select();
  }
  queryOrdersByUserId(userId) {
    return this.join(['lottery on shopcart.lottery_id = lottery.id', 'left join user on user.id=shopcart.user_id']).where({'user_id': userId, ticket_status: 1})
      .field([
        'shopcart.id as shopcart_id',
        'shopcart.user_id as user_id',
        'shopcart.lottery_id as lottery_id',
        'lottery.name as lottery_name',
        'lottery.title as lottery_title',
        'shopcart.ticket_amount as ticket_amount',
        'shopcart.ticket_number as ticket_number',
        'shopcart.ticket_bets as ticket_bets',
        'shopcart.ticket_status as ticket_status',
        'lottery.draw_at as draw_at',
        'user.email as user_email'
      ].join(',')).select();
  }

  saveShopcarts(ids, shopcart) {
    if (!think.isEmpty(ids) && !think.isEmpty(shopcart)) {
      shopcart.updated_at = ['EXP', 'NOW()'];
      return this.where({id: ['IN', ids]}).update(shopcart);
    }
  }

  createOrders(orders) {
    if (!think.isEmpty(orders)) {
      return this.addMany(orders);
    }
  }
};
