const Base = require('./base.js');

module.exports = class extends Base {
  async indexAction() {
    const LotteryModel = this.model('lottery');
    const lotteries = await LotteryModel.select();
    this.assign('lotteries', lotteries);
    return this.display();
  }

  async gameAction() {
    const name = this.get('game');
    if (think.isEmpty(name)) {
      return this.fail(404, 'error game');
    }
    const LotteryModel = this.model('lottery');
    const ArticleModel = this.model('article');
    const lottery = await LotteryModel.where({name}).find();
    if (!think.isEmpty(lottery)) {
      this.assign('lottery', lottery);
      const article = await ArticleModel.where({'catalog_path': '/play/' + name}).find();
      this.assign('article', article);
      return this.display('home/' + lottery.template);
    }
    return this.redirect('/play');
  }
};
