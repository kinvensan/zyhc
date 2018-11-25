'use strict';

module.exports = class extends think.Model {
  listByPage(pageNo, pageSize) {
    return this.page(pageNo, pageSize).countSelect({}, false);
  }

  fetch(articleId) {
    return this.where({id: articleId}).find();
  }
};
