	
	//获取图片的宽
	var topImgW=$('.top a img').width();
	//获取图片的宽
	var topImgH=$('.top a img').height();
	//获取图片比例
	var top_WH=topImgW/topImgH;
	//获取可视窗口宽度
	var doc_width=document.documentElement.clientWidth;
	//让top宽度等于可视窗口宽度
	$('.top').width(doc_width);
	//让a宽度等于可视窗口宽度
	$('.top .top-gg a').width(doc_width);
	//获取a应取的高度
	var a_height=doc_width/top_WH;
	//设置a的高度
	$('.top .top-gg a').height(a_height);

	$(window).resize(function(){
		//获取图片的宽
		var topImgW=$('.top a img').width();
		//获取图片的宽
		var topImgH=$('.top a img').height();
		//获取图片比例
		var top_WH=topImgW/topImgH;
		//获取可视窗口宽度
		var doc_width=document.documentElement.clientWidth;
		//让top宽度等于可视窗口宽度
		$('.top').width(doc_width);
		//让a宽度等于可视窗口宽度
		$('.top .top-gg a').width(doc_width);
		//获取a应取的高度
		var a_height=doc_width/top_WH;
		//设置a的高度
		$('.top .top-gg a').height(a_height);
	});

	$('.top .top-gg i').click(function(){
		$('.top-gg').css('display','none');
	});


//   shorcut  的js特效
// 给北京出发移入移出事件
$('.top .shorcut #beijing').hover(
	function(){
		$(this).css('backgroundColor','#fff')
		$('.top .shorcut #beijing .address').show();
	},
	function(){
		$(this).css('backgroundColor','');
		$('.top .shorcut #beijing .address').hide(500);
	}
);
// 换地址
$('.top #beijing .address a').hover(
	function(){
		// console.log('he');
		$(this).addClass('huanse');
	},
	function(){
		$(this).removeClass('huanse')
	}
);
$('.top #beijing .address a').click(function(){
	$('.top #beijing .address a').removeClass('h-huanse');
	$(this).addClass('h-huanse');
});

// //服务下拉框
// //
$('.top .shorcut #fwxinxi').children('li').hover(
	function(){
		$(this).children('#fwbian').css({background:'#fff',borderLeft:'1px solid #ccc',borderRight:'1px solid #ccc'});
		$(this).children('#myjd').show();
	},
	function(){
		$(this).children('#fwbian').css({background:'',borderLeft:'1px solid #E3E4E5',borderRight:'1px solid #E3E4E5'});
		$(this).children('#myjd').hide();
	}
);
//手机京东二维码显示
$('.top #fwxinxi #mbbox').hover(
	function(){
		$(this).children('#ewms').show();
	},
	function(){
		$(this).children('#ewms').hide();
	}
);



//grid   
//二级菜单
$('.grid .grid-one>ul>li').hover(
	function(){
		$(this).children('dl').css('display','block');
	},
	function(){
		$(this).children('dl').css('display','none');
	}
);






//
//
//轮播图
//自动播放
var index=0;
function lunbo(){
	lun=setInterval(function(){
			//隐藏当前的图片
			$('.grid-two .bigbox img').eq(index).fadeOut();
			// console.log(index);
			//恢复所有小圆点原样式
			$('.grid-two ul li').eq(index).css({borderColor:'rgba(255,255,255,.4)',background:'',boxShadow:''});
			//显示下一张图片
			index++;
			if(index==$('.grid-two .bigbox img').length){
				index=0;
			}
			$('.grid-two .bigbox img').eq(index).stop(true,true).fadeIn();
			//显示对应小圆点
			$('.grid-two ul li').eq(index).css({borderColor:'#fff',background:'#fff',boxShadow:'0 0 5px 2px #fff'});
		},1000);
};
lunbo();
//图片移入移出事件
$('.grid-two .bigbox img').hover(
	function(){
		clearInterval(lun);
		//显示按钮
		$('.grid-two button').show();
	},
	function(){
		lunbo();
		//隐藏按钮
		$('.grid-two button').hide();
	}
);
//按钮移入移出事件
$('.grid-two button').hover(
	function(){
		clearInterval(lun);
		//显示按钮
		$('.grid-two button').show();
	},
	function(){
		lunbo();
		//隐藏按钮
		$('.grid-two button').hide();
	}
);
//按钮点击事件
$('.grid-two #qian').click(function(){
	//隐藏当前图片
	$('.grid-two .bigbox img').eq(index).fadeOut();

	//显示前一张图片
	index--;
	if(index<0){
		index=$('.grid-two .bigbox img').length-1;
	}
	$('.grid-two .bigbox img').eq(index).stop(true,true).fadeIn();
});
$('.grid-two #hou').click(function(){
	//隐藏当前图片
	$('.grid-two .bigbox img').eq(index).hide();

	//显示前一张图片
	index++;
	if(index==$('.grid-two .bigbox img').length){
		index=0;
	}
	$('.grid-two .bigbox img').eq(index).stop(true,true).show();
});
//小圆点移入移出事件
$('.grid-two ul li').hover(
	function(){
		//清除之前小圆点的样式
		$('.grid-two ul li').eq(index).css({borderColor:'rgba(255,255,255,.4)',background:'',boxShadow:''});
		//隐藏当前页面
		$('.grid-two .bigbox img').eq(index).fadeOut();
		var i=$(this).index();
		index=i;
		$(this).css({borderColor:'#fff',background:'#fff',boxShadow:'0 0 5px 2px #fff'});
		//停止轮播
		clearInterval(lun);
		//显示下一张
		if(index==$('.grid-two .bigbox img').length){
			index=0;
		}
		$('.grid-two .bigbox img').eq(index).stop(true,true).fadeIn();

	},
	function(){
		lunbo();
	}
);



