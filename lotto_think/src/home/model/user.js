'use strict';
const BaseModel = require('./base');
module.exports = class extends BaseModel {
  addUser(user) {
    user.user_name = user.user_name || user.email;
    user.register_time = ['EXP', 'NOW()'];
    return this.where({email: user.email}).thenAdd(user);
  }

  findUserById(id) {
    return this.where({id}).find();
  }

  findById(id) {
    if (!think.isEmpty(id)) {
      return this.where({id}).find();
    }
  }

  saveUser(userId, user) {
    if (!think.isEmpty(userId) && !think.isEmpty(user)) {
      user.updated_at = ['EXP', 'NOW()'];
      return this.where({id: userId}).update(user);
    }
  }

  changeMail(userId, email, user) {
    if (!think.isEmpty(userId) && !think.isEmpty(user) && !think.isEmpty(email)) {
      user.updated_at = ['EXP', 'NOW()'];
      return this.where({id: userId, email}).update(user);
    }
  }
};
