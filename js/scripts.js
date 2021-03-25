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

// colorsets for legendbar
var noEngcolors = ['#f1eef6', '#bdc9e1', '#74a9cf', '#2b8cbe', '#045a8d'];
var spcolors = ['#fef0d9', '#fdcc8a', '#fc8d59', '#e34a33', '#b30000'];
var chcolors= ['#f2f0f7', '#cbc9e2', '#9e9ac8', '#756bb1', '#54278f'];
var korcolors = ['#f7f7f7', '#cccccc', '#969696', '#636363', '#252525'];
var frcolors = ['#feebe2', '#fbb4b9', '#f768a1', '#c51b8a', '#7a0177'];
var rucolors = ['#f6eff7', '#bdc9e1', '#67a9cf', '#1c9099', '#016c59'];
var arcolors = ['#ffffd4', '#fed98e', '#fe9929', '#d95f0e', '#993404'];
var gercolors = ['#fee5d9', '#fcae91', '#fb6a4a', '#de2d26', '#a50f15'];

// desciptions of each linguistic group
var noengdescription = [
  'This includes all individuals 5 years and over who with low English proficiency, no matter their native language.'
];
var spdescription = [
  'This includes all those who speak Spanish and do not speak English proficiently.'
];
var chdescription = [
  'This includes speakers of all dialects of Chinese (Mandarin and Cantonese, etc.).'
];
var kordescription = [
  'This includes those who speak Korean.'
];
var frdescription = [
  'This includes those who speak French and Haitian Creole. Many Haitian Creole speakers also speak some French.'
];
var rudescription = [
  'This includes all speakers of Slavic Languages. Russian predominates in most of New York City, but there are also significant concentrations of Polish and Serbo-Croatian speakers in North Brooklyn and Queens.'
];
var ardescription = [
  'This includes those who speak any dialect of Arabic..'
];
var gerdescription = [
  'This includes those who speak Yiddish, German or other German dialects like Pennsylvania Dutch. In New York, Yiddish strongly dominates this category..'
];

