'use strict';
const BaseModel = require('./base');

module.exports = class extends BaseModel {
  findByUserId(userId) {
    if (!think.isEmpty(userId)) {
      return this.where({user_id: userId}).find();
    }
  }
};
