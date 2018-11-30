const CSRF = require('koa-csrf');

module.exports = (options, app) => {
  app.use(new CSRF(options));
  return (ctx, next) => {
    return next();
  };
};
