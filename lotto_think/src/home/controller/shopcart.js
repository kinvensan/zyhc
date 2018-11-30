'use strict';
const Base = require('./base.js');

module.exports = class extends Base {
  async indexAction() {
    const shopcart = this.assign('shopcart');
    const lotteryids = shopcart.orders.map(item => item.lottery_id);
    const LotteryModel = this.model('lottery');
    const lotteriesMap = await LotteryModel.queryMapByIds(lotteryids);
    shopcart.orders = shopcart.orders.map(item => {
      const lottery = lotteriesMap[item.lottery_id];
      item.lottery_name = lottery.name;
      item.lottery_title = lottery.title;
      item.lottery_picture = lottery.picture;
      item.draw_at = lottery.draw_at;
      return item;
    });
    this.assign('shopcart', shopcart);
    return this.display();
  }

  async saveAction() {
    const user = await this.session('user');
    const orders = [];
    think.logger.debug(this.post());
    // 号码订单
    if (!(think.isEmpty(this.post('ticket_amount')) || parseInt(this.post('ticket_amount')) === 0 || parseInt(this.post('ticket_amount')) === 0)) {
      orders.push({
        lottery_id: this.post('lottery_id'),
        ticket_bets: parseInt(this.post('ticket_bnumber')),
        ticket_amount: parseInt(this.post('ticket_amount')),
        ticket_number: parseInt(this.post('ticket_number')),
        ticket_status: 1
      });
    }
    think.logger.debug(orders);
    if (think.isEmpty(user) || think.isEmpty(user.id)) {
      // 未登陆用户进行cookie操作
      const shopcart = this.assign('shopcart');
      const tickets = orders.map(item => {
        item.ticket_id = think.uuid();
        return item;
      });
      think.logger.debug(shopcart);
      shopcart.orders.push(...tickets);
      shopcart.count = shopcart.orders.length;
      shopcart.amount = shopcart.orders.map(item => parseInt(item.ticket_amount)).reduce((x, y) => x + y, 0);
      this.cookie('_shopcart', JSON.stringify(shopcart));
    } else {
      // 登陆用户进行数据库操作
      const tickets = orders.map(item => {
        item.user_id = user.id;
        return item;
      });
      if (tickets.length > 0) {
        const ShopcartModel = this.model('shopcart');
        await ShopcartModel.addTickets(tickets);
      }
    }
    return this.redirect('/shopcart');
  }

  async removeAction() {
    const ticketId = this.post('ticket_id');
    const user = await this.session('user');
    if (think.isEmpty(user)) {
      // 未登陆用户进行cookie操作)
      const shopcart = this.assign('shopcart');
      const tickets = shopcart.orders.filter(item => {
        return !(item.ticket_id === ticketId);
      });
      think.logger.debug(tickets);
      shopcart.orders = tickets;
      shopcart.count = shopcart.orders.length;
      shopcart.amount = shopcart.orders.map(item => parseInt(item.ticket_amount)).reduce((x, y) => x + y, 0);
      this.cookie('_shopcart', JSON.stringify(shopcart));
    } else {
      const ShopcartModel = this.model('shopcart');
      await ShopcartModel.remove(ticketId);
    }
    return this.success();
  }

  async payloginAction() {
    const shopcart = this.assign('shopcart');
    if (!think.isEmpty(shopcart) && parseInt(shopcart.amount) === 0) {
      return this.redirect('/shopcart');
    }
    this.cookie('_redirect', '/shopcart');
    return this.redirect('/login');
  }
};
