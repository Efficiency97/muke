var nowing=0;
var shangdi=true;
//图片向右滑动
function bannerRight(speed) {
    if(nowing<4){
        nowing++
    }
    else{
        nowing=0
    }
    $('.banner-dots span').eq(nowing).addClass('active').siblings().removeClass('active')
    $('.slide').eq(nowing).fadeIn(speed).siblings().fadeOut(speed)
}
//    图片向左滑动
function bannerLeft(speed) {
    if(nowing>0){
        nowing--
    }
    else{
        nowing=4
    }
    $('.banner-dots span').eq(nowing).addClass('active').siblings().removeClass('active')
    $('.slide').eq(nowing).fadeIn(speed).siblings().fadeOut(speed)
}
//轮播图转动
var timer=setInterval(bannerRight,3000);
//    鼠标在main区域停止转动
$('.main').mouseenter(
    function () {
        clearInterval(timer)
    }
);
//    鼠标离开main区域开始转动
$('.main').mouseleave(
    function () {
        clearInterval(timer);
        timer=setInterval(bannerRight,3000);
    });
//按钮的点击事件
$(".banner-dots span").click(function () {
    var indexImg=$(this).index();
    var speed=50;
    if(indexImg<nowing){
        var count=Math.abs(nowing-indexImg);
        for(var i=1;i<=count;i++){
            $('.prev').trigger('click')
        }
    }else{
        var count=Math.abs(nowing-indexImg);
        for(var i=1;i<=count;i++){
            $('.next').trigger('click')
        }
    }
    nowing=indexImg;
    speed=1000;
});
//    右箭头的点击事件
$('.next').click(bannerRight);
//    左箭头的点击事件
$('.prev').click(bannerLeft);
//分类目录的弹出
function subMenu(num) {
    $(".item").eq(num).mouseenter(function () {
        $(".submenu").eq(num).css('display','block')
    })
    $(".item").eq(num).mouseleave(function () {
        $(".submenu").eq(num).css('display','none')
    })
}
subMenu(0);
subMenu(1);
subMenu(2);
subMenu(3);
subMenu(4);
subMenu(5);
subMenu(6);