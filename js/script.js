$(function(){
    $(window).on('scroll', function(){
        $('.textbox').each(function(){
            const scroll = $(window).scrollTop();
            const boxpos = $(this).offset().top;
            if ( boxpos - scroll < 500 ) {
                $(this).addClass('active');
            } else {
                $(this).removeClass('active');
            }
        });
    });
});