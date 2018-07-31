
//封装自动滑动 hua(dian,bigbox)
//bigbox:大盒子，用于判断小圆点下标该如何取值、移动大盒子
//dian:所有小圆点，用于移动小圆点
//
//
////封装小圆点移入移出事件xiaoyundian(dian,niu,bigbox)
//dian:匹配所有小圆点
//niu:匹配所有按钮
//bigbox:大盒子


//大盒子移入移出事件封装bighover(niu,bigbox)
//bigbox:大盒子
//niu: 所有按钮

//按钮移入移出事件封装niuhover(niu,)
//niu:所有按钮



// 右边按钮封装btnr(r,bigbox)
// r:右边按钮
// bigbox:大盒子


//左边按钮函数封装btnl(l,bigbox)
//l:左边按钮
//bigbox:大盒子






//会买专辑
//自动播放
var huibool=true;
var innum=0;
var hmnum=0;
function huimai(){
	hui=setInterval(function(){
			//设置小圆点样式
			hmnum=innum;
			if(hmnum==($('.huimai .bighuimai').children().length)-1){
				hmnum=0;
			}
			$('.huimai>ol>li').eq(hmnum).css({background:'#EB3436'}).siblings().css({background:''});
			//找到大盒子  移动小盒子的宽度乘以xiabiao
			$('.huimai .bighuimai').animate({left:innum * (-392)+ 'px'},function(){
				innum++;
				//若等于展示元素的长度,回到原点
				if(innum==$('.huimai .bighuimai').children().length){
					innum=0;
					$('.huimai .bighuimai').css({left:'0px'});
				}
			});

		},1500);
}
huimai();

//封装自动滑动 hua(dian,bigbox)
//bigbox:大盒子，用于判断小圆点下标该如何取值、移动大盒子
//dian:所有小圆点，用于移动小圆点
// function hua(dian,bigbox){
// 	hui=setInterval(function(){
// 			//设置小圆点样式
// 			hmnum=innum;
// 			if(hmnum==($(bigbox).children().length)-1){
// 				hmnum=0;
// 			}
// 			$(dian).eq(hmnum).css({background:'#EB3436'}).siblings().css({background:''});
// 			//找到大盒子  移动小盒子的宽度乘以xiabiao
// 			$(bigbox).animate({left:innum * (-392)+ 'px'},function(){
// 				innum++;
// 				//若等于展示元素的长度
// 				if(innum==$(bigbox).children().length){
// 					innum=0;
// 					$(bigbox).css({left:'0px'});
// 				}
// 			});

// 		},1500);
// }


//小圆点移入移出事件
$('.huimai>ol>li').hover(
	function(){
		// 停止定时器
		clearInterval(hui);
		//显示所有按钮
		$('.huimai button').css('display','block');
		//圆点样式
		$(this).css({background:'#EB3436'}).siblings().css({background:''});
		innum=$(this).index();
		//将展示元素移动该xia标
		$('.huimai .bighuimai').css({left:innum * (-392)+ 'px'})
	},
	function(){
		//开始轮播
		huimai();
		//隐藏所有按钮
		$('.huimai button').css('display','none');
	}
);
 

//封装小圆点移入移出事件xiaoyundian(dian,niu,bigbox)
//dian:匹配所有小圆点
//niu:匹配所有按钮
//bigbox:大盒子
// function xiaoyundian(dian,niu,bigbox){

// 	$(dian).hover(
// 		function(){
// 			// 停止定时器
// 			clearInterval(hui);
// 			//显示所有按钮
// 			$(niu).css('display','block');
// 			//圆点样式
// 			$(this).css({background:'#EB3436'}).siblings().css({background:''});
// 			//获取小圆点的下标
// 			innum=$(this).index();
// 			//将展示元素移动到该下标
// 			$(bigbox).css({left:innum * (-392)+ 'px'})
// 		},
// 		function(){
// 			//开始轮播
// 			huimai();
// 			//隐藏所有按钮
// 			$(niu).css('display','none');
// 		}
// 	);
// }

