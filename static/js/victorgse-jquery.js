$(document).ready(function() {

    var controller = new ScrollMagic();

    new ScrollScene({
            triggerElement: "section#parallax",
            duration: $(window).height() + 300,
            offset: -217
        })
        .addTo(controller)
        .triggerHook("onCenter")
        .setTween(new TimelineMax().add([
            TweenMax.to("#parallax #parallaxbg", 1, {backgroundPosition: "0 -320%", ease: Linear.easeNone})
        ]));

    new ScrollScene({
            triggerElement: "section#parallax2",
            duration: $(window).height() + 300,
            offset: -217
        })
        .addTo(controller)
        .triggerHook("onCenter")
        .setTween(new TimelineMax().add([
            TweenMax.to("#parallax2 #parallaxbg2", 1, {backgroundPosition: "0 -320%", ease: Linear.easeNone})
        ]));

});