require("dotenv").config();

const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

//input source file - index.jsx
//output source folder - dist folder
//output file name = bundle.js
//babel reader (babel-loader)
//Perhaps a css loader and html loader
//mode: development or production

/*
  What should go here?  Great question!

  Before you go to documentation, verify which version of webpack
  you are using.

  Use this config to copy production versions of your
  index.html and styles.css to dist folder upon build
*/

const SRCFile = path.join(__dirname, './client/src/index.jsx')
const DISTFolder = path.join(__dirname, './client/dist')

module.exports = {
  mode: 'production',
  entry: SRCFile,
  output: {
    path: DISTFolder,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './client/src/index.html')
    }),
    new MiniCssExtractPlugin(),
  ]
};
