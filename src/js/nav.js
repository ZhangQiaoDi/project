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
					title:'标题',
					content:'内容',
					li:{
						w:'网页',
						x:'新闻',
						s:'视频',
						t:'图片',
						m:'音乐'
					},
					span:{
						w1:'10',
						x2:20,
						s3:30,
						t4:40,
						m5:50
					}
				}
				
				this.df = defaults;
				this.init();
			}
			
			Popover.prototype = {
				constructor:Popover,
				init:function(){
					var $div = $('<div/>');
					$div.addClass('div-content');
					
					var $title = $('<div/>');
					$title.addClass('title');
					$title.html(this.df.title);
					$div.append($title);
								
					var $content;
					if(this.df.content){
						$content = $('<div/>');
						$content.html(this.df.content);
						$div.append($content);
					}
					
					var $ul = $('<ul/>');
					$ul.addClass('ul clear');
					$div.append($ul);
					
					this.$ul = $ul;
					this.$div = $div;
					
				},
				show:function(){
					$('body').append(this.$div);
				},
				insertion:function(){
					console.log(this.df.li);
					var $idx=0;
					for(var as in this.df.li){
						$idx++;
						console.log($idx);
						var $li = $('<li data-id=' + $idx + '/>');
						$li.html('<a>' + this.df.li[as] + '</a>');
						
						if($idx==1){							
							var $span = $('<span/>');
							$span.html(10);
							$li.children().append($span);							
						}
						this.$ul.append($li);
					}
				}
			}   //原型对象
			
			var pop = new Popover();
			pop.show();
			pop.insertion();
			
		}   //构造函数
	}  //return返回
});