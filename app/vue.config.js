const path = require('path');

module.exports = {
  lintOnSave: false,
  publicPath: process.env.publicPath,
  outputDir: path.resolve(__dirname, '../hybrid/www/'),
};
