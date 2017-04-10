//定义主页模块
//定义模块的方法
define(['jquery','gdszoom','template','top','header','headerInfo','nav','footer'],function($,gdszoom,template,top,header,headerInfo,nav,footer){
    //$ 属于局部变量  所以  不会影响其他的jquery对象
    //一般情况下  模块会返回一个对象 获取构造函数
    return {
        init:function(){
			top.init();
        	header.init();
        	headerInfo.init();
        	nav.init();
        	$('.page--mainTop').load('../html/page-mainTop.html',function(){
        		var v30_fsg_list = document.querySelector('.v30_fsg_list');
        		var ul = document.createElement('ul');
    		    $.ajax({
					type:"get",
					url:"http://localhost/1612/project1612/src/php/goodlist.php?pageNo=1",
					success:function(data){
						//console.log(data);
						var res = JSON.parse(data);						
						res.map((item)=>{
							var li = document.createElement('li');
							li.setAttribute('data-guid',item.id);
							li.innerHTML = `
								<a href="http://localhost/1612/project1612/src/particulars/index.html?id=${item.id}">${item.imgurl}</a>
								<a href="javascritp:;">${item.name}</a>
								<a href="javascritp:;">${item.type}</a>
								<p>${item.price}</p>
							`;
							ul.appendChild(li);
						})
						v30_fsg_list.appendChild(ul);
						var $ul = $('.v30_fsg_list').find('ul');
        				var $li = $ul.children('li');
					},
					error:function(){
						console.log(arguments);
					},
					complete:function(){
						//console.log('请求完成');
					},
					async:true
				})

            	var $ul = $('.pages_des').find('ul');
	            var $li = $ul.children('li');
	            
	            $li.on('click','a',function(){
	            	$(this).addClass('page-active').closest('li').siblings().find('a').removeClass('page-active');
	            	var _pageThis = $(this).html();
	            	//console.log(_pageThis);
	            	$.ajax({
						type:"get",
						url:'http://localhost/1612/project1612/src/php/goodlist.php?pageNo='+_pageThis,
						success:function(data){
						//console.log(data);
						var res = JSON.parse(data);
						ul.innerHTML = '';
						res.map((item)=>{
							var li = document.createElement('li');
							li.setAttribute('data-guid',item.id);
							li.innerHTML = `
								<a href="http://localhost/1612/project1612/src/particulars/index.html?id=${item.id}">${item.imgurl}</a>
								<a href="javascritp:;">${item.name}</a>
								<a href="javascritp:;">${item.type}</a>
								<p>${item.price}</p>
							`;
							ul.appendChild(li);
						})
						v30_fsg_list.appendChild(ul);
						
						setTimeout(function(){
			        		var $ul = $('.v30_fsg_list').find('ul');
					        var $li2 = $ul.children('li');
					    	$li2.on('mouseenter',function(){
					        	$(this).addClass('liBorder');
					        }).on('mouseleave',function(){
					        	$(this).removeClass('liBorder');
					        })
			        	},500)
					},
//					error:function(){
//						console.log(arguments);
//					},
//					complete:function(){
//						console.log('请求完成');
//					},
					async:true
            	})
            })
        });
        
    	
	    	footer.init();
	        this.bind();
	        return this
        },
        bind:function(){
          	setTimeout(function(){
        		var $ul = $('.v30_fsg_list').find('ul');
		        var $li2 = $ul.children('li');
		    	$li2.on('mouseenter',function(){
		        	$(this).addClass('liBorder');
		        }).on('mouseleave',function(){
		        	$(this).removeClass('liBorder');
		        })
        	},500)
        }
    }
})

