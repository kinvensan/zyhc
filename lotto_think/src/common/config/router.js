module.exports = [
  ['/play/:game', 'play/game', 'get'],
  ['/results/:game', 'results/game', 'get'],
  ['/lotteries/:game', 'lotteries/game', 'get'],
  ['/news/catalog/:game', 'news/game', 'get'],
  ['/news/info/:newsId', 'news/info', 'get'],
  ['/faq/catalog/:catalogId', 'faq/catalog', 'get'],
  ['/500', 'index/error500', 'get,post']
];
