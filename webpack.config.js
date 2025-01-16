const path = require('path');

module.exports = env => ({
   entry: {
      main: './src/app.ts',  // Main app entry point
      serviceWorker: './src/service-worker.ts'  // Service worker entry point
   },
   mode: 'production',  // Set to 'production' for production
  // devtool: 'source-map',  // Use 'source-map' for debugging (remove for production)
   watch: false,
   output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      // Enable ES Module output
      module: true,  // This tells Webpack to treat the output as ES modules
      libraryTarget: 'module',  // Ensures it's treated as an ES module
   },
   resolve: {
      extensions: ['.tsx', '.ts', '.js'],
      mainFields: ['module', 'browser', 'main'],  // Prefer ES module resolution
   },
   optimization: {
      minimize: true
   },
   module: {
      rules: [
         {
            test: /\.ts$/,
            use: 'ts-loader',   // Use ts-loader for TypeScript files
            exclude: /node_modules/,
         },
      ],
   },
   plugins: [
   ],
   optimization: {
      minimize: false,  // Optional: Disable minimization for easier debugging
   },
   target: 'web',  // Ensure output is compatible with browsers
   experiments: {
      outputModule: true,  // Enable support for ES module output
   },
});