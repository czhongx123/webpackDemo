const htmlWepackPlugin=require('html-webpack-plugin');//使用插件用require引用
const path=require('path');//node中自带的api

module.exports={
    entry:{
        index:'./index.js',
        login:'./login.js'
    },
    output:{
        path:path.resolve(__dirname,'dist'),//目录对应一个绝对路径
        filename:'[name]-[chunkhash].js',
        publicPath:'https://cdn.com/assets/'//输出解析文件的目录，url相对于html页面
    },
    plugins:[
        new htmlWepackPlugin({
            template:'index.html',
            date:new Date(),
            minify:{
                removeComments:true,//删除注释
                collapseWhitespace:true//删除空格
            }//压缩html

        }),
        new htmlWepackPlugin({
            template:'login.html',
            date:new Date(),
            minify:{
                removeComments:true,//删除注释
                collapseWhitespace:true//删除空格
            }//压缩html

        }),
    ],
    module: {
        rules:[
            {test: /\.txt$/, use: 'raw-loader'},//test:，用于标识出应该被对应的 loader 进行转换的某个或某些文件。use:表示进行转换时，应该使用哪个 loader。
            { test: /\.ts$/, use: 'ts-loader' } 
        ]
    },
    mode:'development'//通过选择 development 或 production 之中的一个，来设置 mode 参数，你可以启用相应模式下的 webpack 内置的优化
                    //当启用“development”：会将 process.env.NODE_ENV 的值设为 development。启用 NamedChunksPlugin 和 NamedModulesPlugin
                    //production:会将 process.env.NODE_ENV 的值设为 production。启用 FlagDependencyUsagePlugin, FlagIncludedChunksPlugin, ModuleConcatenationPlugin, NoEmitOnErrorsPlugin, OccurrenceOrderPlugin, SideEffectsFlagPlugin 和 UglifyJsPlugin.
}//common.js的输出





//loader 可以将文件从不同的语言（如 TypeScript）转换为 JavaScript，或将内联图像转换为 data URL。loader 甚至允许你直接在 JavaScript 模块中 import CSS文件！
//npm install --save-dev ts-loader(转换ts为js)
//npm install postcss-loader --save-dev (自动为css样式加载浏览器前缀)
//npm install file-loader --save-dev (解析文件)
//npm install url-loader --save-dev (解析文件.将超过设定值大小的文件进行特殊处理，小于此值得进行base64位编码，使用base64进行转码的图片加载的时候没有缓存，而不使用base64图片加载的时候会有缓存)
//npm install image-webpack-loader --save-dev (压缩图片，文件)

