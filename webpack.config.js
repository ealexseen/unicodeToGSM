const path = require('path');
const isProd = process.env.NODE_ENV === 'production';

const configPublic = {
    mode: isProd ? 'production' : 'development',
    entry: {
        'index': './src/index.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'build'),
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.esm.js',
        },
    },
    module: {
        rules: [

        ]
    },
    plugins: [

    ],
    watch: false,
};

module.exports = [
    configPublic,
];
