const HtmlWebpackPlugin=require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports={
    mode:'development',
    entry:'./src/js.js',
    output:{
        path:__dirname+'/dist',
        filename:'index.js'
    },
    module:{
        rules:[
        {test:/\.css$/,use:['style-loader','css-loader']},
        {test:/\.js$/,exclude:/(node_modules|bower_components)/,use:{loader:'babel-loader',options:{presets:['@babel/preset-env']}}},
        {test:/\.(png|jpg|gif)$/,use: [{loader: 'url-loader',options: {limit: 8192 }}]}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template:'./src/index.html'}),
        
        new CopyWebpackPlugin([
            {from:'./src/static',to:'static'}
        ])
    ],
}