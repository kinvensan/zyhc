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
    think.logger.debug(user);
    if (think.isEmpty(user)) {
      // 非登陆用户
      const shopcart = this.cookie('_shopcart');
      if (think.isEmpty(shopcart)) {
        this.assign('shopcart', {'count': 0, 'amount': 0.0, orders: []});
      } else {
        this.assign('shopcart', JSON.parse(shopcart));
      }
    } else {
      // 登陆用户
      const userId = user.id;
      const BalanceModel = this.model('balance');
      const balance = await BalanceModel.findByUserId(userId);
      user.balance = balance.amount || 0.0;
      this.assign('user', user);
      const ShopcartModel = this.model('shopcart');
      const orders = await ShopcartModel.queryByUserId(userId);
      // const amount = orders.length === 0 ? 0.0 : orders.length === 1 ? orders[0].ticket_amount : orders.reduce((x, y) => { return x.ticket_amount + y.ticket_amount });
      const shopcart = {
        'count': orders.length,
        'amount': orders.map(x => x.ticket_amount).reduce((x, y) => parseInt(x) + parseInt(y), 0),
        orders
      };
      this.assign('shopcart', shopcart);
    }
  }

  async checkLogin() {
    const user = await this.session('user');
    if (think.isEmpty(user) || think.isEmpty(user.id)) {
      return this.redirect('/login');
    }
    return user;
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
      return this.display('home/error/error_500.html');
    }
  }

  getToken() {
    const _cftoken = this.cookie('_cftoken');
    if (think.isEmpty(_cftoken)) {
      return think.uuid();
    }
    return _cftoken;
  }

  setToken(_cftoken) {
    this.cookie('_cftoken', _cftoken, { // 设定 cookie 时指定额外的配置
      maxAge: 10 * 3600 * 1000
    });
  }

  clearToken() {
    this.cookie('_cftoken', null);
  }
};
