$(function(){


    $('.dis_box ul li dl').on('mouseover', function () {
        $(this).find('dt em').css('background-color','rgba(51, 51, 51, 0.32)');
    });
    $('.dis_box ul li dl').on('mouseleave', function () {
        $(this).find('dt em').css('background-color','rgba(51, 51, 51, 0.66)');
    });

    /*dialog*/
    $('.dis_box ul li').on('click', function () {
        $('.dis_mark').css('display','block');
        $('.dis_dialog').css('display','block');
        $('body').css('overflow-y','hidden');
        var $url=$(this).attr('data');
        store($url);
    });
    $('.dis_mark').on('click', function () {
        $('.dis_mark').css('display','none');
        $('.dis_dialog').css('display','none');
        $('body').css('overflow-y','auto');
        $('.dis_dialog').empty();

    });

    function store(url){
        $('.dis_dialog').html("<div id='altContent'></div>");
        var flashvars = {
        };
        var params = {
            menu: "false",
            scale: "noScale",
            allowFullscreen: "true",
            allowScriptAccess: "always",
            bgcolor: "#000",
            quality:"high",
            wmode: "transparent"
        };
        var attributes = {
            id:"vod"
        };
        swfobject.embedSWF(
            "../../video/simLive.swf",
            "altContent", "780", "450", "10.0.0",
            "expressInstall.swf",
            flashvars, params, attributes);


        $('#altContent').ready(function () {
            setTimeout(function(){
                vod.callAsMain(url);
            },1000);
        })

    }
    

});