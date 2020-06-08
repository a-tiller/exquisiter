const express = require('express');
const dotenv = require('dotenv');

const result = dotenv.config();

if (result.error) {
  throw result.error;
}

const app = express();

module.exports.app = app;
