const Base = require('./base.js');

module.exports = class extends Base {
  async __before() {
    await super.__before();
    const user = await this.session('user');
    if (think.isEmpty(user) || think.isEmpty(user.id)) {
      return this.redirect('/login');
    }
  }
  async indexAction() {
    return this.redirect('/account/profile');
  }

  async profileAction() {
    const user = await this.session('user');
    const UserModel = this.model('user');
    const account = await UserModel.findById(user.id);
    if (this.isPost) {
      const profile = {};
      ['user_name', 'nick_name', 'address', 'telephone', 'introduction', 'timezone', 'country'].forEach(item => {
        if (!think.isEmpty(this.post(item))) {
          profile[item] = this.post(item);
        } else {
          profile[item] = account[item];
        }
      });
      await UserModel.saveUser(user.id, profile);
      return this.redirect('/account/profile');
    } else {
      if (!think.isEmpty(account)) {
        this.assign('account', account);
      }
      return this.display();
    }
  }

  async resetpasswordAction() {
    const user = await this.session('user');
    // 检验密码是否一致，旧密码是否相等
    const nPassword = this.post('npassword');
    if (!(nPassword === this.post('rpassword'))) {
      return this.error(500, 'Passwords does not match');
    }
    const UserLoginModel = this.model('user_login');
    const userLogin = await UserLoginModel.findByUserId(user.id);
    think.logger.debug(UserLoginModel.hashPassword(nPassword, userLogin.slat));
    think.logger.debug(userLogin.password);
    if (!(UserLoginModel.hashPassword(this.post('password'), userLogin.slat) === userLogin.password)) {
      return this.error(500, 'password not correct');
    }
    await UserLoginModel.changePassword(user.id, nPassword);
    await this.session('user', null);
    return this.redirect('/');
  }

  async changemailAction() {
    const user = await this.session('user');
    const nEmail = this.post('nemail');
    think.logger.debug(this.post());
    if (think.isEmpty(nEmail)) {
      return this.redirect('/account/profile');
    }
    const UserModel = this.model('user');
    const UserLoginModel = this.model('user_login');

    await UserModel.changeMail(user.id, this.post('email'), {
      email: nEmail
    });
    await UserLoginModel.changeMail(user.id, this.post('email'), {
      login_name: nEmail
    });
    await this.session('user', null);
    return this.redirect('/');
  }

  async ticketsAction() {
    const user = await this.session('user');
    const OrderdetailModel = this.model('order_detail');
    const OrdersModel = this.model('orders');
    const orders = await OrdersModel.queryByUserId(user.id);
    const orderdetails = await OrderdetailModel.queryByOrdersIds(orders.map(item => item.id));
    orders.forEach(ordersItem => {
      ordersItem.tickets = orderdetails.filter(item => item.orders_id === ordersItem.id);
    });
    this.assign('orders', orders);
    return this.display();
  }

  async transactionsAction() {
    const user = await this.session('user');
    const BalanceRecordModel = this.model('balance_record');
    const records = await BalanceRecordModel.queryByUserId(user.id);
    this.assign('records', records);
    return this.display();
  }
};
