//events模块只提供了一个对象:events.EventEmitter;这个的核心就是事件发射和监听的封装
var events=require('events');
var emitter=new events.EventEmitter();
emitter.on('someEvent',function(arg1,arg2){
	console.log('listener1',arg1,arg2);
});
emitter.on('someEvent',function(arg1,arg2){
	console.log('listener2',arg1,arg2);
});
emitter.emit('someEvent','byvoid',1991);
//EventEmitter.on(event,fn)为指定事件注册一个监听器,接受一个字符串event和一个回调函数fn
//EventEmitter.emit(event,[arg1],[arg2],...)发射event事件,传递若干可选参数到事件监听器的参数表
//EventEmitter.once(event,fn)注册一个单次事件监听器
//EventEmitter.removeListener(event,fn)移除指定事件的某个监听器,必须是注册过的监听器
//EventEmitter.removeAllListeners([event])移除所有事件的监听器,如果指定event,则移除指定事件的所有监听器
//http://nodejs.org/api/events.html 详情