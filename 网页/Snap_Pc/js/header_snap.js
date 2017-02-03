$(function () {
    /*window.onload=function(){

        var w_h=document.body.clientHeight;
        var h=document.body.offsetHeight ;
        console.log(w_h);
        if(h<700){
            $('body').css('overflow-y','auto');
        }

    };*/




    var navLi = $("#nav-div ul li"),
        navUl = $("#nav-div ul"),
        speed = 200;
    var nav=document.URL;
    if(nav.indexOf("snap.html")>-1){
        var $this=$('.header ul li:nth-child(1)');
        $this.addClass('on').siblings().removeClass('on');
    }

    if(nav.indexOf("security.html")>-1){
        var $this=$('.header ul li:nth-child(2)');
        $this.addClass('on').siblings().removeClass('on');
    }

    if(nav.indexOf("discover.html")>-1){
        var $this=$('.header ul li:nth-child(3)');
        $this.addClass('on').siblings().removeClass('on');
    }

    if(nav.indexOf("snapshot.html")>-1){
        var $this=$('.header ul li:nth-child(4)');
        $this.addClass('on').siblings().removeClass('on');
    }

    if(nav.indexOf("setting.html")>-1){
        var $this=$('.header ul li:nth-child(5)');
        $this.addClass('on').siblings().removeClass('on');
    }


    function OnClick(){
        n =  navUl.find("li.on").index();
        navUl.stop().animate({backgroundPosition:navLi.width()*n},speed);
    }

    OnClick();

    navLi.hover(function(){
        n = $(this).index();
        navUl.stop().animate({backgroundPosition:navLi.width()*n},speed);
    },function(){
        OnClick();
    });

    navLi.click(function(){
        $(this).addClass("on").siblings().removeClass("on")
    });

});