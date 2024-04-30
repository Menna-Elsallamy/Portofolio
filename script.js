$(document).ready(function(){
    $(".lds-heart").fadeOut(1000,function(){
        $("#loadingscreen").slideUp(2000,function(){
            $("body").css('overflow','auto');
            $("#loadingscreen").remove();
        })
    });

})