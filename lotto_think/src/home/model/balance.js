'use strict';
const BaseModel = require('./base');

module.exports = class extends BaseModel {
  findByUserId(userId) {
    if (!think.isEmpty(userId)) {
      return this.where({user_id: userId}).find();
    }
  }
  saveBalance(balanceId, balance) {
    if (!think.isEmpty(balanceId) && !think.isEmpty(balance)) {
      balance.updated_at = ['EXP', 'NOW()'];
      return this.where({id: balanceId}).update(balance);
    }
  }

  incrementUserBalance(balance) {
    if (!think.isEmpty(balance)) {
      return this.where({user_id: balance.user_id}).increment({amount: balance.amount});
    }
  }

  createBalance(balance) {
    if (!think.isEmpty(balance)) {
      return this.where({user_id: balance.user_id}).thenAdd(balance);
    }
  }
};
