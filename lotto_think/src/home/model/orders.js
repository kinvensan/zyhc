module.exports = class extends think.Model {
  async getOrderList(tokenId, userId) {
    const whereCaluse = {};
    if (think.isEmpty(userId)) {
      whereCaluse.user_token = tokenId;
    } else {
      whereCaluse.user_id = userId;
    }
    const result = await this.join('`lottery` ON `orders`.`lottery_id` = `lottery`.`id`')
      .where(whereCaluse)
      .field('`orders`.*,`lottery`.`name` as lottery_name,`lottery`.`picture` as picture,`lottery`.`price` as price,`lottery`.`currency` as currency')
      .select();
    return result.map((item) => {
      item.ticket_lines = JSON.parse(item.ticket_lines);
      return item;
    });
  }

  async addOrder(tokenId, userId, lottery, lines) {
    const titck = {
      'user_id': userId,
      'user_token': tokenId,
      'lottery_id': lottery.id,
      'lottery_title': lottery.title,
      'ticket_lines': JSON.stringify(lines),
      'ticket_lines_count': lines.length,
      'ticket_prices': lines.length * lottery.price,
      'order_status': 1
    };
    await this.add(titck);
  }

  ordersTotal(tokenId, userId) {
    const whereCaluse = {};
    if (think.isEmpty(userId)) {
      whereCaluse.user_token = tokenId;
    } else {
      whereCaluse.user_id = userId;
    }
    return this.field('count(id) as count,sum(ticket_prices) as amount').where(whereCaluse).find();
  }
};
