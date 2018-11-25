'use strict';

const Base = require('./base.js');

module.exports = class extends Base {
  async infoAction() {
    const userId = this.ctx.state.userId;
    const UserModel = this.model('user');
    const user = await UserModel.getAdminUserById(userId);
    if (think.isEmpty(user)) {
      return this.fail('1101', '不存在用户');
    }
    const adminUser = {
      roles: user.user_role.map(role => role.role),
      user_name: user.user_name,
      nick_name: user.nick_name,
      token: this.ctx.state.xtoken,
      introduction: user.introduction,
      avatar: user.avatar
    };
    think.logger.debug(adminUser);
    return this.success(adminUser);
  }

  async listAction() {
    const UserModel = this.model('user');
    const pageNo = this.get('page') || 1;
    const pageSize = this.get('pageSize') || 20;
    const userType = this.get('user_type');
    const users = await UserModel.getAllUsers(userType, pageNo, pageSize);
    return this.success(users);
  }

  async fetchAction() {
    const UserModel = this.model('user');
    const userId = this.get('user_id');
    if (think.isEmpty(userId)) {
      return this.fail(900, '参数不正确');
    }
    const user = await UserModel.getUserById(userId);
    return this.success(user);
  }

  async createAction() {
    const UserModel = this.model('user');
    const user = this.post();
    if (think.isEmpty(user) || think.isEmpty(user.email) || think.isEmpty(user.user_type)) {
      return this.fail(900, '参数不正确');
    }
    const result = await UserModel.addUser(user);
    if (result.type === 'exist') {
      return this.fail(900, '存在相同用户，不能创建');
    }
    if (user.user_type === 1) {
      const UserLoginModel = this.model('user_login');
      await UserLoginModel.addUser(result.id, user);
    } else if (user.user_type === 2) {
      const AdminLoginModel = this.model('admin_login');
      await AdminLoginModel.addUser(result.id, user);
    }

    return this.success(result);
  }

  async updateAction() {
    const UserModel = this.model('user');
    const user = this.post();
    if (think.isEmpty(user) || think.isEmpty(user.id)) {
      return this.fail(900, '参数不正确');
    }
    const result = await UserModel.updateUser(user);
    return this.success(result);
  }

  async resetAdminPasswordAction() {
    const AdminLoginModel = this.model('admin_login');
    const userId = this.ctx.state.userId;
    const admin = this.post();
    if (think.isEmpty(admin) || think.isEmpty(admin.password)) {
      return this.fail(900, '参数不正确');
    }
    if (!(admin.password === admin.re_password)) {
      return this.fail(910, '两次密码不正确');
    }
    const result = await AdminLoginModel.changePassword(userId, admin.password);
    if (result === 0) {
      return this.fail(910, '没有找到要更新的用户');
    }
    return this.success(result, '成功');
  }

  async resetUserPasswordAction() {
    const UserLoginModel = this.model('user_login');
    const user = this.post();
    if (think.isEmpty(user) || think.isEmpty(user.user_id) || think.isEmpty(user.password)) {
      return this.fail(900, '参数不正确');
    }
    if (!(user.password === user.re_password)) {
      return this.fail(910, '两次密码不正确');
    }

    const result = await UserLoginModel.changePassword(user.user_id, user.password);
    if (result === 0) {
      return this.fail(910, '没有找到要更新的用户');
    }
    return this.success(result, '成功');
  }
};
