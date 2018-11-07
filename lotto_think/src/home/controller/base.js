module.exports = class extends think.Controller {
  async __before() {
    let _cftoken = this.cookie('_cftoken');
    if (think.isEmpty(_cftoken)) {
      _cftoken = think.uuid();
      this.cookie('_cftoken', _cftoken, { // 设定 cookie 时指定额外的配置
        maxAge: 10 * 3600 * 1000
      });
    }
    const user = await this.session('user');
    if (think.isEmpty(user)) {
      const ordersTotal = await this.model('orders').ordersTotal(_cftoken, 0);
      if (think.isEmpty(ordersTotal)) {
        this.assign('orderTotal', {'count': 0, 'amount': 0.00});
      } else {
        this.assign('orderTotal', ordersTotal);
      }
    } else {
      const userId = user.uid;
      this.assign('user', user);
      const ordersTotal = await this.model('orders').ordersTotal(_cftoken, userId);
      if (think.isEmpty(ordersTotal)) {
        this.assign('orderTotal', {'count': 0, 'amount': 0.00});
      } else {
        this.assign('orderTotal', ordersTotal);
      }
    }
  }

  error(errorNo, message, data) {
    if (this.isAjax()) {
      return this.fail(errorNo, message, data);
    } else {
      this.assign({
        errorNo,
        message,
        data
      });
      return this.display('/home/error/error_ok.html');
    }
  }
};
