const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

const result = dotenv.config();
if (result.error) {
  throw result.error;
}

const { getNode, getRandomNode } = require('./model');

const app = express();

app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/api/node/:node', (req, res) => {
  getNode({ node: req.params.node }, (err, results) => {
    if (err) {
      res.status(500).send('Something went wrong!');
    } else {
      res.status(200).send(results);
    }
  });
});

app.get('/api/random/', (req, res) => {
  getRandomNode((err, results) => {
    if (err) {
      res.status(500).send('Something went wrong!');
    } else {
      res.status(200).send(results);
    }
  });
});


module.exports.app = app;
