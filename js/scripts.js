mapboxgl.accessToken = 'pk.eyJ1IjoiYWRyMTEiLCJhIjoiY2tsa2RpMHZlMDF6NzJwcGo4NWxhZmxuNCJ9.n5_RQ0yWxBTwjRlaZsxGaQ';

var map = new mapboxgl.Map({
  container: 'mapContainer', // container ID
  style: 'mapbox://styles/mapbox/dark-v10', // style URL
  center: [-73.967442, 40.714112], // starting position [lng, lat]
  zoom: 10, // starting zoom
});

// add a navigation control
var nav = new mapboxgl.NavigationControl();
map.addControl(nav, 'top-left');

map.on('style.load', function() {
  // add a geojson source
  map.addSource('language-data', {
    type: 'geojson',
    data: 'data/language-at-home.geojson'
  });

  // add a layer to style and display the Source
  map.addLayer({
    'id': 'language-data-fill',
    'type': 'fill',
    'source': 'language-data',
    'layout': {},
    'paint': {
      "fill-color": ["step",
        ["get", "noEngPct"],
        "#5EF688", 0.1,
        "#5EF6D4", 0.2,
        "#5ECCF6", 0.3,
        "#5E80F6", 0.4,
        "#885EF6", 0.5,
        "#D45EF6", 0.6,
        "#7A3B94"
      ]
    }
  });

  map.addLayer({
    'id': 'language-data-line',
    'type': 'line',
    'source': 'language-data',
    'layout': {},
    'paint': {
      "line-color": "grey",
      "line-width": 0.3
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
      'line-color': 'white',
    }
  });

  //enable pop-up
  map.on('click', function(e) {
    // query for the features under the mouse, but only in the tracts layer
    var features = map.queryRenderedFeatures(e.point, {
      layers: ['language-data-fill'],
    });

    if (features.length > 0) {
      var hoveredFeature = features[0]

      var tractNumber = hoveredFeature.properties.NAMELSAD10
      var notEngPercent = hoveredFeature.properties.notEngPct

      $('#tractNumber').text(tractNumber)
      $('#totalPop').text(totalNumber)
      $('#notEnglish').text(notEnglishNumber)

      // set this tract's polygon feature as the data for the highlight source
      map.getSource('highlight-feature').setData(hoveredFeature.geometry);
    }
  })

  // Change the cursor to a pointer when the mouse is over the states layer.
  map.on('mouseenter', 'nyc-nonenglish-fill', function() {
    map.getCanvas().style.cursor = 'pointer';
  })

  // Change it back to a pointer when it leaves.
  map.on('mouseleave', 'nyc-nonenglish-fill', function() {
    map.getCanvas().style.cursor = '';
  })
})


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
