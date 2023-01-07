const Path = require('path');
const webpackNodeExternals = require('webpack-node-externals');

module.exports =  {
    target: 'node',
    entry: './src/index.js',
    output: {
        filename: 'serverBuild.js',
        path: Path.resolve(__dirname, 'serverBuild')
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        'react',
                        'stage-0',
                        'es2015',
                        ['env', { targets: { browsers: ['last 2 versions']}}]
                    ]
                }
            }
        ]
    },
    externals: [webpackNodeExternals()]
}
