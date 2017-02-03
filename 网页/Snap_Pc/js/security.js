var clearId;

$(function () {
    /*iscroll*/
    var Nsc= new MxScrollBar("mxSCBcontent");
    Nsc.init({
        Anim: false,
        Rang: 50
    });

    /*show menu*/
    $('.choose ul li a').next('ol').hide();

    $('.choose>ul>li').on('click',function () {
        $(this).find('a').next('ol').toggle().parent('li').siblings().find('ol').hide();
    });

    /*er ji */
    $('.choose ul li ol li').on('click', function () {
        $(this).parents('ol').hide();
    });


    var param = {currentPageNo:0,pageSize:20,pageTime:""};
    $('.loadMore').on('click',function(){
        var url="../../js/security.json";
        $.ajax({
            url:url,
            type:"POST",
            dataType:"json",
            contentType:"application/json",
            data:JSON.stringify(param),
            success:function(data){
                if(data.messageCode == 200){
                    $.each(data.alarmList,function(i,obj){

                        var $group = $('#group_'+obj.date);
                        if($group.length==0){
                            $group = $('<div id="group_'+obj.date+'" class="pic close">');
                            $group.append($('<h2><i class="jia jian"></i><span></span><em>'+obj.date+'</em></h2>'));
                            $group.append($('<div class="list"><ul><li class="cls cls1"></li></ul></div></div>'));
                            $('.main').append($group);
                            //click time line
                            $group.find('h2').on('click',function (e) {
                                $(this).parents('.pic').toggleClass("close");
                                var x=$(this).parent('.pic').find('.cls dl').length;
                                if(x>5){
                                    $(this).find('i').toggleClass("jian");
                                }
                            }).click();
                        }
                        $.each(obj.list,function(j,device){
                            param.pageTime=device.startTime;
                            var str='\''+device.name+'\',\''+device.bigImage+'\',\''+device.smallImage+'\',\''+device.startTime+'\'';
                           /*var str=JSON.stringify(device);
                            console.log(str)*/
                            dl='<dl onclick="openPicture('+str+')">'
                                +'<dt style="background: url('+device.smallImage+')"><span>Motion</span></dt>'
                                +'<dd>'
                                +'<p>'+device.name+'</p>'
                                +'<p>'+device.startTime+'</p>'
                                +'</dd>'
                                +'</dl>';
                            $('#group_'+obj.date+' .cls').append($(dl));
                        });
                        $group.find('.list').height($group.find('ul').height());
                    });
                }

            },

            error:function(){
                console.log('Please check the network!');
            }

        });
    }).click();


    /*by all or time or service show*/
    $('.choose ul li:nth-child(1)').on('click',function(){
        var i=0;
        $('.content>div').eq(i).show().siblings().hide();
    });

    $('.choose ul li ol li ul').on('click','li',function(event){
        $('.choose ul strong').html($(this).html());
        $('.content_1').show().siblings().hide();
        event.stopPropagation();
    });

    $('.choose ul li ol').on('click','li',function(event){
        $('.choose ul strong').html($(this).html());
        $('.content_2').show().siblings().hide();
        event.stopPropagation();
    });



    //dialog close
    $('.pic_mark').on('click', function () {
        $('.pic_mark').css('display','none');
        $('.pic_dialog').css('display','none');
        $("body").css('overflow-y','auto');
        clearInterval(clearId);
    });

    //Return to the top
    $(window).on('scroll',function(){
        var st=$(window).scrollTop(),
            wh=$(window).height();
        if(st>wh/2) {
            $('.up').slideDown();
        }else {
            $('.up').slideUp();
        }

    });
    $('.up').on('click',function(){
        $('html,body').animate({'scrollTop':0},200);
    });

});


function openPicture(str){

    $('.pic_mark').css('display','block');
    $('.pic_dialog').css('display','block');
    $("body").css('overflow-y','hidden');

    var arr=[];
    for(var i in arguments) {
        str=arguments[i]+',';
        arr+=str;
    }
    var pic_arr=arr.split(',');
    //console.log(pic_arr);
    picture(pic_arr);

}

