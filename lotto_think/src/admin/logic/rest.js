'use strict';
module.exports = class extends think.Logic {
  listAction() {
    this.allowMethods = 'post';
  }
  fetchAction() {
    this.allowMethods = 'post';
    const rules = {
      'id': {
        required: true
      }
    };
    const flag = this.validate(rules);
    if (!flag) {
      return this.fail('validate error', this.validateErrors);
    }
  }
  createAction() {
    this.allowMethods = 'post';
  }

  updateAction() {
    this.allowMethods = 'post';
  }

  destoryAction() {
    this.allowMethods = 'post';
    const rules = {
      'id': {
        required: true
      }
    };
    const flag = this.validate(rules);
    if (!flag) {
      return this.fail('validate error', this.validateErrors);
    }
  }
};
