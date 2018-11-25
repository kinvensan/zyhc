'use strict';

module.exports = class extends think.Model {
  listByPage(pageNo, pageSize) {
    return this.page(pageNo, pageSize).countSelect({}, false);
  }

  fetch(id) {
    return this.where({id}).find();
  }
};
