# jQuery 遍历

### jQuery 遍历 - 祖先  向上遍历 DOM 树
<li>parent() -  返回被选元素的直接父元素。

    $("span").parent();

<li>parents() - 返回被选元素的所有祖先元素，它一路向上直到文档的根元素 (<html>)。

    $("span").parents();

    $("span").parents("ul");

<li>parentsUntil() - 返回介于两个给定元素之间的所有祖先元素。

    $("span").parentsUntil("div");


### jQuery 遍历 - 后代   向下遍历 DOM 树

<li> children()  - 返回被选元素的所有直接子元素

    $("div").children();

    返回类名为 "1" 的所有 <p> 元素，并且它们是 <div> 的直接子元素：
    $("div").children("p.1");


<li> find() - 返回被选元素的后代元素，一路向下直到最后一个后代

    $("div").find("*");


### jQuery 遍历 - 同胞(siblings)  在 DOM 树中水平遍历
<li>siblings()  - 返回被选元素的所有同胞元素

    $("h2").siblings();
    $("h2").siblings("p");

<li>next() - 返回被选元素的下一个同胞元素


    $("h2").next();

<li>nextAll()  - 返回被选元素的所有跟随的同胞元素

    $("h2").nextAll();

<li>nextUntil()  - 返回介于两个给定参数之间的所有跟随的同胞元素

    $("h2").nextUntil("h6");


<li>prev()  - 返回被选元素的上一个同胞元素
<li>prevAll()- 返回被选元素的之前所有的同胞元素
<li>prevUntil() - 返回介于两个给定参数之间的所有跟随的同胞元素


### jQuery 遍历- 过滤
<li> first() - 返回被选元素的首个元素

选取首个 <div> 元素内部的第一个 <p> 元素

    $("div p").first();


<li> last() - 返回被选元素的最后一个元素

    $("div p").last();

<li> eq() - 返回被选元素中带有指定索引号的元素  

    $("p").eq(1);

<li> filter() - 允许您规定一个标准。不匹配这个标准的元素会被从集合中删除，匹配的元素会被返回。

    $("p").filter(".url");

<li> not() - 返回不匹配标准的所有元素

    $("p").not(".url");
