function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: {
            lat: 51.372002,
            lng: -0.788655
        }
    });

    var label = "A";

    var location = [
        { lat: 51.371832, lng: -0.788690 },
    ];

    var markers = location.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: label[i % label.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}