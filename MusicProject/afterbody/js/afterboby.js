/**
 * Created by Clearlove on 2018/6/30.
 */
$(function () {
    $(".footer a").mouseover(function () {
        $(this).css("color","#31a74a");
    }).mouseout(function () {
        $(this).css("color","#999");
    })
})