/**
 * dependencies grouped by features
 */

module.exports = {

  common: {
    dependencies: {},
    devDependencies: {
      '@babel/core': '^7.0.0-beta.48',
      '@babel/plugin-transform-runtime': '^7.0.0-beta.48',
      '@babel/preset-env': '^7.0.0-beta.48',
      '@babel/runtime': '^7.0.0-beta.48',
      '@types/node': '^10.1.2',
      'autoprefixer': '^8.5.0',
      'babel-loader': '^8.0.0-beta.2',
      'clean-webpack-plugin': '^0.1.19',
      'copy-webpack-plugin': '^4.5.1',
      'css-loader': '^0.28.11',
      'css-mqpacker': '^6.0.2',
      'css-mqpacker-sort-mediaqueries': '^0.2.2',
      'cssnano': '^3.10.0',
      'extract-text-webpack-plugin': '^4.0.0-beta.0',
      'html-webpack-plugin': '^3.2.0',
      'marked': '^0.4.0',
      'postcss-loader': '^2.1.5',
      'pug': '^2.0.3',
      'pug-plain-loader': '^1.0.0',
      'raw-loader': '^0.5.1',
      'stylus': '^0.54.5',
      'stylus-loader': '^3.0.2',
      'ts-loader': '^4.3.0',
      'ts-node': '^6.0.5',
      'typescript': '^2.8.3',
      'webpack': '^4.8.3',
      'webpack-cli': '^2.1.4',
      'webpack-dev-server': '^3.1.4'
    }
  },

  vue: {
    dependencies: {
      'vue': '^2.5.16'
    },
    devDependencies: {
      'vue-loader': '^15.2.0',
      'vue-style-loader': '^4.1.0',
      'vue-template-compiler': '^2.5.16',
    }
  },

  angular: {
    dependencies: {},
    devDependencies: {}
  }

};
