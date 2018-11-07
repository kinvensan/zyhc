const Base = require('./base.js');

module.exports = class extends Base {
  indexAction() {
    return this.display();
  }
  async gameAction() {
    const name = this.get('game');
    if (think.isEmpty(name)) {
      return this.fail(404, 'error news');
    }
    const ArticleModel = this.model('article');
    const articles = await ArticleModel.where({'catalog_path': ['like', '%' + name + '%']}).select();
    if (!think.isEmpty(articles)) {
      this.assign('articles', articles);
    }
    return this.display();
  }

  async infoAction() {
    const name = this.get('newsId');
    if (think.isEmpty(name)) {
      return this.fail(404, 'error news');
    }
    const ArticleModel = this.model('article');
    const article = await ArticleModel.where({'id': name}).find();
    if (!think.isEmpty(article)) {
      this.assign('article', article);
    }
    return this.display('home/template/article_one');
  }
};
