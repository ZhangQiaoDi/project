define(['jquery','template'],function($,template){
    // return一个函数/对象

    function HeaderInfo(){
        //var self =this;
    }

    HeaderInfo.prototype.init=function(){
         //var self =this;
         $('body').append(this.template.HeaderInfo())
    };
    HeaderInfo.prototype.template={
        HeaderInfo:template.compile(
        	`	
        	<div class="wrap headerInfo">
	            <div class="logo">
	                <img src="../img/logo.jpg" class="lg"/>
	                <img src="../img/yijian.jpg" class="yijian"/>
	            </div>
	            <div class="search">
	                <form action="">
	                    <input type="text" name="search_name" placeholder="唇部彩妆" class="search_name">
	                    <input type="button" class="search_button" name="search_button" value="搜索" />
	                </form>
	                <div class="hotSearch">
	                    <a href="javascript:;">太阳镜</a>
	                    <a href="javascript:;">美妆</a>
	                    <a href="javascript:;">运动户外</a>
	                    <a href="javascript:;">箱包</a>
	                    <a href="javascript:;">配饰</a>
	                    <a href="javascript:;">腕表</a>                  
	                </div>
	            </div>
	            <div class="order">
	               <dl class="v30hm_cartbox">
		                <dt>
		                	<img src="../img/v30cart.png" width="22">
		                	购物袋（<span id="cart_number">0</span>）
		                </dt>
		                <dd class="shopping_bag_cont">
		                	<ul>
		                		<li>
		                			<p>购物袋暂时没有商品，<br>赶紧选择心爱的商品吧！</p>
		                		</li>
		                	</ul>
		                </dd>
		                <b></b>
		            </dl>
	            </div>
	        </div>
        	`
        )
    }
    return HeaderInfo

});