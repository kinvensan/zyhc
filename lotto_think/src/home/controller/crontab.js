'use strict';

module.exports = class extends think.Controller {
  async resultsAction() {
    await this.service('crawl_results').start();
  }

  async informationAction() {
    await this.service('crawl_infomation').start();
  }

  async winnerAction() {
    const WinnerModel = this.model('winner');
    let winAt = await WinnerModel.findLastWinAt();
    think.logger.debug(winAt);
    if (think.isEmpty(winAt)) {
      winAt = 0;
    }

    // 获取最新的订单信息
    const OrderDetailModel = this.model('order_detail');
    const orderdetails = await OrderDetailModel.queryByDrawAt(winAt);
    if (think.isEmpty(orderdetails)) {
      return false;
    }
    const winners = [];
    orderdetails.forEach(orderdetail => {
      // 找到nball
      if (!think.isEmpty(orderdetail.result)) {
        // 已经开奖
        const result = JSON.parse(orderdetail.result);
        const nball = result.n.findIndex(ball => {
          return parseInt(ball) === orderdetail.ticket_number;
        });
        const bball = result.b.findIndex(ball => {
          return parseInt(ball) === orderdetail.ticket_bets;
        });
        if (nball > -1 || bball > -1) {
          winners.push({
            user_id: orderdetail.user_id,
            user_type: 1,
            user_name: orderdetail.user_name,
            lottery_id: orderdetail.lottery_id,
            win_amount: orderdetail.ticket_amount * 3,
            win_at: orderdetail.draw_at,
            results_id: orderdetail.results_id,
            order_detail_id: orderdetail.id
          });
        }
      }
    });
    think.logger.debug(winners);
    await WinnerModel.createWinners(winners);
    // 处理金额
    const BalanceRecordModel = this.model('balance_record');
    const BalanceModel = this.model('balance');
    await BalanceRecordModel.createRecords(winners.map(item => {
      return {
        user_id: item.user_id,
        action: 1,
        amount: item.win_amount,
        memo: 'game ball win'
      };
    }));
    winners.map(async item => {
      const balance = {
        user_id: item.user_id,
        amount: item.win_amount
      };
      await BalanceModel.incrementUserBalance(balance);
    });
  }
};
