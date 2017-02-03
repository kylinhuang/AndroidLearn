
var videoMode;
$(function(){
    /*fullpage*/
    $('#dowebok').fullpage({
        'navigation': true,
        continuousVertical: true
    });
    /*time*/
    var myDate = new Date();
    $('.f_h div p i').append( myDate.getFullYear()+' / '+(myDate.getMonth()+1)+' / '+myDate.getDate());

    function current(){
        var d=new Date(),
            str='';
        var hour=d.getHours();
        var minu=d.getMinutes();
        var sec=d.getSeconds();
        if (hour < 10) hour = "0" + hour;
        if (minu < 10) minu = "0" + minu;
        if (sec < 10) sec = "0" + sec;
        str +=hour+':';
        str +=minu+':';
        str +=sec;

        if(hour>=13 && hour<24){
            str=str+'PM';
        }else
        if(hour<13 && hour>=0){
            str=str+'AM';
        }
        return str;
    }
    setInterval(function(){$('.f_h div p em').html(current);},1000);



    /*on-off light*/
    function valueOutput(element) {
        var value = $(element).val();
//        var output = $(element).parent().find('output')[0];
//        output.innerHTML = value;
        if(value==0){
            $(element).parent().prev('.light').removeClass('on_light');
        }else{
            $(element).parent().prev('.light').addClass('on_light');

        }
    }

    $('[data-rangeslider]').rangeslider({
        polyfill: false,
        onSlideEnd: function(p,v){
            valueOutput($(this.$element));
        },
        onSlide: function(){
            valueOutput($(this.$element));
        },
        onInit:function(){
            valueOutput($(this.$element));
        }
    });

    //video cut-in
    $('.sn_l_tow').on('click',function() {
        $.fn.fullpage.setMouseWheelScrolling(false);
        var $url=$(this).attr('data');
        $('.feature').css({
            'transition': 'transform 1s ease',
            '-webkit-transition': '-webkit-transform 1s ease',
            '-moz-transition': 'transform 1s ease',
            '-ms-transition': 'transform 1s ease',
            '-o-transition': 'transform 1s ease',
            'transform': 'translate(-100%,0%)',
            '-webkit-transform': 'translate(-100%,0%)',
            '-moz-transform': 'translate(-100%,0%)',
            '-ms-transform': 'translate(-100%,0%)',
            '-o-transform': 'translate(-100%,0%)'
        });

        var $state = $(this).prev('.sn_l_one').find('p').html();//live or cvr

        //if safari Borwser
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

        var attributes;
        var flashvars={};
        var url="../../js/cvr.json";

        if($state=="The Livingroom Light"){
            videoMode ="live";
            //var flashvars={url:'rtmp://10.100.100.184/vod',name:'3.mp4'};
            $('.f_h').find('h2').html("The Livingroom Light");
            lightSet();
            attributes = {id:"live"};
            var $view=$('.view');
            $view.empty();
            $view.append("<div id='altContent'>"+
                "<p>"+
                "<a href='http://www.adobe.com/go/getflashplayer'>Get Adobe Flash player</a>"+
                "</p>"+
                "</div>");

            swfobject.embedSWF(
                "../../video/live.swf",
                "altContent", "800", "505", "10.0.0",
                "expressInstall.swf",
                flashvars,params, attributes);
        }


        if($state=="The Bedroom Light"){
            $.ajax({
                url:url,
                type:"POST",
                dataType:"json",
                contentType:"application/json",
                success:function(data){
                    //var $data=JSON.stringify(data.videoInfoList);
                $.each(data.videoInfoList,function(i,device) {
                        var day = "2015-10-26";
                        console.log(i);
                        console.log(device.date);
                        if (device.date == day) {
                            var $list = JSON.stringify(device.list);
                            var flashvars = {url: $list};
                            console.log($list);
                        }
                    })


                videoMode ="vod";
                    //var flashvars={url:'32.mp4'};
                    $('.f_h').find('h2').html("The Bedroom Light");
                    $('.f_h div:nth-child(3)').hide();
                    attributes = {id:"vod"};
                    var $view=$('.view');
                    $view.empty();
                    $view.append("<div id='altContent'>"+
                        "<p>"+
                        "<a href='http://www.adobe.com/go/getflashplayer'>Get Adobe Flash player</a>"+
                        "</p>"+
                        "</div>");

                    swfobject.embedSWF(
                        "../../video/vod.swf",
                        "altContent", "800", "571", "10.0.0",
                        "expressInstall.swf",
                        flashvars,params, attributes);


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

                    $('#mxSCBcontent ul li').on('click',function(){
                        var i=$(this).index();
                        console.log(i);
                        vod.callAsFunction(i+".mp4");
                    });
                    if (isSafari) {
                        setTimeout(function(){
                            $('.view>object').css({'margin-left': '-200%', 'top': '0'});
                        },900);
                    }


                },
                error:function(){
                    console.log('Please check the network!');
                }
            });

        }



    //back
    $('.f_h div:nth-child(1)').on('click',function(){
                $.fn.fullpage.setMouseWheelScrolling(true);

                $('.feature').css({
                    'transition': 'transform 500ms ease',
                    '-webkit-transition': '-webkit-transform 500ms ease',
                    '-moz-transition': 'transform 500ms ease',
                    '-ms-transition': 'transform 500ms ease',
                    '-o-transition': 'transform 500ms ease',
                    'transform': 'translate(100%,0%)',
                    '-webkit-transform': 'translate(100%,0%)',
                    '-moz-transform': 'translate(100%,0%)',
                    '-ms-transform': 'translate(100%,0%)',
                    '-o-transform': 'translate(100%,0%)'
                });

                var $view=$('.view');
                $view.empty();
                $('.v_list').remove();
            });


});

});


