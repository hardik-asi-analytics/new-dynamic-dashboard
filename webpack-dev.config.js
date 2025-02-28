var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const VENDOR_LIBS = [
  'react', 'lodash', 'redux', 'react-redux', 'react-dom', 'redux-thunk'
];

module.exports = {
  entry: {
    bundle: './src/index.tsx',
    vendor: VENDOR_LIBS
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: '[name].[chunkhash].js', // Single output file
    // library: 'DynamicDashboard',
    // assetModuleFilename: 'assets/[name][ext][query]',
    clean: true,
  },
  resolve: {
    alias: {
      "react-dom": "@hot-loader/react-dom", // ✅ Enable React Hot Loader
    },
    extensions: [".tsx", ".ts", ".js", ".jsx"],
  },  
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
            options: { transpileOnly: true } // ✅ Ensure TypeScript compiles correctly
          }
        ],
      },
      {
        test: /\.(js|jsx|ts|tsx)$/, // ✅ Handle JSX with Babel
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        exclude: /node_modules/,
      }
    ],
  },
  optimization: {
    minimize: false, // ✅ Disable minification for readability
  },
  externals: {
    react: "React",
    "react-dom": "ReactDOM",
  },
  mode: "production",

  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    // new webpack.DefinePlugin({
    //   'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    // })
  ]
};
