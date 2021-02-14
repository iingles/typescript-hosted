const path = require('path')
const HtmWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
   
    entry: path.resolve(__dirname, './src/index.ts'),
    
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            }
        ]
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },

    output: {
        // Hash prevents browser from caching
        filename: 'bundle.[fullhash].js',
        path: path.resolve(__dirname, 'dist')
    },

    plugins: [
        new CleanWebpackPlugin(),
        new HtmWebpackPlugin({
            template: path.resolve(__dirname, "./src/pages/index.html")
        }),
        new MiniCssExtractPlugin({ filename: "styles.[hash].css" })
    ]
    
}