//定义主页模块
//定义模块的方法
define(['jquery','template','register','footer'],function($,template,register,footer){
    //$ 属于局部变量  所以  不会影响其他的jquery对象
    //一般情况下  模块会返回一个对象 获取构造函数
    return {
        init:function(){
        	$('.register_header').load('../html/register.html',function(){
        		var b1,b2,b3;
        		//注册判断
        		//手机号码
        		$('#phone').on('keyup',function(){
                     var $_phone = $('#phone').val();
                     //获取input，判断手机号码是否符合要求
                    if(/^1[34578]\d{9}$/.test($_phone)){
                        $('#phone').next().css({display:'none'});
                         b1=true;
                    }else{
                        $('#phone').next().css({display:'block'});
                         b1=false;
                        return false ;
                    }
                })
        		
        		//密码
        		$('#psw1').on('keyup',function(){
                    //获取input，判断密码 是否符合要求
                    var $_psw1 = $('#psw1').val() ;
                    if(/^\S{8,20}$/.test($_psw1)){   
                        $('#psw1').next().css({display:'none'});
                        b2=true;
                    }else{
                        $('#psw1').next().css({display:'block'});
                        b2=false;
                        return false ;
                    }  

                     $('#psw2').on('keyup',function(){
                         //获取input，判断第二次密码是否相同
                        var $_psw2 = $('#psw2').val() ;
                        if($_psw1 == $_psw2){   
                            $('#psw2').next().css({display:'none'});
                        }else{
                            $('#psw2').next().css({display:'block'});
                            return false ;
                        }
                    })  
                })

        		
        		$('.yzm').on('keyup',function(){
                    var $_yzm = $('.yzm').val();
                    var $_yanZhengMa = $('.yanZhengMa').val();
                    if($_yzm==$_yanZhengMa){
                        $('.yanZhengMa').next().next().css({display:'none' });
                        b3=true;
                    }else{
                        $('.yanZhengMa').next().next().css({display:'block'});
                        b3=false;
                        return false ;
                    }
                }) 
                
                //随机验证码
                var $yanZhengMa = $('.yanZhengMa');
                var $exchange = $('.exchange');
                var str = '0123456789abcdefghijklmnopqrstuvwxyz';
                $yanZhengMa.on('click',function(){
                    randomCode();
                })
                $exchange.on('click',function(){
                    randomCode();
                })
                randomCode();

                function randomCode(){
                var _code = '';
                for(var i=0;i<4;i++){
                    var index = parseInt(Math.random()*str.length);
                    _code += str[index];
                    }
                    $yanZhengMa.val(_code.toUpperCase())
                }

                $('.form-res').on('click',function(){
	                if(b1&&b2&&b3){
						var $_phone = $('#phone').val();
	                    var $_psw1 = $('#psw1').val() ; 
	                    var $_psw2 = $('#psw2').val();
	                    $.ajax({
                            method:'GET',
                            url:'../php/res.php?phone='+$_phone+'&password1='+$_psw1+'&password2='+$_psw2,
                            success:function(str){
                                console.log(str);
                            }
	                    })
	                    alert('注册成功')
	                    location.href='http://localhost/1612/project1612/src/login/index.html';
	                }else{
	                	alert('注册失败,或者已注册');
	                }
                    
                    return false;
                }) 
                		
        	});
        	footer.init();
           
            this.bind();
            return this
        },
        bind:function(){
            
        }
    }
})

