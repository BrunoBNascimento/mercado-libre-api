const axios = require('axios');

const { API_BASE_URL } = process.env

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 1000,
});

module.exports = api
