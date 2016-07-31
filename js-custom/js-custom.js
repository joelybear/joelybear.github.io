$(window).scroll(function() {
    biggest = 300;
    smallest = 80
    difference = biggest - smallest;
    if( $(window).scrollTop() <= 0 ) {
        $('#nav-logo').css("max-height",biggest + 'px')
    }
    else if( $(window).scrollTop() <= difference ) {
        size = (biggest-$(window).scrollTop())+'px'
        console.log(size)
        $('#nav-logo').css("max-height",size) 
    } else {
        $('#nav-logo').css("max-height",'80px')
    }
})