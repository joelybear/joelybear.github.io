$(window).scroll(function() {
    if( $(window).scrollTop() <= 0 ) {
        $('#nav-logo').css("max-height",'250px')
    }
    else if( $(window).scrollTop() <= 170 ) {
        size = (250-$(window).scrollTop())+'px'
        console.log(size)
        $('#nav-logo').css("max-height",size) 
    } else {
        $('#nav-logo').css("max-height",'80px')
    }
})