/*setting*/
        function lightSet(){

            var elems = document.querySelectorAll('.js-switch');
            for (var i = 0; i < elems.length; i++) {
                var switchery = new Switchery(elems[i]);
            }

            $(".success input[type=checkbox]").each(function () {
                if ($(this).attr("checked")) {
                    $(this).next('.switchery').find('small').css('left', '38px');
                }else{
                    $(this).next('.switchery').find('small').css('left',0);
                }
            });

            $('.switchery').on('click', function () {
                if($(this).find('small').css('left')===0+'px'){
                    console.log('on');
                }
                if($(this).find('small').css('left')===38+'px'){
                    console.log('off');
                }
            });

            /*show*/
            $('.f_h div:nth-child(3)').show();
            $('.f_h div:nth-child(3)').on('click',function(e){
                $('.f_mark').show();
                $('.success').show();
                var userAgent = navigator.userAgent;
                var isSafari = userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") < 1;
                if (isSafari){
                    $('.view>object').css('visibility','hidden');
                }

                var lightSet=$('.success>ul>li').find('span').length;
                var li_len=$('.success>ul>li').length;
                if(lightSet>=li_len+1){
                    $('.js-switch').next('span').remove();
                }

            });


            /*public*/
            $('.sub').on('click', function () {
                $('.suc').css('display','block');
                $('textarea').val('');
            });

            $('textarea').on('focus', function () {
                $('.suc').css('display','none');
            });


            /*close*/
            $('.set_close').on('click',function(){
                closeSet();
            });

            $('.f_mark').on('click',function(){
                closeSet();
            });

        }



        function closeSet(){
            $('.f_mark').hide();
            $('.success').hide();
            $('.view>object').css('visibility','visible');
        }












































