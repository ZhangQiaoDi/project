//定义主页模块
//定义模块的方法
define(['jquery','template'],function($,template){
    //$ 属于局部变量  所以  不会影响其他的jquery对象
    //一般情况下  模块会返回一个对象 获取构造函数
    return {
        init:function(){
        	
            $('.mainFooter').load('../html/mainFooter.html');
            
            this.bind();
            return this
        },
        bind:function(){
        	
        }
    }
})

