'use strict';
module.exports = class extends think.Model {
  querySortByDraw() {
    return this.order('draw_at ASC').select();
  }

  findByName(name) {
    return this.where({name}).find();
  }

  async queryMapByIds(ids) {
    const result = {};
    if (!think.isEmpty(ids)) {
      const lotteries = await this.where({id: ['IN', ids]}).select();
      lotteries.map(item => {
        result[item.id] = item;
        return item;
      });
    }
    return result;
  }
};
