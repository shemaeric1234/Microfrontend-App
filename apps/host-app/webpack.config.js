const path = require('path');
const { ModuleFederationPlugin } = require('webpack').container;
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js', // Entry point
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js', // Output bundle file
    publicPath: '/', // Public path for assets
  },
  devServer: {
    port: 3000,
    static: path.resolve(__dirname, 'public'), // Serve static files from the public folder
    hot: true, // Enable Hot Module Replacement
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Match .js and .jsx files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // Use Babel presets
          },
        },
      },
      {
        test: /\.css$/, // Match .css files
        use: ['style-loader', 'css-loader'], // Process CSS files
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Path to your HTML template
    }),
    new ModuleFederationPlugin({
        name: 'host_app',
        remotes: {
        //   app_header: 'app_header@http://localhost:3001/remoteEntry.js',
          app_dashboard: 'app_dashboard@http://localhost:3002/remoteEntry.js',
        },

        shared: {
            react: { singleton: true,   eager: true, requiredVersion: '^18.2.0' },
            'react-dom': { singleton: true,   eager: true, requiredVersion: '^18.2.0' },
          },
  
      }),
  ],

  resolve: {
    extensions: ['.js', '.jsx'], // Resolve .js and .jsx extensions
  },
};