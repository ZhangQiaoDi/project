//定义主页模块
//定义模块的方法
define(['jquery','template'],function($,template){
    //$ 属于局部变量  所以  不会影响其他的jquery对象
    //一般情况下  模块会返回一个对象 获取构造函数
    return {
        init:function(){      	
            $('.mainZhong').load('../html/mainZhong.html',function(){
            	var $ul = $('.shopcenter');
				var $li = $ul.children();
				
				$ul.on('mouseenter','li',function(){
					$(this).find('.shopcenterbox').css({'top':'-50px'});
				}).on('mouseleave','li',function(){
					$(this).find('.shopcenterbox').css({'top':'0px'});
				})
	        	
	        	var $slider = $('.slider');	
	        	var index = 1;
				
				// jQuery的事件委托
				// on方法的第二个参数，写上事件元对象的选择器
				$slider.on('click','.page span',function(){
					$(this).addClass('sp-active').siblings().removeClass('sp-active');
					
					// 获取this所在同辈元素中的索引值
					var idx = $(this).index();				
					$('.slider').children('ul').children('li').eq(idx).show().siblings().hide();
				})
           });           
            this.bind();
            return this
        },
        bind:function(){
	
        }
    }
})

