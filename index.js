$("#grid img").click(function(){		                                        
$("#imgBig").attr("src",$(this).prop('src'));
    $("#overlay").show();
    $("#overlayContent").show();
});

$("#imgBig").click(function(){
    $("#imgBig").attr("src", "");
    $("#overlay").hide();
    $("#overlayContent").hide();
});
