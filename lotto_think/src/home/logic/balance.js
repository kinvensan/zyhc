module.exports = class extends think.Logic {
  payAction() {
    this.allowMethods = 'post';
  }
};
