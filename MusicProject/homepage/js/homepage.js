/**
 * Created by Clearlove on 2018/6/30.
 */
$(function () {

   // 尾部a标签元素悬浮变色
   $(".footer a").hover(function () {
       $(this).css("color","#31a74a");
   },function () {
       $(this).css("color","#999");
   })
})