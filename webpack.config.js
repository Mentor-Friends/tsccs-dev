const path = require('path');
module.exports = {
   entry: './src/app.ts',
   mode: 'development',
   devtool: 'inline-source-map',
   watch: true,
   output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
      library: {
         name: 'tsccs', // you then can access it via window: `window.youLib`
         type: 'umd',
         umdNamedDefine: true,
       },
   },
   resolve: {
      extensions: ['.ts', '.js'],
   },
   module: {
      rules: [
         {
            test: /\.ts$/,
            use: 'ts-loader',
            exclude: /node_modules/,
         },
      ],
   },
};