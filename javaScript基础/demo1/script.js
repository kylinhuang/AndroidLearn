/**
 * Created by kylinhuang on 04/03/2017.
 *
 * javascript 基础
 */

// alert('hello');  //对话框

var words =  "Hello world";
console.log(words);  //console 日志

//3 注释
//  单行注释

    /**
    * 多行注释
    *
    *
    * */







// 4 变量
// 变量
var band ;
// 多个变量
var  band1 ,band2 ,band3 ;


// 5 数据类型
var  name ="kylin", age = 22;

// 类型判断
typeof(name);
// 数据转换
parseInt(age);
parseFloat(age);

/**
 * 6 字符串 处理
 * */

var name =  "kylinhuang";
name.length;

name.charAt(name.length-1);


name.indexOf('h');
name.lastIndexOf('n');

name.substring(0,3);
name.split('h');


/**
 * 7.Array数组
 */
var arr = [];
arr = ['d','b','c','d'];



/**
 * 函数
 * 
 * */

function call(number,age) {
    
}

/**
 *
 * 函数表达式
 */

var alertMsg = function (msg) {
    alert(msg);
}



/**
 * Object
 *
 * method
 *
 */

var  beyond =  {

    name : 'beyond',
    formedin: '1983',
    artist:['kylsi','ssdg']


};
beyond.name = 'beyond';
beyond['formedin'] = '1983';

//删除属性
delete  beyond.formedin;


// 对象添加方法
beyond.showName  = function () {


}


/**
 * 获取对象属性
 * */
var porperty ;
for(porperty in beyond){
    console(beyond[porperty]);
}


/**
 * DOM 操作文档模型
 * DOM  document object mode
 *
 */

//1 获取元素
document.getElementById('');//通过id获取元素
document.getElementsByTagName('li'); //  通话标签名获取  获取li 标签元素

document.querySelector('');
document.querySelectorAll('.artlist-list li'); // 获取 class 为artlist-list 元素下所有的li 元素


/**
 * 事件
 */

window.onload = function () {

    var btn = document.getElementById('btn');//通过id获取元素

    btn.onclick = function () {
        console.log('onclick');
    };

    btn.onmouseover = function () {
        console.log('over');
    };

    btn.onmouseout = function () {
        console.log('out');
    };
};


/**
 * addEventListener
 */


window.onload = function () {

    var btn = document.getElementById('btn');//通过id获取元素

    function showMsg (event) {
        console.log(event);
    }

    btn.addEventListener('click',showMsg,false);
};


/**
 * 事件传播
 * 冒泡传播 从下往上
 *
 * 捕获方式 改变事件传播方式   addEventListener 最后的参数 为true
 *
 */

var btn = document.getElementById('btn');//通过id获取元素

function showMsg (event) {
    console.log(event);
}
btn.addEventListener('click',showMsg,true);