var eventEmitter=require('events').EventEmitter;
var event=new eventEmitter();
event.on('some_event',function(){
	console.log('some_event occured.');
})
setTimeout(function(){
	event.emit('some_event');
},1000);
/* event对象注册了事件some_event的一个监听器,然后通过setTimeout在1000毫秒之后
向event对象发送事件some_event,此时会调用some_event的监听器  
*/
