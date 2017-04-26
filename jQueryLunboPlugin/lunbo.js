(function ($) {
    function lunbo(listSelector, settings) {
        var container = this;
        var list = $(listSelector);
        var index = 1;
        var len = settings.len;
        var interval = settings.interval;
        var timer;
        var last = list.find('img').eq(-1).clone();
        var first = list.find('img').eq(0).clone();
        list.append(first);
        last.insertBefore(list.find('img').eq(0));
        var prev = $('<a href="javascript:;" id="lunbo-prev" class="arrow">&lt;</a>');
        var next = $('<a href="javascript:;" id="lunbo-next" class="arrow">&gt;</a>');
        container.append(prev, next);
        $( "<style type=\"text/css\">" + this.selector + "{ width: " + settings.offset + "px; overflow: hidden; position: relative;} " + listSelector + " { width: " + (settings.len + 2) * settings.offset + "px; position: absolute; z-index: 1;} " + listSelector + " a { float: left;} .arrow { cursor: pointer; display: none; line-height: 39px; text-align: center; font-size: 36px; font-weight: bold; width: 40px; height: 40px;  position: absolute; z-index: 2; top: 45%; background-color: RGBA(0,0,0,.3); color: #fff; text-decoration: none;} .arrow:hover { background-color: RGBA(0,0,0,.7);}  #lunbo-prev { left: 20px;} #lunbo-next { right: 20px;}" + this.selector + ":hover .arrow { display: block;} </style>").appendTo( "head" );
        if (settings.buttons) {
            $( "<style type=\"text/css\">#lunbo-buttons { position: absolute; height: 10px; z-index: 2; bottom: 20px; left: 50%; transform: translateX(-50%);} #lunbo-buttons span { cursor: pointer; float: left; border: 1px solid #fff; width: 10px; height: 10px; border-radius: 50%; background: #333; margin-right: 5px;} #lunbo-buttons .on {  background: #aaa;}</style>").appendTo( "head" );
            var buttonsCon = $("<div id='lunbo-buttons'></div>");
            for (var i = 1; i <= settings.len; i++) {
                buttonsCon.append($('<span data-index=' + i + '></span>'));
            }
            var buttons = buttonsCon.find('span');
            showButton();
            buttons.each(function () {
                 $(this).bind('click', function () {
                     if (list.is(':animated') || $(this).attr('class')=='on') {
                         return;
                     }
                     var myIndex = parseInt($(this).attr('data-index'));
                     var offset = -settings.offset * (myIndex - index);

                     animate(offset);
                     index = myIndex;
                     showButton();
                 });
            });
            buttonsCon.appendTo(this);
        }

        function animate (offset) {
            var left = parseInt(list.css('left')) + offset;
            if (offset>0) {
                offset = '+=' + offset;
            }
            else {
                offset = '-=' + Math.abs(offset);
            }
            list.animate({'left': offset}, 300, function () {
                if(left > -200){
                    list.css('left', -settings.offset * len);
                }
                if(left < (-settings.offset * len)) {
                    list.css('left', -settings.offset);
                }
            });
        }

        function showButton() {
            buttons.eq(index-1).addClass('on').siblings().removeClass('on');
        }

        function play() {
            timer = setTimeout(function () {
                next.trigger('click');
                play();
            }, interval);
        }

        function stop() {
            clearTimeout(timer);
        }

        next.bind('click', function () {
            if (list.is(':animated')) {
                return;
            }
            if (index == settings.len) {
                index = 1;
            }
            else {
                index += 1;
            }
            animate(-settings.offset);
            if (settings.buttons) {
                showButton();
            }
        });

        prev.bind('click', function () {
            if (list.is(':animated')) {
                return;
            }
            if (index == 1) {
                index = len;
            }
            else {
                index -= 1;
            }
            animate(settings.offset);
            if (settings.buttons) {
                showButton();
            }
        });

        container.hover(stop, play);

        play();

        return this;

    }

    $.fn.lunbo = lunbo;
})(jQuery);

$(function() {
    $('.container').lunbo('#list', {
        len: 3,
        interval: 2000,
        buttons: true,
        offset: 500,
    });
});
