/**
 * Created by kylinhuang on 11/01/2017.
 */
function android_serialization() {
    window.alert(index);
    $("#learn_page-wrapper").load("./blog/android/Android_Optimization-serialization.html");
};
function android_json() {
    window.alert(index);
    $("#learn_page-wrapper").load("./blog/android/Android_Optimization-serialization.html");
};

function jQuery(index) {
       window.alert(index);
    switch (index) {
        case 1:
            $("#learn_page-wrapper").load("./blog/JQuery/1_jQuery_install_use.html");
            break;
        case 2:
            $("#learn_page-wrapper").load("./blog/JQuery/2_JQuery_Basic_syntax.html");
            break;
        case 3:
            $("#learn_page-wrapper").load("./blog/JQuery/3_jQuery_HTML.html");
            break;
        case 4:
            $("#learn_page-wrapper").load("./blog/JQuery/4_JQuery_traversal.html");
            break;
        case 5:
            $("#learn_page-wrapper").load("./blog/JQuery/5_JQuery_AJAX.html");
            break;
    }

};