//    nav上的a标签颜色变化
function textRed(classname) {
    $(classname).hover(
        function () {
            $(this).css('color','red')
        },
        function () {
            $(this).css('color','#777777')
        }
    )
}
//    a标签不变颜色的时候
function textNochange(classname) {
    $(classname).hover(
        function () {
            $(this).css()
        },
        function () {
            $(this).css()
        }
    )
}
//    定义鼠标移入移除的隐藏显示
function hoverShow(hoverName,showName) {
    $(hoverName).mouseenter(
        function () {
            $(showName).show()
        }
    );
    $(hoverName).mouseleave(
        function () {
            $(showName).hide()
        })
}
textNochange('.shopping-box a')
textRed('nav a');
textRed('#search');
textRed('#shopping');
hoverShow('.cart','.shopping-box')