'use strict';
module.exports = [{
  cron: '*/10 * * * *',
  handle: 'crontab/results',
  type: 'one'
}, {
  cron: '1-59/10 * * * *',
  handle: 'crontab/information',
  type: 'one'
}, {
  cron: '2-59/10 * * * *',
  handle: 'crontab/winner',
  type: 'one'
}];
