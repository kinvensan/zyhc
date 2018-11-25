module.exports = class extends think.Model {
  findByCatalog(catalogPath) {
    return this.where({catalog_path: catalogPath}).find();
  }
};
