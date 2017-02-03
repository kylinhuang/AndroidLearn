$(function(){
    /*iscroll*/
    var Nsc = new MxScrollBar("mxSCBcontent");
    Nsc.init({
        Anim: false,
        Rang: 100
    });
    var Nsc2 = new MxScrollBar("mxSCBcontent2");
    Nsc2.init({
        Anim: false,
        Rang: 100
    });



    /*tab*/
    $('.u_l_1,.u_l_2,.u_l_3').css('visibility','hidden');
    $('#nav-div ul li:nth-child(1) a').css('color','#D7342F');


    var navLi = $("#nav-div ul li"),
        navUl = $("#nav-div ul"),
        speed = 200;
    function OnClick(){
        n =  navUl.find("li.on").index();
        navUl.stop().animate({backgroundPosition:navLi.width()*n},speed);
    }
    OnClick();
    navLi.hover(
        function(){
            n = $(this).index();
            navUl.stop().animate({backgroundPosition:navLi.width()*n},speed);
           // $('.user_h_line').stop().animate({'left':index*180+238+'px'}).siblings().removeClass('user_h_line');
        },
        function(){
            OnClick();
        });

    navLi.click(function(){
        var index=$(this).index();
        $(this).addClass("on").siblings().removeClass("on");
        $('.user_list>div').eq(index).css('visibility','visible').siblings().css('visibility','hidden');
        $('.xiangqing').css('visibility','hidden');
        $(this).find('a').css('color','#D7342F').parent('li').siblings().find('a').css('color','#a1a1a1');
    });





    $('.user_header ul li:nth-child(3)').on('click',function(){
        $('#mxSCBcontent').css('visibility','visible');
    });
    $('.user_header ul li:not(:nth-child(3))').on('click',function(){
        $('#mxSCBcontent').css('visibility','hidden');
    });




    /*u_l_2*/
    $('.xiangqing').css('visibility','hidden');
    $('#mxSCBcontent').on('click','dl',function(){
        $('.xiangqing').css('visibility','visible');
        $('#mxSCBcontent').css('visibility','hidden');
    });

    $('#mxSCBcontent li div span').on('click',function(){
        $(this).toggleClass('c_this');
        $(this).nextAll('em').toggle()
    });

    $('.mx_container li div em').on('click', function () {
        $(this).parents('li').remove();
    });





    $('.user_list input').on('focus', function () {
        $(this).css('border','1px solid #d7342e');
    });

    $('.user_list input').on('blur', function () {
        $(this).css('border','1px solid #ccc');
    });

    $('.user_list textarea').on('focus', function () {
        $(this).css('border','1px solid #d7342e');
    });

    $('.user_list textarea').on('blur', function () {
        $(this).css('border','1px solid #ccc');
    });




    /*photo change dialog*/
        /*yun*/
    $('.user_name b').on('mouseover', function () {
        $(this).find('i').css('display','block');
    });
    $('.user_name b').on('mouseleave', function () {
        $(this).find('i').css('display','none');
    });

        /*dialog*/
    $('.user_name b').on('click', function () {
        $('.mark').css('display','block');
        $('.dialog').css('display','block');
    });

        /*close*/
    $('.mark').on('click', function () {
        $('.mark').css('display','none');
        $('.dialog').css('display','none');
    });



    $('.but button:nth-child(1)').on('click', function () {
        $('.mark').css('display','none');
        $('.dialog').css('display','none');
    });

    $('.but button:nth-child(2)').on('click', function () {
        data=2;
        if(data!=1){
            $(this).html('Save again');
            $('.but span').css('display','block');
        }else{

            $('.mark').css('display','none');
            $('.dialog').css('display','none');
        }
    });
    
    
    /*change picture*/
    $('.pre-1>img').css({'width':'100%','height':'100%','margin':0});
    $('.pre-2>img').css({'width':'100%','height':'100%','margin':0});
    $(function () {
        $("#upload-file").uploadPreview({ Img: "img", Width: 583, Height: 387 });
        $("#upload-file").uploadPreview({ Img: "img2", Width: 120, Height: 120 });
        $("#upload-file").uploadPreview({ Img: "img3", Width: 46, Height: 46 });
    });



});