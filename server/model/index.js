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

function makeRoot(params, cb) {
  const query = `CREATE (a:LINE {text: "${params.text}"}) RETURN a`;
  session.run(query)
    .then((result) => {
      cb(null, result.records[0].get('a'));
    })
    .catch((error) => {
      cb(error);
    });
}

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

function traverse(params, cb) {
  const query = `MATCH (start)-[r*]->(leaf) WHERE id(start) = ${params.node} AND not((leaf)-->()) RETURN DISTINCT leaf`;

  session.run(query)
    .then((result) => {
      const leaves = [];

      result.records.forEach((record) => {
        leaves.push(record.get('leaf').identity);
      });

      if (leaves.length === 0) {
        return params.node;
      }
      return leaves[Math.floor(Math.random() * leaves.length)];
    })
    .then((end) => {
      const innerQuery = `MATCH p = (r:LINE)-[*]->(n:LINE) WHERE id(r) = ${params.root} AND id(n) = ${end} RETURN p`;

      session.run(innerQuery)
        .then((result) => {
          const nodes = [];
          const segments = result.records[0].get('p').segments;
          segments.forEach((segment) => {
            nodes.push(segment.start);
          });
          nodes.push(segments[segments.length - 1].end);
          cb(null, nodes);
        })
        .catch((error) => {
          console.log(error);
          cb(error);
        });
    })
    .catch((error) => {
      console.log(error);
      cb(error);
    });
}

module.exports = {
  getNode,
  getRandomNode,
  makeNode,
  makeRoot,
  traverse,
};
