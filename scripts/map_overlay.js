import { heatmap2colormap, landuse2colormap, zoning2colormap } from "./feature_colormaps.js";
import {
  pointToCircle, styleBikeTrails, styleCityContours, styleCityLimits, styleCityParks, 
  styleCityTrails, styleHistoricPlaces, styleLandfills, styleNeighborhood, 
  styleOpenSpaces, stylePoliceBeats, stylePoliceIncidents, styleStreets, 
  styleTransitRoutes, styleTransitStops, styleWaterCover, styleZipCodes
 } from "./feature_style_options.js";

"use strict"; // JS strict mode

window.onload = function () {
  // POINTS AND POLYGONS

  // bike trail data
  var bikeTrails = L.geoJSON(biketrails, {
    style: styleBikeTrails,
  });

  // contours data
  var cityContours = L.geoJSON(citycontours, {
    style: styleCityContours,
  });

  // city limits data
  var cityLimits = L.geoJSON(citylimits, {
    //onEachFeature: cityLimitsPopups,
    style: styleCityLimits,
  });

  // city parks data
  var cityParks = L.geoJSON(cityparks, {
    style: styleCityParks,
  });

  // city trails data
  var cityTrails = L.geoJSON(citytrails, {
    style: styleCityTrails,
  });

  // heatmap data
  var heatmapAfternoon = L.geoJSON(heatmapPM, {
    style: heatmap2colormap,
  });

  var heatmapMorning = L.geoJSON(heatmapAM, {
    style: heatmap2colormap,
  });

  // historic places data
  var historicPlaces = L.geoJSON(historicplaces, {
    style: styleHistoricPlaces,
  });

  // landfill data
  var abqLandfills = L.geoJSON(landfills, {
    style: styleLandfills,
  });

  /*
  // land use data
  var landUse = L.geoJSON(landuse, {
    style: landuse2colormap,
  });
  */

  // neighborhoods data
  var neighborhoodAssociations = L.geoJSON(neighborhoods, {
    style: styleNeighborhood,
  });

  // open spaces data
  var openSpaces = L.geoJSON(openspaces, {
    style: styleOpenSpaces,
  });

  // apd police beats data
  var policeBeats = L.geoJSON(policebeats, {
    //onEachFeature: apdBeatsPopups,
    style: stylePoliceBeats,
  });

  // police incidents data
  var policeIncidents = L.geoJSON(policeincidents, {
    //onEachFeature: policeIncidentsPopups,
    pointToLayer: pointToCircle,
    style: stylePoliceIncidents,
  });


  /*
  // streets data
  var abqStreets = L.geoJSON(streets, {
    style: styleStreets,
  });
  */

   // transit stops data
  var transitStops = L.geoJSON(transitstops, {
    pointToLayer: pointToCircle,
    style: styleTransitStops,
  });

  // transit routes data
  var transitRoutes = L.geoJSON(transitroutes, {
    style: styleTransitRoutes,
  });

  // water data
  var waterCover = L.geoJSON(watercover, {
    style: styleWaterCover,
  });

  // zipcode data
  var zipCodes = L.geoJSON(zipcodes, {
    style: styleZipCodes,
  });

  // zoning data
  /*
  var ido_zoning = L.geoJSON(zoning, {
    style: zoning2colormap,
  });
  */

  // add layer for drawing lines and polygons
  var drawnItems = L.featureGroup();

  // add point and polygon data to aggregate layer
  var overlayMaps = {
    "Drawn Items": drawnItems,

    "City Limits": cityLimits,
    "Contours (50ft)": cityContours,
    "Heatmap - AM": heatmapMorning,
    "Heatmap - PM": heatmapAfternoon,
    "Historic Places": historicPlaces,
    //"IDO Zoning": ido_zoning,
    "Landfills": abqLandfills,
    //"Land Use": landUse,
    "Neighborhoods": neighborhoodAssociations,
    "Open Spaces": openSpaces,
    "Parks": cityParks,
    "Police Beats": policeBeats,
    "Police Incidents": policeIncidents,
    //"Streets": abqStreets,
    "Trails - Bike": bikeTrails,
    "Trails - Walk/Hike": cityTrails,
    "Transit Routes": transitRoutes,
    "Transit Stops": transitStops,
    "Water Cover (2010)": waterCover,
    "Zip Codes": zipCodes,
  };

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
  var usgs_topo = L.tileLayer('https://basemap.nationalmap.gov/arcgis/rest/services/USGSImageryOnly/MapServer/tile/{z}/{y}/{x}', {
    maxZoom: 20,
    attribution: 'Tiles courtesy of the <a href="https://usgs.gov/">U.S. Geological Survey</a>'
  });

  // create map container, add basemap
  var map = L.map("map_overlay_container", {
    center: [39.73, -104.99], //[35.08770657898809, -106.65591268675824]
    zoom: 11,
    layers: [streets, grayscale, usgs_topo],
  }).setView([35.08770657898809, -106.65591268675824], 11);

  var baseMaps = {
    Streets: streets,
    Grayscale: grayscale,
    Imagery: usgs_topo,
  };

  // set options for up and down arrows
  var toggleImageOptions = {
    "up": "/media/caret-up-solid.svg",
    "down": "/media/caret-down-solid.svg"
  };

  // access toggle h3 and image element
  var toggleHeading = document.getElementById("toggleHeading");
  var toggleImage = document.getElementById("toggleImage");
  // Note: right now, you have to change the value of BOTH dischargeDisplay and dischargeDisplayValue
  toggleHeading.onclick = function () {
    // change toggle image
    if(toggleImage.src.endsWith(toggleImageOptions.up)) {
      toggleImage.src = ".." + toggleImageOptions.down;
    } else {
      toggleImage.src = ".." + toggleImageOptions.up;
    }
  }

  // **** CONTROLS ****
  // combine basemaps and map overlays
  var layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);

  // add mouse over coordinates to  map
  // default projection is EPSG4326
  var coordinatesControl = L.control.coordProjection({
    position: 'bottomright'
  }).addTo(map);

  // add scale bar to map
  var scaleControl = L.control.scale().addTo(map);

  // add ruler to map
  var rulerControl = L.control.ruler().addTo(map);

  // add Leaflet-Geoman controls with some options to the map  
  var drawControl = map.pm.addControls({  
    position: 'topright', 
    //toggleControls: true, 
    drawCircleMarker: false,  
  }); 

  // this enables a polygon to auto-complete when the user double-clicks
  // you need both calls to enableDraw() and disableDraw() so that the plugin
  // does not start drawing automatically on map load
  map.pm.enableDraw('Polygon', {
    finishOn: 'dblclick',
  });
  map.pm.disableDraw();
  
  // add printing function to map here using easyPrint plugin
  var printerControl = L.easyPrint({
    // i think adding one baselayer will work for every basemap
    tileLayer: streets,
    sizeModes: ['Current', 'A4Landscape', 'A4Portrait'],
    filename: 'abq_map_overlay',
    exportOnly: true,
    hideControlContainer: true
  }).addTo(map);

  // add a fullscreen button
  var fullscreenControl = L.control.fullscreen({
    position: 'topleft', // change the position of the button can be topleft, topright, bottomright or bottomleft, default topleft
    title: 'Show me the fullscreen !', // change the title of the button, default Full Screen
    titleCancel: 'Exit fullscreen mode', // change the title of the button when fullscreen is on, default Exit Full Screen
    content: null, // change the content of the button, can be HTML, default null
    forceSeparateButton: true, // force separate button to detach from zoom buttons, default false
    forcePseudoFullscreen: true, // force use of pseudo full screen even if full screen API is available, default false
    fullscreenElement: false // Dom element to render in full screen, false by default, fallback to map._container
  }).addTo(map);

  // events are fired when entering or exiting fullscreen.
  map.on('enterFullscreen', function(){
    console.log('entered fullscreen');
  });

  map.on('exitFullscreen', function(){
    console.log('exited fullscreen');
  });
};