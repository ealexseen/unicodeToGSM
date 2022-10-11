const path = require('path');

const configPublic = {
    mode: 'production', // development|production
    entry: {
        'index': './src/UnicodeToGSM.js',
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js',
        library: {
            type: "module",
        },
    },
    experiments: {
        asyncWebAssembly: true,
        // WebAssembly as async module (Proposal)
        syncWebAssembly: true,
        // WebAssembly as sync module (deprecated)
        outputModule: true,
        // Allow to output ESM
        topLevelAwait: true,
        // Allow to use await on module evaluation (Proposal)
    },
};

module.exports = [
    configPublic,
];
