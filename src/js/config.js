// 配置文件
requirejs.config({
	baseUrl:'../js',

	// 设置别名
	// 格式：别名:真实路径
	paths:{
		'jquery':'../lib/jquery-3.1.1',
		'template':'../lib/template-debug'

		
	},
	shim:{
		'ajax':{
			exports:'ajax'
		}
	}
});

// 引入其他模块
// 在requireJS中，一个模块就是一个js文件
// 引入模块的路径：
//requirejs(['jquery','home','common'],function($,home,common){
//	home();
//	common.animate();
//});
//requirejs(['jquery','top','header','HeaderInfo','qq'],function($,top,header,HeaderInfo,qq){
//	var top = new top();
//	top.init();
//	
//	var header= new header();
//	header.init();
//	
//	var HeaderInfo= new HeaderInfo();
//	HeaderInfo.init();
//});
require(["jquery",'index'],function($,index){
	index.init();
	
     //index.init()
     //page.init()
     //login.init()
     //res.init()
    //movielist.init()

    //var test = new Test();
//  var path = location.pathname; //进行路由设置
//
//  //console.log(path);
//  if(path=="/day32/app/index/"){
//      index.init()
//  }else if(path=="/day32/app/page/"){
//      page.init()
//  }else if(path=="/day32/app/movielist/"){
//      movielist.init()
//  }else if(path=="/day32/app/login/"){
//      login.init()
//  }else if(path=="/day32/app/res/"){
//      res.init()
//  }else{
//      index.init()
//  }
    //如果想要添加新的页面

    //1 建一个文件夹 放入index.html
    //2 建一个新的模块 在模块里面对页面进行设置
    //3 在入口js 设置访问路由
})