//   话费  飞机票 酒店  游戏的上升
$('.grid-four .shangsheng>li>span').click(function(){
	//去掉上边框
	$('.grid-four .service').css({border:'none'});
	//上升
	$('.grid-four .shangsheng').animate({top:'-37px'},500).siblings('ul').css('visibility','hidden');
	//设置下边框
	$('.grid-four .shangsheng>li').css({borderBottom:'2px solid #E01121'}).siblings().css({borderBottom:'none'});
	$('.grid-four .service .huafei').animate({top:'40px'},500);
	//显示按钮
	$('.grid-four .service .huafei>button').css('display','block');
});
//按钮点击关闭小窗口
$('.grid-four .service .huafei>button').click(function(){
	//关闭窗口
	$('.grid-four .service .huafei').css({top:'185px'});
	//隐藏按钮
	$('.grid-four .service .huafei>button').hide();
	//恢复上边框
	$('.grid-four .service').css({border:'1px solid #EBEAEA'});
	//恢复上升的ul
	$('.grid-four .shangsheng').css({top:''}).siblings('ul').css('visibility','visible');
	//取消li下边框
	$('.grid-four .shangsheng>li').css({borderBottom:'none'}).siblings().css({borderBottom:'none'});
});



//京东秒杀倒计时自调用函数
//////////////
(function(){
	function get(a){
		if(a<10){
			a='0'+a;
		}
		return a;
	}
	setInterval(function(){
		var a1=new Date();
		a1.setHours(21,0,0);
		var a1Time=a1.valueOf();	
		var a2=new Date()
		var a2Time=a2.valueOf();
		//获取时间差
		var cha=a1Time-a2Time;
		if(cha<0){cha=0};
		//剩余小时值
		var hour=Math.floor(cha/(1000*60*60));
		//获取剩余的毫秒
		cha=cha%(1000*60*60);

		//剩余分钟值
		var minute=Math.floor(cha/(1000*60));
		//获取剩余的毫秒
		cha=cha%(1000*60);

		//剩余秒值
		var second=Math.floor(cha/(1000));
		//输出
		$('.gg .sk_hd>p').eq(0).text(get(hour)).end().eq(1).text(get(minute)).end().eq(2).text(get(second));

	},1000);
})();
//京东秒杀切换的hover
$('.gg .qie .qiehuan img').hover(
	function(){
		$(this).stop(true,true).animate({opacity:'0.8'},200);	
	},
	function(){
		$(this).stop(true,true).animate({opacity:'1'},200);
	}
);

//京东秒杀切换
var ggIndex=0;
//点击xia一个
$('.gg .qie .next').click(function(){
	//退出当前qiehuan  ul
	$('.gg .qie .qiehuan').eq(ggIndex).hide();
	//下一个ul出来
	ggIndex++;	
	if(ggIndex>=$('.gg .qie .qiehuan').length){
		ggIndex=0;
	}
	$('.gg .qie .qiehuan').eq(ggIndex).show();
	
});
//点击上一个
$('.gg .qie .pre').click(function(){
	//退出当前qiehuan  ul
	$('.gg .qie .qiehuan').eq(ggIndex).hide();
	//上一个ul出来
	ggIndex--;
	if(ggIndex<0){
		ggIndex=$('.gg .qie .qiehuan').length-1
	}
	$('.gg .qie .qiehuan').eq(ggIndex).show();
	
});

