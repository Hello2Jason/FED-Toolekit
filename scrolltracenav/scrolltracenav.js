function scrollTraceNav(sectionClassName, navId, containerId) {
    var container = containerId ? document.getElementById(containerId) : document;
    var sections = container.getElementsByClassName(sectionClassName);
    var menu = document.getElementById(navId);
    var list = menu.getElementsByTagName("a");
    window.onscroll = function(e) {
        var scrollTop = getScrollOffsets().y;
        var currentId;
        for (var i = 0; i < sections.length; i++) {
            if (scrollTop >= sections[i].offsetTop - 10) {
                currentId = sections[i].id;
            }
            else {
                break;
            }
        }
        if(currentId) {
            for (var i = 0; i < list.length; i++) {
                list[i].className = "";
                if (list[i].getAttribute("href").slice(1) === currentId) {
                    list[i].className = "on";
                }
            }
        }
    }
}
function getScrollOffsets(_w) {//获取页面的滚动位置
    _w = _w || window;
    //for all and IE9+
    if (_w.pageXOffset !== null) return {
        x: _w.pageXOffset,
        y: _w.pageYOffset
    };
    //for IE678
    var _d = _w.document;
    if (document.compatMode == "CSS1Compat") return { //for IE678
        x: _d.documentElement.scrollLeft,
        y: _d.documentElement.scrollTop
    };
    //for other mode
    return {
        x: _d.body.scrollLeft,
        y: _d.body.scrpllTop
    };
}

scrollTraceNav('sec', 'navbar');
