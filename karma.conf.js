module.exports = function(config) {
    var nodePath = 'node_modules/babel-polyfill/dist/';
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai'],
    files: [
        nodePath +'/polyfill.js',
      'src/**/*.js',
      'test/**/*.spec.js'
    ],
    exclude: [
      '**/*.swp'
    ],
    preprocessors: {
      'src/**/*.js': ['babel'],
      'test/**/*.spec.js': ['babel']
    },
    reporters: ['mocha'],
      browserDisconnectTimeout:15000,
      browserNoActivityTimeout:"15000",
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  });
};