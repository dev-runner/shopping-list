//jshint strict: false
module.exports = function(config) {
  
  config.set({

    basePath: './app',

    files: [
      'libs/angular/angular.js',
      'libs/angular-bootstrap/ui-bootstrap-tpls.js',
      'libs/ngstorage/ngStorage.js',
      'libs/angular-mocks/angular-mocks.js',
      'app/*.js'
    ],

    autoWatch: true,

    colors: true,

    frameworks: ['jasmine'],

    browsers: ['PhantomJS'],

    plugins: [
      'karma-phantomjs-launcher',
      'karma-jasmine',
      'karma-junit-reporter'
    ],

    reporters: [ 'progress' ],

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });

};
