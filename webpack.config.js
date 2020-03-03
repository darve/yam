
const extract_css = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  watch: true,    
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          extract_css.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: 'babel-loader'
      },
    ],
  },
  plugins: [
    new extract_css({
      filename: 'app.css',
      chunkFilename: 'chunk.css',
    }),
  ],
  resolve: {
    alias: {
      "react": "preact-compat",
      "react-dom": "preact-compat"
    }
  }
};