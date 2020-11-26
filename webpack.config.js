const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (process.env.NODE_ENV === 'test')
    require('dotenv').config({ path: '.env.test' });
else if (process.env.NODE_ENV === 'development')
    require('dotenv').config({ path: '.env.development' });

module.exports = (env) => {
    const isProduction = env === 'production';
    const CSSExtract = new ExtractTextPlugin('styles.css');

    return {
        entry: ['babel-polyfill', './src/app.js'],
        output: {
            path: path.join(__dirname, 'public', 'dist'),
            filename: 'bundle.js'
        },
        module: {
            rules: [
                {
                    test: /\.(png|jpg|gif|svg)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {},
                        },
                    ],
                },
                {
                    loader: 'babel-loader',
                    test: /\.js$/,
                    exclude: /node_modules/
                }, {
                    use: CSSExtract.extract({
                        use: [
                            {
                                loader: 'css-loader',
                                options: {
                                    sourceMap: true
                                }
                            },
                            {
                                loader: 'sass-loader',
                                options: {
                                    sourceMap: true
                                }
                            }

                        ]
                    }),
                    test: /\.s?css$/
                }]
        },
        plugins: [
            CSSExtract,
            new webpack.DefinePlugin({
                'process.env.WEB_API': JSON.stringify(process.env.WEB_API),
                'process.env.LOGIN_URL': JSON.stringify(process.env.LOGIN_URL),
                'process.env.LOGOUT_URL': JSON.stringify(process.env.LOGOUT_URL)
            })
        ],
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: {
                disableDotRule: true
            },
            publicPath: '/dist/'
        }
    };
};