var path = require('path');
var webpack = require('webpack');
 
module.exports = {
  entry: './client/index.jsx',
  output: { path: path.join(__dirname, './'), publicPath:'/assets/', filename: 'scripts/[name].js' },
  module: {
    loaders: [
      {
        test: /\.(jsx|js)?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react','es2015'],
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
  },
  devServer: {
    contentBase: "./viewHook",//本地服务器所加载的页面所在的目录
    colors: true,//终端中输出结果为彩色
    historyApiFallback: true,//不跳转
    inline: true//实时刷新
  },
  devtool:'source-map'
};
