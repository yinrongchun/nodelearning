//fs模块是文件操作的封装,具有异步的和同步的两个版本
/*fs.readFile(filename.[encoding],[callback(err,data)]) 
 fs.readFileSync()和异步一样的参数,文件内容以函数返回值的形式返回,
需要使用try和catch捕捉并处理异常
*/
var fs=require('fs');
// fs.readFile('content.txt','utf-8',function(err,data){
// 	if(err){
// 		console.log(err);
// 	}else{
// 		console.log(data);
// 	}
// })

/*fs.open(path,flags,[mode],[callback(err.fd)]),path文件路径,flags文件打开方式
r,r+,w,w+,a,a+
mode是用于创建文件时给文件制定权限,默认是0666,callback会传递一个文件描述符fd
*/

/*fs.read(fd,buffer,offset,length,position,[callback(err,bytesRead,buffer)])
*/
fs.open('content.txt','r',function(err,fd){
	if(err){
		console.error(err);
		return;
	}
	var buf=new Buffer(8);
	fs.read(fd,buf,0,8,null,function(err,bytesRead,buffer){
		if(err){
			console.error(err);
			return;
		}
		console.log('bytesRead: '+bytesRead);
		console.log(buffer);
	})
})
//详情查看fs模块函数表