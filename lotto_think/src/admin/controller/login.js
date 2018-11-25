'use strict';

module.exports = class extends think.Controller {
  async indexAction() {
    if (this.isPost) {
      const loginData = this.post();
      const AdminLoginModel = this.model('admin_login');
      const user = await AdminLoginModel.getByLoginName(loginData.username);
      if (think.isEmpty(user)) {
        return this.fail(1001, '不存在登陆用户!');
      }
      if (AdminLoginModel.checkPassword(user, loginData.password)) {
        const token = think.uuid();
        await this.cache(['login', token].join('_'), user.user_id);
        return this.success({token, 'name': user.nick_name, uuid: user.user_id});
      } else {
        return this.fail(1002, '用户或密码错误!');
      }
    }
    return this.fail(999, '提交的方法不正确!');
  }

  async restPassword() {
    if (this.isPost) {

    }
    return this.fail(999, '提交的方法不正确!');
  }
};
