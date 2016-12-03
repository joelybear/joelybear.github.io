

/*
$(window).scroll(function() {
  $('#nav-logo').stop()
    if ( $(window).width()>=768){
        biggest = 300
        smallest = 80

        // //one way:
        // if ($(window).scrollTop() >=20){
        //   $('#nav-logo').animate({height:80})
        //   console.log("making smaller")
        // } else {
        //   $('#nav-logo').animate({height:249})
        //   console.log("making bigger")
        // }

        //another way:
        difference = biggest - smallest;
        if( $(window).scrollTop() <= 0 ) {
            $('#nav-logo').css("max-height",biggest + 'px')
            $('#nav-name').hide();
        }
        else if( $(window).scrollTop() <= difference ) {
            size = (biggest-$(window).scrollTop())+'px'
            console.log(size)
            $('#nav-logo').css("max-height",size)
            $('#nav-name').hide();
        } else {
            $('#nav-logo').css("max-height",'80px')
            $('#nav-name').show();
        }
  } else {
    $('#nav-logo').css("max-height",smallest + 'px')
    $('#nav-name').show();
  }
}
)

*/
