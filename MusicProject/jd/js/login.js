/**
 * Created by Jack on 2018/6/28.
 */
$(function () {
    $(".de").hover(function () {
        $(".img-1").stop().animate({"left":"10"},300,function () {
            $(".img-2").show();
        });
    },function () {
        $(".img-2").hide();
        $(".img-1").stop().animate({"left":"90"},300);
    })
    // $(".login-tab-r a").hover(function () {
    //     $(this).css({"color":"red","text-decoration":"none"});
    // },function () {
    //     $(this).css("color","black");
    // })
    $(".xz .login-tab-r a").click(function () {
        $(".img-1").stop().animate({"left":"10"},900,function () {
            $(".img-2").show();
        })
        $(".login").show();
        $(".de").hide();
        $(".erw").hide();
        $(this).css("color","red");
        $(".login-tab-l a").css("color","black");
        $(".de+ul").hide();

    })
    $(".login-tab-l a").click(function () {
        $(".login").hide();
        $(".de").show();
        $(".erw").show();
        $(this).css("color","red");
        $(".login-tab-r a").css("color","black");
    })


    $("#usert").focus(function () {
        $(".user .usertu").addClass("userdeep");
    })
    $("#passwordp").focus(function () {
        $(".password .ptu").addClass("pwddeep");
    })
    $("#usert,#passwordp").keyup(function () {
        if(this.value.length>0){
        $(this).next().show();
        }
    })
    $(".deltext").click(function () {
        $(this).siblings("input").val("");
        $(this).hide();
    })
    $(".btn a").click(function () {
        var user=$("#usert").val();
        var pwd=$("#passwordp").val();
        var prompts=$(".login .prompt span");
        var yan=$(".identifying .ytext").val();
        var y=$(".login .prompt");
        y.show();
        if(user!=""&&pwd!=""){
            $(".identifying").show();
            $(".wj").css("top","320px");
            if(yan.length==0){
                prompts.html("请输入验证码");
                return false;
            }
            y.hide();
            alert(yan);
            return true;
        }
        if(user==""){
            prompts.html("请输入账户名");
            return false;
        }else if(pwd==""){
            prompts.html("请输入密码");
            return false;
        }else if(user==""&&pwd==""){
            prompts.html("请输入帐户名和密码");
            return false;
        }
        return true;
    })

})
