const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'development',
    entry: './src/index.tsx', // точка входа
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        publicPath: "/"
    },
    devServer: {
        port: 3000
    },
    resolve: {
        alias: {
            '@Images': path.resolve(__dirname, './src/img/')
        },
        extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.[jt]sx?$/, // сопоставляет файлы .js, .ts, и .tsx
                exclude: /node_modules/,
                loader: 'babel-loader', // использует для указанных типов файлов загрузчик babel-loader (ts-loader не требуется).
            },
            {
                test: /\.(scss)|(css)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader',
                    'sass-loader'
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        outputPath: 'images'
                    }
                },
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './public/index.html'),
            favicon: path.resolve(__dirname, './public/favicon.ico')
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name][contenthash].css',
        }),
        new CleanWebpackPlugin()
    ],
    devtool: 'eval-source-map', // создает высококачественные карты кода
}