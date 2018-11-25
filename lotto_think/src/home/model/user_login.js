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
      password: this.hashPassword(user.password, slat),
      slat
    };
    return this.where({login_name: user.email}).thenAdd(userLogin);
  }

  findUserByEmail(email) {
    return this.join('user on user.id=user_login.user_id').where({login_name: email}).find();
  }

  findByUserId(userId) {
    return this.where({user_id: userId}).find();
  }

  hashPassword(password, slat) {
    return hash.sha1().update([password, slat].join('|')).digest('hex');
  }

  changeMail(userId, email, userLogin) {
    if (!think.isEmpty(userId) && !think.isEmpty(userLogin) && !think.isEmpty(email)) {
      userLogin.updated_at = ['EXP', 'NOW()'];
      return this.where({user_id: userId, login_name: email}).update(userLogin);
    }
  }
};
