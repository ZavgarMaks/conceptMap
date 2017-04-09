
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 47.2421, lng: 38.90},
      zoom: 2
    });
    marker = new google.maps.Marker({
      map: map,
      draggable: true,
      animation: google.maps.Animation.DROP,
      position: {lat: 47.2421, lng: 38.90}
    });
    google.maps.event.addListener(marker,'dragend', function(event) {
      document.getElementById('lat').value = event.latLng.lat();
      document.getElementById('long').value = event.latLng.lng();
      map.setCenter(marker.getPosition());
    });
  };
  function changeMarkerPosition() {
      var latValue = document.getElementById("lat").value;
      var lngValue = document.getElementById("long").value;
      var latNumber = latValue*1;
      var lngNumber = lngValue*1;
      var latlng = new google.maps.LatLng(latNumber, lngNumber);
      marker.setPosition(latlng);
      map.setCenter(latlng);
  };