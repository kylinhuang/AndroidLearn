function isIE(){
    if(!!window.ActiveXObject || "ActiveXObject" in window){
        return true;
    }else{
        return false;
    }
}

function IEVersion(){
    var rv = -1;
    if (navigator.appName == 'Microsoft Internet Explorer'){
        var ua = navigator.userAgent;
        var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
        if (re.exec(ua) != null)
            rv = parseFloat( RegExp.$1 );
    }else if (navigator.appName == 'Netscape'){
        var ua = navigator.userAgent;
        var re  = new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})");
        if (re.exec(ua) != null)
            rv = parseFloat( RegExp.$1 );
    }
    return rv;
}
if (isIE()) {
    if (IEVersion() > 8) {

    }else{
        var $div="<div  id='box' style='width: 100%;height:30px;line-height:30px;background:#cacecd;position: relative;z-index: 9999'>"
        +"Your IE browser version is too low, please update to the latest browser to access this page. Please use Internet explorer 9 and above experience"
        +"</div>";

       $('.wrapper').prepend($div);
        setTimeout(function () {
            $('#box').remove();
        },1000)

    }

}
