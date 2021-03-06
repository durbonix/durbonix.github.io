function initMap() {
/*
    // if HTML DOM Element that contains the map is found...
    if (document.getElementById('map-canvas')) {
        // Coordinates to center the map
        var myLatlng = new google.maps.LatLng(52.525595, 13.393085);

        // Other options for the map, pretty much selfexplanatory
        var mapOptions = {
            zoom: 14,
            center: myLatlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        // Attach a map to the DOM Element, with the defined settings
        var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

    }*/
    var map = new google.maps.Map(document.getElementById('map'), {
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: {
            lat: 40.714226,
            lng: -73.961452
        },
        zoom: 22
    });

    var markers = [{
        position: {
            lat: 40.714226,
            lng: -73.961452
        },
        map: map,
        title: 'hello'
    }, {
        position: {
            lat: 40.714256,
            lng: -73.961482
        },
        map: map,
        title: 'hello'
    }, {
        position: {
            lat: 40.714286,
            lng: -73.961502
        },
        map: map,
        title: 'hello'
    }];
    
    for (var i=0; i<markers.length;i++){
        var marker = new google.maps.Marker(markers[i]);
    }


    google.maps.event.addListener(map, "click", function(e) {

        //lat and lng is available in e object
        var latLng = e.latLng;
        var position = new google.maps.LatLng(e.latLng.lat(), e.latLng.lng());

        var marker = new google.maps.Marker({
            position: position,
            map: map,
            title: 'hello'
        });
    });

}
