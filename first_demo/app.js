var http=require('http');
http.createServer(function(req,res){
	res.writeHead(200,{'contentType':'text/html'});
	res.write("<h1>node.js</h1><h2>监听代码的变化然后重启node服务,实现代码的测试supervisor小工具</h2>");
	res.end('<i>hello world!</i>');
}).listen(3000);
console.log("http server is listening at port 3000");