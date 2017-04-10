//定义主页模块
//定义模块的方法
define(['jquery','template'],function($,template){
    //$ 属于局部变量  所以  不会影响其他的jquery对象
    //一般情况下  模块会返回一个对象 获取构造函数
    return {
        init:function(){
        	
            $('.carousel').load('../html/carousel.html',function(){
            	var $carousel = $('.carousel');
				var $ul = $carousel.children('ul');
	
				var len = $ul.children().length;
	
				var index = 0;
	
				// 自动轮播
				var timer;
	
				// 生成分页
				// 创建一个div
				var $page = $('<div/>');
				$page.addClass('page');
				for(var i=0; i<len; i++){
					var $span = $('<span/>').html(i+1);
					
					if(i==index){
						$span.addClass('active');
					}
					$page.append($span);
				}
				
				$carousel.append($page);
				
				
				// 鼠标移入移除
				$carousel.on('mouseenter',function(){
					clearInterval(timer);
				})
				$carousel.on('mouseleave',function(){
					timer = setInterval(function(){
						index++;
	
						showPic();
					},3000);
				})
				
				// 手动触发mouseleave事件
				.trigger('mouseleave');
				
				var $prev = $carousel.children('.prev');
				var $next = $carousel.children('.next');
				// 上一张/下一张		
				$prev.on('click',function(){			
					index--;
					showPic();
				});
				$next.on('click',function(){				
					index++;
					showPic();
				});
				
				
				//分页点击
				$carousel.on('click','.page span',function(){
					index = $(this).index();
					
					showPic();
				})
				
				function showPic(){
					if(index<0){
						index = len - 1;
					}else if(index > len - 1){
						index = 0;
					}
					$ul.animate({left:-index*1440});
					
					//页码高亮
					$page.children().eq(index).addClass('active').siblings().removeClass('active');
				}
	        });
            
            this.bind();
            return this
        },
        bind:function(){
            
        }
    }
})

