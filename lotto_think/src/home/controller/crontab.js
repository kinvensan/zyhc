'use strict';

module.exports = class extends think.Controller {
  async resultsAction() {
    await this.service('crawl_results').start();
  }

  async informationAction() {
    await this.service('crawl_infomation').start();
  }

  async resultWinnerAction() {
    const WinnerModel = this.model('winner');
    const winAt = await WinnerModel.findLastWinAt();

    const ResultsModel = this.model('results');
    // 获取最新的结果信息
    const lastResults = await ResultsModel.queryByLastDrawAt(winAt);
    const result = lastResults.result;
    // 获取最新的订单信息
    const OrderDetailModel = this.model('order_detail');
    OrderDetailModel.queryByDrawAt(winAt);
  }
};
