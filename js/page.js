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

    var flag = true;

    $("#galleryHead").on("click", function () {
        flag = !flag;
        $(".grow-rotate").each(function (key, value) {
            $(value).fadeOut(function () {
                galleryModule();
                $(value).attr("src", "img/pic" + Number(flag) + key + ".jpg");
            });
            $(value).fadeIn(1000);
        })
    })

});