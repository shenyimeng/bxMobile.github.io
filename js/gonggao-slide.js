/*公告栏滚动 notice*/
function autoScroll(obj,h){
    $(obj).find("ul").animate({
        marginTop : "-"+h+"px"
    },500,function(){
        $(this).css({marginTop : "0px"}).find("li:first").appendTo(this);
    })
}
$(function() {
    /*notice*/
    setInterval('autoScroll(".ptgg-list",33.6)', 3000);
});