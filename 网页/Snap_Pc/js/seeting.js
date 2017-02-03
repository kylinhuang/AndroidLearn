$(function(){


    /*public*/
    $('.sub').on('click', function () {
        $('.suc').css('display','block');
        $('textarea').val('');
    });

    $('textarea').on('focus', function () {
        $('.suc').css('display','none');
    });

    /*on-off*/
    var elems = document.querySelectorAll('.js-switch');
    for (var i = 0; i < elems.length; i++) {
        var switchery = new Switchery(elems[i]);
    }

    $('.switchery').on('click', function () {

        if($(this).find('small').css('left')===0+'px'){
            console.log('on');
        }
        if($(this).find('small').css('left')===38+'px'){
            console.log('off');
        }
    });


    /*success or failure*/
     data=1;
    if(data==1){
        $('.failure').css('display','none')
    }else{
        $('.success').css('display','none')
    }

});


