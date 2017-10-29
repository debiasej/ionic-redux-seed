const path = require('path');
const webpackDefault = require('@ionic/app-scripts/config/webpack.config');
const webpackMerge = require('webpack-merge');

const customConfig = {
  dev: {
    resolve: {
      alias: {
        '@app-redux': path.resolve('src/app/app-redux'),
        '@environments': path.resolve('src/environments')
      }
    }
  },
  prod: {
    resolve: {
      alias: {
        '@app-redux': path.resolve('src/app/app-redux'),
        '@environments': path.resolve('src/environments')
      }
    }
  }
};

module.exports = webpackMerge(webpackDefault, customConfig);
