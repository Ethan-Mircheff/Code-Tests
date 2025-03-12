$(document).ready(function () {
    $(".imgSmall").click(function () {
        $("#imgBig").attr("src", $(this).prop('src'));
        $("#clickOverlay").show(150);
        $("#clickOverlayContent").show(150);
    });

    $("#imgBig, #clickOverlay").click(function () {
        $("#imgBig").attr("src", "");
        $("#clickOverlay").hide(150);
        $("#clickOverlayContent").hide(150);
    });
});
