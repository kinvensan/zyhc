'use strict';
module.exports = class extends think.Logic {
  indexAction() {
    this.allowMethods = 'post';
    const rules = {
      username: {
        required: true
      },
      password: {
        required: true
      }
    };
    const flag = this.validate(rules);
    if (!flag) {
      return this.fail('validate error', this.validateErrors);
    }
  }
};
