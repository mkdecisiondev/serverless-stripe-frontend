const config = {
  stripe: {
    /* Avram's Stripe publish key and
    AWS url from following steps in https://yos.io/2017/06/22/serverless-stripe/ */
    apiKey: 'pk_test_dDgp9AHHb8DUfsjskRiEw6uB',
    apiUrl: 'https://0fgiergyfg.execute-api.us-east-1.amazonaws.com/dev/charges',

    /* original from https://github.com/mkdecisiondev/serverless-stripe-frontend/blob/master/config.js
    apiKey: 'pk_test_SG9qh1GK5AiTycr7x4t3L9p6',
    apiUrl: 'https://kpygs0yhak.execute-api.ap-southeast-1.amazonaws.com/dev/charges',
    */
    currency: 'USD',
  },
};

export default config;
