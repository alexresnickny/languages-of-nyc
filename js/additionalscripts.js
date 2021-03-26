//This file is for additional code to add into the main scripts.js file later.
//It is not currently wired to the html file.



// Pop up code for all LEPs. Have to nest inside this click function so that
// the pop-up content will change as the user clicks through the different layers
map.on('mousemove', function(e) {

  var features = map.queryRenderedFeatures(e.point, {
    layers: ['noEng-fill'],
  });

  if (features.length > 0) {
    // show the popup
    // Populate the popup and set its coordinates
    // based on the feature found.

    var hoveredFeature = features[0]
    var censusTract = hoveredFeature.properties.geo
    var totalPop = hoveredFeature.properties.Tot
    var lepPop = hoveredFeature.properties.ENG_NOT


    var popupContent = `
                             <div>
                                   <h5>Total LEPs</h5> </br>
                                   <b>${geo}</b><br/>
                                   <b>Total Population</b>: ${Tot} ppb <br/>
                                   <b>LEPs</b>: ${ENG_NOT}<br/>
                             </div>
                                               `

    popup.setLngLat(e.lngLat).setHTML(popupContent).addTo(map);

    // set this lot's polygon feature as the data for the highlight source
    map.getSource('highlight-feature').setData(hoveredFeature.geometry);

    // show the cursor as a pointer
    map.getCanvas().style.cursor = 'pointer';
  } else {
    // remove the Popup
    popup.remove();

    map.getCanvas().style.cursor = '';
  }

});


// for the borough-level data
  map.addLayer({
    'id': 'boroughs',
    'type': 'fill',
    'source': 'boroughLanguages',
    'layout': {
      'visibility': 'visible',
    },
    'paint': {
      'fill-color': 'white',
      'fill-outline-color': 'red',
      'fill-outline-width': 3,
      'fill-opacity': 0
    }
  });
  // add an empty data source, which we will use to highlight the tract the user is hovering over
  map.addSource('highlight-feature', {
    type: 'geojson',
    data: {
      type: 'FeatureCollection',
      features: []
    }
  })

  // add a layer for the highlighted tract
  map.addLayer({
    id: 'highlight-line',
    type: 'line',
    source: 'highlight-feature',
    paint: {
      'line-width': 3,
      'line-opacity': 0.9,
      'line-color': 'green',
    }
  });

  // Create a popup, but don't add it to the map yet.
  var popup = new mapboxgl.Popup({
    closeButton: false,
    closeOnClick: false
  });
