// Karma configuration
// Generated on Mon Jan 04 2016 20:30:11 GMT-0800 (PST)
var webpackConfig = require('./webpack.config.js');

module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['mocha', 'chai', 'phantomjs-shim'],


        // list of files / patterns to load in the browser
        files: [
            'src/index.spec.ts'
        ],


        // list of files to exclude
        exclude: [
        ],

        // webpack configuration
        webpack: {
            devtool: 'eval-source-map',
            debug: true,
            module: webpackConfig.module,
            resolve: webpackConfig.resolve
        },

        webpackMiddleware: {
            quiet: true,
            stats: {
                colors: true
            }
        },


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'src/**/*.ts': ['webpack', 'sourcemap']
        },

        // typescriptPreprocessor: {
        //     options: {
        //         sourceMap: true,
        //         noResolve: false,
        //         target: 'es6',
        //         module: 'commonjs'
        //     },

        //     typings: [
        //         'typings/tsd.d.ts'
        //     ],

        //     transformPath: function (path) {
        //         return path.replace(/\.ts$/, '.js');
        //     }

        // },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    })
}
