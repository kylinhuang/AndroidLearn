function sendToJavaScript(name) {
    console.log(name);
    data=name;

    if(data==0){//live
        $('.f_h').find('h2').html("The Livingroom Light");
        var $this=$('.view');
        $this.empty();
        jsReady=false;
        $this.append("<div id='altContent'>"+
            "<p>"+
            "<a href='http://www.adobe.com/go/getflashplayer'>Get Adobe Flash player</a>"+
            "</p>"+
            "</div>");
        playerlive();
    }
    if(data==1){//cvr
        $('.f_h').find('h2').html("The Bedroom Light");
        var $this=$('.view');
        $this.empty();
        $this.append("<div id='altContent'>"+
            "<p>"+
            "<a href='http://www.adobe.com/go/getflashplayer'>Get Adobe Flash player</a>"+
            "</p>"+
            "</div>");
        playercvr();
    }


    var userAgent = navigator.userAgent;
    var isSafari = userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") < 1;
    if (isSafari) {
        setTimeout(function(){
            $('.view>object').css({'margin-left': '-200%', 'top': '0'});
        },1000);
    }


}


function playerlive(){
    var flashvars = {};

    //≈–∂œsafari‰Ø¿¿∆˜
    var userAgent = navigator.userAgent;
    var isSafari = userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") < 1;
    if (isSafari){
        var params = {
            menu: "false",
            scale: "noScale",
            allowFullscreen: "true",
            allowScriptAccess: "always",
            bgcolor: "#e8e8e8",
            quality:"high",
            wmode: "direct"//safari
        };
    }else{
        var params = {
            menu: "false",
            scale: "noScale",
            allowFullscreen: "true",
            allowScriptAccess: "always",
            bgcolor: "#e8e8e8",
            quality:"high",
            wmode: "transparent"//other
        };
    }

    var attributes = {
        id:"vod"
    };
    swfobject.embedSWF(
        "../../video/live.swf",
        "altContent", "800", "505", "10.0.0",
        "expressInstall.swf",
        flashvars, params, attributes);
    $('.v_list').remove();
}

function playercvr(){
    var flashvars = {};

    //≈–∂œsafari‰Ø¿¿∆˜
    var userAgent = navigator.userAgent;
    var isSafari = userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") < 1;
    if (isSafari){
        var params = {
            menu: "false",
            scale: "noScale",
            allowFullscreen: "true",
            allowScriptAccess: "always",
            bgcolor: "#e8e8e8",
            quality:"high",
            wmode: "direct"//safari
        };
    }else{
        var params = {
            menu: "false",
            scale: "noScale",
            allowFullscreen: "true",
            allowScriptAccess: "always",
            bgcolor: "#e8e8e8",
            quality:"high",
            wmode: "transparent"//other
        };
    }

    var attributes = {
        id:"vod"
    };
    swfobject.embedSWF(
        "../../video/vod.swf",
        "altContent", "800", "571", "10.0.0",
        "expressInstall.swf",
        flashvars, params, attributes);


    $('.feature').append(
        '<div class="v_list">'
        +'<div id="mxSCBcontent" class="mxScrollbar">'
        +'<ul>'
        +'<li>'
        +'<dl>'
        +'<dt></dt>'
        +'<dd>Yesterday</dd>'
        +'</dl>'
        +'</li>'
        +'<li>'
        +'<dl>'
        +'<dt></dt>'
        +'<dd>Yesterday</dd>'
        +'</dl>'
        +'</li>'
        +'<li>'
        +'<dl>'
        +'<dt></dt>'
        +'<dd>Yesterday</dd>'
        +'</dl>'
        +'</li>'
        +'<li>'
        +'<dl>'
        +'<dt></dt>'
        +'<dd>Yesterday</dd>'
        +'</dl>'
        +'</li>'
        +'<li>'
        +'<dl>'
        +'<dt></dt>'
        +'<dd>Yesterday</dd>'
        +'</dl>'
        +'</li>'
        +'<li>'
        +'<dl>'
        +'<dt></dt>'
        +'<dd>Yesterday</dd>'
        +'</dl>'
        +'</li>'
        +'<li>'
        +'<dl>'
        +'<dt></dt>'
        +'<dd>Yesterday</dd>'
        +'</dl>'
        +'</li>'
        +'<li>'
        +'<dl>'
        +'<dt></dt>'
        +'<dd>Yesterday</dd>'
        +'</dl>'
        +'</li>'
        +'<li>'
        +'<dl>'
        +'<dt></dt>'
        +'<dd>Yesterday</dd>'
        +'</dl>'
        +'</li>'
        +'<li>'
        +'<dl>'
        +'<dt></dt>'
        +'<dd>Yesterday</d'
        +'</dl>'
        +'</li>'
        +'<li>'
        +'<dl>'
        +'<dt></dt>'
        +'<dd>Yesterday</dd>'
        +'</dl>'
        +'</li>'
        +'<li>'
        +'<dl>'
        +'<dt></dt>'
        +'<dd>Yesterday</dd>'
        +'</dl>'
        +'</li>'
        +'<li>'
        +'<dl>'
        +'<dt></dt>'
        +'<dd>Yesterday</dd>'
        +'</dl>'
        +'</li>'
        +'<li>'
        +'<dl>'
        +'<dt></dt>'
        +'<dd>Yesterday</dd>'
        +'</dl>'
        +'</li>'
        +'<li>'
        +'<dl>'
        +'<dt></dt>'
        +'<dd>Yesterday</dd>'
        +'</dl>'
        +'</li>'
        +'</ul>'
        +'</div>'
        +'<div class="toggle_but"></div>'
        +'</div>'
    );
    var y=new MxScrollBar("mxSCBcontent");
    y.init({
        Anim: false,
        Rang: 50
    });

    $(".toggle_but").on('click',function(){
        if($('.v_list').css('right') === 0+'px'){
            $('.v_list').animate({'right':-200+'px'},300);
        }else{
            $('.v_list').animate({'right':0},300);
        }

    });

    //≤‡¿∏µ„≤•
    $('#mxSCBcontent ul li').on('click',function(){
        var i=$(this).index();
        console.log(i);
        vod.callAsFunction(i);
    });


    $('.v_list').show();
}
