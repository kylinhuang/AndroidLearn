/**
 * Created by kylinhuang on 22/01/2017.
 */


function menuTab(index) {
    // window.alert("menuTab " +index);

    switch (index){
        case 1: //Learn
            $("#head-nav1 ").toggle();
            $("#head-nav2").off();
            $("#head-nav3").off();
            $("#head-nav4").off();
            break;
        case 2:
            $("#head-nav1").off();
            $("#head-nav2").toggle();
            $("#head-nav3").off();
            $("#head-nav4").off();
            break;
        case 3:
            $("#head-nav1").off();
            $("#head-nav2").off();
            $("#head-nav3").toggle();
            $("#head-nav4").off();
            break;
        case 4:
            $("#head-nav1").off();
            $("#head-nav2").off();
            $("#head-nav3").off();
            $("#head-nav4").toggle();
            break;


    }

};
