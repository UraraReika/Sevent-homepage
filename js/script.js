$(function(){
	$(document).ready(function() {
 
		$("#owl-demo").owlCarousel({
		 
		    navigation : true, // показывать кнопки next и prev 
		 
		    slideSpeed : 300,
		    paginationSpeed : 400,
		 
		    items : 1, 
		    itemsDesktop : false,
		    itemsDesktopSmall : false,
		    itemsTablet: false,
		    itemsMobile : false
		 
		  });

		$(window).scroll(function() {
                if ($(this).scrollTop() > 100) {
                    $('#go-to-top').fadeIn();
                } else {
                    $('#go-to-top').fadeOut();
                }
        });

        $('#go-to-top').click(function() {
                $('body,html').animate({
                    scrollTop: 0
                }, 500);
                return false;
        });
		 
	});
});