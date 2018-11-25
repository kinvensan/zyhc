'use strict';

const hash = require('hash.js');

module.exports = class extends think.Model {
  getByLoginName(userName) {
    return this.join('`user` ON `user`.`id`=`admin_login`.`user_id`').where({'login_name': userName}).find();
  }

  checkPassword(user, password) {
    const hasPassword = hash.sha1().update(password).digest('hex');
    think.logger.debug(hasPassword);
    if (user.password === hasPassword) {
      return true;
    }
    return false;
  }

  changePassword(userId, password) {
    const slat = Date.now();
    const adminPassword = {
      'password': this.hashPassword(password, slat),
      'updated_at': ['exp', 'NOW()'],
      slat
    };
    this.where({'user_id': userId}).update(adminPassword);
  }

  addUser(userId, user) {
    const slat = Date.now();
    const adminLogin = {
      user_id: userId,
      login_name: user.user_name,
      password: this.hashPassword('111111', slat),
      slat
    };
    this.where({login_name: user.email}).thenAdd(adminLogin);
  }

  hashPassword(password, slat) {
    return hash.sha1().update(password).digest('hex');
  }
};
