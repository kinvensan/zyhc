'use strict';

const Base = require('./base.js');

module.exports = class extends Base {
  async listAction() {
    think.logger.debug(this.post());
    const page = this.post('page');
    if (think.isEmpty(page) || think.isEmpty(page.currentPage)) {
      page.currentPage = 1;
      page.pageSize = page.pageSize || 20;
    }
    const ArticleModel = this.model('article');
    const articles = await ArticleModel.listByPage(page.currentPage, page.pageSize);
    return this.success(articles);
  }

  async createAction() {
    const ArticleModel = this.model('article');
    const article = this.post();
    article.user_id = await this.ctx.state.userId;
    const result = await ArticleModel.where('catalog_path', article.catalog_path).thenAdd(article);
    if (think.isEmpty(result) || result.type === 'exist') {
      return this.fail(5000, '已经存在相同目录的文章，增加文章失败');
    }
    const articleSaved = await ArticleModel.where({id: result.id}).find();
    return this.success(articleSaved);
  }

  async updateAction() {
    const ArticleModel = this.model('article');
    const article = this.post();
    article.user_id = await this.ctx.state.userId;
    article.updated_at = ['EXP', 'NOW()'];
    const result = await ArticleModel.where({id: article.id}).update(article);
    if (think.isEmpty(result) || result === 0) {
      return this.fail(5000, '没有找到对应的文章');
    }
    const articleSaved = await ArticleModel.where({id: article.id}).find();
    return this.success(articleSaved);
  }

  async destoryAction() {
    const ArticleModel = this.model('article');
    const article = this.post();
    const result = await ArticleModel.where({id: article.id}).delete();
    if (think.isEmpty(result)) {
      return this.fail(5000, '没有找到对应的文章');
    }
    return this.success(result);
  }

  async fetchAction() {
    const ArticleModel = this.model('article');
    const article = this.post();
    const result = await ArticleModel.where({id: article.id}).find();
    if (think.isEmpty(result)) {
      return this.fail(5000, '没有找到对应的文章');
    }
    return this.success(result);
  }
};
