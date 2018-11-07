'use strict';

const BaseCrawler = require('./base_crawler');

module.exports = class extends BaseCrawler {
  async start(url) {
    await this.download({
      url: 'https://lottopark.com/lotteries/'
    });
  }

  async parse(response) {
    const $ = response.$;
    const items = [];
    $('#info-table > tbody > tr').each((index, tr) => {
      const tds = $(tr).find('td');
      const item = {
        country: $(tds[0]).text(),
        lottery_title: $(tds[2]).text(),
        draw_at: $(tds[3]).data('text'),
        winning_odds: this.parseWinning($, tds[5]),
        jackpot_amount: $(tds[6]).data('text')
      };
      items.push(item);
    });
    await this.pipline(items);
  }

  async pipline(items) {
    const lotteryMap = await this.lotteryTitleMap();
    items.map(async(item) => {
      const lottery = lotteryMap[item.lottery_title];
      if (!think.isEmpty(lottery)) {
        item.lottery_id = lottery.lottery_id;
        item.updated_at = ['exp', 'CURRENT_TIMESTAMP()'];
        await this.saveLottery(item);
        await this.saveResults(item);
      }
    });
  }

  async saveLottery(item) {
    const LotteryModel = think.model('lottery');
    await LotteryModel.where({id: item.lottery_id}).update(item);
  }

  async saveResults(item) {
    const item2 = {
      next_draw_at: item.draw_at,
      winning_odds: item.winning_odds,
      jackpot_amount: item.jackpot_amount
    };
    const ResultsModel = think.model('results');
    const lastResult = await ResultsModel.where({lottery_id: item.lottery_id, last_flag: 1}).find();
    if (!think.isEmpty(lastResult)) {
      await ResultsModel.where({id: lastResult.id}).update(item2);
    }
  }

  async lotteryTitleMap() {
    let lotteryMap = await think.cache('lottery_title_map');
    if (think.isEmpty(lotteryMap)) {
      lotteryMap = {};
      const LotteryModel = think.model('lottery');
      const lotteryList = await LotteryModel.field('id as lottery_id,name AS lottery_name,title AS lottery_title').select();
      lotteryList.map(lottery => {
        lotteryMap[lottery.lottery_title] = lottery;
      });
      await think.cache('lottery_title_map', lotteryMap, {
        timeout: 24 * 60 * 60 * 1000
      });
    }
    return lotteryMap;
  }

  parseWinning($, element) {
    const odds = $(element).text();
    const result = odds.replace('1 in', '').replace('Winning Odds:', '');
    return parseFloat(result);
  }
};
