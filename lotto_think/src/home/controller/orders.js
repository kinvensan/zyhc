const Base = require('./base.js');

module.exports = class extends Base {
  async indexAction() {
    const OrdersModel = this.model('orders');
    const LotteryModel = this.model('lottery');
    const _cftoken = this.cookie('_cftoken');
    let userId = 0;
    const user = await this.session('user');
    if (!think.isEmpty(user)) {
      think.logger.debug(user);
      userId = user.uid;
    }
    if (this.isPost) {
      think.logger.debug(this.post());
      const lotteryId = this.post('order[lottery]');
      const lotteryLines = this.lines2Json(this.post('order[lines]'));
      const lottery = await LotteryModel.where({id: parseInt(lotteryId)}).find();
      if (think.isEmpty(lottery) || lotteryLines.length === 0) {
        return this.error(500, 'error');
      }
      think.logger.debug(lottery);
      await OrdersModel.addOrder(_cftoken, userId, lottery, lotteryLines);
      return this.redirect('/orders');
    }
    const orders = await OrdersModel.getOrderList(_cftoken, userId);
    think.logger.debug(orders);
    this.assign('orders', orders);
    return this.display();
  }

  async removeAction() {
    const orderId = this.get('orderId');
    const OrdersModel = this.model('orders');
    const affectedRows = await OrdersModel.where({id: orderId}).delete();
    if (affectedRows > 0) {
      return this.redirect('/orders');
    }
  }

  lines2Json(lines) {
    const result = [];
    if (!think.isEmpty(lines)) {
      const lineArray = lines.split(';');
      for (var i = 0; i < lineArray.length; i++) {
        const ball = {n: [], b: []};
        const region = lineArray[i].split('-');
        ball.n = region[0].split('_');
        if (region.length > 1) {
          ball.b = region[1].split('_');
        }
        result.push(ball);
      }
    }
    return result;
  }
};
