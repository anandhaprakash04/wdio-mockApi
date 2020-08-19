
export const config = {
    specs: [
        './main/specs/*.spec.ts',
    ],
    maxInstances: 10,
    capabilities: [{
        'browserName': 'chrome',
        'goog:chromeOptions': {
            args: [
                '--incognito',
                '--start-maximized',
                '--enable-features=NetworkService,NetworkServiceInProcess',
            ],
        },
    }],
    logLevel: 'error',
    coloredLogs: true,
    waitforTimeout: 300000,
    framework: 'jasmine',
    reporters: [
        'spec',
    ],
    jasmineNodeOpts: {
        defaultTimeoutInterval: 300000,
        jasmineNodeOpts: {
            require: ['ts-node/register', 'tsconfig-paths/register']
        },
    },
    services: [['selenium-standalone']]
}
