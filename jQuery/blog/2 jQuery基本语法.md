# jQuery基本语法

### 基础语法： $(selector).action()
<li>美元符号定义 jQuery
<li>选择符（selector）"查询"和"查找" HTML 元素
<li>jQuery 的 action() 执行对元素的操作


### 基础语句
<li> $(this).hide() - 隐藏当前元素

<li> $("p").hide()  - 隐藏所有 <p> 元素
<li> $("p.test").hide() - 隐藏所有 class="test" 的 <p> 元素
<li> $("#test").hide() - 隐藏所有 id="test" 的元素

注意

元素选择器     $("p")<br>
id 选择器      $("#test")<br>
class 选择器   $(".test")<br>

# 使用独立Jquery
在head中 添加引用文件

    <head>
        <script src="http://cdn.static.runoob.com/libs/jquery/1.10.2/jquery.min.js">
        </script>
        <script src="my_jquery_functions.js"></script>
    </head>

# 事件
| 鼠标事件         | 键盘事件        | 表单事件  | 文档/窗口事件 |
| :-------------: |:-------------:| :-----:|:-------------: |
| click           | keypress      | submit |load |
| dblclick        | keydown       | change |resize |
| mouseenter      | keyup         | focus  |scroll |
| mouseleave      |               | blur   |unload |


| 事件             | 解析       |
| :-------------: |:-------------:|  
| mousedown       | 当鼠标指针移动到元素上方，并按下鼠标按键时，会发生 mousedown 事件|  
| mouseup        | 在元素上松开鼠标按钮时，会发生 mouseup 事件       |  
| hover      | hover()方法用于模拟光标悬停事件。         |  
| focus      |   当元素获得焦点时，发生 focus 事件。            |  
| blur      |   当元素失去焦点时，发生 blur 事件            |


## 1 jQuery hide() 和 show()
语法:

    $(selector).hide(speed,callback);
    $(selector).show(speed,callback);

<li>可选的 speed 参数规定隐藏/显示的速度，可以取以下值："slow"、"fast" 或毫秒。
<li>可选的 callback 参数是隐藏或显示完成后所执行的函数名称。

jQuery toggle() 方法来切换 hide() 和 show() 方法

## 2 jQuery Fading 方法 - 淡入淡出
<li> fadeIn()    ---- 用于淡入已隐藏的元素。


    $(selector).fadeIn(speed,callback);



<li> fadeOut()  -----用于淡出可见元素

    $(selector).fadeOut(speed,callback);

<li> fadeToggle() -----可以在 fadeIn() 与 fadeOut() 方法之间进行切换。

    $(selector).fadeToggle(speed,callback);

<li> fadeTo()   -----允许渐变为给定的不透明度（值介于 0 与 1 之间）。

    $(selector).fadeTo(speed,opacity,callback);


    $("button").click(function(){
        $("#div1").fadeTo("slow",0.15);
        $("#div2").fadeTo("slow",0.4);
        $("#div3").fadeTo("slow",0.7);
    });

## 2 jQuery slide 方法 - 滑动方法

<li> slideDown()  ---- 用于向下滑动元素


    $(selector).slideDown(speed,callback);
可选的 speed 参数规定效果的时长。它可以取以下值："slow"、"fast" 或毫秒。

可选的 callback 参数是滑动完成后所执行的函数名称。


<li> slideUp() ---- 向上滑动元素。

    $(selector).slideUp(speed,callback);


<li> slideToggle()  ---在 slideDown() 与 slideUp() 方法之间进行切换。

    $(selector).slideToggle(speed,callback);




## 3 jQuery animate  方法 - 动画

<li>animate()   ---- 创建自定义动画

    $(selector).animate({params},speed,callback);

必需的 params 参数定义形成动画的 CSS 属性。

可选的 speed 参数规定效果的时长。它可以取以下值："slow"、"fast" 或毫秒。

可选的 callback 参数是动画完成后所执行的函数名称    


## 4 jQuery stop  方法 - 停止动画

<li>stop()   ---- 停止动画或效果，在它们完成之前

stop() 方法适用于所有 jQuery 效果函数，包括滑动、淡入淡出和自定义动画。

    $(selector).stop(stopAll,goToEnd);

可选的 stopAll 参数规定是否应该清除动画队列。默认是 false，即仅停止活动的动画，允许任何排入队列的动画向后执行。

可选的 goToEnd 参数规定是否立即完成当前动画。默认是 false。


## 5 jQuery 方法链接

通过 jQuery，可以把动作/方法链接在一起。
Chaining 允许我们在一条语句中运行多个 jQuery 方法（在相同的元素上）。

直到现在，我们都是一次写一条 jQuery 语句（一条接着另一条）。

不过，有一种名为链接（chaining）的技术，允许我们在相同的元素上运行多条 jQuery 命令，一条接着另一条。

    $(document).ready(function() {
      $("button").click(function(){
        $("#p1").css("color","red").slideUp(2000).slideDown(2000);
      });
    });
