$(function(){
	
    /*time*/
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

    /*anniu*/
    $('.toggle_but a:nth-child(2)').css('display','none');
    $('.toggle_but a:nth-child(1)').on('click',function(){
        $('.v_list').stop().animate({'right':-200+'px'},300);
        $('.toggle_but').stop().animate({'right':0},300);
        $(this).hide().next().show();
    });

    $('.toggle_but a:nth-child(2)').on('click',function(){
        $('.v_list').stop().animate({'right':0},300);
        $('.toggle_but').stop().animate({'right':200+'px'},300);
        $(this).hide().prev().show();
    });

    /*iscroll*/
    var Nsc= new MxScrollBar("mxSCBcontent");
    Nsc.init({
        Anim: false,
        Rang: 50
    });
    
    
    
    var url = document.URL;
    var data=url.substr(url.length-1,1);
    function player(){
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
        
      
        if(data==4){
            swfobject.embedSWF(
                "../../video/vod.swf",
                "altContent", "800", "571", "10.0.0",
                "expressInstall.swf",
                flashvars, params, attributes);
            $('.f_h').find('h2').html("The Bedroom Light");
            
        }
        if(data==3){
            swfobject.embedSWF(
                "../../video/live.swf",
                "altContent", "800", "505", "10.0.0",
                "expressInstall.swf",
                flashvars, params, attributes);
            $('.f_h').find('h2').html("The Livingroom Light");
            $('.toggle_but>a').hide();
            $('.v_list').hide();
        }
    }

    player();
    
    $('#mxSCBcontent ul li').on('click',function(){
	    var i=$(this).index();
	    console.log(i);
	    vod.callAsFunction(i);
	});
    
    
    
});