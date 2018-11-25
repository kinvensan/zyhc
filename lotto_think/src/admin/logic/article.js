'use strict';
const Rest = require('./rest');
module.exports = class extends Rest {
  createAction() {
    this.allowMethods = 'post';
    const rules = {
      'catalog_path': {
        required: true
      },
      'status': {
        in: [0, 1, 2]
      }
    };
    const flag = this.validate(rules);
    if (!flag) {
      return this.fail('validate error', this.validateErrors);
    }
  }

  updateAction() {
    this.allowMethods = 'post';
    const rules = {
      'id': {
        required: true
      },
      'catalog_path': {
        required: true
      },
      'status': {
        in: [0, 1, 2]
      }
    };
    const flag = this.validate(rules);
    if (!flag) {
      return this.fail('validate error', this.validateErrors);
    }
  }
};
