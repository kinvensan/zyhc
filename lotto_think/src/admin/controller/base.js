'use strict';
module.exports = class extends think.Controller {
  async __before() {
    const token = this.header('x-token');

    if (think.isEmpty(token)) {
      return this.fail(5001, ' 不存在x-token');
    }
    const userId = await this.cache(['login', token].join('_'));
    if (think.isEmpty(userId)) {
      return this.fail(5001, '非法用户token');
    }
    this.ctx.state.userId = userId;
    this.ctx.state.xtoken = token;
  }
};
