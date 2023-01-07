const Path = require('path');

module.exports = {
    entry: './src/client/app.js',
    output: {
        filename: 'clientBundle.js',
        path: Path.resolve(__dirname, 'public')
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
    }
}
