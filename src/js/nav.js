//定义主页模块
//定义模块的方法
define(['jquery','template'],function($,template){
    //$ 属于局部变量  所以  不会影响其他的jquery对象
    //一般情况下  模块会返回一个对象 获取构造函数
    return {
        init:function(){
        	
            $('body').append(this.nav.nav());
            
            this.bind();
            return this
        },
        bind:function(){
            var $ul = $('.menu');
            var $li = $ul.children();
            $li.on('mouseenter',function(){	
				$(this).find('a').addClass('wi');
            }).on('mouseleave',function(){
            	$(this).find('a').removeClass('wi');
            })
            
            var $ul2 = $('.icon_Wrap');
            var $li2 = $ul2.children();
            $li2.on('mouseenter',function(){
            	$(this).css({'width':'140px'});
            }).on('mouseleave',function(){
            	$(this).css({'width':''})
            })
            
        },
        nav:{
            nav:template.compile(`
               <div class="nav">
					<div class="wrap">
						<ul class="menu clear">
							<li>
								<a href="javascript:;" class="fenLei">商品分类</a>
								<div class="leftmenu">
									<ul>
										<li>
											<div class="group hodh">
				                                <a href="javascript:;">
				                                	<span style="color:#c69c6d">推荐品牌</span>
				                                	<i></i>
				                                </a>
				                            </div>
										</li>
										<li>
											<div class="group xiangbao">
				                                <a href="javascript:;">
				                                	箱包
				                                	<i></i>
				                                </a>
				                            </div>
										</li>
										<li>
											<div class="group meizhuang">
				                                <a href="javascript:;">
				                                	美妆  
				                                	<i></i>
				                                </a>
				                            </div>
										</li>
										<li>
											<div class="group fuzhuang">
				                                <a href="javascript:;">
				                                	服装    
				                                	<i></i>
				                                </a>
				                            </div>
										</li>
										<li>
											<div class="group wanbiao">
				                                <a href="javascript:;">
				                                	腕表  
				                                	<i></i>
				                                </a>
				                            </div>
										</li>
										<li>
											<div class="group peishi">
				                                <a href="javascript:;">
				                                	配饰    
				                                	<i></i>
				                                </a>
				                            </div>
										</li>
										<li>
											<div class="group xiexue">
				                                <a href="javascript:;">
				                                	鞋靴   
				                                	<i></i>
				                                </a>
				                            </div>
										</li>
										<li>
											<div class="group muying">
				                                <a href="javascript:;">
				                                	母婴   
				                                	<i></i>
				                                </a>
				                            </div>
										</li>
										<li>
											<div class="group meijiu">
				                                <a href="javascript:;">
				                                	美酒     
				                                	<i></i>
				                                </a>
				                            </div>
										</li>
										<li>
											<div class="group meishi">
				                                <a href="javascript:;">
				                                	美酒     
				                                	<i></i>
				                                </a>
				                            </div>
										</li>
										<li>
											<div class="group jiaju">
				                                <a href="javascript:;">
				                                	家居   
				                                	<i></i>
				                                </a>
				                            </div>
										</li>
										<li>
											<div class="group dianzi">
				                                <a href="javascript:;">
				                                	电子
				                                	<i></i>
				                                </a>
				                            </div>
										</li>
										<li>
											<div class="group bangong">
				                                <a href="javascript:;">
				                                	办公  
				                                	<i></i>
				                                </a>
				                            </div>
										</li>
										<li>
											<div class="group bangong">
				                                <a href="javascript:;">
				                                	礼品    
				                                	<i></i>
				                                </a>
				                            </div>
										</li>
										<li>
											<div class="group lipin">
				                                <a href="javascript:;">
				                                	礼品    
				                                	<i></i>
				                                </a>
				                            </div>
										</li>
										<li>
											<div class="group haiwai">
				                                <a href="javascript:;">
				                                	海外馆
				                                	<i></i>
				                                </a>
				                            </div>
										</li>
									</ul>
								</div>
							</li>
							<li><a href="javascript:;">品牌</a></li>
							<li><a href="javascript:;">最新</a></li>
							<li><a href="javascript:;">女士</a></li>
							<li><a href="javascript:;">男士</a></li>
							<li><a href="javascript:;">生活馆</a></li>
							<li><a href="javascript:;">海外馆</a></li>
							<li><a href="javascript:;">时尚</a></li>
							<li><a href="javascript:;">特惠</a></li>
							<li><a href="javascript:;">礼品区</a></li>
							<li><a href="javascript:;"><i class="fa fa-map-marker marker"></i><span>到店</span></a></li>
						</ul>
						<ul class="icon_Wrap">
							<li>
								<div class="divlist01">
									<a href="javascript:;">
										<span></span>
										<b>品牌授权，官方验真</b>
									</a>
								</div>						
							</li>
							<li>
								<div class="divlist02">
									<a href="javascript:;">
										<span></span>
										<b>尊享品牌会员服务</b>
									</a>
								</div>						
							</li>
							<li>
								<div class="divlist03">
									<a href="javascript:;">
										<span></span>
										<b>商务部诚信示范企业</b>
									</a>
								</div>						
							</li>
						</ul>
					</div>
				</div>
            `)
        }
    }
})

