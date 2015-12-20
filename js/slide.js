$(function () {
    $.fn.SlideIt = function () {
        var windowWidth = $(window).width();

        return this.each(function () {
            var $this = $(this);

            $this.children("img").one("load", function () {
                updateSlideIt(true);
            }).each(function () {
                if (this.complete) {
                    $(this).load();
                }
            });

            /**
             * Check zoom event
             */
            $(window).scroll(function () {
                windowWidth = $(window).width();
                updateSlideIt(false);
            });

            $(window).resize(function () {
                windowWidth = $(window).width();
                updateSlideIt(false);
            });

            function updateSlideIt(initial) {
                var containerHeight = getContainerHeight();
                var $img = $this.children("img").first();
                var imgHeight = $img.height();
                var slideDist = imgHeight - containerHeight;
                var bottom = $this.offset().top + containerHeight;
                var top = $this.offset().top;
                var scrollTop = $(window).scrollTop();
                var windowHeight = window.innerHeight;
                var windowBottom = scrollTop + windowHeight;
                var percentScrolled = (windowBottom - top) / (containerHeight + windowHeight);
                var slideSize = Math.round((slideDist * percentScrolled));

                if (initial) {
                    $img.css('display', 'block');
                }
                if ((bottom > scrollTop) && (top < (scrollTop + windowHeight))) {
                    $img.css('transform', "translate3D(-50%," + slideSize + "px, 0)");
                }
            }

            function getContainerHeight() {
                if (windowWidth < 601) {
                    return ($this.height() > 0) ? $this.height() : $this.children("img").height();
                }

                return ($this.height() > 0) ? $this.height() : 500;
            }

        });
    };
});