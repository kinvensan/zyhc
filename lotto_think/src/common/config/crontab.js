'use strict';
module.exports = [{
  cron: '*/10 * * * *',
  handle: 'crontab/results',
  type: 'one'
}, {
  cron: '*/12 * * * *',
  handle: 'crontab/information',
  type: 'one'
}, {
  cron: '*/15 * * * *',
  handle: 'crontab/winner',
  type: 'one'
}];
