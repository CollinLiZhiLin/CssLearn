const path = require("path");
/**
 * html-webpack-plugin：当使用 webpack 打包时，创建一个html文件
 * ，并把webpack打包后的静态文件插入到这个Html文件当中。
 */
const htmlWebpackPlugin= require("html-webpack-plugin");
/**
 * mini-css-extract-plugin:当使用 webpack 打包时，创建一个css文件
 * ，并把webpack打包后的静态文件插入到这个css文件当中
 */
const miniCssExtractPlugin = require('mini-css-extract-plugin');
/**
 * copy-webpack-plugin:拷贝静态文件到目标文件
 */
const copyWebpackPlugin= require('copy-webpack-plugin');
/**
 * webpack-dev-server:热更新
 */
const webpackDevServer = require('webpack');

const cleanWebpackPlugin =require("clean-webpack-plugin");
module.exports={
    entry: './src/index.js',
    module:{
        rules:[
            {
                test:/\.(less|css)$/,
                use:[miniCssExtractPlugin.loader,'css-loader','less-loader']
            },
            {
                test:/\.(svg|ttf|woff|woff2|eot)$/,
                use:{
                        loader:'url-loader?name=fonts/[name].[ext]',
                    }
            },
            // {
            //     test:/\.(js)$/,
            //     use:{
            //         loader:'file-loader',
            //         options:{
            //            name : '[name].[ext]',
            //            outputPath: 'static/font/iconfont.js'
            //         }
            //     }
            // }
        ]
    },
    plugins:[
        new htmlWebpackPlugin(
            {
                template:"./src/index.html"
            }
        ),
        new miniCssExtractPlugin(
            {
                filename:"static/css/style.css"
            }
        ),
        // new copyWebpackPlugin(
        //     [
        //         {
        //             from:path.join(__dirname,'src/static/font'),
        //             to:path.join(__dirname,'dist/static/font')
        //         }
        //     ]
        //  ),
         new webpackDevServer.HotModuleReplacementPlugin()
    ],
    devServer:{
        open:true,
        host:'localhost',
        port:5000
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    }
}