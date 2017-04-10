//定义主页模块
//定义模块的方法
define(['jquery','gdszoom','template','top','header','headerInfo','nav','carousel','mainTop','mainZhong','mainFooter','footer'],function($,gdszoom,template,top,header,headerInfo,nav,carousel,mainTop,mainZhong,mainFooter,footer){
    //$ 属于局部变量  所以  不会影响其他的jquery对象
    //一般情况下  模块会返回一个对象 获取构造函数
    return {
        init:function(){
        	top.init();
        	header.init();
        	headerInfo.init();
        	nav.init();
        	carousel.init();
        	mainTop.init();
        	mainZhong.init();
        	mainFooter.init();
        	footer.init();
           
            this.bind();
            return this
        },
        bind:function(){
            
        }
    }
})

