//定义主页模块
//定义模块的方法
define(['jquery','template','top','header','headerInfo','nav','cart','footer'],function($,template,top,header,headerInfo,nav,cart,footer){
    //$ 属于局部变量  所以  不会影响其他的jquery对象
    //一般情况下  模块会返回一个对象 获取构造函数
    return {
        init:function(){
			top.init();
        	header.init();
        	headerInfo.init();
        	nav.init();
        	$('.cart').load('../html/cart.html',function(){
//      		var $text = $('.text').val();
//      		var $number = $('.red_number').html();
//      		$('.jian').on('click',function(){
//      			if($text>1){
//      				$number=$text=parseInt($text)-1;
//      				console.log($text,$number);
//      			}else{
//      				$number=$text=1;
//      				console.log($text,$number);
//      			}      			
//      		})
//      		$('.jia').on('click',function(){       	
//      			$number=$text=parseInt($text) + 1;
//      			console.log($text,$number);
//      		})	
        		
        		function GetRequest() {
        			console.log('123');
                    var url = location.search;   
                    if (url.indexOf("?") != -1) {  
                        var str = url.substr(1);
                        var strArr = str.split('=');
                        var id = strArr[1]
                        console.log(id);
                    }
                    return id;
                };
				$.ajax({
					type:"get",
					url:"../php/goodslist.php",
					success:function(data){
						var oJson = JSON.parse(data);
						getJson(oJson);
					},
					async:true
				});

                function getJson(oJson){
                    var gid = GetRequest();
                    for(var i=0;i<oJson.length;i++){
                        if(oJson[i].id==gid){
                            var img = oJson[i].imgurl;
                            var type = oJson[i].type;
                            var price = oJson[i].price;
                            $('.cart_ul2 .li2').html(img);
                            $('.cart_ul2 .li3 span').html(type);
                            $('.cart_ul2 .li5').html(price);
                            $('.cart_ul2 .li8').html(price);
                            $('.cart_right strong').html(price);
                        }    
                    }
                };       		
        	})
	    	footer.init();
	        this.bind();
	        return this
        },
        bind:function(){
          	
        }
    }
})

