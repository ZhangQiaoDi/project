//定义主页模块
//定义模块的方法
define(['jquery','template'],function($,template){
    //$ 属于局部变量  所以  不会影响其他的jquery对象
    //一般情况下  模块会返回一个对象 获取构造函数
    return {
        init:function(){
       	
            $('.nav').load('../html/nav.html',function(){
            	var $ul = $('.menu');
	            var $li = $ul.children();
	            $li.on('mouseenter',function(){	
					$(this).find('a').addClass('wi');
	            }).on('mouseleave',function(){
	            	$(this).find('a').removeClass('wi');
	            })
	            
	            var $ul2 = $('.icon_Wrap');
	            var $li2 = $ul2.children();
	            $li2.on('mouseenter',function(){
	            	$(this).css({'width':'140px'});
	            }).on('mouseleave',function(){
	            	$(this).css({'width':''})
	            })       
            });
            
            this.bind();
            return this
        },
        bind:function(){
               
        }
    }
})

