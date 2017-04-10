//定义主页模块
//定义模块的方法
define(['jquery','template'],function($,template){
    //$ 属于局部变量  所以  不会影响其他的jquery对象
    //一般情况下  模块会返回一个对象 获取构造函数
    return {
        init:function(){
        	
            $('.mainTop').load('../html/mainTop.html',function(){
            	var $ul = $('.brandship_list');
	        	var $li = $ul.children('li');          	
	        	//鼠标经过显示跟鼠标经过隐藏
	        	$ul.on('mouseenter','li',function(event){       		       		
	    			$(this).find('.brand_hide').stop().animate({'top':'0'},500);    
	    			
	        	}).on('mouseleave','li',function(event){       		       		
	    			$(this).find('.brand_hide').stop().animate({'top':'100px'},500);       		
	        	})
	
	
				var $main = $('.mainTop');			
				// 隐藏除第一个以外的.content
				$('.storesame').children('ul').children().not(':first').hide();
				
				// jQuery的事件委托
				// on方法的第二个参数，写上事件元对象的选择器
				$main.on('mouseenter','.storesame_link li',function(){
					$(this).addClass('st-active').siblings().removeClass('st-active');
					
					// 获取this所在同辈元素中的索引值
					var idx = $(this).index();
					
					$('.storesame').children('ul').children('li').eq(idx).show().siblings().hide();
				})
            });
            
            this.bind();
            return this
        },
        bind:function(){
        	
        }
    }
})

