$(document).ready(function() {

    var controller = new ScrollMagic();

	// build scene
	var scene1 = new ScrollScene({triggerElement: "#animate", duration: 75})
	    .setTween(TweenMax.from("#animate", 1, {autoAlpha: 0}))
	    .addTo(controller);

});