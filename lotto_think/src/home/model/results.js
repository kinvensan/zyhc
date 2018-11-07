module.exports = class extends think.Model {
  async save(item) {
    const result = await this.where({
      'lottery_id': item.lottery_id,
      'last_draw_at': item.last_draw_at
    }).find();
    if (think.isEmpty(result)) {
      await this.where({'id': result.id}).update({last_draw: 0});
      await this.Add(item);
    } else {
      await this.where({id: result.id}).update(item);
    }
  }

  async getResultsList() {
    const results = await this.where({last_flag: 1}).select();
    return results.map((item) => {
      item.result = JSON.parse(item.result);
      return item;
    });
  }
};
