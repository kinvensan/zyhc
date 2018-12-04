'use strict';
const BaseModel = require('./base');

module.exports = class extends BaseModel {
  createTransfers(transactions) {
    if (!think.isEmpty(transactions)) {
      this.addMany(transactions);
    }
  }
  queryByAddress(address) {
    return this.where({address}).select();
  }
};
