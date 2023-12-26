const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = env => ({
   entry: './src/app.ts',
   mode: 'development',
   devtool: 'inline-source-map',
   watch: true,
   output: {
      filename: 'index.js',
      path: path.resolve(__dirname, 'dist'),
      library: {
         // name: 'tsccs', // you then can access it via window: `window.youLib`
         // type: 'umd',
         // umdNamedDefine: true,
         type: "module"
       },
   },
   experiments: {
      outputModule: true,
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
   plugins: [
      new Dotenv({
           path: `.env.${env.NODE_ENV}`
        })
   ]
});