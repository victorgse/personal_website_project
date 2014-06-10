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

function initialize() {
  var mapOptions = {
    zoom: 3,
    center: new google.maps.LatLng(50, -42)
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'),
                                mapOptions);
  setVisitedMarkers(map, visited);
  setLivedMarkers(map, lived);
}

var visited = [
  ['Austria', 47.583937, 14.148559, 1],
  ['Bulgaria', 42.738944, 25.222778, 2],
  ['Croatia', 45.104546, 14.915771, 3],
  ['France', 46.528635, 2.453612, 4],
  ['Germany', 51.041394, 10.363769, 5],
  ['Greece', 39.453161, 22.540283, 6],
  ['Hungary', 46.995241, 19.608764, 7],
  ['Italy', 43.452919, 12.209472, 8],
  ['Macedonia', 41.648288, 21.707153, 9],
  ['Serbia', 44.079693, 20.839233, 10],
  ['Slovakia', 48.676454, 19.378052, 11],
  ['Slovenia', 46.065608, 14.598999, 12],
  ['Switzerland', 46.769968, 7.963257, 13],
  ['Turkey', 38.959409, 35.460205, 14],
  ['United Kingdom', 55.028022, -2.77588, 15],
  ['United States', 39.842286, -101.352541, 16]
];

function setVisitedMarkers(map, locations) {
  var visitedMarker = 'static/imgs/country.png';
  for (var i = 0; i < locations.length; i++) {
    var countriesVisited = locations[i];
    var myLatLng = new google.maps.LatLng(countriesVisited[1], countriesVisited[2]);
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: visitedMarker,
        title: countriesVisited[0],
        zIndex: countriesVisited[3]
    });
  }
}

var lived = [
  ['Sofia, Bulgaria', 42.697577, 23.3218, 17],
  ['Grambling, LA', 32.527421, -92.713652, 18],
  ['Santa Barbara, CA', 34.420505, -119.697819, 19],
  ['Glasgow, Scotland', 55.863368, -4.251137, 20]
];

function setLivedMarkers(map, locations) {
  var livedMarker = 'static/imgs/home.png';
  for (var i = 0; i < locations.length; i++) {
    var placesLived = locations[i];
    var myLatLng = new google.maps.LatLng(placesLived[1], placesLived[2]);
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: livedMarker,
        title: placesLived[0],
        zIndex: placesLived[3]
    });
  }
}

google.maps.event.addDomListener(window, 'load', initialize);

