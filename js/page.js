$(function () {
    $('.SlideIt').SlideIt();

    galleryModule();

    $(".grow-rotate").hover(
        function () {
            $(this).css({"z-index": 120, "transform": "scale(2) rotate(0deg)"});
        },
        function () {
            $(this).css({"transform": randomAngle(), "z-index": randomZ()})
        }
    );

    function randomZ() {
        return 100 + parseInt(10 * Math.random());
    }

    function randomAngle() {
        var degRandom = parseInt(15 * Math.random());
        var direction = Math.random();
        if (direction >= 0.5) {
            degRandom = -degRandom;
        }
        return "rotate(" + degRandom + "deg)";
    }

    function galleryModule() {
        $(".grow-rotate").each(function () {
            $(this).css({"z-index": randomZ(), "transform": randomAngle()});
        });
    }

    var showAlternatePhotos = false;

    $(".gallery-toggle").on("click", function () {
        showAlternatePhotos = !showAlternatePhotos;
        var buttonText = showAlternatePhotos ? "Show original photos" : "Show alternate photos";
        $(this).text(buttonText).attr("aria-label", buttonText);
        $(".grow-rotate").each(function (key, value) {
            $(value).stop(true, true).fadeOut(200, function () {
                galleryModule();
                $(value).attr("src", "img/pic" + (showAlternatePhotos ? 0 : 1) + key + ".jpg").fadeIn(300);
            });
        });
    });

});