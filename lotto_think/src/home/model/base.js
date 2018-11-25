'use strict';
module.exports = class extends think.Model {
  findById(id) {
    if (!think.isEmpty(id)) {
      return this.where({id}).find();
    }
  }
  remove(id) {
    if (!think.isEmpty(id)) {
      return this.where({id}).delete();
    }
  }
  create(obj) {
    if (!think.isEmpty(obj)) {
      return this.add(obj);
    }
  }
};
