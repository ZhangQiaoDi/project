//定义主页模块
//定义模块的方法
define(['jquery','template'],function($,template){
    return {
        init:function(){
            $('body').append(this.banner.banner() );
            this.bind();
            return this
        },
        bind:function(){
               //写jquery代码        
        },
        banner:{
            banner:template.compile(`
                <div class="banner">                 
                    <ul>
                        <li class="big-Img1"><img src="../img/1.jpg" ></li>
                        <li class="big-Img2"><img src="../img/2.jpg" ></li>
                    </ul>   
                    <div class="b-one">1</div>
                    <div class="b-two">2</div>               
                </div>
            `)
        }
     }
})


	