const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = env => ({
   entry: './src/app.ts',
   mode: 'production',
   //devtool: 'inline-source-map',
   watch: true,
   output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
      libraryTarget: 'commonjs',
      library: {
         // name: 'tsccs', // you then can access it via window: `window.youLib`
         // type: 'umd',
         // umdNamedDefine: true,
         type: "module"
       },
   },
   resolve: {
      extensions: ['.tsx', '.ts', '.js'],
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