//大盒子移入移出事件
$('.huimai .bighuimai').hover(
	function(){
		//停止定时器
		clearInterval(hui);
		//显示所有按钮
		$('.huimai button').css('display','block');
	},
	function(){
		//自动轮播
		huimai();
		//隐藏所有按钮
		$('.huimai button').css('display','none');
	}
);

//大盒子移入移出事件封装bighover(niu,bigbox)
//bigbox:大盒子
//niu: 所有按钮
// function bighover(niu,bigbox){
// 	$(bigbox).hover(
// 		function(){
// 			//停止定时器
// 			clearInterval(hui);
// 			//显示所有按钮
// 			$(niu).css('display','block');
// 		},
// 		function(){
// 			//自动轮播
// 			huimai();
// 			//隐藏所有按钮
// 			$(niu).css('display','none');
// 		}
// 	);
// }



//按钮移入移出事件
$('.huimai button').hover(
	function(){
		console.log('he');
		//停止定时器
		clearInterval(hui);
		//显示所有按钮
		$('.huimai button').css('display','block');
	},
	function(){
		//自动轮播
		huimai();
		//隐藏所有按钮
		$('.huimai button').css('display','none');
	}
);
//按钮移入移出事件封装niuhover(niu,)
//niu:所有按钮
// function niuhover(niu,){
// 	$(niu).hover(
// 		function(){
// 			console.log('he');
// 			//停止定时器
// 			clearInterval(hui);
// 			//显示所有按钮
// 			$(niu).css('display','block');
// 		},
// 		function(){
// 			//自动轮播
// 			huimai();
// 			//隐藏所有按钮
// 			$(niu).css('display','none');
// 		}
// 	);
// }



//会买左边按钮点击
$('.huimai .btnl').click(function(){
	if(huibool==false){
		return false;
	}
	huibool=false;

	if(innum==0){
		innum++;
	}
	innum--;
	//大盒子往左移动
	$('.huimai .bighuimai').animate({left:innum * (-392)+ 'px'},function(){
		huibool=true;
		if(innum==0){
			// 若innum为0，则取值为大盒子里元素的长度-1,即最后一个
			innum=($('.huimai .bighuimai').children().length)-1;
			$('.huimai .bighuimai').css({left:innum * (-392)+ 'px'});
		}
	});

});
//左边按钮函数封装btnl(l,bigbox)
//l:左边按钮
//bigbox:大盒子
// function btnl(l,bigbox){
// 	$(l).click(function(){
// 		if(innum==0){
// 			innum++;
// 		}
// 		innum--;
// 		//大盒子往左移动
// 		$(bigbox).animate({left:innum * (-392)+ 'px'},function(){
// 			if(innum==0){
// 				// 若innum为0，则取值为大盒子里元素的长度-1,即最后一个
// 				innum=($(bigbox).children().length)-1;
// 				$(bigbox).css({left:innum * (-392)+ 'px'});
// 			}
// 		});

// 	})
// }


//右边按钮
$('.huimai .btnr').click(function(){
	if(huibool==false){
		return false;
	}
	huibool=false;
	if(innum==($('.huimai .bighuimai').children().length)-1){
		innum--;
	}
	innum++;
	//大盒子往右移动
	$('.huimai .bighuimai').animate({left:innum * (-392)+ 'px'},function(){
		huibool=true;
		if(innum==($('.huimai .bighuimai').children().length)-1){
			// 若innum为最后一个，则取值0
			innum=0;
			$('.huimai .bighuimai').css({left:innum * (-392)+ 'px'});
		}
	});
});

// 右边按钮封装btnr(r,bigbox)
// r:右边按钮
// bigbox:大盒子
// function btnr(r,bigbox){
// 	$(r).click(function(){
// 		if(innum==($(bigbox).children().length)-1){
// 			innum--;
// 		}
// 		innum++;
// 		//大盒子往右移动
// 		$(bigbox).animate({left:innum * (-392)+ 'px'},function(){
// 			if(innum==($(bigbox).children().length)-1){
// 				// 若innum为最后一个，则取值0
// 				innum=0;
// 				$(bigbox).css({left:innum * (-392)+ 'px'});
// 			}
// 		});
// 	});
// }