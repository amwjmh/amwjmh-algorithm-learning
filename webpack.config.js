 const  path = require('path')
module.exports = {
    // 入口起点
    entry: './src/index.js',

    //输出
    output: {
        filename: 'main.js', //输入文件名
       
    },

  
    //模式
    // mode: 'production', //生产
    mode: 'development', //开发


    // 热部署  webpack serve 启动
    devServer: {
        contentBase: path.join(__dirname, 'www'),
        compress: true,
        port: 3000,
        open: true, //自动打开
        publicPath: '/hs/'
    }

}