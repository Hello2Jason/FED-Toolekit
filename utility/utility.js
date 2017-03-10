var utility = {
    /**
     * [getScrollOffsets description]
     * 获取页面或元素的滚动位置
     * @param  {[object]} _w [要获取滚动距离的对象，默认为window]
     * @return {[object]}    [页面或元素的滚动位置对象，属性为 x,y]
     */
    getScrollOffsets: function (_w) {
        _w = _w || window;
        //for all and IE9+
        if (_w.pageXOffset != null) return {
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
};