/*$(function(){
    /!*fullpage*!/
    $('#dowebok').fullpage({
        'navigation': true,
        continuousVertical: true
    });


    /!*on-off light*!/
    $(function() {
        var $document   = $(document);
        var selector    = '[data-rangeslider]';
        var $inputRange = $(selector);

        function valueOutput(element) {
            var value = element.value;
            var output = element.parentNode.getElementsByTagName('output')[0];
            output.innerHTML = value;
        }

        for (var i = $inputRange.length - 1; i >= 0; i--) {
            valueOutput($inputRange[i]);
        }

        $document.on('input', selector, function(e) {
            valueOutput(e.target);
            on_off();
        });

        $inputRange.rangeslider({
            polyfill: false
        });

        $document
            .on('click', '#js-example-destroy button[data-behaviour="destroy"]', function(e) {
                $('input[type="range"]', e.target.parentNode).rangeslider('destroy');
            })
            .on('click', '#js-example-destroy button[data-behaviour="initialize"]', function(e) {
                $('input[type="range"]', e.target.parentNode).rangeslider({ polyfill: false });
            });
        function on_off(){
            var len=$('.snapone').length;
            for(i=1;i<=len;i++){
                var $input=$('#rang'+i+'>input').val();
                var $output=$('#rang'+i).find('output').html();
                //console.log($input);
                //console.log($output);
                if( $input==0 || $output==0){
                    $('#rang'+i).prev('.light').addClass('off_light');
                    $('#look'+i).addClass('clo_pic');
                }else{

                    $('#rang'+i).prev('.light').removeClass('off_light');
                    $('#rang'+i).prev('.light').addClass('on_light');
                    //$('#look'+i).removeClass('clo_pic');
                    //$('#look'+i).addClass('ope_pic');
                }
            }
        }
        on_off();
    });




    /!*»®¹ý*!/
    $('.sn_l_tow').on('click',function() {
        $.fn.fullpage.setMouseWheelScrolling(false);
        var $url=$(this).attr('data');

        $('.feature').css({
            'transition': 'transform 1s ease',
            '-webkit-transition': '-webkit-transform 1s ease',
            '-moz-transition': 'transform 1s ease',
            '-ms-transition': 'transform 1s ease',
            '-o-transition': 'transform 1s ease',
            'transform': 'translate(-100%,0%)',
            '-webkit-transform': 'translate(-100%,0%)',
            '-moz-transform': 'translate(-100%,0%)',
            '-ms-transform': 'translate(-100%,0%)',
            '-o-transform': 'translate(-100%,0%)'
        });

        var $state = $(this).prev('.sn_l_one').find('p').html();//live or cvr

        var flashvars = {};

        //ÅÐ¶Ïsafariä¯ÀÀÆ÷
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

        var attributes = {id:"vod"};

        if($state=="The Livingroom Light"){

            $('.f_h').find('h2').html("The Livingroom Light");
            lightSet();


            attributes = {id:"live"};
            var $view=$('.view');
            $view.empty();
            $view.append("<div id='altContent'>"+
                "<p>"+
                "<a href='http://www.adobe.com/go/getflashplayer'>Get Adobe Flash player</a>"+
                "</p>"+
                "</div>");

            swfobject.embedSWF(
                "../../video/live.swf",
                "altContent", "800", "505", "10.0.0",
                "expressInstall.swf",
                flashvars, params, attributes);




            $('#altContent').ready(function(){
                var time=setTimeout(function(){
                    var url="{'big':url}";
                    snap_pictuer.callAsFunction(url);
                },1000);



            });


        }


        if($state=="The Bedroom Light"){
            $('.f_h').find('h2').html("The Bedroom Light");
            $('.f_h div:nth-child(3)').hide();
            attributes = {id:"vod"};
            var $view=$('.view');
            $view.empty();
            $view.append("<div id='altContent'>"+
                "<p>"+
                "<a href='http://www.adobe.com/go/getflashplayer'>Get Adobe Flash player</a>"+
                "</p>"+
                "</div>");

            swfobject.embedSWF(
                "../../video/vod.swf",
                "altContent", "800", "571", "10.0.0",
                "expressInstall.swf",
                flashvars, params, attributes);




            $('#altContent').ready(function(){

                setTimeout(function(){
                    vod.callAsMain($url);
                },1000);
            });

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

            $('#mxSCBcontent ul li').on('click',function(){
                var i=$(this).index();
                console.log(i);
                vod.callAsFunction(i);
            });
        }

        if (isSafari) {
            setTimeout(function(){
                $('.view>object').css({'margin-left': '-200%', 'top': '0'});
            },900);
        }


    });

    //·µ»Ø
    $('.f_h div:nth-child(1)').on('click',function(){
        $.fn.fullpage.setMouseWheelScrolling(true);

        $('.feature').css({
            'transition': 'transform 500ms ease',
            '-webkit-transition': '-webkit-transform 500ms ease',
            '-moz-transition': 'transform 500ms ease',
            '-ms-transition': 'transform 500ms ease',
            '-o-transition': 'transform 500ms ease',
            'transform': 'translate(100%,0%)',
            '-webkit-transform': 'translate(100%,0%)',
            '-moz-transform': 'translate(100%,0%)',
            '-ms-transform': 'translate(100%,0%)',
            '-o-transform': 'translate(100%,0%)'
        });

        var $view=$('.view');
        $view.empty();
        $('.v_list').remove();
    });


    /!*time*!/
    var myDate = new Date();
    myDate.getFullYear();
    myDate.getMonth();
    myDate.getDate();
    $('.f_h div p i').append( myDate.getFullYear()+' / '+(myDate.getMonth()+1)+' / '+myDate.getDate());

    function current(){
        var d=new Date(),
            str='';
        var hour=d.getHours();
        var minu=d.getMinutes();
        var sec=d.getSeconds();
        if (hour < 10) hour = "0" + hour;
        if (minu < 10) minu = "0" + minu;
        if (sec < 10) sec = "0" + sec;
        str +=hour+':';
        str +=minu+':';
        str +=sec;

        if(hour>=13 && hour<24){
            str=str+'PM';
        }else
        if(hour<13 && hour>=0){
            str=str+'AM';
        }
        return str;
    }
    setInterval(function(){$('.f_h div p em').html(current);},1000);


});

function lightSet(){

    var elems = document.querySelectorAll('.js-switch');
    for (var i = 0; i < elems.length; i++) {
        var switchery = new Switchery(elems[i]);
    }

    $(".success input[type=checkbox]").each(function () {
        if ($(this).attr("checked")) {
            $(this).next('.switchery').find('small').css('left', '38px');
        }else{
            $(this).next('.switchery').find('small').css('left',0);
        }
    });

    $('.switchery').on('click', function () {
        if($(this).find('small').css('left')===0+'px'){
            console.log('on');
        }
        if($(this).find('small').css('left')===38+'px'){
            console.log('off');
        }
    });

    /!*show*!/
    $('.f_h div:nth-child(3)').show();
    $('.f_h div:nth-child(3)').on('click',function(){
            $('.f_mark').show();
            $('.success').show();
    });

    /!*close*!/
    $('.set_close').on('click',function(){
        $('.f_mark').hide();
        $('.success').hide();
    });

    $('.f_mark').on('click',function(){
        $(this).hide();
        $('.success').hide();
    })

}

function sendHtml(str){
    if(str=="true"){
        clearTimeout(time);
    }
}
sendHtml();*/



