const path = require("path");
const { ModuleFederationPlugin } = require("webpack").container;
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js", // Entry point
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js", // Output bundle file
    publicPath: "auto", // Public path for assets
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
    static: path.resolve(__dirname, "public"), // Serve static files from the public folder
    hot: true, // Enable Hot Module Replacement
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Match .js and .jsx files
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"], // Use Babel presets
          },
        },
      },
      {
        test: /\.css$/, // Match .css files
        use: ["style-loader", "css-loader"], // Process CSS files
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // Path to your HTML template
    }),
    new ModuleFederationPlugin({
      name: "host",
      remotes: {
        header: "app_header@http://localhost:3001/remoteEntry.js",
        dashboard: "app_dashboard@http://localhost:3002/remoteEntry.js",
      },
      shared: {
        react: {
          singleton: true,
          strictVersion: true,
          requiredVersion: "^18.2.0",
          eager: true,
        },
        "react-dom": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "^18.2.0",
          eager: true,
        },
      },
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx"], // Resolve .js and .jsx extensions
  },
};
