const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

let Mode = process.env.NODE_ENV === 'prod' ? 'production' : 'development'
let Target = process.env.NODE_ENV === 'prod' ? 'browserslist' : 'web'

if (process.env.NODE_ENV === 'prod') {
  Mode = 'production'
  Target = 'browserslist'
}

module.exports = {
  entry: {
    index: path.resolve(__dirname, 'src', 'index.js')
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    assetModuleFilename: "images/[hash][ext][query]"
  },
  mode: Mode,
  target: Target,
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg|jfif)$/i,
        type: "asset" // /resource et /inline >8ko
      },
      {
        test: /\.(s[ac]|c)ss/i, //sass scss css
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: "" }
          },
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ],
  },
  devtool: "source-map",
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  resolve: {
    extensions: [ '.js', '.jsx' ]
  }
}