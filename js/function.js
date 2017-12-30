

/***********Flex-carousel******************************/

	$(window).load(function(){
	  $('.flexslider').flexslider({
		animation: "fade",
		start: function(slider){
		  $('body').removeClass('loading');
		}
	  });
	});
	



/*--
	Menu Sticky
-----------------------------------*/
$(window).on('scroll', function() {
	var scroll = $(window).scrollTop();
    var sticky = $('.header-bottom');
	if (scroll < 400) {
		sticky.removeClass('stick');
	}else{
		sticky.addClass('stick');
	}
});

/*--
	One Page Menu
-----------------------------------*/
var TopOffsetId = $('.header-bottom').height() - -19;
$('.onepage-nav nav').onePageNav({
    currentClass: 'active',
    scrollThreshold: 0.2,
    scrollSpeed: 1000,
    scrollOffset: TopOffsetId,
});
/*--
	Bootstrap Menu Fix For Mobile
-----------------------------------*/
$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
});



function onpenSkype()
{
  var skypename = 'skypeuser01';
  window.location = 'skype:' + skypename + '?chat';
}







/*--
	Smooth Scroll
-----------------------------------*/
$('[data-scroll]').on('click', function(e) {
	e.preventDefault();
	var link = this;
	$.smoothScroll({
        speed: 1000,
        scrollTarget: link.hash,
        offset: -90,
	});
});

 



















/***********Owl-carousel******************************/

$(document).ready(function() {
              var owl = $('.owl-carousel');
              owl.owlCarousel({
                margin: 10,
                nav: true,
                loop: true,
                responsive: {
                  0: {
                    items: 1
                  },
                  600: {
                    items: 1
                  },
                  1000: {
                    items: 1
                  }
                }
              });
            });








