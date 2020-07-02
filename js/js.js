$(function(){
    $(window).resize(function() {
        if($(window).width() > 1160){
            $(".footermenu_title").css("display", "");
        }
        else{
            $(".footermenu_title").css("display", "none");
        }
    });

    $('#BackTop').click(function(){ 
        $('html,body').animate({scrollTop:0}, 333);
    });
    $(window).scroll(function() {
        if ( $(this).scrollTop() > 300 ){
            $('#BackTop').fadeIn(222);
        } else {
            $('#BackTop').stop().fadeOut(222);
        }
    }).scroll();
});