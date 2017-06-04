module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname + "/public",
    filename: 'bundle.js'
  },
  devtool: "source-map",
  devServer: {
    contentBase: "./public",
    proxy: {
      "/api": {
        target: "http://localhost:3010",
        secure: false
      }
    }
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
