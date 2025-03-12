$(document).ready(function () {
    $(".imgSmall").click(function () {
        $("#imgBig").attr("src", $(this).prop('src'));
        $("#clickOverlay").fadeIn(150);
        $("#clickOverlayContent").fadeIn(150);
    });

    $("#imgBig, #clickOverlay").click(function () {
        $("#imgBig").attr("src", "");
        $("#clickOverlay").fadeOut(150);
        $("#clickOverlayContent").fadeOut(150);
    });
});
