var express = require('express');//引入express模块
var React = require('react');
//var ReactApp = React.createFactory(require('./src/app/app').ReactApp);
var components = require('./src/app/test.js')

var test = React.createFactory(components.Main)

var app = express();//创建app

//定义路由，返回字符串
app.get('/', function(req, res){
  //res.send('Hello World');
  let html = renderToString(test({}))
  //let html = '<h2>Hello World</h2>';
  res.send( indexPage(html) )
});

// 启动一个服务，监听从8888端口进入的所有连接请求
var server = app.listen(3000, function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log('Listening at http://%s:%s', host, port);
}); 


let indexPage = (html)=>{
    return `
    <!doctype html>
        <html lang="utf-8">
            <head>
                <script>
                </script>
            </head>
            <body>
                <div id="app" >${html}</div>
            </body>
        </html>
    `
}