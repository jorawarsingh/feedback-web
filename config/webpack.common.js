
var path = require("path");
var helpers = require('./helpers');
var webpack = require("webpack");
//plugins
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

 module.exports =  {        
         entry: {
             'polyfills': './src/polyfills.ts',
             'vendors': './src/vendors.ts',
             'app': './src/main.ts'
         },
         resolve: {
             extensions: [".ts", ".js"]
         },
         module: {
             loaders: [
                 {test:/\.ts$/, loaders: ["awesome-typescript-loader","angular2-template-loader"]},
                 {test:/\.css$/, loader: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: 'css-loader' })},
                 {test:/\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
                 {test:/\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
                 {test:/\.(png|jpg|jpeg|gif)$/,loader: 'url-loader?limit=10000'},
                 {test:/\.html$/, loader: 'html'},
                 {test:/\.json$/, loader: "json-loader"}
             ]
         }, plugins: [          
             new HtmlWebpackPlugin({
                 template: "./src/index.html",
                 favicon:"./src/favicon.ico",
                 minify:false,
                 chunksSortMode: function (a, b) {  //alphabetical order
                     if (a.names[0] < b.names[0]) {
                         return 1;
                     }
                     if (a.names[0] > b.names[0]) {
                         return -1;
                     }
                     return 0;
                 }
                 //chunks: ['app']
             }),
             /*new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery"
             }),*/
             new webpack.ContextReplacementPlugin(
                 /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
                 __dirname
             )
        ],
    };