function picture(pic_arr){
    var flashvars = {};
    var params = {
        menu: "false",
        scale: "noScale",
        allowFullscreen: "true",
        allowScriptAccess: "always",
        bgcolor: "#000",
        wmode: "transparent"
    };
    var attributes = {
        id:"snap_pictuer"
    };
    swfobject.embedSWF(
        "../../video/Img.swf",
        "altContent", "800", "450", "10.0.0",
        "expressInstall.swf",
        flashvars, params, attributes);

    var url=pic_arr;
    clearId=setInterval(function(){
        snap_pictuer.callAsFunction(url);
    },1000);

}


function sendHtml(str){
    if(str=="true"){
        //console.log(str);
        clearInterval(clearId);
    }
}









/*
$(function () {
    /!*iscroll*!/
    var Nsc= new MxScrollBar("mxSCBcontent");
    Nsc.init({
        Anim: false,
        Rang: 50
    });

    /!*show menu*!/
    $('.choose ul li a').next('ol').hide();

    $('.choose>ul>li').on('click',function () {
        $(this).find('a').next('ol').toggle().parent('li').siblings().find('ol').hide();
    });

    /!*er ji *!/
    $('.choose ul li ol li').on('click', function () {
        $(this).parents('ol').hide();
    });


    $('.loadMore').on('click',function(){
        var url="../../js/security_add.json";
        load(url);
    });


    /!*by all or time or service show*!/
    $('.choose ul li:nth-child(1)').on('click',function(){
        var i=0;
        $('.content>div').eq(i).show().siblings().hide();
    });

    $('.choose ul li ol li ul').on('click','li',function(event){
        $('.choose ul strong').html($(this).html());
        $('.content_1').show().siblings().hide();
        event.stopPropagation();
    });

    $('.choose ul li ol').on('click','li',function(event){
        $('.choose ul strong').html($(this).html());
        $('.content_2').show().siblings().hide();
        event.stopPropagation();
    });

    /!*dialog*!/
    $('.pic_mark').on('click', function () {
        $('.pic_mark').css('display','none');
        $('.pic_dialog').css('display','none');
        $("body").css('overflow-y','auto');
    });

    //Return to the top
    $(window).on('scroll',function(){
        var st=$(window).scrollTop(),
            wh=$(window).height();
        if(st>wh/2) {
            $('.up').slideDown();
        }else {
            $('.up').slideUp();
        }

    });
    $('.up').on('click',function(){
        $('html,body').animate({'scrollTop':0},200);
    });


    load("../../js/security.json")

});


function openPicture(){
    $('.pic_mark').css('display','block');
    $('.pic_dialog').css('display','block');
    $("body").css('overflow-y','hidden');
}


function picture(){
    var flashvars = {};
    var params = {
        menu: "false",
        scale: "noScale",
        allowFullscreen: "true",
        allowScriptAccess: "always",
        bgcolor: "#000",
        wmode: "transparent"
    };
    var attributes = {
        id:"snap_picture"
    };
    swfobject.embedSWF(
        "../../video/Img.swf",
        "altContent", "800", "570", "10.0.0",
        "expressInstall.swf",
        flashvars, params, attributes);

    $('#altContent').ready(function(){
        setTimeout(function(){
            var url="{'big':url}";
            snap_picture.callAsFunction(url);
        },3000);
    });
}



function load(url){
        var param = {currentPageNo:0,pageSize:20,pageTime:""};
        $.ajax({
            url: url,
            type: "POST",
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify(param),
            success: function (data) {
                if (data.messageCode == 200) {
                    $.each(data.alarmList, function (i, obj) {
                        var $group = $('#group_' + obj.date);
                        if ($group.length == 0) {
                            $group = $('<div id="group_' + obj.date + '" class="pic close">');
                            $group.append($('<h2><i class="jia jian"></i><span></span><em>' + obj.date + '</em></h2>'));
                            $group.append($('<div class="list"><ul><li class="cls cls1"></li></ul></div></div>'));
                            $('.main').append($group);
                            //click time line
                            $group.find('h2').on('click', function (e) {
                                $(this).parents('.pic').toggleClass("close");
                                var x = $(this).parent('.pic').find('.cls dl').length;
                                if (x > 5) {
                                    $(this).find('i').toggleClass("jian");
                                }
                            }).click();

                        }
                        $.each(obj.list, function (j, device) {
                            param.pageTime = device.startTime;
                            dl = '<dl onclick="openPicture();">'
                                + '<dt style="background: url(' + device.smallImage + ')"><span>Motion</span></dt>'
                                + '<dd>'
                                + '<p>' + device.name + '</p>'
                                + '<p>' + device.startTime + '</p>'
                                + '</dd>'
                                + '</dl>';
                            $('#group_' + obj.date + ' .cls').append($(dl));
                        });

                        $group.find('.list').height($group.find('ul').height());

                        var len_group = $('.cls>dl').length;
                        var len_list = obj.list.length;
                        if (len_group >= len_list) {

                        }
                    });
                }
            },error: function () {
                console.log('Please check the network!');
            }
        });
}


*/

