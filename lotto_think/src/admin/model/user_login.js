'use strict';

const hash = require('hash.js');

module.exports = class extends think.Model {
  changePassword(userId, password) {
    const slat = Date.now();
    const userPassword = {
      updated_at: ['exp', 'CURRENT_TIMESTAMP()'],
      password: this.hashPassword(password, slat),
      slat
    };
    return this.where({'user_id': userId}).update(userPassword);
  }

  addUser(userId, user) {
    const slat = Date.now();
    const userLogin = {
      user_id: userId,
      login_name: user.email,
      password: this.hashPassword('123456', slat),
      slat
    };
    return this.where({login_name: user.email}).thenAdd(userLogin);
  }

  hashPassword(password, slat) {
    return hash.sha1().update([password, slat].join('|')).digest('hex');
  }
};
