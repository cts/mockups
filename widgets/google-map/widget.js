var RenderMap = function(widget) {
  console.log("------ WIDGET Render JavaScript -------");
  var dataElem = widget.find(".themapdata");
  var mapElem = widget.find(".themap").first()[0];

  var properties = dataElem.find(".properties");

  var centerLat = parseFloat(properties.find(".center-lat").text());
  var centerLng = parseFloat(properties.find(".center-lng").text());
  var zoomLevel = properties.find(".zoom-level").text();

  mapElem.style.width = parseInt(properties.find(".width").text());
  mapElem.style.height = parseInt(properties.find(".height").text());

  var mapOptions = {
    center: new google.maps.LatLng(centerLat, centerLng),
    zoom: parseInt(zoomLevel),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  var map = new google.maps.Map(mapElem, mapOptions);

  var markers = dataElem.find(".markers");
  if (markers[0]) {
    for (var i = 0, row; row = markers[0].rows[i]; i++) {
      var lat; var lng; var image; var title; var description; var description_maxwidth;

      for (var j=0, cell; cell = row.cells[j]; j++) {
        switch (cell.className) {
          case "title":
            title = cell.innerHTML;
            break;
          case "lat":
            lat = cell.innerHTML;
            break;
          case "lng":
            lng = cell.innerHTML;
            break;
          case "image":
            image = cell.innerHTML;
            break;
          case "description":
            description = cell.innerHTML;
            break;
          case "description-maxwidth":
            description_maxwidth = cell.innerHTML;
            break;
        }
      }

      var latlng = new google.maps.LatLng(lat, lng);
      var markerOpts = {
        "position": latlng,
        "map": map
      };

      if (image) {
        var imageUrl = image.replace(/^\s+|\s+$/g, '');
        if (imageUrl.length > 0) {
          markerOpts["icon"] = imageUrl;
        }
      }

      if (title) {
        var titleText = title.replace(/^\s+|\s+$/g, '');
        if (titleText.length > 0) {
          markerOpts["title"] = titleText;
        }
      }

      console.log(markerOpts);

      var marker = new google.maps.Marker(markerOpts);

      if (description) {
        var infoOpts = {};
        infoOpts["content"] = description;
        if (description_maxwidth) {
          var maxWidth = description_maxwidth.replace(/^\s+|\s+$/g, '');
          if (maxWidth.length > 0) {
            infoOpts["maxWidth"] = parseInt(maxWidth);
          }
        }
        marker.infowindow = new google.maps.InfoWindow(infoOpts);
        google.maps.event.addListener(marker, 'click', function() {
          this.infowindow.open(map, this);
        });
      }

    }
  }

};

CTS.loaded.then(function() {
  CTS.on('cts-received-graft', function(evt) {
    var widget = evt.target.value;
    RenderMap(widget);
  });
});

