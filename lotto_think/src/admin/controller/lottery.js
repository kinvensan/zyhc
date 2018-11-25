'use strict';

const Base = require('./base.js');

module.exports = class extends Base {
  async listAction() {
    const LotteryModel = this.model('lottery');
    const lotteries = await LotteryModel.select();
    this.success(lotteries);
  }
  async fetchAction() {
    const lotteryId = this.get('lottery_id');
    const LotteryModel = this.model('lottery');
    const lottery = await LotteryModel.where({id: lotteryId}).find();
    this.success(lottery);
  }

  async createAction() {
    const LotteryModel = this.model('lottery');
    const lottery = this.post();
    const result = await LotteryModel.add(lottery);
    return this.success(result);
  }

  async updateAction() {
    const LotteryModel = this.model('lottery');
    const lottery = this.post();
    const result = await LotteryModel.update(lottery);
    return this.success(result);
  }

  async destroyAction() {
    const lotteryId = this.post('lottery_id');
    const LotteryModel = this.model('lottery');
    const result = await LotteryModel.where({id: lotteryId}).delete();
    return this.success(result);
  }
};
