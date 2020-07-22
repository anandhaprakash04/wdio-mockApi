
exports.config = {
    specs: [
        './main/specs/*.spec.ts',
    ],
    maxInstances: 10,
    capabilities: [{
            browserName: 'chrome'
        },
        ],
    logLevel: 'info',
    waitforTimeout: 1000,
    framework: 'jasmine',
    specFileRetries: 1,
    specFileRetriesDeferred: false,
    //
    // Test reporter for stdout.
    // The only one supported by default is 'dot'
    // see also: https://webdriver.io/docs/dot-reporter.html
    reporters: [
        'spec',
    ],
    //
    // Options to be passed to Jasmine.
    // See also: https://github.com/webdriverio/webdriverio/tree/master/packages/wdio-jasmine-framework#jasminenodeopts-options
    jasmineNodeOpts: {
        //
        // Jasmine default timeout
        defaultTimeoutInterval: 5000,
        jasmineNodeOpts: {
            requires: ['ts-node/register', 'tsconfig-paths/register']
        },
        //
        // The Jasmine framework allows interception of each assertion in order to log the state of the application
        // or website depending on the result. For example, it is pretty handy to take a screenshot every time
        // an assertion fails.
        expectationResultHandler: function(passed, assertion) {
            // do something
        },
        //
        // Make use of Jasmine-specific grep functionality
        grep: null,
        invertGrep: null
    },
}
