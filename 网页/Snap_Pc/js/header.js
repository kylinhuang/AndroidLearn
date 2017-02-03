$(function () {


  /*  window.onload=function(){

        var w_h=document.body.clientHeight;
        var h=document.body.offsetHeight ;
        console.log(w_h);
        if(h<700){
            $('body').css('overflow-y','auto');
        }

    };*/





        $('.header ul li a').on('click',function(){
            $(this).css('color','#780a06').parent('li').siblings().find('a').css('color','#f9ede6');
        });

    /*Lanuages*/
       $('.header ul li:nth-child(5)').on('click',function(){

           $('.header ul li:nth-child(5) ol').toggle();
       });

        $('.header ul li:nth-child(5) ol li a ').on('click', function () {

            if($(this).html()=='American'){
                $('.header ul li:nth-child(5) a span').html('USA');
            }

            if($(this).html()=='English'){
                $('.header ul li:nth-child(5) a span').html('EN');
            }
            if($(this).html()=='Chinese'){
                $('.header ul li:nth-child(5) a span').html('CH');
            }

        });

    var nav=document.URL;
    if(nav.indexOf("products.html")>-1){
        var $this=$('.header ul li:nth-child(2) a');
        $this.css('color','#780a06')
    }
    if(nav.indexOf("support.html")>-1){
        var $this=$('.header ul li:nth-child(3) a');
        $this.css('color','#780a06')
    }
    if(nav.indexOf("about.html")>-1){
        var $this=$('.header ul li:nth-child(4) a');
        $this.css('color','#780a06')
    }



});