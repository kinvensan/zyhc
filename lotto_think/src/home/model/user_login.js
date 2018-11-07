const crypto = require('crypto');

module.exports = class extends think.Model {
  shaPassword(password, slat) {
    const shasum = crypto.createHash('sha1');
    shasum.update([ password, slat ].join('|'));
    return shasum.digest('hex');
  };
};
