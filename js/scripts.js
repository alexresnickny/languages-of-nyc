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

// desciptions of each linguistic group
var noengdescription = [
  'This includes all individuals 5 years and over with low English proficiency, no matter their native language.'
];
var spdescription = [
  'This includes New Yorkers who speak Spanish but not English.'
];
var chdescription = [
  'This includes speakers of Mandarin, Cantonese, and all other Chinese dialects.'
];
var kordescription = [
  'This includes New Yorkers who speak Korean but not English.'
];
var frdescription = [
  'This includes those who speak French or Haitian Creole. Many Haitian Creole speakers also speak some French.'
];
var rudescription = [
  'This includes all speakers of Slavic Languages. Russian predominates in most of New York City, but there are also significant populations of Polish and Serbo-Croatian speakers in North Brooklyn and Queens.'
];
var ardescription = [
  'This includes speakers of all dialects of Arabic.'
];
var gerdescription = [
  'This includes those who speak Yiddish, German or other German dialects like Pennsylvania Dutch. In New York, this is mostly Yiddish speakers.'
];

map.on('load', function() {
  // add a geojson source
  map.addSource('language-data', {
    type: 'geojson',
    data: 'data/language-at-home1.geojson'
  });

  map.addSource('boroughLanguages', {
    type: 'geojson',
    data: 'data/borough-voting.geojson'
  });

  // add Spanish to map
  map.addLayer({
    'id': 'sp-fill',
    'type': 'fill',
    'source': 'language-data',
    'layout': {},
    'paint': {
      'fill-color': [
        'interpolate',
        ['linear'],
        ['get', 'spPct'],
        0.0,
        'white',
        0.1,
        '#c77dff',
        0.2,
        '#9d4edd',
        0.3,
        '#7b2cbf',
        0.4,
        '#5a189a',
        0.5,
        '#3c096c'
      ],
      'fill-outline-color': '#ccc',
      'fill-opacity': 0.8
    }
  }, 'waterway-label');

  // add Chinese to map
  map.addLayer({
    'id': 'ch-fill',
    'type': 'fill',
    'source': 'language-data',
    'layout': {},
    'paint': {
      'fill-color': [
        'interpolate',
        ['linear'],
        ['get', 'chPct'],
        0.0,
        'white',
        0.1,
        '#c77dff',
        0.2,
        '#9d4edd',
        0.3,
        '#7b2cbf',
        0.4,
        '#5a189a',
        0.5,
        '#3c096c'
      ],
      'fill-outline-color': '#ccc',
      'fill-opacity': 0.8
    }
  }, 'waterway-label');

  // add Korean to map
  map.addLayer({
    'id': 'kor-fill',
    'type': 'fill',
    'source': 'language-data',
    'layout': {},
    'paint': {
      'fill-color': [
        'interpolate',
        ['linear'],
        ['get', 'korPct'],
        0.0,
        'white',
        0.1,
        '#c77dff',
        0.2,
        '#9d4edd',
        0.3,
        '#7b2cbf',
        0.4,
        '#5a189a',
        0.5,
        '#3c096c'
      ],
      'fill-outline-color': '#ccc',
      'fill-opacity': 0.8
    }
  }, 'waterway-label');


  // add French and Haitian Creole to map
  map.addLayer({
    'id': 'fr-fill',
    'type': 'fill',
    'source': 'language-data',
    'layout': {},
    'paint': {
      'fill-color': [
        'interpolate',
        ['linear'],
        ['get', 'frPct'],
        0.0,
        'white',
        0.1,
        '#c77dff',
        0.2,
        '#9d4edd',
        0.3,
        '#7b2cbf',
        0.4,
        '#5a189a',
        0.5,
        '#3c096c'
      ],
      'fill-outline-color': '#ccc',
      'fill-opacity': 0.8
    }
  }, 'waterway-label');

  // add Russian and other Slavic languages to map
  map.addLayer({
    'id': 'ru-fill',
    'type': 'fill',
    'source': 'language-data',
    'layout': {},
    'paint': {
      'fill-color': [
        'interpolate',
        ['linear'],
        ['get', 'ruPct'],
        0.0,
        'white',
        0.1,
        '#c77dff',
        0.2,
        '#9d4edd',
        0.3,
        '#7b2cbf',
        0.4,
        '#5a189a',
        0.5,
        '#3c096c'
      ],
      'fill-outline-color': '#ccc',
      'fill-opacity': 0.8
    }
  }, 'waterway-label');


  // add Arabic to map
  map.addLayer({
    'id': 'ar-fill',
    'type': 'fill',
    'source': 'language-data',
    'layout': {},
    'paint': {
      'fill-color': [
        'interpolate',
        ['linear'],
        ['get', 'arPct'],
        0.0,
        'white',
        0.1,
        '#c77dff',
        0.2,
        '#9d4edd',
        0.3,
        '#7b2cbf',
        0.4,
        '#5a189a',
        0.5,
        '#3c096c'
      ],
      'fill-outline-color': '#ccc',
      'fill-opacity': 0.8
    }
  }, 'waterway-label');

  // add Yiddish to map
  map.addLayer({
    'id': 'ger-fill',
    'type': 'fill',
    'source': 'language-data',
    'layout': {},
    'paint': {
      'fill-color': [
        'interpolate',
        ['linear'],
        ['get', 'gerPct'],
        0.0,
        'white',
        0.1,
        '#c77dff',
        0.2,
        '#9d4edd',
        0.3,
        '#7b2cbf',
        0.4,
        '#5a189a',
        0.5,
        '#3c096c'
      ],
      'fill-outline-color': '#ccc',
      'fill-opacity': 0.8
    }
  }, 'waterway-label');

  // add a layer to style and display the Source
  map.addLayer({
    'id': 'noEng-fill',
    'type': 'fill',
    'source': 'language-data',
    'layout': {
      ///make layer visible by default
      'visibility': 'visible',
    },
    'paint': {
      "fill-color": ['interpolate',
        ['linear'],
        ['get', 'noEngPct'],
        0.0,
        'white',
        0.1,
        '#c77dff',
        0.2,
        '#9d4edd',
        0.3,
        '#7b2cbf',
        0.4,
        '#5a189a',
        0.5,
        '#3c096c'
      ],
      'fill-outline-color': '#ccc',
      'fill-opacity': 0.8
    }
  }, 'waterway-label');

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

  // Add in all the button click actions, hiding all other layers except for the one that's clicked,
  // changing the popup popupContent
  // and changing the Legend Bar colors
  $('#noEng').on('click', function() {

    map.setLayoutProperty('noEng-fill', 'visibility', 'visible');
    map.setLayoutProperty('sp-fill', 'visibility', 'none');
    map.setLayoutProperty('ch-fill', 'visibility', 'none');
    map.setLayoutProperty('kor-fill', 'visibility', 'none');
    map.setLayoutProperty('fr-fill', 'visibility', 'none');
    map.setLayoutProperty('ru-fill', 'visibility', 'none');
    map.setLayoutProperty('ar-fill', 'visibility', 'none');
    map.setLayoutProperty('ger-fill', 'visibility', 'none');

    //Inject language header into the infobox
    $('#subjecthead').text('All LEPs');
    // Inject description into the sidebar
    $('#infofill').text(noengdescription);

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

  });

  $('#sp').on('click', function() {

    map.setLayoutProperty('noEng-fill', 'visibility', 'none');
    map.setLayoutProperty('sp-fill', 'visibility', 'visible');
    map.setLayoutProperty('ch-fill', 'visibility', 'none');
    map.setLayoutProperty('kor-fill', 'visibility', 'none');
    map.setLayoutProperty('fr-fill', 'visibility', 'none');
    map.setLayoutProperty('ru-fill', 'visibility', 'none');
    map.setLayoutProperty('ar-fill', 'visibility', 'none');
    map.setLayoutProperty('ger-fill', 'visibility', 'none');

    //Inject language header into the infobox
    $('#subjecthead').text('Spanish-speaking LEPs');
    // Inject description into the sidebar
    $('#infofill').text(spdescription);

  });

  $('#ch').on('click', function() {

    map.setLayoutProperty('noEng-fill', 'visibility', 'none');
    map.setLayoutProperty('sp-fill', 'visibility', 'none');
    map.setLayoutProperty('ch-fill', 'visibility', 'visible');
    map.setLayoutProperty('kor-fill', 'visibility', 'none');
    map.setLayoutProperty('fr-fill', 'visibility', 'none');
    map.setLayoutProperty('ru-fill', 'visibility', 'none');
    map.setLayoutProperty('ar-fill', 'visibility', 'none');
    map.setLayoutProperty('ger-fill', 'visibility', 'none');

    //Inject language header into the infobox
    $('#subjecthead').text('Chinese-speaking LEPs');
    // Inject description into the sidebar
    $('#infofill').text(chdescription);

  });

  $('#kor').on('click', function() {

    map.setLayoutProperty('noEng-fill', 'visibility', 'none');
    map.setLayoutProperty('sp-fill', 'visibility', 'none');
    map.setLayoutProperty('ch-fill', 'visibility', 'none');
    map.setLayoutProperty('kor-fill', 'visibility', 'visible');
    map.setLayoutProperty('fr-fill', 'visibility', 'none');
    map.setLayoutProperty('ru-fill', 'visibility', 'none');
    map.setLayoutProperty('ar-fill', 'visibility', 'none');
    map.setLayoutProperty('ger-fill', 'visibility', 'none');

    //Inject language header into the infobox
    $('#subjecthead').text('Korean-speaking LEPs');
    // Inject description into the sidebar
    $('#infofill').text(kordescription);

  });

  $('#fr').on('click', function() {

    map.setLayoutProperty('noEng-fill', 'visibility', 'none');
    map.setLayoutProperty('sp-fill', 'visibility', 'none');
    map.setLayoutProperty('ch-fill', 'visibility', 'none');
    map.setLayoutProperty('kor-fill', 'visibility', 'none');
    map.setLayoutProperty('fr-fill', 'visibility', 'visible');
    map.setLayoutProperty('ru-fill', 'visibility', 'none');
    map.setLayoutProperty('ar-fill', 'visibility', 'none');
    map.setLayoutProperty('ger-fill', 'visibility', 'none');

    //Inject language header into the infobox
    $('#subjecthead').text('French-speaking LEPs');
    // Inject description into the sidebar
    $('#infofill').text(frdescription);

  });

  $('#ru').on('click', function() {

    map.setLayoutProperty('noEng-fill', 'visibility', 'none');
    map.setLayoutProperty('sp-fill', 'visibility', 'none');
    map.setLayoutProperty('ch-fill', 'visibility', 'none');
    map.setLayoutProperty('kor-fill', 'visibility', 'none');
    map.setLayoutProperty('fr-fill', 'visibility', 'none');
    map.setLayoutProperty('ru-fill', 'visibility', 'visible');
    map.setLayoutProperty('ar-fill', 'visibility', 'none');
    map.setLayoutProperty('ger-fill', 'visibility', 'none');

    //Inject language header into the infobox
    $('#subjecthead').text('Russian-speaking LEPs');
    // Inject description into the sidebar
    $('#infofill').text(rudescription);

  });

  $('#ar').on('click', function() {

    map.setLayoutProperty('noEng-fill', 'visibility', 'none');
    map.setLayoutProperty('sp-fill', 'visibility', 'none');
    map.setLayoutProperty('ch-fill', 'visibility', 'none');
    map.setLayoutProperty('kor-fill', 'visibility', 'none');
    map.setLayoutProperty('fr-fill', 'visibility', 'none');
    map.setLayoutProperty('ru-fill', 'visibility', 'none');
    map.setLayoutProperty('ar-fill', 'visibility', 'visible');
    map.setLayoutProperty('ger-fill', 'visibility', 'none');

    //Inject language header into the infobox
    $('#subjecthead').text('Arabic-Speaking LEPs');
    // Inject description into the sidebar
    $('#infofill').text(ardescription);

  });

  $('#ger').on('click', function() {

    map.setLayoutProperty('noEng-fill', 'visibility', 'none');
    map.setLayoutProperty('sp-fill', 'visibility', 'none');
    map.setLayoutProperty('ch-fill', 'visibility', 'none');
    map.setLayoutProperty('kor-fill', 'visibility', 'none');
    map.setLayoutProperty('fr-fill', 'visibility', 'none');
    map.setLayoutProperty('ru-fill', 'visibility', 'none');
    map.setLayoutProperty('ar-fill', 'visibility', 'none');
    map.setLayoutProperty('ger-fill', 'visibility', 'visible');

    //Inject language header into the infobox
    $('#subjecthead').text('Yiddish-speaking LEPs');
    // Inject description into the sidebar
    $('#infofill').text(gerdescription);

  });

  // Change the cursor to a pointer when the mouse is over the states layer.
  map.on('mouseenter', 'boroughs', function() {
    map.getCanvas().style.cursor = 'pointer';
  })

  // Change it back to a pointer when it leaves.
  map.on('mouseleave', 'boroughs', function() {
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
