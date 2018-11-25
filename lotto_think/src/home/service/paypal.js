'use strict';
const axios = require('axios');

const PAYPAL_API = 'https://api.sandbox.paypal.com';
const CLIENT = 'Ad_G2xWoRbKjL_pS7G7uO9OW3SPxO1hV5QJ5T300mizAv0Df-ga7SuidcfojZM_BQB66BBS5BfkBdu2B';
const SECRET = 'EKPNAZgO1mbUCBfPqN40T2Bj0QaHa60HYEOuxkP-TMk40uOSVQCGDR0Z2DuQjYfAa6sgGj-NiHkkP-Aa';

module.exports = class extends think.Service {
  async axiosCreatePayment(amount) {
    // return this.fail(5001, 'lottery is processing');
    try {
      const response = await axios({
        url: '/v1/payments/payment',
        method: 'post',
        data: {
          intent: 'sale',
          payer: {
            payment_method: 'paypal'
          },
          transactions: [{
            amount: {
              total: amount.toString(),
              currency: 'USD'
            }
          }],
          redirect_urls: {
            return_url: '/shopcart',
            cancel_url: '/shopcart'
          }
        },
        baseURL: PAYPAL_API,
        auth: {
          username: CLIENT,
          password: SECRET
        }
      });
      if (response.status === 200 || response.status === 201) {
        return response.data;
      }
      return {errno: response.status, errmsg: ''};
    } catch (error) {
      return {errno: 500, errmsg: error};
    }
  }
  async axiosExecutePayment(paymentID, payerID) {
    try {
      const response = await axios({
        url: '/v1/payments/payment/' + paymentID + '/execute',
        method: 'post',
        data: {
          payer_id: payerID
        },
        baseURL: PAYPAL_API,
        auth: {
          username: CLIENT,
          password: SECRET
        }
      });
      if (response.status === 200 || response.status === 201) {
        return response.data;
      }
      return {errno: response.status, errmsg: ''};
    } catch (error) {
      return {errno: 500, errmsg: error};
    }
  }
};
