$(document).ready(function() {

    var controller = new ScrollMagic();

	// build scene
	var scene = new ScrollScene({triggerElement: "#trigger", duration: 500})
		.setTween(TweenMax.to("#animate", 0.5, {scale: 2.5, color: "green"}))
		.addTo(controller);

});