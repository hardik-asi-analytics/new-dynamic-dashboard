const path = require("path");
const source = path.resolve(__dirname, 'src');

module.exports = {
  entry: path.resolve(__dirname, "src", "index.tsx"), // Entry point
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js", // Single output file
    library: "MyReactLibrary", // Library name
    libraryTarget: "umd", // UMD format for usage in different environments
    globalObject: "this",
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components'),
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
          },
        ],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        include: source,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        exclude: /node_modules/,
      }
    ],
  },
  externals: {
    react: "React",
    "react-dom": "ReactDOM",
  },
  mode: "production",
};
