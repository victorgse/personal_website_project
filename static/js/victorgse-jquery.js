$(document).ready(function() {

    var controller = new ScrollMagic();

	// build scene
	var scene1 = new ScrollScene({triggerElement: "#animate", duration: 75})
		.setTween(TweenMax.from("#animate", 1, {autoAlpha: 0}))
		.addTo(controller);

    $("#myCarousel").swiperight(function() {
        $(this).carousel('prev');
    });

    $("#myCarousel").swipeleft(function() {
        $(this).carousel('next');
    });

});

$(document).bind('keyup', function(e) {
    if(e.which == 39) {
        $('.carousel').carousel('next');
    }
    else if(e.which == 37) {
        $('.carousel').carousel('prev');
    }
});