/*
$(function () {
    /!*iscroll*!/
    var Nsc= new MxScrollBar("mxSCBcontent");
    Nsc.init({
        Anim: false,
        Rang: 50
    });

    /!*show menu*!/
    $('.choose ul li a').next('ol').hide();

    $('.choose>ul>li').on('click',function () {
        $(this).find('a').next('ol').toggle().parent('li').siblings().find('ol').hide();
    });

    /!*er ji *!/
    $('.choose ul li ol li').on('click', function () {
        $(this).parents('ol').hide();
    });




    var url="../../js/security.json";
    $.ajax({
            url:url,
            type:"POST",
            dataType:"json",
            contentType:"application/json",
            success:function(data){
               // console.log(data);
               // var data_alarmList=JSON.stringify(data.alarmList[0]);
                var data_List=data.alarmList[0].list;
                var dl="";
                $.each(data_List,function(i, item){
                    var list=data_List[i];
                    dl+='<dl onclick="openPicture();" >'
                        +'<dt style="background: url('+list.smallImage+')"><span>Motion</span></dt>'
                        +'<dd>'
                        +'<p>'+list.name+'</p>'
                        +'<p>'+list.startTime+'</p>'
                        +'</dd>'
                        +'</dl>';
                });

                $('.main').append('<div class="pic">'
                    +'<h2 onclick="click_line()"><i></i><span></span><em>'+data.alarmList[0].date+'</em></h2>'
                    +'<div class="list">'
                    +'<ul>'
                    +'<li class="cls cls1">'
                    +dl
                    +'</li>'
                    +'</ul>'
                    +'</div>'
                    +'</div>');
                $(".main .pic .list").each(function (e, target) {
                    var $target=  $(target),
                        $ul = $target.find("ul");
                    $target.height($ul.outerHeight());
                    $ul.css("position", "absolute");
                });


                $('.pic').addClass("close");
                var len=$('.main div div').length;
                for(var i=1;i<=len;i++){
                    //var x=$(".cls"+i+" dl").length;
                    var x=$(".cls dl").length;
                    if(x>5){
                        //$(".main div:nth-child("+i+")").find('i').addClass("jia");
                        $(".main h2 i").addClass("jia");
                    }
                    if(x<=5){
                       // $(".main div:nth-child("+i+")").find('i').addClass("jian");
                        $(".main h2 i").addClass("jian");
                    }
                }



                //click time line
                $(".pic h2").on('click',function (e) {
                    e.preventDefault();
                    $(this).parents('.pic').toggleClass("close");
                    var x=$(this).parent('.pic').find('.cls dl').length;

                    if(x>5){
                        $(this).find('i').toggleClass("jian");
                    }
                });
            },

            error:function(){
                console.log('Please check the network!');
            }

    });


    $('.loadMore').on('click',function(){
        $.ajax({
            url:url,
            type:"POST",
            dataType:"json",
            contentType:"application/json",
            success:function(data){
                var data_List=data.alarmList[0].list;
                var dl="";
                $.each(data_List,function(i, item){
                    var list=data_List[i];
                    dl+='<dl onclick="openPicture()">'
                        +'<dt style="background: url('+list.smallImage+')"><span>Motion</span></dt>'
                        +'<dd>'
                        +'<p>'+list.name+'</p>'
                        +'<p>'+list.startTime+'</p>'
                        +'</dd>'
                        +'</dl>';
                });

                $('.main').append('<div class="pic">'
                    +'<h2 onclick="click_line()"><i></i><span></span><em>'+data.alarmList[0].date+'</em></h2>'
                    +'<div class="list">'
                    +'<ul>'
                    +'<li class="cls">'
                    +dl
                    +'</li>'
                    +'</ul>'
                    +'</div>'
                    +'</div>');

                $(".main .pic .list").each(function (e, target) {
                    var $target=  $(target),
                        $ul = $target.find("ul");
                    $target.height($ul.outerHeight());
                    $ul.css("position", "absolute");
                });

                $('.pic').addClass("close");
                var len=$('.main div div').length;
                for(var i=1;i<=len;i++){
                    var x=$(".cls dl").length;
                    if(x>5){
                        $(".main h2 i").addClass("jia");
                    }
                    if(x<=5){
                        $(".main h2 i").addClass("jian");
                    }
                }



                //click time line
                $(".pic h2").on('click',function (e) {
                    e.preventDefault();
                    $(this).parents('.pic').toggleClass("close");
                    var x=$(this).parent('.pic').find('.cls dl').length;
                    if(x>5){
                        $(this).find('i').toggleClass("jian");
                    }
                });
            },
            error:function(){
                console.log('Please check the network!');
            }

        })


    });


    /!*by all or time or service show*!/
    $('.choose ul li:nth-child(1)').on('click',function(){
        var i=0;
        $('.content>div').eq(i).show().siblings().hide();
    });

    $('.choose ul li ol li ul').on('click','li',function(event){
        $('.choose ul strong').html($(this).html());
        $('.content_1').show().siblings().hide();
        event.stopPropagation();
    });

    $('.choose ul li ol').on('click','li',function(event){
        $('.choose ul strong').html($(this).html());
        $('.content_2').show().siblings().hide();
       event.stopPropagation();
    });



    /!*dialog*!/
    $('.cls dl').on('click', function () {
        $('.pic_mark').css('display','block');
        $('.pic_dialog').css('display','block');
        $("body").css('overflow-y','hidden');
    });
    $('.pic_mark').on('click', function () {
        $('.pic_mark').css('display','none');
        $('.pic_dialog').css('display','none');
        $("body").css('overflow-y','auto');
    });


    //·µ»Ø¶¥²¿
    $(window).on('scroll',function(){
        var st=$(window).scrollTop(),
            wh=$(window).height();
        if(st>wh/2) {
            $('.up').slideDown();
        }else {
            $('.up').slideUp();
        }

    });
    $('.up').on('click',function(){
        $('html,body').animate({'scrollTop':0},200);
    });

});

function openPicture(){
    $('.pic_mark').css('display','block');
    $('.pic_dialog').css('display','block');
    $("body").css('overflow-y','hidden');
}
function closePicture(){
    $('.pic_mark').css('display','none');
    $('.pic_dialog').css('display','none');
    $("body").css('overflow-y','auto');
}

function click_line(e){
    e.preventDefault();
    $(this).parents('.pic').toggleClass("close");
    var x=$(this).parent('.pic').find('.cls dl').length;
    if(x>5){
        $(this).find('i').toggleClass("jian");
    }
}*/
