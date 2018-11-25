'use strict';
const Rest = require('./rest');
module.exports = class extends Rest {
  listAction() {
    this.allowMethods = 'get';
    const rules = {
      user_type: {
        in: [1, 2],
        required: true
      }
    };
    const flag = this.validate(rules);
    if (!flag) {
      return this.fail('validate error', this.validateErrors);
    }
  }
};
