//http.Server是http模块中的HTTP服务器对象,用node做的所有基于HTTP协议的系统,如网站,社交应用或者代理服务器等
//http.Server事件:request ,connection,close
var http=require('http');
var server=new http.Server();
server.on('request',function(req,res){
	res.writeHead(200,{'content-Type':'text/html'});
	res.write('<h1>this是http模块的server</h1>');
	res.end('<p>the end</p>');
});
server.listen(3000);
console.log('http server is listening at port 3000');

//http.ServerRequest是请求的信息,是后端开发者最关注的内容.分为请求头和请求体
//http.ServerResponse