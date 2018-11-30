const Base = require('./base.js');

module.exports = class extends Base {
  async indexAction() {
    const LotteryModel = this.model('lottery');
    const lotteries = await LotteryModel.querySortByDraw();
    this.assign('lotteries', lotteries);
    const ResultsModel = this.model('results');
    const results = await ResultsModel.querySortByLastDraw();
    this.assign('results', results);
    const WinnerModel = this.model('winner');
    const winners = await WinnerModel.querySortByLast();
    this.assign('winners', winners.map(item => {
      item.user_name = '*' + item.user_name.substring(1, 4) + '**';
      return item;
    }));
    return this.display();
  }
  error500Action() {
    const errorState = this.ctx.state.errorState;
    if (think.isEmpty(errorState)) {
      this.assign({
        errno: 500,
        errmsg: '',
        data: {}
      });
    } else {
      this.assign({
        errno: errorState.errno,
        errmsg: errorState.errmsg,
        data: errorState.data
      });
    }
    return this.display('home/error/error_500');
  }
};
