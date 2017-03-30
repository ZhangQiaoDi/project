// 这时一个模块
// 定义一个有依赖的模块
// 这个模块依赖jquery
define(['jquery'],function($){
	// return一个函数/对象
	return {
		getData:function(){
			//$('.datalist').html('nav模块');
			function Popover(opt){
				var defaults = {
					li:{
						shouYe:'第五大道首页',
						zhuanXian:'贵宾专线：4008-6767-38'
					},
					logbox:{
						dengLu:'登录',
						zhuCe:'注册',
						my:'我的第五大道',
						bangZhuZhongXin:'帮助中心',
						shouJi:'手机版下载'
						
					}
				}
				
				this.df = defaults;
				this.lb = defaults;
				this.init();
			}
			
			Popover.prototype = {
				constructor:Popover,
				init:function(){
					var $div = $('<div/>');    //创建header
					$div.addClass('header');  
					
					var $wrap = $('<div/>');    //创建wrap
					$wrap.addClass('wrap clear'); 
					$div.append($wrap);
					
					var $headerLeft = $('<div/>');    //创建header-left
					$headerLeft.addClass('header-left');  
					$wrap.append($headerLeft);
					
					var $ul = $('<ul/>');
					$ul.addClass('ul clear');				
					$headerLeft.append($ul);
					
					var $headerRight = $('<div/>');      //创建header-right
					$headerRight.addClass('header-right');  
					$wrap.append($headerRight);
					
					var $ul2 = $('<ul/>');
					$ul2.addClass('ul');
					$headerRight.append($ul2);
					
					this.$ul = $ul;
					this.$ul2 = $ul2;
					this.$div = $div;
					
				},
				show:function(){
					$('body').append(this.$div);
				},
				insertion:function(){
					var $idx=0;
					for(var as in this.df.li){
						$idx++;
						var $li = $('<li data-id=' + $idx + '/>');
						$li.html('<a href="javascript:;" class=' + "li" + $idx + '>' + this.df.li[as] + '</a>');
						this.$ul.append($li);
						if($idx==1){
							var $i = $('<i/>');
							$i.addClass('fa fa-home');
							$li.prepend($i);
						}
						if($idx==2){
							var $i = $('<i/>');
							$i.addClass('fa fa-phone phone');
							$li.prepend($i);
						}
					}
				},
				hRight:function(){
					var $idx = 0;
					for(var as in this.lb.logbox){
						$idx++;
						var $li = $('<li data-id=' + $idx + '/>');
						$li.html('<a href="javascript:;" class=' + "li" + $idx + '>' + this.lb.logbox[as] + '</a>');
						this.$ul2.append($li);
						
						if($idx==2){
							var $i = $('<i/>');
							$i.addClass('fa fa-gift gift');
							$li.prepend($i);
						}
					}
				}
			}   //原型对象
			
			var pop = new Popover();
			pop.show();
			pop.insertion();
			pop.hRight();
			
		}   //构造函数
	}  //return返回
});