define(['jquery','template'],function($,template){
    // return一个函数/对象

    function Header(){
        //var self =this;
    }

    Header.prototype.init=function(){
         //var self =this;
         $('body').append(this.template.header())
    };
    Header.prototype.template={
        header:template.compile(
        	`
    		<div class="header">
				<div class="wrap clear">
					<div class="header-left">
						<ul class="ul clear">
							<li><i class="fa fa-home"></i>
								<a href="javascript:;" class="li1">第五大道首页</a>
							</li>
							<li><i class="fa fa-phone phone"></i>
								<span class="li2">贵宾专线：4008-6767-38</span>
							</li>
						</ul>
					</div>
					<div class="header-right">
						<ul class="ul">
							<li>
								<a href="javascript:;">登录</a>
							</li>
							<li>
								<a href="javascript:;"><i class="fa fa-gift gift"></i>注册</a>
							</li>
							<li class="li3">
								<a href="javascript:;">我的第五大道<i class="fa fa-caret-down down"></i></a>
								<div class="my5lux">
									<ul>
										<li class="dingDan"><a href="javascript:;">我的订单</a></li>
										<li><a href="javascript:;">我的收藏</a></li>
										<li><a href="javascript:;">已购商品</a></li>
										<li><a href="javascript:;">我的礼券</a></li>
										<li><a href="javascript:;">我的积分</a></li>
									</ul>
								</div>
							</li>
							<li>
								<a href="javascript:;">帮助中心</a>
							</li>
							<li class="weima">
								<a href="javascript:;">手机版下载</a>
								<div class="download">
									<ul>
										<li><img src="../img/qr.jpg"/></li>
										<li>扫描下载APP</li>
										<li>立即<span>赠送50元</span></li>
									</ul>							
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>	
        	`
        )
    }
    return Header

});