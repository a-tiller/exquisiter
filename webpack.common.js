const path = require('path');

const SRC_DIR = path.join(__dirname, '/client/');
const DIST_DIR = path.join(__dirname, '/public/');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'app.js',
    path: DIST_DIR,
    sourceMapFilename: 'app.js.map',
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/react', '@babel/env'],
        },
      },
    ],
  },
  resolve: { extensions: ['.js', '.jsx'] },
};
