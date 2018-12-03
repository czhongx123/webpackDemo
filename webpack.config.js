const htmlWepackPlugin=require('html-webpack-plugin');

module.exports={
    entry:"./index.js",
    output:{
        path:'./dist',
        filename:'js/[name]-[chunkhash].js',
        publicPath:'http://cdn.com'
    },
    plugins:[
        new htmlWepackPlugin({
            template:'index.html',
            date:new Date(),
            minify:{
                removeComments:true,//删除注释
                collapseWhitespace:true//删除空格
            }//压缩html

        })
    ]
}//common.js的输出



