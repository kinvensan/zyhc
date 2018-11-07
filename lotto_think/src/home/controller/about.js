const Base = require('./base.js');

module.exports = class extends Base {
  async indexAction() {
    const ArticleModel = this.model('article');
    const article = await ArticleModel.where({'catalog_path': '/about'}).find();
    if (!think.isEmpty(article)) {
      this.assign('article', article);
    }
    return this.display('home/template/article_one');
  }
};
