$(document).ready(function(){

var map;

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 40.7127, lng: -74.0059},
		zoom: 8
	});


	var marker = new google.maps.Marker({
		position: {lat: 40.7127, lng: -74.0059},
		map: map,
		title: 'NYC'
	});

	var empireState = new google.maps.Marker({
		position: {lat: 40.7484, lng: -73.9857},
		map: superAwesomeMap,
		title: 'Empire State Building'
	});
}

initMap()

})