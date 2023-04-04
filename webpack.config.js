const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        'css/styles.bundle': path.resolve(__dirname, 'src/scss/styles.scss'),
        'js/scripts.bundle': path.resolve(__dirname, 'src/js/app.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.scss/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'postcss-loader',
                    },
                    {
                        loader: 'sass-loader',
                    },
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'dist/index.html')
        })
    ],
    devServer: {
        host: '0.0.0.0',
        hot: true,
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        client: {
            overlay: {
                errors: true,
                warnings: true
            }
        },
        port: 9000
    }
};