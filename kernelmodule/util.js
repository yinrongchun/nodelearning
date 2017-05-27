//util 提供常用函数的集合
//util.inherits(constructor,superConstructor)是一个实现对象间原型继承的函数
var util=require('util');
function Base(){
	this.name='base';
	this.base=1991;
	this.sayHelo=function(){
		console.log('hello '+this.name);
	}
}
Base.prototype.showName=function(){
	console.log(this.name);
}
function Sub(){
	this.name='sub';
}
util.inherits(Sub,Base);
var objBase=new Base();
objBase.showName();
objBase.sayHelo();
console.log(objBase);
var objSub=new Sub();
objSub.showName();
//objSub.sayHelo();
console.log(objSub);

/*util.inspect(object,[showhidden],[depth],[colors])是一个将任意对象转换为字符串的方法
通常用于调试和输出,至少接受一个参数object,即要转换的对象 */
//http://nodejs.org/api/util.html  更多详情