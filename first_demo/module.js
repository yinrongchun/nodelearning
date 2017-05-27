//一个文件就是一个模块,node提供了exports和require两个对象,其中exports是模块公开的接口
//require是用于从外部获取一个模块的接口,即所获取模块的exports对象
var name;
exports.setName=function(thyName){
	name=thyName;
};
exports.sayHello=function(){
	console.log('hello '+name);
}