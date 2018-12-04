'use strict';
const Base = require('./base.js');
const moment = require('moment');
module.exports = class extends Base {
  async __before() {
    await super.__before();
    const user = await this.session('user');
    if (think.isEmpty(user) || think.isEmpty(user.id)) {
      return this.redirect('/login');
    }
  }
};
