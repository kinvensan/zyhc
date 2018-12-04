'use strict';
const BaseCrawler = require('./base_crawler');

module.exports = class extends BaseCrawler {
  async start(url) {
    await this.download({
      url: 'https://lottopark.com/results/'
    });
  }

  async parse(response) {
    const $ = response.$;
    const items = [];
    $('#results-table > tbody > tr').each((index, tr) => {
      const tds = $(tr).find('td');
      const item = {
        country: $(tds[0]).text(),
        lottery_title: $(tds[2]).text(),
        last_draw_at: $(tds[3]).data('text'),
        result: JSON.stringify(this.parseBallToJson($, tds[4])),
        payout: $(tds[5]).data('text')
      };
      items.push(item);
    });
    await this.pipline(items.map(item => {
      item.country = this.trimStr(item.country);
      item.lottery_title = this.trimStr(item.lottery_title);
      return item;
    }));
  }

  async pipline(items) {
    const lotteryMap = await this.lotteryTitleMap();
    items.map(async(item) => {
      const lottery = lotteryMap[item.lottery_title];
      if (!think.isEmpty(lottery)) {
        item.lottery_id = lottery.lottery_id;
        item.lottery_name = lottery.lottery_name;
        item.last_flag = 1;
        await this.saveResultModel(item);
      }
    });
  }

  async saveResultModel(item) {
    const ResultsModel = think.model('results');
    const lastResult = await ResultsModel.where({lottery_id: item.lottery_id, last_flag: 1}).find();
    item.updated_at = ['exp', 'CURRENT_TIMESTAMP()'];
    think.logger.info(item);
    if (think.isEmpty(lastResult)) {
      await ResultsModel.add(item);
    } else if (lastResult.last_draw_at === item.last_draw_at) {
      await ResultsModel.where({id: lastResult.id}).update(item);
    } else {
      await ResultsModel.add(item);
      await ResultsModel.where({id: lastResult.id}).update({last_flag: 0});
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

  parseBallToJson($, element) {
    const n = [];
    const b = [];
    $(element).find('.ticket-line-number').each((index, nBall) => {
      n.push(parseInt($(nBall).text()));
    });
    $(element).find('.ticket-line-bnumber').each((index, bBall) => {
      b.push(parseInt($(bBall).text()));
    });
    if (b.length === 0) {
      return {n};
    } else {
      return {n, b};
    }
  }
};
