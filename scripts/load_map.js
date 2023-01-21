//import styling and colormaps here
import {
  heatmap2colormap,
  landuse2colormap,
  zoning2colormap,
} from "./load_colormaps.js";

import {
  pointToCircle,
  styleBikeTrails,
  styleCityContours,
  styleCityLimits,
  styleCityParks,
  styleCityTrails,
  styleHistoricPlaces,
  styleLandfills,
  styleNeighborhood,
  styleOpenSpaces,
  stylePoliceBeats,
  stylePoliceIncidents,
  styleRecyclingDropoff,
  styleStateCleanup,
  styleTransitRoutes,
  styleTransitStops,
  styleWaterCover,
  styleZipCodes,
} from "./load_style_options.js";

("use strict"); // JS strict mode

// first load popup modal, then load data
$('#aboutMapModal').modal('show');

window.onload = function () {
  // POINTS AND POLYGONS
  // bike trail data
  const bikeTrails = L.geoJSON(biketrails, {
    style: styleBikeTrails,
  });

  // contours data
  const cityContours = L.geoJSON(citycontours, {
    style: styleCityContours,
  });

  // city limits data
  const cityLimits = L.geoJSON(citylimits, {
    //onEachFeature: cityLimitsPopups,
    style: styleCityLimits,
  });

  // city parks data
  const cityParks = L.geoJSON(cityparks, {
    style: styleCityParks,
  });

  // city trails data
  const cityTrails = L.geoJSON(citytrails, {
    style: styleCityTrails,
  });

  // heatmap data
  const heatmapAfternoon = L.geoJSON(heatmapPM, {
    style: heatmap2colormap,
    name: "heatmap_pm",
  });

  const heatmapMorning = L.geoJSON(heatmapAM, {
    style: heatmap2colormap,
    name: "heatmap_am",
  });

  // historic places data
  const historicPlaces = L.geoJSON(historicplaces, {
    style: styleHistoricPlaces,
  });

  // landfill data
  const abqLandfills = L.geoJSON(landfills, {
    style: styleLandfills,
  });

  // landfill buffer data
  const abqLandfillBuffers = L.geoJSON(landfillbuffers, {
    style: styleLandfills,
  });

  /*
  // land use data
   const landUse = L.geoJSON(landuse, {
    style: landuse2colormap,
  });
  */

  // neighborhoods data
  const neighborhoodAssociations = L.geoJSON(neighborhoods, {
    style: styleNeighborhood,
  });

  // open spaces data
  const openSpaces = L.geoJSON(openspaces, {
    style: styleOpenSpaces,
  });

  // apd police beats data
  const policeBeats = L.geoJSON(policebeats, {
    //onEachFeature: apdBeatsPopups,
    style: stylePoliceBeats,
  });

  // police incidents data
  const policeIncidents = L.geoJSON(policeincidents, {
    //onEachFeature: policeIncidentsPopups,
    pointToLayer: pointToCircle,
    style: stylePoliceIncidents,
  });

  // recycling dropoff sites data
  const recyclingDropoff = L.geoJSON(recyclingdropoff, {
    pointToLayer: pointToCircle,
    style: styleRecyclingDropoff,
  });

  // state cleanup program sites data
  const stateCleanup = L.geoJSON(statecleanup, {
    pointToLayer: pointToCircle,
    style: styleStateCleanup,
  });

  // transit stops data
  const transitStops = L.geoJSON(transitstops, {
    pointToLayer: pointToCircle,
    style: styleTransitStops,
  });

  // transit routes data
  const transitRoutes = L.geoJSON(transitroutes, {
    style: styleTransitRoutes,
  });

  // water data
  const waterCover = L.geoJSON(watercover, {
    style: styleWaterCover,
  });

  // zipcode data
  const zipCodes = L.geoJSON(zipcodes, {
    style: styleZipCodes,
  });

  // zoning data
  /*
   const ido_zoning = L.geoJSON(zoning, {
    style: zoning2colormap,
  });
*/
  // add layer for drawing lines and polygons
  var drawnItems = L.featureGroup();

  // add point and polygon data to aggregate layer
  var overlaysTree = [
    {
      label: 'Municipal and state',
      collapsed: true,
      children: [
        // { label: "Drawn Items", layer: drawnItems },
        { label: "City Limits", layer: cityLimits },
        { label: "Contours (50ft)", layer: cityContours },
        { label: "Historic Places", layer: historicPlaces },
        //{ label: "IDO Zoning", layer: ido_zoning },
        //{ label: "Land Use", layer: landUse },
        { label: "Neighborhoods", layer: neighborhoodAssociations },
        { label: "Zip Codes", layer: zipCodes },
      ]
    }, 
    {
      label: 'Demographic',
      collapsed: true,
      children: [
      ]
    }, 
    {
      label: "Environment",
      collapsed: true,
      children: [
        { label: "Heatmap - AM", layer: heatmapMorning },
        { label: "Heatmap - PM", layer: heatmapAfternoon },
        { label: "Open Spaces", layer: openSpaces },
        { label: "Parks", layer: cityParks },
        { label: "Water Cover (2010)", layer: waterCover },
      ]
    },
    {
      label: 'Waste and pollution',
      collapsed: true,
      children: [
        { label: "Landfills", layer: abqLandfills },
        { label: "Landfill Buffers", layer: abqLandfillBuffers },
        { label: "Recycling Dropoff Sites", layer: recyclingDropoff },
        { label: "State Cleanup Program Sites", layer: stateCleanup },
      ]
    }, 
    {
      label: "Transportation",
      collapsed: true,
      children: [
        //{ label: "Streets", layer: abqStreets },
        { label: "Trails - Bike", layer: bikeTrails },
        { label: "Trails - Walk/Hike)", layer: cityTrails },
        { label: "Transit Routes", layer: transitRoutes },
        { label: "Transit Stops", layer: transitStops },
      ]
    },
    {
      label: 'Food access',
      collapsed: true,
      children: [
      ]
    },
    {
      label: 'Energy transition',
      collapsed: true,
      children: [
      ]
    },
    {
      label: 'Internet connectivity',
      collapsed: true,
      children: [
      ]
    },
    {
      label: 'Prisons and policing',
      collapsed: true,
      children: [
        { label: "Police Beats", layer: policeBeats },
        { label: "Police Incidents", layer: policeIncidents },
      ]
    },
];

  // BASEMAPS
  // define basemaps here
  var basemapAttribution =
    'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';
  var basemapURL =
    "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw";

  var grayscale = L.tileLayer(basemapURL, {
    id: "mapbox/light-v9",
    attribution: basemapAttribution,
    tileSize: 512,
    zoomOffset: -1,
    maxZoom: 18,
  });

  var streets = L.tileLayer(basemapURL, {
    id: "mapbox/streets-v11",
    attribution: basemapAttribution,
    tileSize: 512,
    zoomOffset: -1,
    maxZoom: 18,
  });

  //at http://leaflet-extras.github.io/leaflet-providers/preview/
  var usgs_topo = L.tileLayer(
    "https://basemap.nationalmap.gov/arcgis/rest/services/USGSImageryOnly/MapServer/tile/{z}/{y}/{x}",
    {
      maxZoom: 20,
      attribution:
        'Tiles courtesy of the <a href="https://usgs.gov/">U.S. Geological Survey</a>',
    }
  );

  var basemapsTree = [
    {
      label: 'Base Layers',
      collapsed: true,
      children: [
        { label: 'Streets', layer: streets },
        { label: 'Grayscale', layer: grayscale },
        { label: 'Imagery', layer: usgs_topo },
      ]
    },
    // {
    //   // this "empty" layer creates a separator for the leaflet control between basemaps and overlays
    //   label: '<div class="leaflet-control-layers-separator"></div>'
    // }
  ];

  // create basemaps object, add map container
  var map = L.map("map_overlay_container", {
    center: [39.73, -104.99], //[35.08770657898809, -106.65591268675824]
    zoom: 11,
    layers: [streets, grayscale, usgs_topo],
  }).setView([35.08770657898809, -106.65591268675824], 11);


  // **** CONTROLS ****
  // combine basemaps and map overlays into one control
  var treeControl = L.control.layers.tree(basemapsTree, overlaysTree).addTo(map);

  // add mouse over coordinates to  map
  // default projection is EPSG4326
  var coordinatesControl = L.control
    .coordProjection({
      position: "bottomright",
    })
    .addTo(map);

  // add ruler to map
  var rulerControl = L.control.ruler().addTo(map);

  // add scale bar to map
  // var scaleControl = L.control.scale({position: 'topleft'}).addTo(map);
  var scaleControl = L.control.scale().addTo(map);

  // add Leaflet-Geoman controls with some options to the map
  var drawControl = map.pm.addControls({
    position: "topright",
    drawCircleMarker: false,
  });

  // this enables a polygon to auto-complete when the user double-clicks
  // you need both calls to enableDraw() and disableDraw() so that the plugin
  // does not start drawing automatically on map load
  map.pm.enableDraw("Polygon", {
    finishOn: "dblclick",
  });
  map.pm.disableDraw();

  // add heatmpa legends to map
  var amHeatmapControl = L.control({position: 'bottomleft'});
  var pmHeatmapControl = L.control({position: 'bottomleft'});

  amHeatmapControl.onAdd = function(map) {
    var div = L.DomUtil.create('div', 'info legend');
    var amTemperatures = ['62', '64', '66', '68', '70', '72', '74', '76', '78', '80'];
    var amTemperatureColors = ['#313695', '#3b54a4', '#4472b3', '#598dc0', '#70a8ce', '#89beda', '#a3d3e6', '#bde2ee', '#d6eef5', '#e9f6e8']

    for (var i = 0; i < amTemperatureColors.length; i++) {
      div.innerHTML += '<div class="rectangle" style="background-color:' + amTemperatureColors[i] + '"></div> ' + ""
    }
    div.innerHTML += "<br>"

    for (var i = 0; i < amTemperatures.length; i++) {
      div.innerHTML += '<div>' + amTemperatures[i] + '</div>'
    }

    return div;
  };

    pmHeatmapControl.onAdd = function(map) {
      var div = L.DomUtil.create('div', 'info legend');
      var pmTemperatures = ['82', '84', '86', '88', '90', '92', '94', '96', '98', '100', '102', '>104'];
      var pmTemperatureColors = ['#f8fccd', '#fff8b4', '#fee99d', '#fed687', '#fdbf71', '#fca55d', '#f7864e', '#f16740', '#e34a33', '#d52e27', '#bd1726', '#a50026']
    
      for (var i = 0; i < pmTemperatureColors.length; i++) {
        div.innerHTML += '<div class="rectangle" style="background-color:' + pmTemperatureColors[i] + '"></div> ' + ""
      }
      div.innerHTML += "<br>"
  
      for (var i = 0; i < pmTemperatures.length; i++) {
        div.innerHTML += '<div>' + pmTemperatures[i] + '</div>'
      }

      return div;
    };


  // add printing function to map here using easyPrint plugin
  var printerControl = L.easyPrint({
    // i think adding one baselayer will work for every basemap
    tileLayer: streets,
    sizeModes: ["Current", "A4Landscape", "A4Portrait"],
    filename: "abq_map_overlay",
    exportOnly: true,
    hideControlContainer: true,
  }).addTo(map);

  // add a fullscreen button
  var fullscreenControl = L.control
    .fullscreen({
      position: "topleft", // change the position of the button can be topleft, topright, bottomright or bottomleft, default topleft
      title: "Show me the fullscreen !", // change the title of the button, default Full Screen
      titleCancel: "Exit fullscreen mode", // change the title of the button when fullscreen is on, default Exit Full Screen
      content: null, // change the content of the button, can be HTML, default null
      forceSeparateButton: true, // force separate button to detach from zoom buttons, default false
      forcePseudoFullscreen: true, // force use of pseudo full screen even if full screen API is available, default false
      fullscreenElement: false, // Dom element to render in full screen, false by default, fallback to map._container
    })
    .addTo(map);

  // **** MAP EVENT LISTENERS ****
  // events are fired when entering or exiting fullscreen.
  map.on("enterFullscreen", function () {
    console.log("entered fullscreen");
  });

  map.on("exitFullscreen", function () {
    console.log("exited fullscreen");
  });

  // add legend when layer is added
  map.on('overlayadd', function (eventLayer) {
    // turn legend on depending on which heatmap is added
    if (eventLayer.layer.options.name === 'heatmap_am') {
      amHeatmapControl.addTo(this);
    }
    if (eventLayer.layer.options.name === 'heatmap_pm') {
      pmHeatmapControl.addTo(this);
    }
  });

  // remove legend when layer is added
  map.on('overlayremove', function (eventLayer) {
    // turn legend off depending on which heatmap is removed
    if (eventLayer.layer.options.name === 'heatmap_am') {
      this.removeControl(amHeatmapControl);
    }
    if (eventLayer.layer.options.name === 'heatmap_pm') {
      this.removeControl(pmHeatmapControl);
    }
  });
  
};