map.on('style.load', function() {
  // add a geojson source
  map.addSource('language-data', {
    type: 'geojson',
    data: 'data/language-at-home1.geojson'
  });

  // add a layer to style and display the Source
  map.addLayer({
    'id': 'noEng-fill',
    'type': 'fill',
    'source': 'language-data',
    'layout': {},
    'paint': {
      "fill-color": ["step",
        ["get", "notEngPct"],
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
        0.1,
        '#b30000',
        0.2,
        '#e34a33',
        0.3,
        '#fc8d59',
        0.4,
        '#fdcc8a',
        0.5,
        '#fef0d9'
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
        0.1,
        '#54278f',
        0.2,
        '#756bb1',
        0.3,
        '#9e9ac8',
        0.4,
        '#cbc9e2',
        0.5,
        '#f2f0f7'
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
        0.1,
        '#252525',
        0.2,
        '#636363',
        0.3,
        '#969696',
        0.4,
        '#cccccc',
        0.5,
        '#f7f7f7'
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
        0.1,
        '#7a0177',
        0.2,
        '#c51b8a',
        0.3,
        '#f768a1',
        0.4,
        '#fbb4b9',
        0.5,
        '#feebe2'
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
        0.1,
        '#016c59',
        0.2,
        '#1c9099',
        0.3,
        '#67a9cf',
        0.4,
        '#bdc9e1',
        0.5,
        '#f6eff7'
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
        0.1,
        '#993404',
        0.2,
        '#d95f0e',
        0.3,
        '#fe9929',
        0.4,
        '#fed98e',
        0.5,
        '#ffffd4'
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
        0.1,
        '#a50f15',
        0.2,
        '#de2d26',
        0.3,
        '#fb6a4a',
        0.4,
        '#fcae91',
        0.5,
        '#fee5d9'
      ],
      'fill-outline-color': '#ccc',
      'fill-opacity': 0.8
    }
  }, 'waterway-label');

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
  // Adjust Legend
  $('#legendbar1').css({
    'background-color': noEngcolors[4]
  });
  $('#legendbar2').css({
    'background-color': noEngcolors[3]
  });
  $('#legendbar3').css({
    'background-color': noEngcolors[2]
  });
  $('#legendbar4').css({
    'background-color': noEngcolors[1]
  });
  $('#legendbar5').css({
    'background-color': noEngcolors[0]
  });

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
  // Adjust Legend
  $('#legendbar1').css({
    'background-color': spcolors[4]
  });
  $('#legendbar2').css({
    'background-color': spcolors[3]
  });
  $('#legendbar3').css({
    'background-color': spcolors[2]
  });
  $('#legendbar4').css({
    'background-color': spcolors[1]
  });
  $('#legendbar5').css({
    'background-color': spcolors[0]
  });

  //Inject language header into the infobox
  $('#subjecthead').text('Spanish-speaking LEPs');
  // Inject description into the sidebar
  $('#infofill').text(spdescription);

  // Pop up code for all LEPs. Have to nest inside this click function so that
  // the pop-up content will change as the user clicks through the different layers
  map.on('mousemove', function(e) {

    var features = map.queryRenderedFeatures(e.point, {
      layers: ['sp-fill'],
    });

    if (features.length > 0) {
      // show the popup
      // Populate the popup and set its coordinates
      // based on the feature found.

      var hoveredFeature = features[0]
      var censusTract = hoveredFeature.properties.geo
      var totalPop = hoveredFeature.properties.Tot
      var spPop = hoveredFeature.properties.SP_NOT


      var popupContent = `
                                 <div>
                                       <h5>Spanish-Speaking LEPs</h5> </br>
                                       <b>${geo}</b><br/>
                                       <b>Total Population</b>: ${Tot} ppb <br/>
                                       <b>LEPs</b>: ${SP_NOT}<br/>
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

$('#ch').on('click', function() {

  map.setLayoutProperty('noEng-fill', 'visibility', 'none');
  map.setLayoutProperty('sp-fill', 'visibility', 'none');
  map.setLayoutProperty('ch-fill', 'visibility', 'visible');
  map.setLayoutProperty('kor-fill', 'visibility', 'none');
  map.setLayoutProperty('fr-fill', 'visibility', 'none');
  map.setLayoutProperty('ru-fill', 'visibility', 'none');
  map.setLayoutProperty('ar-fill', 'visibility', 'none');
  map.setLayoutProperty('ger-fill', 'visibility', 'none');
  // Adjust Legend
  $('#legendbar1').css({
    'background-color': chcolors[4]
  });
  $('#legendbar2').css({
    'background-color': chcolors[3]
  });
  $('#legendbar3').css({
    'background-color': chcolors[2]
  });
  $('#legendbar4').css({
    'background-color': chcolors[1]
  });
  $('#legendbar5').css({
    'background-color': chcolors[0]
  });

  //Inject language header into the infobox
  $('#subjecthead').text('Chinese-speaking LEPs');
  // Inject description into the sidebar
  $('#infofill').text(chdescription);

  // Pop up code for all LEPs. Have to nest inside this click function so that
  // the pop-up content will change as the user clicks through the different layers
  map.on('mousemove', function(e) {

    var features = map.queryRenderedFeatures(e.point, {
      layers: ['ch-fill'],
    });

    if (features.length > 0) {
      // show the popup
      // Populate the popup and set its coordinates
      // based on the feature found.

      var hoveredFeature = features[0]
      var censusTract = hoveredFeature.properties.geo
      var totalPop = hoveredFeature.properties.Tot
      var chPop = hoveredFeature.properties.CH_NOT


      var popupContent = `
                                 <div>
                                       <h5>Chinese-Speaking LEPs</h5> </br>
                                       <b>${geo}</b><br/>
                                       <b>Total Population</b>: ${Tot}<br/>
                                       <b>LEPs</b>: ${CH_NOT}<br/>
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

$('#kor').on('click', function() {

  map.setLayoutProperty('noEng-fill', 'visibility', 'none');
  map.setLayoutProperty('sp-fill', 'visibility', 'none');
  map.setLayoutProperty('ch-fill', 'visibility', 'none');
  map.setLayoutProperty('kor-fill', 'visibility', 'visible');
  map.setLayoutProperty('fr-fill', 'visibility', 'none');
  map.setLayoutProperty('ru-fill', 'visibility', 'none');
  map.setLayoutProperty('ar-fill', 'visibility', 'none');
  map.setLayoutProperty('ger-fill', 'visibility', 'none');
  // Adjust Legend
  $('#legendbar1').css({
    'background-color': korcolors[4]
  });
  $('#legendbar2').css({
    'background-color': korcolors[3]
  });
  $('#legendbar3').css({
    'background-color': korcolors[2]
  });
  $('#legendbar4').css({
    'background-color': korcolors[1]
  });
  $('#legendbar5').css({
    'background-color': korcolors[0]
  });

  //Inject language header into the infobox
  $('#subjecthead').text('Korean-speaking LEPs');
  // Inject description into the sidebar
  $('#infofill').text(kordescription);

  // Pop up code for all LEPs. Have to nest inside this click function so that
  // the pop-up content will change as the user clicks through the different layers
  map.on('mousemove', function(e) {

    var features = map.queryRenderedFeatures(e.point, {
      layers: ['kor-fill'],
    });

    if (features.length > 0) {
      // show the popup
      // Populate the popup and set its coordinates
      // based on the feature found.

      var hoveredFeature = features[0]
      var censusTract = hoveredFeature.properties.geo
      var totalPop = hoveredFeature.properties.Tot
      var lepPop = hoveredFeature.properties.KOR_NOT


      var popupContent = `
                                 <div>
                                       <h5>Korean-Speaking LEPs</h5> </br>
                                       <b>${geo}</b><br/>
                                       <b>Total Population</b>: ${Tot}<br/>
                                       <b>LEPs</b>: ${KR_NOT}<br/>
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

$('#fr').on('click', function() {

  map.setLayoutProperty('noEng-fill', 'visibility', 'none');
  map.setLayoutProperty('sp-fill', 'visibility', 'none');
  map.setLayoutProperty('ch-fill', 'visibility', 'none');
  map.setLayoutProperty('kor-fill', 'visibility', 'none');
  map.setLayoutProperty('fr-fill', 'visibility', 'visible');
  map.setLayoutProperty('ru-fill', 'visibility', 'none');
  map.setLayoutProperty('ar-fill', 'visibility', 'none');
  map.setLayoutProperty('ger-fill', 'visibility', 'none');
  // Adjust Legend
  $('#legendbar1').css({
    'background-color': frcolors[4]
  });
  $('#legendbar2').css({
    'background-color': frcolors[3]
  });
  $('#legendbar3').css({
    'background-color': frcolors[2]
  });
  $('#legendbar4').css({
    'background-color': frcolors[1]
  });
  $('#legendbar5').css({
    'background-color': frcolors[0]
  });

  //Inject language header into the infobox
  $('#subjecthead').text('French-speaking LEPs');
  // Inject description into the sidebar
  $('#infofill').text(kordescription);

  // Pop up code for all LEPs. Have to nest inside this click function so that
  // the pop-up content will change as the user clicks through the different layers
  map.on('mousemove', function(e) {

    var features = map.queryRenderedFeatures(e.point, {
      layers: ['fr-fill'],
    });

    if (features.length > 0) {
      // show the popup
      // Populate the popup and set its coordinates
      // based on the feature found.

      var hoveredFeature = features[0]
      var censusTract = hoveredFeature.properties.geo
      var totalPop = hoveredFeature.properties.Tot
      var frenPop = hoveredFeature.properties.FR_HA_NOT


      var popupContent = `
                                 <div>
                                       <h5>French-Speaking LEPs</h5> </br>
                                       <b>${geo}</b><br/>
                                       <b>Total Population</b>: ${Tot}<br/>
                                       <b>LEPs</b>: ${FR_HA_NOT}<br/>
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

$('#ru').on('click', function() {

  map.setLayoutProperty('noEng-fill', 'visibility', 'none');
  map.setLayoutProperty('sp-fill', 'visibility', 'none');
  map.setLayoutProperty('ch-fill', 'visibility', 'none');
  map.setLayoutProperty('kor-fill', 'visibility', 'none');
  map.setLayoutProperty('fr-fill', 'visibility', 'none');
  map.setLayoutProperty('ru-fill', 'visibility', 'visible');
  map.setLayoutProperty('ar-fill', 'visibility', 'none');
  map.setLayoutProperty('ger-fill', 'visibility', 'none');
  // Adjust Legend
  $('#legendbar1').css({
    'background-color': rucolors[4]
  });
  $('#legendbar2').css({
    'background-color': rucolors[3]
  });
  $('#legendbar3').css({
    'background-color': rucolors[2]
  });
  $('#legendbar4').css({
    'background-color': rucolors[1]
  });
  $('#legendbar5').css({
    'background-color': rucolors[0]
  });

  //Inject language header into the infobox
  $('#subjecthead').text('French-speaking LEPs');
  // Inject description into the sidebar
  $('#infofill').text(kordescription);

  // Pop up code for all LEPs. Have to nest inside this click function so that
  // the pop-up content will change as the user clicks through the different layers
  map.on('mousemove', function(e) {

    var features = map.queryRenderedFeatures(e.point, {
      layers: ['ru-fill'],
    });

    if (features.length > 0) {
      // show the popup
      // Populate the popup and set its coordinates
      // based on the feature found.

      var hoveredFeature = features[0]
      var censusTract = hoveredFeature.properties.geo
      var totalPop = hoveredFeature.properties.Tot
      var frenPop = hoveredFeature.properties.RU_PO_SL_N


      var popupContent = `
                                 <div>
                                       <h5>Slavic-Speaking LEPs</h5> </br>
                                       <b>${geo}</b><br/>
                                       <b>Total Population</b>: ${Tot}<br/>
                                       <b>LEPs</b>: ${RU_PO_SL_N}<br/>
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

$('#ar').on('click', function() {

  map.setLayoutProperty('noEng-fill', 'visibility', 'none');
  map.setLayoutProperty('sp-fill', 'visibility', 'none');
  map.setLayoutProperty('ch-fill', 'visibility', 'none');
  map.setLayoutProperty('kor-fill', 'visibility', 'none');
  map.setLayoutProperty('fr-fill', 'visibility', 'none');
  map.setLayoutProperty('ru-fill', 'visibility', 'none');
  map.setLayoutProperty('ar-fill', 'visibility', 'visible');
  map.setLayoutProperty('ger-fill', 'visibility', 'none');
  // Adjust Legend
  $('#legendbar1').css({
    'background-color': arcolors[4]
  });
  $('#legendbar2').css({
    'background-color': arcolors[3]
  });
  $('#legendbar3').css({
    'background-color': arcolors[2]
  });
  $('#legendbar4').css({
    'background-color': arcolors[1]
  });
  $('#legendbar5').css({
    'background-color': arcolors[0]
  });

  //Inject language header into the infobox
  $('#subjecthead').text('Arabic-Speaking LEPs');
  // Inject description into the sidebar
  $('#infofill').text(kordescription);

  // Pop up code for all LEPs. Have to nest inside this click function so that
  // the pop-up content will change as the user clicks through the different layers
  map.on('mousemove', function(e) {

    var features = map.queryRenderedFeatures(e.point, {
      layers: ['ar-fill'],
    });

    if (features.length > 0) {
      // show the popup
      // Populate the popup and set its coordinates
      // based on the feature found.

      var hoveredFeature = features[0]
      var censusTract = hoveredFeature.properties.geo
      var totalPop = hoveredFeature.properties.Tot
      var frenPop = hoveredFeature.properties.AB_NOT


      var popupContent = `
                                 <div>
                                       <h5>Arabic-Speaking LEPs</h5> </br>
                                       <b>${geo}</b><br/>
                                       <b>Total Population</b>: ${Tot}<br/>
                                       <b>LEPs</b>: ${AB_NOT}<br/>
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

$('#ger').on('click', function() {

  map.setLayoutProperty('noEng-fill', 'visibility', 'none');
  map.setLayoutProperty('sp-fill', 'visibility', 'none');
  map.setLayoutProperty('ch-fill', 'visibility', 'none');
  map.setLayoutProperty('kor-fill', 'visibility', 'none');
  map.setLayoutProperty('fr-fill', 'visibility', 'none');
  map.setLayoutProperty('ru-fill', 'visibility', 'none');
  map.setLayoutProperty('ar-fill', 'visibility', 'none');
  map.setLayoutProperty('ger-fill', 'visibility', 'visible');
  // Adjust Legend
  $('#legendbar1').css({
    'background-color': gercolors[4]
  });
  $('#legendbar2').css({
    'background-color': gercolors[3]
  });
  $('#legendbar3').css({
    'background-color': gercolors[2]
  });
  $('#legendbar4').css({
    'background-color': gercolors[1]
  });
  $('#legendbar5').css({
    'background-color': gercolors[0]
  });

  //Inject language header into the infobox
  $('#subjecthead').text('Yiddish-speaking LEPs');
  // Inject description into the sidebar
  $('#infofill').text(kordescription);

  // Pop up code for all LEPs. Have to nest inside this click function so that
  // the pop-up content will change as the user clicks through the different layers
  map.on('mousemove', function(e) {

    var features = map.queryRenderedFeatures(e.point, {
      layers: ['ger-fill'],
    });

    if (features.length > 0) {
      // show the popup
      // Populate the popup and set its coordinates
      // based on the feature found.

      var hoveredFeature = features[0]
      var censusTract = hoveredFeature.properties.geo
      var totalPop = hoveredFeature.properties.Tot
      var frenPop = hoveredFeature.properties.GER_NOT


      var popupContent = `
                                 <div>
                                       <h5>Yiddish-speaking LEPs</h5> </br>
                                       <b>${geo}</b><br/>
                                       <b>Total Population</b>: ${Tot}<br/>
                                       <b>LEPs</b>: ${GER_NOT}<br/>
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
