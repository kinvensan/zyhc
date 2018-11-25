'use strict';
const BaseModel = require('./base');

module.exports = class extends BaseModel {
  queryByUserId(userId) {
    return this.where({user_id: userId, status: 1}).select();
  }
  createRecords(records) {
    if (!think.isEmpty(records)) {
      return this.addMany(records);
    }
  }
};
