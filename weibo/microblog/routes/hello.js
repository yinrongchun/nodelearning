var express = require('express');
var router = express.Router();

//相同路径的路由 只会执行匹配的第一个,后面的被忽略,通过next参数可以转移给后面的路由
router.all('/:username',function(req,res,next){
	// next();
	// res.send('all methods captured');
	console.log('all methods captured');//终端输出
	next();
});

/* GET users listing. */
router.get('/:username', function(req, res, next) {
// router.get('/', function(req, res, next) {
  // res.send('the time is '+new Date().toString());
  
  res.send('hai: '+ req.params.username);
});

module.exports = router;