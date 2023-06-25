const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackBar = require('webpackbar');
const path = require('path');
module.exports = {
  entry: {
 
      home: './src/views/home/home.js',
      menu: './src/views/menu/menu.js',
      login: './src/views/account/login.js',
      register: './src/views/account/register.js',
      more: './src/views/more/more.js',
      store: './src/views/store/store.js',
      account: './src/views/account/account.js',
      coummon: './src/index.js',

  },
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].[fullhash:8].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'less-loader',
        ],
      },
      
      {
        test: /\.(woff | eot | ttf | otf | svg)$/,
        type: 'asset/resource',
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext]'
        }
      },
      {
        test: /\.(htm|html)$/,
        loader: 'html-withimg-loader'
      }

    ],
  },
  mode: process.env.NODE_ENV,
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  externals: {
    jquery: 'jQuery',
    lodash: '_',
  },
  devServer: {
    open: ['/home.html'],
    // 配置前端请求代理
    proxy: {
      '^/api': {
        target: 'https://www.starbucks.com.cn/',
      },
      '^/bff': {
        target: 'https://bff.starbucks.com.cn/',
        pathRewrite: { '/api1': '' },
      },
    },
    client: {
      overlay: false,
    },
  },
  plugins: [
    new WebpackBar(),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:8].css',
    }),
    new HtmlWebpackPlugin({
      inject: 'body',
      template: './src/views/home/home.html',
      filename: 'home.html',
      chunks: ['common', 'home'],
    }),
    new HtmlWebpackPlugin({
      inject: 'body',
      template: './src/views/account/account.html',
      filename: 'account.html',
      chunks: ['common', 'account'],
    }),
    new HtmlWebpackPlugin({
      inject: 'body',
      filename: 'menu.html',
      template: './src/views/menu/menu.html',
      chunks: ['common', 'menu'],
    }),
    new HtmlWebpackPlugin({
      inject: 'body',
      filename: 'more.html',
      template: './src/views/more/more.html',
      chunks: ['common', 'more'],
    }),
    new HtmlWebpackPlugin({
      inject: 'body',
      filename: 'store.html',
      template: './src/views/store/store.html',
      chunks: ['common', 'store'],
    }),
    new HtmlWebpackPlugin({
      inject: 'body',
      filename: 'login.html',
      template: './src/views/account/login.html',
      chunks: ['common', 'account'],
    }),
    new HtmlWebpackPlugin({
      inject: 'body',
      filename: 'register.html',
      template: './src/views/account/register.html',
      chunks: ['common', 'account'],
    }),
    
  ],
};
