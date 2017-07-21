var path = require('path');
var webpack = require('webpack');
 
module.exports = {
  entry: './client/index.jsx',
  output: { path: path.join(__dirname, './'), filename: 'scripts/[name].js' },
  module: {
    loaders: [
      {
        test: /\.(jsx|js)?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react','es2015',],
          plugins: [
            ['import', [{ libraryName: "antd", style: true }]],
          ]
        }
      },
      {
        test : /\.css$/,
        loader : 'style-loader!css-loader'
      },
      {
        test: /.less$/,
        loader: "style-loader!css-loader!less-loader",
      }
    ]
  },
  resolve:{
    extensions:['','.js','.jsx']
  }
};
