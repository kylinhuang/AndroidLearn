
AJAX 是与服务器交换数据的技术，它在不重载全部页面的情况下，实现了对部分网页的更新


AJAX = 异步 JavaScript 和 XML（Asynchronous JavaScript and XML）

# jQuery AJAX  load
<li>load() - 从服务器加载数据，并把返回的数据放入被选元素中ß

    $(selector).load(URL,data,callback);

    必需的 URL 参数规定您希望加载的 URL。
    可选的 data 参数规定与请求一同发送的查询字符串键/值对集合。
    可选的 callback 参数是 load() 方法完成后所执行的函数名称。


    把文件 "demo_test.txt" 的内容加载到指定的 <div> 元素中
    $("#div1").load("/try/ajax/demo_test.txt");

    把 "demo_test.txt" 文件中 id="p1" 的元素的内容，加载到指定的 <div> 元素中
    $("#div1").load("demo_test.txt #p1");


可选的 callback 参数规定当 load() 方法完成后所要允许的回调函数。回调函数可以设置不同的参数：

<li>  responseTxt - 包含调用成功时的结果内容
<li>  statusTXT - 包含调用的状态
<li>  xhr - 包含 XMLHttpRequest 对象


    $("button").click(function(){
      $("#div1").load("demo_test.txt",function(responseTxt,statusTxt,xhr){
        if(statusTxt=="success")
          alert("外部内容加载成功!");
        if(statusTxt=="error")
          alert("Error: "+xhr.status+": "+xhr.statusText);
      });
    });


# jQuery AJAX  get() post()
<li>$.get() 通过 HTTP GET 请求从服务器上请求数据

语法:

    $.get(URL,callback);

    必需的 URL 参数规定您希望请求的 URL。
    可选的 callback 参数是请求成功后所执行的函数名。


demo

    $("button").click(function(){
      $.get("demo_test.php",function(data,status){
        alert("数据: " + data + "\n状态: " + status);
      });
    });  


<li>$.post() 方法通过 HTTP POST 请求从服务器上请求数据

语法:

    $.post(URL,data,callback);

    必需的 URL 参数规定您希望请求的 URL。
    可选的 data 参数规定连同请求发送的数据。
    可选的 callback 参数是请求成功后所执行的函数名。


demo


    $.post("/try/ajax/demo_test_post.php",{
      name:"菜鸟教程",
      url:"http://www.runoob.com"
    },
    function(data,status){
      alert("数据: \n" + data + "\n状态: " + status);
    });
