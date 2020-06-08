const express = require('express');
const dotenv = require('dotenv');

const result = dotenv.config();

if (result.error) {
  throw result.error;
}

const app = express();

app.use(express.static('public'));

module.exports.app = app;
