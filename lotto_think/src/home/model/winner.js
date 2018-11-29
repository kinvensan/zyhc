'use strict';
const BaseModel = require('./base');
module.exports = class extends BaseModel {
  querySortByLast() {
    return this.field('winner.user_name,winner.win_amount,lottery.name AS lottery_name,lottery.title AS lottery_title,lottery.country AS lottery_country').join('lottery ON winner.lottery_id=lottery.id').order('win_at DESC').limit(100).select();
  }

  findLastWinAt() {
    return this.max('win_at');
  }
};
