'use strict';
module.exports = [{
  cron: '1 */12 * * *',
  handle: 'crontab/results',
  type: 'one'
}, {
  cron: '0 */12 * * *',
  handle: 'crontab/information',
  type: 'one'
}];
