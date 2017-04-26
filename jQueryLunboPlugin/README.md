# jQuery轮播图插件

这是一个轮播图插件。
它是一个功能比较简单的轮播插件，支持水平循环滚动（做了特殊处理实现无缝循环滚动）。

具体使用方法如下：
先导入jquery文件后即可通过container元素`$(...).lunbo()`调用。

它接受两个参数，第一个参数`listSelector`表示块元素中包含了所有轮播图片的一个块元素的CSS选择器，第二个参数`setting`为配置参数，它接受一个对象，具体对象参数请参考下列文档结构代码。

使用文档结构：
```html
<div id="container">
    <div id="list">
        <a href="#"><img src="img/#" alt="1"></a>
        <a href="#"><img src="img/#" alt="2"></a>
        <a href="#"><img src="img/#" alt="3"></a>
    </div>
</div>
<script type="text/javascript">
    $(function() {
        $("#container").lunbo("#list", {
            len: 3, // 图片的数量
            interval: 2000, // 轮播间隔时间
            offset: 500, // 轮播图片宽度
            buttons: true, // 是否显示图片导航按钮
        })
    })
</script>
```
