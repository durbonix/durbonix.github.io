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
    console.log("added in listener");
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 37.630458, lng: -77.547904},
        zoom: 3
      });
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
