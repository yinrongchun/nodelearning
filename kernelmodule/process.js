//process是global的一个属性
/* process.argv是命令行参数数组,第一个元素是node,第二个是脚本文件名,往后是运行参数 */
console.log(process.argv);
//process.stdout是标准输出流,process.stdout.write()
/*process.stdin是标准输入流,初始是暂停状态,需要编写事件响应函数process.stdin.resume()
process.stdin.on('data',function(data){
	process.stdout.write('read from console: '+data.toString());
})
*/
/*process.nextTick(callback)的功能是为事件循环设置一项任务,node会在
下次事件循环调响应时调用callback; 可以把复杂的工作拆散,变成一个个较少的事件
*/
//http://nodejs.org/api/process.html 详情