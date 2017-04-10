//定义主页模块
//定义模块的方法
define(['jquery','gdszoom','template','top','header','headerInfo','nav','particulars','footer'],function($,gdszoom,template,top,header,headerInfo,nav,particulars,footer){
    //$ 属于局部变量  所以  不会影响其他的jquery对象
    //一般情况下  模块会返回一个对象 获取构造函数
    return {
        init:function(){
			top.init();
        	header.init();
        	headerInfo.init();
        	nav.init();
        	$('.particulars').load('../html/particulars.html',function(){ 
        		var $p_l = $('.particulars-left');
        		
        		var $smallPic = $('.smallPic');
        		var $img = $smallPic;
        		
	    		var $ul = $p_l.children('ul');
	    		var $li = $ul.children('li');

	    		$('ul').on('click','li a',function(){
	    			
	    			$(this).closest('li').siblings().removeClass('par_active');
	    			$(this).closest('li').addClass('par_active');
	    			
	    			$img.empty();
	    			$imgs = $(this).html();
	    			$('.smallPic').append($imgs);
	    			$('.smallPic').gdszoom({width:400,height:400}); 
	    		})
	    		
	    		
	    		
				function GetRequest() {
                    var url = location.search;   
                    if (url.indexOf("?") != -1) {  
                        var str = url.substr(1);
                        var strArr = str.split('=');
                        var id = strArr[1]
                        console.log(id);
                    }
                    return id;
                } 
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
                            var name = oJson[i].name;
    						var type = oJson[i].type;
    						var imgurl = oJson[i].imgurl;
    						var price = oJson[i].price;
    						var a1_img = oJson[i].img_x1;
    						var a2_img = oJson[i].img_x2;
    						var a3_img = oJson[i].img_x3;
                            $('.dior').html(name);
                            $('.type').html(type);
                            $('.smallPic').html(imgurl);
                            $('.prices').html(price);
                            $('.a0_img').html(imgurl);
                            $('.a1_img').html(a1_img);
                            $('.a2_img').html(a2_img);
                            $('.a3_img').html(a3_img);
                        }
                    }
                }
        	})
	    	footer.init();
	        this.bind();
	        return this
        },
        bind:function(){
    		setTimeout(function(){
        		$('.smallPic').gdszoom({width:200,height:200});        		
        	},500)     	
        }
    }
})

