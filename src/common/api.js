const axios = require('axios');

const api = axios.create({
  baseURL: 'https://api.mercadolibre.com',
  timeout: 1000,
});

module.exports = api
