const Base = require('./base.js');

module.exports = class extends Base {
  async indexAction() {
    const ResultsModel = this.model('results');
    const results = await ResultsModel.getResultsList();
    if (!think.isEmpty(results)) {
      this.assign('results', results);
    }
    const ArticleModel = this.model('article');
    const article = await ArticleModel.where({'catalog_path': '/results'}).find();
    if (!think.isEmpty(article)) {
      this.assign('article', article);
    }
    return this.display();
  }

  async gameAction() {
    const name = this.get('game');
    if (think.isEmpty(name)) {
      return this.fail(404, 'error game');
    }
    const LotteryModel = this.model('lottery');
    const lottery = await LotteryModel.where({name}).find();
    const ResultsModel = this.model('results');
    const result = await ResultsModel.where({lottery_name: name}).find();
    if (!think.isEmpty(lottery)) {
      this.assign('lottery', lottery);
    }
    if (!think.isEmpty(result)) {
      result.result = JSON.parse(result.result);
      this.assign('result', result);
    }
    const ArticleModel = this.model('article');
    const article = await ArticleModel.where({'catalog_path': '/results/' + name}).find();
    if (!think.isEmpty(article)) {
      this.assign('article', article);
    }
    return this.display();
  }
};
