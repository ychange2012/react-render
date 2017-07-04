const webpack = require('webpack');
const path = require('path');
const buildPath = path.resolve(__dirname, 'build');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const TransferWebpackPlugin = require('transfer-webpack-plugin');
const CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
const config = {
  // Entry points to the project
  entry: [
    'webpack/hot/dev-server',
    'webpack/hot/only-dev-server',
    path.join(__dirname, '/src/app/app.js'),
    //path.join(__dirname, '/src/app/app.js'),
    //path.join(__dirname, '/src/test/app2.js'),
    //app:'./src/app/app.js',
    //app2: './src/app/app2.js',
  ],
  // Server Configuration options
  devServer: {
    contentBase: '/build', // Relative directory for base of server
    devtool: false,
    hot: true, // Live-reload
    inline: true,
    port: 3000, // Port Number
    host: '0.0.0.0', // Change to '0.0.0.0' for external facing server
  },
  devtool: false,
  output: {
    path: buildPath, // Path of output file
    filename: 'app.js',
    
    //path: path.join(__dirname, '/build'),
    //filename: '[name].js',
    //publicPath: '../../../../build/',
    //chunkFilename: "chunk/[chunkhash].chunk.js",
  },
  plugins: [
    // Enables Hot Modules Replacement
    new webpack.HotModuleReplacementPlugin(),
    // Allows error warnings but does not stop compiling.
    new webpack.NoErrorsPlugin(),
    //new CommonsChunkPlugin('common.js'),
    // Moves files
    new TransferWebpackPlugin([
      {from: 'www'},
    ], path.resolve(__dirname, 'src')),
    new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            },
        }),
    //提供全局的变量，在模块中使用无需用require引入
    new webpack.ProvidePlugin({
        jQuery: "jquery",
        $: "jquery",
        // nie: "nie"
    }),
    new webpack.DefinePlugin({
      'process.env': {
          NODE_ENV: '"production"',
      },
    }),
  ],
  module: {
    loaders: [
      {
        // React-hot loader and
        test: /\.js$/, // All .js files
        loaders: ['react-hot-loader/webpack', 'babel-loader'], // react-hot is like browser sync and babel loads jsx and es6-7
        exclude: [nodeModulesPath],
        //include: [path.resolve(__dirname, "src/app")],   //把要处理的目录包括进来
      },
    ],
  },
};

module.exports = config;