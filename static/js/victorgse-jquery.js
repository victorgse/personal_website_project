$(document).ready(function() {

    var controller = new ScrollMagic();

    new ScrollScene({
            triggerElement: "section#parallax",
            duration: $(window).height() + 300,
            offset: -220
        })
        .addTo(controller)
        .triggerHook("onCenter")
        .setTween(new TimelineMax().add([
            TweenMax.to("#parallax #parallaxbg", 1, {backgroundPosition: "0 -320%", ease: Linear.easeNone})
        ]));

});