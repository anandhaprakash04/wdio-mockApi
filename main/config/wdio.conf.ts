
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
    waitforTimeout: 300000,
    framework: 'jasmine',
    reporters: [
        'spec',
    ],
    jasmineNodeOpts: {
        defaultTimeoutInterval: 300000,
        jasmineNodeOpts: {
            requires: ['ts-node/register', 'tsconfig-paths/register']
        },
    },
    services: [['devtools']]
}
