const nunjucks = require('think-view-nunjucks');
const path = require('path');
const moment = require('moment');
module.exports = {
  type: 'nunjucks',
  common: {
    viewPath: path.join(think.ROOT_PATH, 'view'),
    sep: '_',
    extname: '.html'
  },
  nunjucks: {
    handle: nunjucks,
    beforeRender: (env, nunjucks, config) => {
      /**
      * 格式化时间
      * @param  number timeAt      unix时间
      * @return string            格式化后的带单位的大小
      */
      env.addFilter('momentFromNow', function(timeAt) {
        return moment.unix(timeAt).fromNow();
      });
    }
  }
};
