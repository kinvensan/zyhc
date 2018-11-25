'use strict';

const Base = require('./base.js');

module.exports = class extends Base {
  async indexAction() {
    const token = this.header('x-token');
    if (!think.isEmpty(token)) {
      this.cache(['login', token].join('_'), null);
    }
    return this.success({}, '成功登出!');
  }
};
