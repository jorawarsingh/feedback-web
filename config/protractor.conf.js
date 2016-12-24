///<reference path='../../../node_modules/@types/protractor/index.d.ts' />
require('ts-node/register');
var helpers = require('./helpers');
const devBaseUrl = require('./webpack.dev');
const prodBaseUrl = require('./webpack.prod');

exports.config = {
    baseUrl: 'http://localhost:8080/',
    specs: [
        helpers.root('src/app/app.e2e.ts'),
        helpers.root('src/app/welcome/*.e2e.ts'),
        helpers.root('src/app/**/*.e2e.ts')
    ],
    exclude: [],

    framework: 'jasmine2',

    allScriptsTimeout: 110000,
    getPageTimeout: 100000,
    jasmineNodeOpts: {
        showTiming: true,
        showColors: true,
        isVerbose: false,
        includeStackTrace: false,
        defaultTimeoutInterval: 400000
    },
    directConnect: true,

    capabilities: {
        'browserName': 'chrome',
        'chromeOptions': {
            'args': ['show-fps-counter=true']
        }
    },

    onPrepare: function() {
        browser.ignoreSynchronization = true;
    },

    /**
     * Angular 2 configuration
     *
     * useAllAngular2AppRoots: tells Protractor to wait for any angular2 apps on the page instead of just the one matching
     * `rootEl`
     */
    useAllAngular2AppRoots: true
};