//小轮xiaolun的自动播放
var xlIndex=0;
setInterval(function(){
	// 让当前的消失
	$('.gg .xiaolun a').eq(xlIndex).hide();
	//当前li换色
	$('.gg .xiaolun>ul>li').eq(xlIndex).css('background','#C0C0C0');
	xlIndex++;
	if(xlIndex>=$('.gg .xiaolun a').length){
		xlIndex=0;
	}
	//下一个li变色
	$('.gg .xiaolun>ul>li').eq(xlIndex).css('background','#E33333');
	$('.gg .xiaolun a').eq(xlIndex).show();
},1500);



//排行榜 paihang
//周期轮播  我已经废了
function pai(){
	var paiIndex=0;
	setInterval(function(){
		// 当前页面往左滑动
		$('.paihang .xiangq .bigul ul').eq(paiIndex).animate({left:'-392px'},300);
		//下一个页面往左滚
		paiIndex++;
		if(paiIndex==1){
			$('.paihang .xiangq .bigul ul').eq(paiIndex).animate({left:'-392px'},300);		
		}else if(paiIndex==2){
			$('.paihang .xiangq .bigul ul').eq(paiIndex).animate({left:'-784px'},500,function(){
				//恢复原样
				paiIndex=0;
				$('.paihang .xiangq .bigul ul').css({left:'0px'});
			});
		}

	},1000);
}
pai();
//领劵中心
$('.juans #yuan li').mouseenter(function(){
	$(this).css({backgroundColor:'#EB3436'}).siblings().css({background:''});
	var juanIndex=$(this).index();
	//移动大盒子
	$('.juan .bigjuans').animate({left:juanIndex*(-392)+'px'});
});



//生活啊  生活啊 
//寻觅自动滑动欧冠
var minum=0;
var minu=0;
var mibool=true;
$('.shenghuo .bigseek').animate({left:minum*(-392)+'px'},function(){
	//动画完后执行的函数
	minum++;
	//若等于展示元素个数
	if(minum==$('.shenghuo .bigseek .seeks').length){
		minum=0;
		//回到起始
		$('.shenghuo .bigseek').css({left:'0px'})
	}
});
function xunmi(){
	mi=setInterval(function(){
		//设置小圆点样式
		minu=minum;
		// 若等于展示元素的最后一个
		if(minu==$('.shenghuo .bigseek .seeks').length-1){
			minu=0;
		}
		//设置小圆点样式
		$('.smseek>ol>li').eq(minu).css({background:'#EB3436'}).siblings().css({background:''});
		//移动大盒子
		$('.shenghuo .bigseek').animate({left:minum*(-392)+'px'},function(){
			//动画完后执行的函数
			minum++;
			//若等于展示元素个数
			if(minum==$('.shenghuo .bigseek .seeks').length){
				minum=0;
				//回到起始
				$('.shenghuo .bigseek').css({left:'0px'})
			}
		});
	},1500);
}
xunmi();

//小圆点移入移出
$('.smseek>ol>li').hover(
	function(){
		//停止定时器
		clearInterval(mi);
		//显示按钮
		$('.shenghuo .smseek>span').css('display','block');
		//圆点样式
		$(this).css({background:'#EB3436'}).siblings().css({background:''});
		//移动大盒子
		minum=$(this).index();
		$('.shenghuo .bigseek').animate({left:minum*(-392)+'px'});
	},
	function(){
		//开始自动滑动
		xunmi();
		//显示按钮
		$('.shenghuo .smseek>span').css('display','none');
	}
);
//大盒子移入移出
$('.shenghuo .bigseek').hover(
	function(){
		//停止定时器
		clearInterval(mi);
		//显示按钮
		$('.shenghuo .smseek>span').css('display','block');
	},
	function(){
		//开始自动滑动
		xunmi();
		//显示按钮
		$('.shenghuo .smseek>span').css('display','none');
	}
);
//按钮的移入移出
$('.shenghuo .smseek>span').hover(
	function(){
		//停止定时器
		clearInterval(mi);
		//显示按钮
		$('.shenghuo .smseek>span').css({display:'block',background:'#999999'});
	},
	function(){
		//开始自动滑动
		xunmi();
		//显示按钮
		$('.shenghuo .smseek>span').css('display','none');
	}
);
//左击按钮
$('.shenghuo .smseek .mi-bl').click(function(){
	//加个hezi阴影
	// $(this).css({boxShadow:'0 0 4px 4px pink'});
	if(mibool==false){
		return false;
	}
	mibool=false;

	if(minum==0){
		minum++;
	}
	minum--;
	//移动大盒子
	$('.shenghuo .bigseek').animate({left:minum*(-392)+'px'},function(){
		mibool=true;
		if(minum==0){
			//取最后一个
			minum=($('.shenghuo .bigseek .seeks').length-1);
			$('.shenghuo .bigseek').css({left:minum*(-392)+'px'});
		}
	});//移动大盒子结束

});

