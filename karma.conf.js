module.exports = function(config) {
    config.set({

        port: 9876,

        browsers: [
            'Chrome',
            'Firefox',
            'Safari'
        ],

        frameworks: [
            'mocha',
            'chai'
        ],

        files: [
            'dist/*.min.js',
            'test/*.test.browser.js'
        ],

        // FIXIT: Support SourceMaps
        preprocessors: {
            'dist/*.min.js': 'coverage'
        },

        reporters: [
            'progress',
            'coverage'
        ],

        coverageReporter: {
            dir: 'coverage',
            subdir: function(browser) {
                return browser.toLowerCase().split(/[ /-]/)[0];
            }
        },

        autoWatch: false,
        singleRun: true
    });
};
