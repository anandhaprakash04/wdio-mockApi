
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
    reporters: [
        'spec',
    ],
    jasmineNodeOpts: {
        defaultTimeoutInterval: 5000,
        jasmineNodeOpts: {
            requires: ['ts-node/register', 'tsconfig-paths/register']
        },
    },
}
