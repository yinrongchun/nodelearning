function Hello(){
	var name;
	this.setName=function(thyName){
		name=thyName;
	};
	this.sayHello=function(){
		console.log('hello '+name);
	}
}
// exports.Hello=Hello;//外部引用时,接口对象是exports对象
module.exports=Hello;//外部引用时,接口对象就是Hello对象,而不是上面的exports
//事实上exports本身仅仅是一个普通的空对象{},专门用来声明接口,因此可以用其他对象替换,如Hello