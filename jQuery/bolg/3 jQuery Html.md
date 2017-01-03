# jQuery HTML

## Jquery 获取内容和属性
jQuery 中非常重要的部分，就是操作 DOM 的能力。

jQuery 提供一系列与 DOM 相关的方法，这使访问和操作元素和属性变得很容易


### 1 获得内容和属性 - text()、html() 、val()以及 attr()
<li> text() - 设置或返回所选元素的文本内容
<li> html() - 设置或返回所选元素的内容（包括 HTML 标记）
<li> val()  - 设置或返回表单字段的值

<li> attr()  - 获取属性

demo

    <script>
      $(document).ready(function(){

        $("#btn1").click(function(){
          alert("Text: " + $("#test").text());
        });

        $("#btn2").click(function(){
          alert("HTML: " + $("#test").html());
        });

        $("button").click(function(){
          alert("值为: " + $("#test").val());
        });

        $("button").click(function(){
          alert($("#runoob").attr("href"));

        });

      });
    </script>


# 2 设置内容 - text()、html() 以及 val()   

<li> text() - 设置或返回所选元素的文本内容
<li> html() - 设置或返回所选元素的内容（包括 HTML 标记）
<li> val() - 设置或返回表单字段的值


<li> attr() - 设置 属性
demo

    <script>
    $(document).ready(function(){
      $("#btn1").click(function(){
        $("#test1").text("Hello world!");
      });
      $("#btn2").click(function(){
        $("#test2").html("<b>Hello world!</b>");
      });
      $("#btn3").click(function(){
        $("#test3").val("RUNOOB");
      });

      $("button").click(function(){
        $("#runoob").attr("href","http://www.runoob.com/jquery");
      });

    });
    </script>

回调函数

    <script>
    $(document).ready(function(){
      $("#btn1").click(function(){
        $("#test1").text(function(i,origText){
          return "旧文本: " + origText + " 新文本: Hello world! (index: " + i + ")";
          });
        });

        $("#btn2").click(function(){
          $("#test2").html(function(i,origText){
            return "旧 html: " + origText + " 新 html: Hello <b>world!</b> (index: " + i + ")";
        });
      });

      $("#runoob").attr("href", function(i,origValue){
        return origValue + "/jquery";
      });

    });
    </script>


### 3 添加元素
添加新的 HTML 内容
我们将学习用于添加新内容的四个 jQuery 方法：
<li> append()  - 在被选元素的结尾插入内容
<li> prepend() - 在被选元素的开头插入内容
<li> after()   - 在被选元素之后插入内容
<li> before()  - 在被选元素之前插入内容



demo


    <script>
    $(document).ready(function(){
      $("#btn1").click(function(){
        $("p").append(" <b>追加文本</b>。");

        $("p").prepend("在开头追加文本");

        $("img").after("在后面添加文本");

        $("img").before("在前面添加文本");
      });


    });
    </script>


###  4 删除元素
<li> remove() - 删除被选元素（及其子元素）
<li> empty() - 从被选元素中删除子元素

demo

    <script>
      $(document).ready(function(){
        $("button").click(function(){

          $("#div1").empty();

          $("p").remove(".italic");
        });
      });
    </script>


### 5 CSS类

    <style type="text/css">
    .important
    {
    	font-weight:bold;
    	font-size:xx-large;
    }
    .blue
    {
    	color:blue;
    }
    </style>
<li>addClass() - 向被选元素添加一个或多个类
<li>removeClass() - 从被选元素删除一个或多个类
<li>toggleClass() - 对被选元素进行添加/删除类的切换操作
<li>css() - 设置或返回样式属性


demo

    <script>
      $(document).ready(function(){
        $("button").click(function(){
          $("h1,h2,p").addClass("blue");
          $("div").addClass("important");
        });

        $("button").click(function(){
          $("h1,h2,p").removeClass("blue");
        });

        $("button").click(function(){
          $("h1,h2,p").toggleClass("blue");
        });
      });
    </script>


返回 CSS 属性

css("propertyname");   

    $("p").css("background-color");


设置 CSS 属性
css("propertyname","value");

    $("p").css("background-color","yellow");

设置多个 CSS 属性
css({"propertyname":"value","propertyname":"value",...});

      $("p").css({"background-color":"yellow","font-size":"200%"});



### 6 尺寸
<li>width()  --- 方法设置或返回元素的宽度（不包括内边距、边框或外边距）。
<li>height() --- 方法设置或返回元素的高度（不包括内边距、边框或外边距）
<li>innerWidth() ---  方法返回元素的宽度（包括内边距）
<li>innerHeight() --- 方法返回元素的高度（包括内边距）
<li>outerWidth() ---方法返回元素的宽度（包括内边距和边框）
<li>outerHeight() ---方法返回元素的高度（包括内边距和边框）