/*
$(function(){
    /!*fullpage*!/
    $('#dowebok').fullpage({
        'navigation': true,
        continuousVertical: true
    });
    /!*time*!/
    var myDate = new Date();
    $('.f_h div p i').append( myDate.getFullYear()+' / '+(myDate.getMonth()+1)+' / '+myDate.getDate());

    function current(){
        var d=new Date(),
            str='';
        var hour=d.getHours();
        var minu=d.getMinutes();
        var sec=d.getSeconds();
        if (hour < 10) hour = "0" + hour;
        if (minu < 10) minu = "0" + minu;
        if (sec < 10) sec = "0" + sec;
        str +=hour+':';
        str +=minu+':';
        str +=sec;

        if(hour>=13 && hour<24){
            str=str+'PM';
        }else
        if(hour<13 && hour>=0){
            str=str+'AM';
        }
        return str;
    }
    setInterval(function(){$('.f_h div p em').html(current);},1000);

    /!*on-off light*!/
    $(function() {
        var $document   = $(document);
        var selector    = '[data-rangeslider]';
        var $inputRange = $(selector);

        function valueOutput(element) {
            var value = element.value;
            var output = element.parentNode.getElementsByTagName('output')[0];
            output.innerHTML = value;
        }

        for (var i = $inputRange.length - 1; i >= 0; i--) {
            valueOutput($inputRange[i]);
        }

        $document.on('input', selector, function(e) {
            valueOutput(e.target);
            on_off();
        });

        $inputRange.rangeslider({
            polyfill: false
        });

        $document
            .on('click', '#js-example-destroy button[data-behaviour="destroy"]', function(e) {
                $('input[type="range"]', e.target.parentNode).rangeslider('destroy');
            })
            .on('click', '#js-example-destroy button[data-behaviour="initialize"]', function(e) {
                $('input[type="range"]', e.target.parentNode).rangeslider({ polyfill: false });
            });
        function on_off(){
            var len=$('.snapone').length;
            for(i=1;i<=len;i++){
                var $input=$('#rang'+i+'>input').val();
                var $output=$('#rang'+i).find('output').html();
                //console.log($input);
                //console.log($output);
                if( $input==0 || $output==0){
                    $('#rang'+i).prev('.light').addClass('off_light');
                    $('#look'+i).addClass('clo_pic');
                }else{
                    $('#rang'+i).prev('.light').removeClass('off_light');
                    $('#rang'+i).prev('.light').addClass('on_light');
                   // $('#look'+i).removeClass('clo_pic');
                   // $('#look'+i).addClass('ope_pic');
                }
            }
        }
        on_off();
    });

    //µÆ Í¼Æ¬
    var look1="url('../../images/lig.jpg')";

    $('#look1').css("background",look1);
    $('#look2').css("background",look1);
    $('#look3').css("background",look1);
    $('#look4').css("background",look1);
    $('#look5').css("background",look1);




    /!*»®¹ý*!/

    $('.sn_l_tow').on('click',function() {
        $.fn.fullpage.setMouseWheelScrolling(false);
        var $url=$(this).attr('data');
        console.log($url);

        $('.feature').css({
            'transition': 'transform 1s ease',
            '-webkit-transition': '-webkit-transform 1s ease',
            '-moz-transition': 'transform 1s ease',
            '-ms-transition': 'transform 1s ease',
            '-o-transition': 'transform 1s ease',
            'transform': 'translate(-100%,0%)',
            '-webkit-transform': 'translate(-100%,0%)',
            '-moz-transform': 'translate(-100%,0%)',
            '-ms-transform': 'translate(-100%,0%)',
            '-o-transform': 'translate(-100%,0%)'
        });







        var $state = $(this).prev('.sn_l_one').find('p').html();//live or cvr

        var flashvars = {};
        //ÅÐ¶Ïsafariä¯ÀÀÆ÷
        var userAgent = navigator.userAgent;
        //console.log(userAgent);
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
            var params={
                menu: "false",
                scale: "noScale",
                allowFullscreen: "true",
                allowScriptAccess: "always",
                bgcolor: "#e8e8e8",
                quality:"high",
                wmode: "transparent"//other
            };
        }

        var attributes = {id:"vod"};

        if($state=="The Livingroom Light"){

            $('.f_h').find('h2').html("The Livingroom Light");
            attributes = {id:"live"};
            var $view=$('.view');
            $view.empty();
            $view.append("<div id='altContent'>"+
                "<p>"+
                "<a href='http://www.adobe.com/go/getflashplayer'>Get Adobe Flash player</a>"+
                "</p>"+
                "</div>");



            swfobject.embedSWF(
                "../../video/live.swf",
                "altContent", "800", "505", "10.0.0",
                "expressInstall.swf",
                flashvars, params, attributes);

            $('#altContent').ready(function(){
                console.log(11);
                setTimeout(function(){
                    var name="7.mp4";
                    live.callAsFunction($url,name);
                },1000);
            });


        }



        if($state=="The Bedroom Light"){
            $('.f_h').find('h2').html("The Bedroom Light");
            attributes = {id:"vod"};
            var $view=$('.view');
            $view.empty();
            $view.append("<div id='altContent'>"+
                "<p>"+
                "<a href='http://www.adobe.com/go/getflashplayer'>Get Adobe Flash player</a>"+
                "</p>"+
                "</div>");

            swfobject.embedSWF(
                "../../video/vod.swf",
                "altContent", "800", "571", "10.0.0",
                "expressInstall.swf",
                flashvars, params, attributes);

            $('#altContent').ready(function(){
                console.log(11);
                setTimeout(function(){
                    var name="7.mp4";
                    vod.callAsMain($url,name);
                },1000);
            });

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

            $('#mxSCBcontent ul li').on('click',function(){
                var i=$(this).index();
                console.log(i);
                vod.callAsFunction(i);
            });

        }


        if (isSafari) {
            setTimeout(function(){
                $('.view>object').css({'margin-left': '-200%', 'top': '0'});
            },1000);
        }


    });

    //·µ»Ø
    $('.f_h div:nth-child(1)').on('click',function(){
        $.fn.fullpage.setMouseWheelScrolling(true);

        $('.feature').css({
            'transition': 'transform 1s ease',
           /!* '-webkit-transition': 'transform 1s ease',*!/
            '-webkit-transition': '-webkit-transform 1s ease',
            '-moz-transition': 'transform 1s ease',
            '-ms-transition': 'transform 1s ease',
            '-o-transition': 'transform 1s ease',

            'transform': 'translate(100%,0%)',
            '-webkit-transform': 'translate(100%,0%)',
            '-moz-transform': 'translate(100%,0%)',
            '-ms-transform': 'translate(100%,0%)',
            '-o-transform': 'translate(100%,0%)'
        });

        var $view=$('.view');
        $view.empty();
        $('.v_list').remove();
    });





});

*/
