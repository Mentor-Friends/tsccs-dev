const path = require('path');

module.exports = env => ({
   entry: './src/app.ts',
   mode: 'development',  // convert to production for production
   devtool: 'inline-source-map', // remove for production
   watch: true,
   output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
       libraryTarget: 'commonjs', // remove this for window library
      library: {
         // name: 'tsccs-browser', // you then can access it via window: `window.youLib`
         // type: 'umd', // add this for window library
         // umdNamedDefine: true, // add this for window library
         type: "module"  // remove this for window library
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
   ]
});