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

    $('.visited').hover(
        function() {
            var i = $(this).attr('id');
            toggleBounce(visitedMarkers[i]);
        }, function() {
            var i = $(this).attr('id');
            toggleBounce(visitedMarkers[i]);
        }
    );

    $('.lived').hover(
        function() {
            var i = $(this).attr('id');
            toggleBounce(livedMarkers[i]);
        }, function() {
            var i = $(this).attr('id');
            toggleBounce(livedMarkers[i]);
        }
    );

});

var map;
function initialize() {
  var mapOptions = {
    zoom: 3,
    center: new google.maps.LatLng(50, -42)
  }
  map = new google.maps.Map(document.getElementById('map-canvas'),
                                mapOptions);
  setVisitedMarkers(map, visited);
  setLivedMarkers(map, lived);
}

var visited = [
  ['Austria', 47.583937, 14.148559, 1],
  ['Bulgaria', 42.738944, 25.222778, 2],
  ['Croatia', 45.104546, 14.915771, 3],
  ['Czech Republic', 49.700840, 15.189268, 4],
  ['France', 46.528635, 2.453612, 5],
  ['Germany', 51.041394, 10.363769, 6],
  ['Greece', 39.453161, 22.540283, 7],
  ['Hungary', 46.995241, 19.608764, 8],
  ['Italy', 43.452919, 12.209472, 9],
  ['Macedonia', 41.648288, 21.707153, 10],
  ['Serbia', 44.079693, 20.839233, 11],
  ['Slovakia', 48.676454, 19.378052, 12],
  ['Slovenia', 46.065608, 14.598999, 13],
  ['Switzerland', 46.769968, 7.963257, 14],
  ['Turkey', 38.959409, 35.460205, 15],
  ['United Kingdom', 55.028022, -2.77588, 16],
  ['United States', 39.842286, -101.352541, 17]
];

var visitedMarkers = [];
function setVisitedMarkers(map, locations) {
  var visitedMarkerIcon = 'static/imgs/country.png';
  for (var i = 0; i < locations.length; i++) {
    var countriesVisited = locations[i];
    var myLatLng = new google.maps.LatLng(countriesVisited[1], countriesVisited[2]);
    visitedMarkers[i] = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: visitedMarkerIcon,
        animation: google.maps.Animation.DROP,
        title: countriesVisited[0],
        zIndex: countriesVisited[3]
    });
    google.maps.event.addListener(visitedMarkers[i], "click", markerClick);
    //google.maps.event.addListener(visitedMarkers[i], 'click', function(visitedMarkers, i) {
    //    return function() {
    //        toggleBounce(visitedMarkers[i]);
    //    }
    //}(visitedMarkers, i));
  }
}

var lived = [
  ['Sofia, Bulgaria', 42.697577, 23.3218, 17],
  ['Grambling, LA', 32.527421, -92.713652, 18],
  ['Santa Barbara, CA', 34.420505, -119.697819, 19],
  ['Glasgow, Scotland', 55.863368, -4.251137, 20]
];

var livedMarkers = [];
function setLivedMarkers(map, locations) {
  var livedMarkerIcon = 'static/imgs/home.png';
  for (var i = 0; i < locations.length; i++) {
    var placesLived = locations[i];
    var myLatLng = new google.maps.LatLng(placesLived[1], placesLived[2]);
    livedMarkers[i] = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: livedMarkerIcon,
        animation: google.maps.Animation.DROP,
        title: placesLived[0],
        zIndex: placesLived[3]
    });
    google.maps.event.addListener(livedMarkers[i], "click", markerClick);
    //google.maps.event.addListener(livedMarkers[i], 'click', function(livedMarkers, i) {
    //    return function() {
    //        toggleBounce(livedMarkers[i]);
    //    }
    //}(livedMarkers, i));
  }
}

function toggleBounce(marker) {
  if (marker.getAnimation() != null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}

var that;
var infoWindow = new google.maps.InfoWindow();
function markerClick() {
	if (that) {
		that.setZIndex();
	}
	that = this;
	this.setZIndex(google.maps.Marker.MAX_ZINDEX + 1);
    var contentString = '<h5 class="text-primary">' + this.getTitle() + '</h5>';
	infoWindow.setContent(contentString);
	infoWindow.open(map, this);
};

google.maps.event.addDomListener(window, 'load', initialize);