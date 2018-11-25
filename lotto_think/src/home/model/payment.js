'use strict';
const BaseModel = require('./base');
module.exports = class extends BaseModel {
  create(payment) {
    if (!think.isEmpty(payment.payment_id)) {
      return this.where({payment_id: payment.payment_id}).thenAdd(payment);
    }
  }
  findByPaymentId(paymentId) {
    if (!think.isEmpty(paymentId)) {
      return this.where({payment_id: paymentId}).find();
    }
  }
  savePayment(paymentId, payment) {
    if (!think.isEmpty(paymentId) && !think.isEmpty(payment)) {
      payment.updated_at = ['EXP', 'NOW()'];
      return this.where({payment_id: paymentId}).update(payment);
    }
  }
};
