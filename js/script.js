$(function () {

    //little consol msg
    console.log('%c FSSQUAD.com BIN]cc ', "background: #5A8DEE; color: #F2F4F4; font-size: 30px;");
    console.log('%c Developing_With_Love❤ | 2020 © FSSQUAD.com ', "background: #F2F4F4; color: #5A8DEE; font-size: 10px;");

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.backtotop').fadeIn('slow');
        } else {
            $('.backtotop').fadeOut('slow');
        }
    });
    $('.backtotop').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1000);
        return false;
    });

    // Initiate popover
    $('[data-toggle="tooltip"]').tooltip();
    
});