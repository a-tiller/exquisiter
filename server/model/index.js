const { session } = require('../db');

function getNode(params, cb) {
  const query = `MATCH (n) WHERE id(n) = ${params.node} RETURN n`;
  session.run(query)
    .then((result) => {
      cb(null, result.records[0].get('n'));
    })
    .catch((error) => {
      cb(error);
    });
}

function getRandomNode(cb) {
  session.run('MATCH (n) RETURN count(*) AS count')
    .then((result) => result.records[0].get('count'))
    .then((size) => {
      const query = `MATCH (n) WHERE id(n) = toInteger(rand() * ${size}) RETURN n`;
      return session.run(query);
    })
    .then((result) => {
      cb(null, result.records[0].get('n'));
    })
    .catch((error) => {
      cb(error);
    });
}

// query creating a new root:
// CREATE (a:LINE {text: "It was a dark and stormy night"}) RETURN a

// query adding a line:
// MATCH (a:LINE) WHERE id(a)=0 WITH (a) CREATE (a)-[:THEN]->(b:LINE {text: "I did not want to get wet."}) RETURN b

function makeNode(params, cb) {
  const query = `MATCH (a:LINE) WHERE id(a)=${params.node} WITH (a) CREATE (a)-[:THEN]->(b:LINE {text: "${params.text}"}) RETURN b`;
  session.run(query)
    .then((result) => {
      cb(null, result.records[0].get('b'));
    })
    .catch((error) => {
      cb(error);
    });
}

module.exports.getNode = getNode;
module.exports.getRandomNode = getRandomNode;
module.exports.makeNode = makeNode;
