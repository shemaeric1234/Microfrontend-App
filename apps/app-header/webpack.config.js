const path = require('path');
const { ModuleFederationPlugin } = require('webpack').container;
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js', // Entry point
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: 'http://localhost:3000/', // Public path for assets
  },
  devServer: {
    port: 3001,
    static: path.resolve(__dirname, 'public'), // Serve static files from the public folder
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Match .js and .jsx files
        exclude: /node_modules/, // Exclude node_modules
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // Use Babel presets
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Resolve .js and .jsx extensions
  },
  plugins: [
       new HtmlWebpackPlugin({
          template: './public/index.html', // Path to your HTML template
        }),
    new ModuleFederationPlugin({
      name: 'app_header', // Name of the micro frontend
      filename: 'remoteEntry.js', // Entry file for dynamic loading
      exposes: {
        './Header': './src/index.js', // Expose the Header component
      },
      shared: {
        react: { singleton: true, strictVersion: true, requiredVersion: '^18.2.0' },
        'react-dom': { singleton: true, strictVersion: true, requiredVersion: '^18.2.0' },
      },
    }),
  ],
};