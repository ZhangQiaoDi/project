define(['jquery','template'],function($,template){
    // return一个函数/对象

    function Top(){
        //var self =this;
    }

    Top.prototype.init=function(){
         //var self =this;
         $('body').append(this.template.top())
    };
    Top.prototype.template={
        top:template.compile(
        	`
        		<div class="top">
					<img src="../img/top.jpg"/>
				</div>				
        	`
        )
    }
   
    return Top
	
});