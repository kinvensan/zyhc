const Base = require('./base.js');

module.exports = class extends Base {
  indexAction() {
    return this.display();
  }
  async loginAction() {
    think.logger.debug(this.post());
    const UserLoginModel = this.model('user_login');
    const UserModel = this.model('user');
    const param = this.post();
    const userLogin = await UserLoginModel.where({'login_name': this.post('login_name')}).find();
    if (think.isEmpty(userLogin)) {
      return this.fail(500, 'error password');
    }
    think.logger.debug(userLogin);
    think.logger.debug(UserLoginModel.shaPassword(param.password, userLogin.salt));
    if (userLogin.password === UserLoginModel.shaPassword(param.password, userLogin.salt)) {
      const user = await UserModel.where({uid: userLogin.uid}).find();
      await this.session('user', user);
      think.logger.debug(this.session('user'));
      return this.redirect('/');
    }
    return this.fail(500, 'error password');
  }
  async logoutAction() {
    await this.session('user', null);
    return this.redirect('/');
  }

  resetpasswordAction() {

  }
};
