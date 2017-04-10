//定义主页模块
//定义模块的方法
define(['jquery','template','register','login','footer'],function($,template,register,login,footer){
    //$ 属于局部变量  所以  不会影响其他的jquery对象
    //一般情况下  模块会返回一个对象 获取构造函数
    return {
        init:function(){
        	$('.login_header').load('../html/login.html',function(){
        		var seven = $('.login-right .seven');
        		$('.login_btn').on('click',function(){
                    var $_ph = $('.reg_input_user_bg text').val();
                    var $_pa = $('.reg_input_pw_bg password').val() ; 
                    // console.log($_ph,$_ps);
                    $.ajax({
                            method:'GET',
                            url:'../php/login.php',
                            data:{
                                "phone":$_ph,
                                "password":$_pa
                            },                           
                            callback:function(str){
                                console.log(str);
                            }
                    })
                    return false;
                })
        		 
        		$('.login_btn').on('click',function(){
        			var $phone = $('.login_con .text').val();
        			var $password = $('.login_con .password').val();
        			
        			$.ajax({
        				type:"get",
        				url:'http://localhost/1612/project1612/src/php/login.php?phone='+$phone+'&password='+$password,
                        success:function(data){
                            console.log(data);
                        },
        				async:true
        			});
        			if(seven.checked){
						var now = new Date();
						console.log($phone,$password);
						// 把时间延后7天
						now.setDate(now.getDate() + 7);
	
						document.cookie = 'phone=' + $phone +';expires=' + now;
						document.cookie = 'password=' + $password +';expires=' + now;
					}
                }) 
                var cookies = document.cookie.split('; ');
				if(cookies.length > 0){
					for(var i=0,len=cookies.length;i<len;i++){
						var arr = cookies[i].split('=');
						if(arr[0] === 'phone'){
							phone.value = arr[1];
						}else if(arr[0] === 'password'){
							password.value = arr[1];
						}
					}
				}
        		 
        	});
        	footer.init();
           
            this.bind();
            return this
        },
        bind:function(){
            
        }
    }
})

