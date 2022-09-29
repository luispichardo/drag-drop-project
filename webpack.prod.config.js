const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './src/app.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'production',
  devtool: 'none',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/ 
      }
    ]
  },
  devServer: {
    static: "./",
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  plugins: [  
    new CleanPlugin.CleanWebpackPlugin()
  ]
};