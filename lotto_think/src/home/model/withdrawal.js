'use strict';
const BaseModel = require('./base');
module.exports = class extends BaseModel {
  sumApply(userId) {
    return this.where({user_id: userId, status: 1}).sum('amount + fee');
  }
  queryByUserId(userId) {
    return this.where({user_id: userId, status: 1}).select();
  }
};
