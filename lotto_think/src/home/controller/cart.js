const Base = require('./base.js');

module.exports = class extends Base {
  async indexAction() {
    if (this.isPost) {
      think.logger.debug(this.post());
    }
    const OrdersModel = this.model('orders');
    const user = this.session('user');
    if (think.isEmpty(user)) {

    }
    const userId = user.id;
    const orders = await OrdersModel.where({user_id: userId}).select();
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
};
