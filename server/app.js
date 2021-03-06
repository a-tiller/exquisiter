const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

const result = dotenv.config();
if (result.error) {
  throw result.error;
}

const {
  getNode,
  getRandomNode,
  makeNode,
  makeRoot,
  traverse,
} = require('./model');

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

app.get('/api/:root/to/:node', (req, res) => {
  traverse({ root: req.params.root, node: req.params.node }, (err, results) => {
    if (err) {
      res.status(500).send('Something went wrong!');
    } else {
      res.status(200).send(results);
    }
  });
});

app.post('/api/from/:node', (req, res) => {
  makeNode({ node: req.params.node, text: req.body.text }, (err, results) => {
    if (err) {
      res.status(500).send('Something went wrong!');
    } else {
      res.status(201).send(results);
    }
  });
});

app.post('/api/root', (req, res) => {
  makeRoot({ text: req.body.text }, (err, results) => {
    if (err) {
      res.status(500).send('Something went wrong!');
    } else {
      res.status(201).send(results);
    }
  });
});


module.exports.app = app;
