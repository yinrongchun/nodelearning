var a=1;
var b='world';
var c=function(x){
	console.log('hello '+x+a);
};
c(b);
//node debug 文件名 :打开单步调试工具
//node --debug[port] script.js :打开调式服务器
//node --debug-brk[port] script.js :打开调式服务器(要求脚本暂停执行等待客户端链接)
//可安装eclipse进行node调试
/*也可安装node-inspector包进行调试,需启动node --debug-brk[port] script.js命令,然后在另一个终端页面启动node-inspector命令,
然后在webkit内核的浏览器中输入127.0.0.1:8080/debug?port=5858
*/