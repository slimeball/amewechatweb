/**
 * 
 * @authors Benu (slimeball@foxmail.com)
 * @date    2014-10-08 2:28:10 PM
 * @version AMEbox common JS
 */
$('.z_main .main01').swipeUp(function(){
		$(".main01").hide();
 		$(".main02").show();
})

$('.z_main .main02').swipeDown(function(){
	 	$(".main01").show();
	 	$(".main02").hide();
})
$('.z_main .main02').swipeUp(function(){
 		$(".main03").show();
 		$(".main02").hide();
})
$('.z_main .main03').swipeDown(function(){
	 	$(".main02").show();
	 	$(".main03").hide();
})

$('.z_main .main03').swipeUp(function(){
	 	$(".main04").show();
	 	$(".main03").hide();
})
$('.z_main .main04').swipeDown(function(){
	 	$(".main03").show();
	 	$(".main04").hide();
})

$('.z_main .main04').swipeUp(function(){
	 	$(".main05").show();
	 	$(".main04").hide();
})
$('.z_main .main05').swipeDown(function(){
	 	$(".main04").show();
	 	$(".main05").hide();
})

$('.z_main .main05').swipeUp(function(){
	 	$(".main06").show();
	 	$(".main05").hide();
})
$('.z_main .main06').swipeDown(function(){
	 	$(".main05").show();
	 	$(".main06").hide();
})

$('.z_main .main06').swipeUp(function(){
	 	$(".main07").show();
	 	$(".main06").hide();
})
$('.z_main .main07').swipeDown(function(){
	 	$(".main06").show();
	 	$(".main07").hide();
})

// marquee 滚动
var speed=50;
var colee2=document.getElementById("colee2");
var colee1=document.getElementById("colee1");
var colee=document.getElementById("colee");
colee2.innerHTML=colee1.innerHTML; //克隆colee1为colee2
function Marquee1(){
//当滚动至colee1与colee2交界时
if(colee2.offsetTop-colee.scrollTop<=0){
 colee.scrollTop-=colee1.offsetHeight; //colee跳到最顶端
 }else{
 colee.scrollTop++
}
}
var MyMar1=setInterval(Marquee1,speed)//设置定时器
//鼠标移上时清除定时器达到滚动停止的目的
colee.onmouseover=function() {clearInterval(MyMar1)}
//鼠标移开时重设定时器
colee.onmouseout=function(){MyMar1=setInterval(Marquee1,speed)}
// marquee 滚动