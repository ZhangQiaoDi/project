// 配置文件
requirejs.config({
	baseUrl:'../js',

	// 设置别名
	// 格式：别名:真实路径
	paths:{
		'jquery':'../lib/jquery-3.1.1',
		'template':'../lib/template-debug',
		'gdszoom':'../lib/jquery.gdszoom/jquery.gdszoom'
	},
	shim:{
		'ajax':{
			exports:'ajax'
		}
	}
});

require(["jquery",'index','page','particulars','cart','register','login'],function($,index,page,particulars,cart,register,login){
	var path = location.pathname;
	if(path=="/1612/project1612/src/index/index.html"){
		index.init();
	}else if(path=="/1612/project1612/src/page/index.html"){
		page.init();
	}else if(path=="/1612/project1612/src/particulars/index.html"){
		particulars.init();
	}else if(path=="/1612/project1612/src/cart/index.html"){
		cart.init();
	}else if(path=="/1612/project1612/src/register/index.html"){
		register.init();
	}else if(path=="/1612/project1612/src/login/index.html"){
		login.init();
	}

})