//右击按钮
$('.shenghuo .smseek .mi-br').click(function(){
	//加个hezi阴影
	// $(this).css({boxShadow:'0 0 4px 4px pink'});
	if(mibool==false){
		return false;
	}
	mibool=false;

	if(minum==$('.shenghuo .bigseek .seeks').length-1){
		minum--;
	}
	minum++;
	//移动大盒子
	$('.shenghuo .bigseek').animate({left:minum*(-392)+'px'},function(){
		mibool=true;
		if(minum==$('.shenghuo .bigseek .seeks').length-1){
			//取第一个
			minum=0;
			$('.shenghuo .bigseek').css({left:minum*(-392)+'px'});
		}
	});//移动大盒子结束

});

//好货
$('.stuff .stu>a').hover(
	function(){
		$(this).find('img').animate({opacity:0.8});
	},
	function(){
		$(this).find('img').animate({opacity:1});
	}
);

//逛逛逛
$('.visit .tu .vi-sm a').hover(
	function(){
		$(this).find('img').animate({opacity:'0.8'},200);
	},
	function(){
		$(this).find('img').animate({opacity:1});
	}
);



// ////特色推荐
//自动滑动
var senum=0;
var senu=0;
var sebool=true;
// 设置小圆点样式
senu=senum;
if(senu==($('.tese .bigse').children().length)-1){
		senu=0;
	}
$('.tese .se-yuan .teb').eq(senu).css({background:'#EB3436'}).siblings().css({background:''});
// 移动大盒子
$('.tese .bigse').animate({left:senum*(-1200)+'px'},function(){
	senum++;
	//若等于展示元素的长度
	if(senum==$('.tese .bigse').children().length){
		senum=0;
		$('.tese .bigse').css({left:'0px'});
	}
});
function tese(){
	se=setInterval(function(){
		// 设置小圆点样式
		senu=senum;
		if(senu==($('.tese .bigse').children().length)-1){
				senu=0;
			}
		$('.tese .se-yuan .teb').eq(senu).css({background:'#EB3436'}).siblings().css({background:''});
		// 移动大盒子
		$('.tese .bigse').animate({left:senum*(-1200)+'px'},function(){
			senum++;
			//若等于展示元素的长度
			if(senum==$('.tese .bigse').children().length){
				senum=0;
				$('.tese .bigse').css({left:'0px'});
			}
		});
	},1000);
}
tese();
// tese 小圆点移入移出
$('.tese .se-yuan .teb').hover(
	function(){
		//停止
		clearInterval(se);
		//显示所有按钮
		$('.tese>button').css('display','block');
		//圆点样式
		$(this).css({background:'#EB3436'}).siblings().css({background:''});
		senum=$(this).index();
		//移动大盒子
		$('.tese .bigse').css({left:senum * (-1200)+ 'px'})
	},
	function(){
		tese();
		//隐藏所有按钮
		$('.tese>button').css('display','none');
	}
);

// tese 大盒子移入移出事件
$('.tese .bigse').hover(
	function(){
		//停止定时器
		clearInterval(se);
		//显示所有按钮
		$('.tese>button').css('display','block');
	},
	function(){
		//自动轮播
		tese();
		//隐藏所有按钮
		$('.tese>button').css('display','none');
	}
);

//特色 按钮移入移出
$('.tese>button').hover(
	function(){
		//停止定时器
		clearInterval(se);
		//显示所有按钮
		$('.tese>button').css('display','block');
	},
	function(){
		//自动轮播
		tese();
		//隐藏所有按钮
		$('.tese>button').css('display','none');
	}
);
// tese 左按钮点击
$('.tese .se-bl').click(function(){
	if(sebool==false){
		return false;
	}
	sebool=false;

	if(senum==0){
		senum++;
	}
	senum--;
	//大盒子往左移动
	$('.tese .bigse').animate({left:senum * (-1200)+ 'px'},function(){
		sebool=true;
		if(senum==0){
			// 若senum为0，则取值为大盒子里元素的长度-1,即最后一个
			senum=($('.tese .bigse').children().length)-1;
			$('.tese .bigse').css({left:senum * (-1200)+ 'px'});
		}
	});

});
// tese  右点击
$('.tese .se-br').click(function(){
	if(sebool==false){
		return false;
	}
	sebool=false;

	if(senum==($('.tese .bigse').children().length)-1){
		senum--;
	}
	senum++;
	//大盒子往左移动
	$('.tese .bigse').animate({left:senum * (-1200)+ 'px'},function(){
		sebool=true;
		if(senum==($('.tese .bigse').children().length)-1){
			// 若senum为0，则取值为大盒子里元素的长度-1,即最后一个
			senum=0;
			$('.tese .bigse').css({left:senum * (-1200)+ 'px'});
		}
	});

});