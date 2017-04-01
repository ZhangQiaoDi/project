//定义主页模块
//定义模块的方法
define(['jquery','template'],function($,template){
    //$ 属于局部变量  所以  不会影响其他的jquery对象
    //一般情况下  模块会返回一个对象 获取构造函数
    return {
        init:function(){
        	
            $('body').append(this.main.mainTop());
            
            this.bind();
            return this
        },
        bind:function(){
        	var $ul = $('.brandship_list');
        	var $li = $ul.children('li');          	
        	//鼠标经过显示跟鼠标经过隐藏
        	$ul.on('mouseenter','li',function(event){       		       		
    			$(this).find('.brand_hide').stop().animate({'top':'0'},500);    
    			
        	}).on('mouseleave','li',function(event){       		       		
    			$(this).find('.brand_hide').stop().animate({'top':'100px'},500);       		
        	})


			var $main = $('.main');			
			// 隐藏除第一个以外的.content
			$('.storesame').children('ul').children().not(':first').hide();
			
			// jQuery的事件委托
			// on方法的第二个参数，写上事件元对象的选择器
			$main.on('click','.storesame_link li',function(){
				$(this).addClass('st-active').siblings().removeClass('st-active');
				
				// 获取this所在同辈元素中的索引值
				var idx = $(this).index();
				
				$('.storesame').children('ul').children('li').eq(idx).show().siblings().hide();
			})
			
        	
        },
        main:{
            mainTop:template.compile(`
						<div class="main">
							<div class="wrap">
								<div class="brandship_title">
									<img src="../img/mainx_brandship.png" />
								</div>
								<ul class="brandship_list">
									<li>
										<a href="javascript:;" target="_blank">
											<img src="../img/brandship1.jpg" alt="Dior迪奥旗舰店" class="bgpic loadimg">
											<div class="brandship_tbox">
												<div class="brand_hide">
													<img src="../img/brand_hide1.png" class="loadimg brandlogopic" alt="Dior迪奥">
													<p class="splitline">
														<span class="blackbar"></span>
													</p>
													<p class="enbrand">Dior </p>
													<p class="chnbrand">迪奥</p>
												</div>
											</div>
										</a>
									</li>
									<li>
										<a href="javascript:;" target="_blank">
											<img src="../img/brandship2.jpg" alt="宝格丽" class="bgpic loadimg">
											<div class="brandship_tbox">
												<div class="brand_hide">
													<img src="../img/brand_hide2.png" class="loadimg brandlogopic" alt="Bvlgari宝格丽">
													<p class="splitline">
														<span class="blackbar"></span>
													</p>
													<p class="enbrand">Bvlgari </p>
													<p class="chnbrand">宝格丽</p>
												</div>
											</div>
										</a>
									</li>
									<li>
										<a href="javascript:;" target="_blank">
											<img src="../img/brandship3.jpg" alt="Rolex劳力士专营店" class="bgpic loadimg">
											<div class="brandship_tbox">
												<div class="brand_hide">
													<img src="../img/brand_hide3.jpg" class="loadimg brandlogopic" alt="Rolex劳力士">
													<p class="splitline">
														<span class="blackbar"></span>
													</p>
													<p class="enbrand">Rolex </p>
													<p class="chnbrand">劳力士</p>
												</div>
											</div>
										</a>
									</li>
									<li>
										<a href="javascript:;" target="_blank">
											<img src="../img/brandship4.jpg" alt="CK旗舰店" class="bgpic loadimg">
											<div class="brandship_tbox">
												<div class="brand_hide">
													<img src="../img/brand_hide4.png" class="loadimg brandlogopic" alt="Calvin Klein CK卡尔文.克莱恩">
													<p class="splitline">
														<span class="blackbar"></span>
													</p>
													<p class="enbrand">Calvin Klein</p>
													<p class="chnbrand">卡尔文.克莱恩</p>
												</div>
											</div>
										</a>
									</li>
									<li style="margin-right: 0;">
										<a href="javascript:;" target="_blank">
											<img src="../img/brandship5.jpg" alt="派克" class="bgpic loadimg">
											<div class="brandship_tbox">
												<div class="brand_hide">
													<img src="../img/brand_hide5.png" class="loadimg brandlogopic" alt="Parker派克">
													<p class="splitline">
														<span class="blackbar"></span>
													</p>
													<p class="enbrand">Parker </p>
													<p class="chnbrand">派克</p>
												</div>
											</div>
										</a>
									</li>
								</ul>
								<div class="hotstore_title">
								    <img src="../img/hotstore_t.jpg" alt="">
								    <div class="hotarrowbtn">
								        <a href="javascript:;"><span class="hot_pre"></span></a>
								        <a href="javascript:;"><span class="hot_next"></span></a>
								    </div>
								</div>
								<div class="hotflag">
									<ul class="hotflagbox">
										<li><a href="javascript:;"><img src="../img/brandchnname1.png"/></a></li>
										<li><a href="javascript:;"><img src="../img/brandchnname2.png"/></a></li>
										<li><a href="javascript:;"><img src="../img/brandchnname3.png"/></a></li>
										<li><a href="javascript:;"><img src="../img/brandchnname4.png"/></a></li>
										<li><a href="javascript:;"><img src="../img/brandchnname5.png"/></a></li>
										<li><a href="javascript:;"><img src="../img/brandchnname6.png"/></a></li>
										<li><a href="javascript:;"><img src="../img/brandchnname7.png"/></a></li>
										<li><a href="javascript:;"><img src="../img/brandchnname8.png"/></a></li>
										<li><a href="javascript:;"><img src="../img/brandchnname9.png"/></a></li>
										<li><a href="javascript:;"><img src="../img/brandchnname10.png"/></a></li>
										<li><a href="javascript:;"><img src="../img/brandchnname11.png"/></a></li>
										<li><a href="javascript:;"><img src="../img/brandchnname12.png"/></a></li>
										<li><a href="javascript:;"><img src="../img/brandchnname13.png"/></a></li>
										<li><a href="javascript:;"><img src="../img/brandchnname14.png"/></a></li>
									</ul>
								</div>
								<div class="storesame_title">
								    <img src="../img/storesametitle.jpg" alt="商场同款 HOT ASLE">
								</div>
								<ul class="storesame_link">
								    <li class="st-active">热卖品牌</li>
								    <li>新品推荐</li>
								    <li>明星同款</li>
								</ul>
								<div class="storesame">
									<ul>
										<li>
											<div class="storesameb_left">
								                <a href="javascript:;" target="_blank">
								                    <img src="../img/storesameb1-1.jpg" alt="Hermes爱马仕">
								                </a>
								            </div>
								            <div class="storesameb_right">
								                <div class="storesameb_top">
								                    <div class="storesame_top1">
								                        <div class="storesametoptxt">
								                            <p class="enbrand">FREDDY</p>
								                            <p></p>
				                                            <p>￥ 590</p>
				                                        </div>
								                        <div class="storesametoppic">
								                            <a href="javascript:;" target="_blank">
																<img src="../img/storesameb1-2.jpg" alt="【包邮 免关税】FREDDY 打底裤 女">
								                            </a>
								                        </div>
								                    </div>
								                    <div class="storesame_top2">
								                        <div class="storesametoptxt">
								                            <p class="enbrand">IPSA</p>
								                            <p>茵芙莎</p>
				                                            <p>￥ 490</p>
				                                        </div>
								                        <div class="storesametoppic storesametoppic2">
								                            <a href="javascript:;" target="_blank">
								                                <img src="../img/storesameb1-3.jpg" alt=" 流金岁月凝润美肤水200ml ">
								                            </a>
								                        </div>
								                    </div>
								                    <div class="storesame_top1">
								                        <div class="storesametoptxt">
								                            <p class="enbrand">KEEPSAKE®</p>
								                            <p></p>
					                                        <p>￥ 885</p>
					                                    </div>
								                        <div class="storesametoppic">
								                            <a href="javascript:;" target="_blank">
								                                <img src="../img/storesameb1-4.jpg" alt="【包邮 免关税】KEEPSAKE® 中长款连衣裙 女">
								                            </a>
								                        </div>
								                    </div>
								                </div>
								                <div class="storesameb_bottom">
								                    <div class="storesamebottom1">
								                        <div class="storesametoptxt">
								                            <p class="enbrand">JOLIE BY EDWARD SPIERS</p>
								                            <p></p>
								                            <p>￥ 1369</p>
								                        </div>
								                        <div class="storesametoppic">
								                            <a href="javascript:;" target="_blank">
								                                <img src="../img/storesameb1-5.jpg" alt="【包邮 免关税】JOLIE BY EDWARD SPIERS 高跟鞋 女" width="150">
								                            </a>
								                        </div>
								                    </div>
								                    <div class="storesamebottom1">
								                        <div class="storesametoptxt">
								                            <p class="enbrand">Omega </p>
								                            <p>欧米茄</p>
				                                            <p>￥ 242500</p>
				                                        </div>
								                        <div class="storesametoppic">
								                            <a href="javascript:;" target="_blank">
								                                <img src="../img/storesameb1-6.jpg" alt="全球限量发行海马系列白金双面防反光男士腕表 231.50.43.22.01.001（全球限量61只，此款是第41只）" width="150">
								                            </a>
								                        </div>
								                    </div>
								                    <div class="storesamebottom1">
								                        <div class="storesametoptxt">
								                            <p class="enbrand">Dienastie</p>
								                            <p>Dienastie旗舰店</p>
				                                            <p>￥ 499</p>
				                                        </div>
								                        <div class="storesametoppic">
								                            <a href="javascript:;" target="_blank">
								                                <img src="../img/storesameb1-7.jpg" alt="ENVY系列 透明灰色镜框紫红色镜片女士太阳镜 003/020210" width="150">
								                            </a>
								                        </div>
								                    </div>
								                </div>
								            </div>
										</li>
										<li>
											<div class="storesameb_left">
								                <a href="javascript:;" target="_blank">
								                    <img src="../img/storesameb2-1.jpg" alt="Hermes爱马仕">
								                </a>
								            </div>
								            <div class="storesameb_right">
								                <div class="storesameb_top">
								                    <div class="storesame_top1">
								                        <div class="storesametoptxt">
								                            <p class="enbrand">Swarovski</p>
								                            <p>施华洛世奇</p>
				                                            <p>￥ 1250</p>
				                                        </div>
								                        <div class="storesametoppic">
								                            <a href="javascript:;" target="_blank">
																<img src="../img/storesameb2-2.jpg" alt="【包邮 免关税】FREDDY 打底裤 女">
								                            </a>
								                        </div>
								                    </div>
								                    <div class="storesame_top2">
								                        <div class="storesametoptxt">
								                            <p class="enbrand">Michael Kors/MK</p>
								                            <p>迈克.柯尔</p>
				                                            <p>￥ 2199</p>
				                                        </div>
								                        <div class="storesametoppic storesametoppic2">
								                            <a href="javascript:;" target="_blank">
								                                <img src="../img/storesameb2-3.jpg" alt=" 流金岁月凝润美肤水200ml ">
								                            </a>
								                        </div>
								                    </div>
								                    <div class="storesame_top1">
								                        <div class="storesametoptxt">
								                            <p class="enbrand">Burberry</p>
								                            <p>巴宝莉</p>
					                                        <p>￥ 1700</p>
					                                    </div>
								                        <div class="storesametoppic">
								                            <a href="javascript:;" target="_blank">
								                                <img src="../img/storesameb2-4.jpg" alt="【包邮 免关税】KEEPSAKE® 中长款连衣裙 女">
								                            </a>
								                        </div>
								                    </div>
								                </div>
								                <div class="storesameb_bottom">
								                    <div class="storesamebottom1">
								                        <div class="storesametoptxt">
								                            <p class="enbrand">JOLIE BY EDWARD SPIERS</p>
								                            <p></p>
								                            <p>￥ 1135</p>
								                        </div>
								                        <div class="storesametoppic">
								                            <a href="javascript:;" target="_blank">
								                                <img src="../img/storesameb2-5.jpg" alt="【包邮 免关税】JOLIE BY EDWARD SPIERS 高跟鞋 女" width="150">
								                            </a>
								                        </div>
								                    </div>
								                    <div class="storesamebottom1">
								                        <div class="storesametoptxt">
								                            <p class="enbrand">D & G</p>
								                            <p>杜嘉班纳</p>
				                                            <p>￥ 1522</p>
				                                        </div>
								                        <div class="storesametoppic">
								                            <a href="javascript:;" target="_blank">
								                                <img src="../img/storesameb2-6.jpg" alt="全球限量发行海马系列白金双面防反光男士腕表 231.50.43.22.01.001（全球限量61只，此款是第41只）" width="150">
								                            </a>
								                        </div>
								                    </div>
								                    <div class="storesamebottom1">
								                        <div class="storesametoptxt">
								                            <p class="enbrand">Rebecca Minkoff</p>
								                            <p>瑞贝卡·明可弗</p>
				                                            <p>￥ 1341</p>
				                                        </div>
								                        <div class="storesametoppic">
								                            <a href="javascript:;" target="_blank">
								                                <img src="../img/storesameb2-7.jpg" alt="ENVY系列 透明灰色镜框紫红色镜片女士太阳镜 003/020210" width="150">
								                            </a>
								                        </div>
								                    </div>
								                </div>
								            </div>
										</li>
										<li>
											<!--<div class="darwin_3colum">
								                <div class="darwin_3colum_one imgCol1Hover">
								                    <a href="http://www.5lux.com/good/detail/1028877" target="_blank">
						                                <img src="http://img550.5lux.com.cn/2017/03/27/mn/149058622495_398x517.jpg" alt="Gucci">
						                            </a>
								                </div>
								            </div>-->
										</li>
									</ul>
								</div>
								
								
							</div>
						</div>
            `)
        }
    }
})

