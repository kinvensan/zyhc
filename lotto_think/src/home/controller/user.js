const Base = require('./base.js');

module.exports = class extends Base {
  indexAction() {
    return this.display();
  }
  async loginAction() {
    const param = this.post();
    think.logger.debug(this.post());
    const UserLoginModel = this.model('user_login');
    const userLogin = await UserLoginModel.findUserByEmail(param.login_name);
    if (think.isEmpty(userLogin)) {
      this.assign('login_error', 'error email or password!');
      return this.display('home/login_index');
    }
    think.logger.debug(userLogin);
    think.logger.debug(await UserLoginModel.hashPassword(param.password, userLogin.slat));
    if (userLogin.password === UserLoginModel.hashPassword(param.password, userLogin.slat)) {
      await this.session('user', {
        id: userLogin.user_id,
        nick_name: think.isEmpty(userLogin.nick_name) ? userLogin.email : userLogin.nick_name
      });
      // 用户cookie解决 redirect的问题
      let redirectUrl = this.cookie('_redirect');
      if (think.isEmpty(redirectUrl)) {
        redirectUrl = '/';
      }
      this.cookie('_redirect', null);
      // 把cookie中的购物车放入数据库中
      let shopcart = this.cookie('_shopcart');
      if (!think.isEmpty(shopcart)) {
        shopcart = JSON.parse(shopcart);
        if (!think.isEmpty(shopcart.orders)) {
          const ShopCartModel = this.model('shopcart');
          await ShopCartModel.createOrders(shopcart.orders.map(item => {
            return {
              user_id: userLogin.user_id,
              lottery_id: item.lottery_id,
              ticket_bets: item.ticket_bets,
              ticket_amount: item.ticket_amount,
              ticket_number: item.ticket_number,
              ticket_status: 1
            };
          }));
          this.cookie('_shopcart', null);
        }
      }
      return this.redirect(redirectUrl);
    }
    this.assign('login_error', 'error email or password!');
    return this.display('home/login_index');
  }

  async logoutAction() {
    await this.session('user', null);
    return this.redirect('/');
  }

  async signupAction() {
    const param = this.post();
    think.logger.debug(this.post());
    if (!(param.password === param.rpassword)) {
      this.assign('signup_error', 'password is not same');
      return this.display('home/signup_index');
    }
    const UserLoginModel = this.model('user_login');
    const UserModel = this.model('user');
    const result = await UserModel.addUser(param);
    if (result.type === 'exist') {
      this.assign('signup_error', 'user or email is exist');
      return this.display('home/signup_index');
    }
    const result2 = await UserLoginModel.addUser(result.id, param);
    if (result2.type === 'exist') {
      this.assign('signup_error', 'user or email is exist');
      return this.display('home/signup_index');
    }
    return this.redirect('/login');
  }
};
