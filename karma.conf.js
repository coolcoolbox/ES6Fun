module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai'],
    files: [
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
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  });
}