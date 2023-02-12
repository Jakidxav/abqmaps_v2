//import styling and colormaps here
import {
  heatmap2colormap,
  percentbipoc2colormap,
  percentwhite2colormap,
  // landuse2colormap,
  // zoning2colormap,
} from "./load_colormaps.js";

import {
  pointToCircle,
  styleBikeTrails,
  styleBroadband,
  styleCityContours,
  styleCityLimits,
  styleCityParks,
  styleCityTrails,
  styleHistoricPlaces,
  styleLandfills,
  styleLibraries,
  styleMajorDams,
  styleNeighborhood,
  styleOpenSpaces,
  stylePoliceBeats,
  stylePoliceIncidents,
  styleRecyclingDropoff,
  styleSWDistricts,
  styleStateCleanup,
  styleSuperfundSites,
  styleTransitRoutes,
  styleTransitStops,
  styleWaterCover,
  styleWifi,
  styleZipCodes,
} from "./load_style_options.js";

("use strict"); // JS strict mode

// first load popup modal, then load data
$('#aboutMapModal').modal('show');

// isolate checkboxes in order to toggle layers later
var checkBox1 = document.getElementById("checkbox_question_1");
var checkBox2 = document.getElementById("checkbox_question_2");
var checkBox3 = document.getElementById("checkbox_question_3");

window.onload = function () {
  // **** POINTS AND POLYGONS ****
  // bike trail data
  const bikeTrails = L.geoJSON(biketrails, {
    style: styleBikeTrails,
    name: "bike_trails",
  });

  // census data
  const bipocCensus = L.geoJSON(percentbipoc, {
    style: percentbipoc2colormap,
    name: "percent_bipoc",
  });

  const whiteCensus = L.geoJSON(percentwhite, {
    style: percentwhite2colormap,
    name: "percent_white",
  });

  // underserved broadband communities data
  const broadbandNeed = L.geoJSON(broadbandneed, {
    style: styleBroadband,
    name: "broadband",
  });

  // contours data
  const cityContours = L.geoJSON(citycontours, {
    style: styleCityContours,
    name: "contours",
  });

  // city limits data
  const cityLimits = L.geoJSON(citylimits, {
    //onEachFeature: cityLimitsPopups,
    style: styleCityLimits,
    name: "city_limits",
  });

  // city parks data
  const cityParks = L.geoJSON(cityparks, {
    style: styleCityParks,
    name: "parks",
  });

  // city trails data
  const cityTrails = L.geoJSON(citytrails, {
    style: styleCityTrails,
    name: "trails",
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
    name: "historic_places",
  });

  // landfill data
  const landfills = L.geoJSON(abqlandfills, {
    style: styleLandfills,
    name: "landfills",
  });

  // landfill buffer data
  const landfillBuffers = L.geoJSON(abqlandfillbuffers, {
    style: styleLandfills,
    name: "landfill_buffers",
  });

  // public state libraries data
  const libraries = L.geoJSON(nmlibraries, {
    pointToLayer: pointToCircle,
    style: styleLibraries,
    name: "libraries",
  });

  // major dams data
  const majorDams = L.geoJSON(majordams, {
    pointToLayer: pointToCircle,
    style: styleMajorDams,
    name: "major_dams",
  });

  // neighborhoods data
  const neighborhoodAssociations = L.geoJSON(neighborhoods, {
    style: styleNeighborhood,
    name: "neighborhoods",
  });

  // open spaces data
  const openSpaces = L.geoJSON(openspaces, {
    style: styleOpenSpaces,
    name: "open_spaces",
  });

  // apd police beats data
  const policeBeats = L.geoJSON(policebeats, {
    //onEachFeature: apdBeatsPopups,
    style: stylePoliceBeats,
    name: "police_beats",
  });

  // police incidents data
  const policeIncidents = L.geoJSON(policeincidents, {
    //onEachFeature: policeIncidentsPopups,
    pointToLayer: pointToCircle,
    style: stylePoliceIncidents,
    name: "police_incidents",
  });

  // recycling dropoff sites data
  const recyclingDropoff = L.geoJSON(recyclingdropoff, {
    pointToLayer: pointToCircle,
    style: styleRecyclingDropoff,
    name: "recycling_dropoff",
  });

  // soil and water conservation districts data
  const soilwaterDistricts = L.geoJSON(swdistricts, {
    style: styleSWDistricts,
    name: "sw_districts",
  });

  // state cleanup program sites data
  const stateCleanup = L.geoJSON(statecleanup, {
    pointToLayer: pointToCircle,
    style: styleStateCleanup,
    name: "state_cleanup",
  });

  // state superfund data
  const superfundSites = L.geoJSON(nmsuperfund, {
    style: styleSuperfundSites,
    name: "superfund_sites",
  });

  // transit stops data
  const transitStops = L.geoJSON(transitstops, {
    pointToLayer: pointToCircle,
    style: styleTransitStops,
    name: "transit_stops",
  });

  // transit routes data
  const transitRoutes = L.geoJSON(transitroutes, {
    style: styleTransitRoutes,
    name: "transit_routes",
  });

  // water data
  const waterCover = L.geoJSON(watercover, {
    style: styleWaterCover,
    name: "water_cover",
  });

  // wifi data
  const wifi = L.geoJSON(freewifi, {
    pointToLayer: pointToCircle,
    style: styleWifi,
    name: "wifi",
  });

  // zipcode data
  const zipCodes = L.geoJSON(zipcodes, {
    style: styleZipCodes,
    name: "zip_codes",
  });

  // add layer for drawing lines and polygons
  var drawnItems = L.featureGroup();
  drawnItems.options = {
    name: "drawn_items",
  };

  // these labels are going to be added to overlayTree; they cannot be defined in a manageable way inside the tree itself
  var drawnItemLabel = "Drawn Items";
  // drawnItemLabel += '&nbsp;&nbsp;<label for="drawnItemColor"></label><input type="color" id="drawnItemColor" name="drawnItemColor" value="#3388ff">'
  // drawnItemLabel += '</br><input id="drawnItemSlider" class="" type="range" orient="horizontal" min="0" max="1" step="0.01">'

  // municipal and state data labels
  var cityLimitLabel = 'City Limits';
  cityLimitLabel += '&nbsp;&nbsp;<label for="cityLimitColor"></label><input type="color" id="cityLimitColor" name="cityLimitColor" value="#000000">';
  cityLimitLabel += '</br><input id="cityLimitSlider" class="" type="range" orient="horizontal" min="0" max="1" step="0.01">';

  var cityContourLabel = 'Contours (50ft)';
  cityContourLabel += '</br><input id="cityContourSlider" class="" type="range" orient="horizontal" min="0" max="1" step="0.01">';

  var historicPlaceLabel = 'Historic Places';
  historicPlaceLabel += '&nbsp;&nbsp;<label for="historicPlaceColor"></label><input type="color" id="historicPlaceColor" name="historicPlaceColor" value="#FFB81C">';
  historicPlaceLabel += '</br><input id="historicPlaceSlider" class="" type="range" orient="horizontal" min="0" max="1" step="0.01">';

  var neighborhoodLabel = 'Neighborhood Associations';
  neighborhoodLabel += '&nbsp;&nbsp;<label for="neighborhoodColor"></label><input type="color" id="neighborhoodColor" name="neighborhoodColor" value="#8F3A84">';
  neighborhoodLabel += '</br><input id="neighborhoodSlider" class="" type="range" orient="horizontal" min="0" max="1" step="0.01">';

  var zipCodeLabel = 'Zip Codes';
  zipCodeLabel += '&nbsp;&nbsp;<label for="zipCodeColor"></label><input type="color" id="zipCodeColor" name="zipCodeColor" value="#0096FF">';
  zipCodeLabel += '</br><input id="zipCodeSlider" class="" type="range" orient="horizontal" min="0" max="1" step="0.01">';

  // demographics data labels
  var bipocCensusLabel = 'Percent BIPOC, 2020 Census';
  // censusTractLabel += '</br><input id="bipocCensusSlider" class="" type="range" orient="horizontal" min="0" max="1" step="0.01">';

  var whiteCensusLabel = 'Percent White, 2020 Census';

  // environmental data labels
  var heatmapAmLabel = 'Heatmap - AM';
  var heatmapPmLabel = 'Heatmap - PM';

  var majorDamLabel = 'Major Dams';
  majorDamLabel += '&nbsp;&nbsp;<label for="majorDamColor"></label><input type="color" id="majorDamColor" name="majorDamColor" value="#808080">';
  majorDamLabel += '</br><input id="majorDamSlider" class="" type="range" orient="horizontal" min="0" max="1" step="0.01">';

  var openSpaceLabel = 'Open Spaces'
  openSpaceLabel += '&nbsp;&nbsp;<label for="openSpaceColor"></label><input type="color" id="openSpaceColor" name="openSpaceColor" value="#006600">';
  openSpaceLabel += '</br><input id="openSpaceSlider" class="" type="range" orient="horizontal" min="0" max="1" step="0.01">';

  var cityParkLabel = 'Parks';
  cityParkLabel += '&nbsp;&nbsp;<label for="cityParkColor"></label><input type="color" id="cityParkColor" name="cityParkColor" value="#009A17">';
  cityParkLabel += '</br><input id="cityParkSlider" class="" type="range" orient="horizontal" min="0" max="1" step="0.01">';

  var swDistrictLabel = 'Soil-Water Districts'
  swDistrictLabel += '&nbsp;&nbsp;<label for="swDistrictColor"></label><input type="color" id="swDistrictColor" name="swDistrictColor" value="#cb4154">';
  swDistrictLabel += ' </br><input id="swDistrictSlider" class="" type="range" orient="horizontal" min="0" max="1" step="0.01">';

  var waterCoverLabel = 'Water Cover (2010)';
  waterCoverLabel += '&nbsp;&nbsp;<label for="waterCoverColor"></label><input type="color" id="waterCoverColor" name="waterCoverColor" value="#00FFED">';
  waterCoverLabel += '</br><input id="waterCoverSlider" class="" type="range" orient="horizontal" min="0" max="1" step="0.01">';

  // waste and pollution data labels
  var landfillLabel = 'Landfills';
  landfillLabel += '&nbsp;&nbsp;<label for="landfillColor"></label><input type="color" id="landfillColor" name="landfillColor" value="#FF5B00">';
  landfillLabel += '</br><input id="landfillSlider" class="" type="range" orient="horizontal" min="0" max="1" step="0.01">';

  var landfillBufferLabel = 'Landfill Buffers';
  landfillBufferLabel += '&nbsp;&nbsp;<label for="landfillBufferColor"></label><input type="color" id="landfillBufferColor" name="landfillBufferColor" value="#FF5B00">';
  landfillBufferLabel += '</br><input id="landfillBufferSlider" class="" type="range" orient="horizontal" min="0" max="1" step="0.01">';

  var recyclingDropoffLabel = 'Recycling Dropoff Sites';
  recyclingDropoffLabel += '&nbsp;&nbsp;<label for="recyclingDropoffColor"></label><input type="color" id="recyclingDropoffColor" name="recyclingDropoffColor" value="#ff0066">';
  recyclingDropoffLabel += '</br><input id="recyclingDropoffSlider" class="" type="range" orient="horizontal" min="0" max="1" step="0.01">';

  var stateCleanupLabel = 'State Cleanup Program Sites';
  stateCleanupLabel += '&nbsp;&nbsp;<label for="stateCleanupColor"></label><input type="color" id="stateCleanupColor" name="stateCleanupColor" value="#8031A7">';
  stateCleanupLabel += '</br><input id="stateCleanupSlider" class="" type="range" orient="horizontal" min="0" max="1" step="0.01">';

  var superfundSiteLabel = 'State Superfund Sites';
  superfundSiteLabel += '&nbsp;&nbsp;<label for="superfundSiteColor"></label><input type="color" id="superfundSiteColor" name="superfundSiteColor" value="#000000">';
  superfundSiteLabel += '</br><input id="superfundSiteSlider" class="" type="range" orient="horizontal" min="0" max="1" step="0.01">';

  // transportation data labels
  var bikeTrailLabel = 'Trails - Bike';
  bikeTrailLabel += '&nbsp;&nbsp;<label for="bikeTrailColor"></label><input type="color" id="bikeTrailColor" name="bikeTrailColor" value="#B73239">';
  bikeTrailLabel += '</br><input id="bikeTrailSlider" class="" type="range" orient="horizontal" min="0" max="1" step="0.01">';

  var cityTrailLabel = 'Trails - Walk/Hike)';
  cityTrailLabel += '&nbsp;&nbsp;<label for="cityTrailColor"></label><input type="color" id="cityTrailColor" name="cityTrailColor" value="#Ab784E">';
  cityTrailLabel += '</br><input id="cityTrailSlider" class="" type="range" orient="horizontal" min="0" max="1" step="0.01">';

  var transitRouteLabel = 'Transit Routes';
  transitRouteLabel += '&nbsp;&nbsp;<label for="transitRouteColor"></label><input type="color" id="transitRouteColor" name="transitRouteColor" value="#FFF200">';
  transitRouteLabel += '</br><input id="transitRouteSlider" class="" type="range" orient="horizontal" min="0" max="1" step="0.01">';

  var transitStopLabel = 'Transit Stops';
  transitStopLabel += '&nbsp;&nbsp;<label for="transitStopColor"></label><input type="color" id="transitStopColor" name="transitStopColor" value="#FFF200">';
  transitStopLabel += '</br><input id="transitStopSlider" class="" type="range" orient="horizontal" min="0" max="1" step="0.01">';

  // internet connectivity data labels
  var wifiLabel = 'Free Wifi Spots';
  wifiLabel += '&nbsp;&nbsp;<label for="wifiColor"></label><input type="color" id="wifiColor" name="wifiColor" value="#70b0b8">';
  wifiLabel += '</br><input id="wifiSlider" class="" type="range" orient="horizontal" min="0" max="1" step="0.01">';

  var libraryLabel = 'State Public Libraries';
  libraryLabel += '&nbsp;&nbsp;<label for="libraryColor"></label><input type="color" id="libraryColor" name="libraryColor" value="#2c15cd">';
  libraryLabel += '</br><input id="librarySlider" class="" type="range" orient="horizontal" min="0" max="1" step="0.01">';

  var broadbandLabel = 'Underserved Broadband';
  broadbandLabel += '&nbsp;&nbsp;<label for="broadbandColor"></label><input type="color" id="broadbandColor" name="broadbandColor" value="#14625f">';
  broadbandLabel += '</br><input id="broadbandSlider" class="" type="range" orient="horizontal" min="0" max="1" step="0.01">';

  // prisons and policing data labels
  var policeBeatLabel = 'Police Beats';
  policeBeatLabel += '&nbsp;&nbsp;<label for="policeBeatColor"></label><input type="color" id="policeBeatColor" name="policeBeatColor" value="#000000">';
  policeBeatLabel += '</br><input id="policeBeatSlider" class="" type="range" orient="horizontal" min="0" max="1" step="0.01">';

  var policeIncidentLabel = 'Police Incidents';
  policeIncidentLabel += '&nbsp;&nbsp;<label for="policeIncidentColor"></label><input type="color" id="policeIncidentColor" name="policeIncidentColor" value="#a10000">';
  policeIncidentLabel += '</br><input id="policeIncidentSlider" class="" type="range" orient="horizontal" min="0" max="1" step="0.01">';

  // add point and polygon data to aggregate layer
  var overlaysTree = [
    { label: drawnItemLabel, layer: drawnItems },
    {
      label: "Municipal and state",
      collapsed: true,
      children: [
        { label: cityLimitLabel, layer: cityLimits, },
        { label: cityContourLabel, layer: cityContours },
        { label: historicPlaceLabel, layer: historicPlaces },
        { label: neighborhoodLabel, layer: neighborhoodAssociations },
        { label: zipCodeLabel, layer: zipCodes },
      ],
    },
    {
      label: "Demographic",
      collapsed: true,
      children: [
        { label: bipocCensusLabel, layer: bipocCensus },
        { label: whiteCensusLabel, layer: whiteCensus },
      ],
    },
    {
      label: "Environment",
      collapsed: true,
      children: [
        { label: heatmapAmLabel, layer: heatmapMorning },
        { label: heatmapPmLabel, layer: heatmapAfternoon },
        { label: majorDamLabel, layer: majorDams },
        { label: openSpaceLabel, layer: openSpaces },
        { label: cityParkLabel, layer: cityParks },
        { label: swDistrictLabel, layer: soilwaterDistricts },
        { label: waterCoverLabel, layer: waterCover },
      ],
    },
    {
      label: "Waste and pollution",
      collapsed: true,
      children: [
        { label: landfillLabel, layer: landfills },
        { label: landfillBufferLabel, layer: landfillBuffers },
        { label: recyclingDropoffLabel, layer: recyclingDropoff },
        { label: stateCleanupLabel, layer: stateCleanup },
        { label: superfundSiteLabel, layer: superfundSites },
      ],
    },
    {
      label: "Transportation",
      collapsed: true,
      children: [
        { label: bikeTrailLabel, layer: bikeTrails },
        { label: cityTrailLabel, layer: cityTrails },
        { label: transitRouteLabel, layer: transitRoutes },
        { label: transitStopLabel, layer: transitStops },
      ],
    },
    {
      label: "Food access",
      collapsed: true,
      children: [],
    },
    {
      label: "Energy transition",
      collapsed: true,
      children: [],
    },
    {
      label: "Internet connectivity",
      collapsed: true,
      children: [
        { label: wifiLabel, layer: wifi },
        { label: libraryLabel, layer: libraries },
        { label: broadbandLabel, layer: broadbandNeed },
      ],
    },
    {
      label: "Prisons and policing",
      collapsed: true,
      children: [
        { label: policeBeatLabel, layer: policeBeats },
        { label: policeIncidentLabel, layer: policeIncidents },
      ],
    },
  ];

  // **** BASEMAPS ****
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
      label: "Base Layers",
      collapsed: true,
      children: [
        { label: "Streets", layer: streets },
        { label: "Grayscale", layer: grayscale },
        { label: "Imagery", layer: usgs_topo },
      ],
    },
  ];

  // create basemaps object, add map container
  var map = L.map("map_overlay_container", {
    center: [39.73, -104.99], //[35.08770657898809, -106.65591268675824]
    zoom: 11,
    layers: [streets, grayscale, usgs_topo],
  }).setView([35.08770657898809, -106.65591268675824], 11);

  // **** CONTROLS ****
  // combine basemaps and map overlays into one control
  var treeControl = L.control.layers
    .tree(basemapsTree, overlaysTree)
    .addTo(map);

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
  var amHeatmapControl = L.control({ position: "bottomleft" });
  amHeatmapControl.onAdd = function (map) {
    var div = L.DomUtil.create("div", "info legend");
    var amTemperatures = ["62", "64", "66", "68", "70", "72", "74", "76", "78", "80",];
    var amTemperatureColors = ["#313695", "#3b54a4", "#4472b3", "#598dc0", "#70a8ce", "#89beda", "#a3d3e6", "#bde2ee", "#d6eef5", "#e9f6e8", ];

    div.innerHTML += 'Morning Temperatures (F)<br>'

    for (var i = 0; i < amTemperatureColors.length; i++) {
      div.innerHTML +=
        '<div class="rectangle" style="background-color:' +
        amTemperatureColors[i] +
        '"></div> ' +
        "";
    }
    div.innerHTML += "<br>";

    for (var i = 0; i < amTemperatures.length; i++) {
      div.innerHTML += "<div>" + amTemperatures[i] + "</div>";
    }

    return div;
  };

  var pmHeatmapControl = L.control({ position: "bottomleft" });
  pmHeatmapControl.onAdd = function (map) {
    var div = L.DomUtil.create("div", "info legend");
    var pmTemperatures = ["82", "84", "86", "88", "90", "92", "94", "96", "98", "100", "102", ">104",];
    var pmTemperatureColors = ["#f8fccd", "#fff8b4", "#fee99d", "#fed687", "#fdbf71", "#fca55d", "#f7864e", "#f16740", "#e34a33", "#d52e27", "#bd1726", "#a50026",];

    div.innerHTML += 'Afternoon Temperatures (F)<br>'

    for (var i = 0; i < pmTemperatureColors.length; i++) {
      div.innerHTML +=
        '<div class="rectangle" style="background-color:' +
        pmTemperatureColors[i] +
        '"></div> ' +
        "";
    }
    div.innerHTML += "<br>";

    for (var i = 0; i < pmTemperatures.length; i++) {
      div.innerHTML += "<div>" + pmTemperatures[i] + "</div>";
    }

    return div;
  };

  var percentBIPOCControl = L.control({ position: "bottomleft" });
  percentBIPOCControl.onAdd = function (map) {
    var div = L.DomUtil.create("div", "info legend");
    var percents = ['0', '5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95'];
    var percentColors =     ['#f7fbff', '#eef5fc', '#e3eef9', '#d9e8f5', '#d0e1f2', '#c6dbef', '#b7d4ea', 
    '#a6cee4', '#94c4df', '#7fb9da', '#6aaed6', '#5ba3d0', '#4a98c9', '#3b8bc2', '#2e7ebc', '#2070b4', '#1764ab', '#0d57a1', '#084a91', '#083c7d'];

    div.innerHTML += '% BIPOC, 2020 Census<br>'

    for (var i = 0; i < percentColors.length; i++) {
      div.innerHTML +=
        '<div class="rectangle" style="background-color:' +
        percentColors[i] +
        '"></div> ' +
        "";
    }
    div.innerHTML += "<br>";

    for (var i = 0; i < percents.length; i++) {
      div.innerHTML += "<div>" + percents[i] + "</div>";
    }

    return div;
  };

  var percentWhiteControl = L.control({ position: "bottomleft" });
  percentWhiteControl.onAdd = function (map) {
    var div = L.DomUtil.create("div", "info legend");
    var percents = ['0', '5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95'];
    var percentColors =     ['#f7fbff', '#eef5fc', '#e3eef9', '#d9e8f5', '#d0e1f2', '#c6dbef', '#b7d4ea', 
    '#a6cee4', '#94c4df', '#7fb9da', '#6aaed6', '#5ba3d0', '#4a98c9', '#3b8bc2', '#2e7ebc', '#2070b4', '#1764ab', '#0d57a1', '#084a91', '#083c7d'];

    div.innerHTML += '% White (Non-Hispanic), 2020 Census<br>'

    for (var i = 0; i < percentColors.length; i++) {
      div.innerHTML +=
        '<div class="rectangle" style="background-color:' +
        percentColors[i] +
        '"></div> ' +
        "";
    }
    div.innerHTML += "<br>";

    for (var i = 0; i < percents.length; i++) {
      div.innerHTML += "<div>" + percents[i] + "</div>";
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
  // add opacity capabilities to each layer
  const sliders_dict = {
    "bikeTrailSlider": bikeTrails,
    "broadbandSlider": broadbandNeed,
    "cityLimitSlider": cityLimits,
    "cityParkSlider": cityParks,
    "cityTrailSlider": cityTrails,
    "cityContourSlider": cityContours,
    "historicPlaceSlider": historicPlaces,
    "landfillSlider": landfills,
    "landfillBufferSlider": landfillBuffers,
    "librarySlider": libraries,
    "majorDamSlider": majorDams,
    "neighborhoodSlider": neighborhoodAssociations,
    "openSpaceSlider": openSpaces,
    "policeBeatSlider": policeBeats,
    "policeIncidentSlider": policeIncidents,
    "recyclingDropoffSlider": recyclingDropoff,
    "stateCleanupSlider": stateCleanup,
    "superfundSiteSlider": superfundSites,
    "swDistrictSlider": soilwaterDistricts,
    "transitRouteSlider": transitRoutes,
    "transitStopSlider": transitStops,
    "waterCoverSlider": waterCover,
    "wifiSlider": wifi,
    "zipCodeSlider": zipCodes,
  };

  // https://github.com/jjimenezshaw/Leaflet.Control.Layers.Tree/issues/21
  Object.keys(sliders_dict).forEach(function (item) {
    console.log(item);
    // get the opacity slider for a particular layer
    document.getElementById(item).addEventListener("input", function (sliderEvent) {
      var layer_style = sliders_dict[item].options.style;
      layer_style["fillOpacity"] = layer_style["fillOpacityOriginal"] * sliderEvent.target.value;
      layer_style["opacity"] = layer_style["opacityOriginal"] * sliderEvent.target.value;
      sliders_dict[item].setStyle(layer_style)
      });
    document.getElementById(item).value = 1;
  });

  // add color changing capabilities to each layer
  const color_dict = {
    "bikeTrailColor": bikeTrails,
    "broadbandColor": broadbandNeed,
    "cityLimitColor": cityLimits,
    "cityParkColor": cityParks,
    "cityTrailColor": cityTrails,
    "historicPlaceColor": historicPlaces,
    "landfillColor": landfills,
    "landfillBufferColor": landfillBuffers,
    "libraryColor": libraries,
    "majorDamColor": majorDams,
    "neighborhoodColor": neighborhoodAssociations,
    "openSpaceColor": openSpaces,
    "policeBeatColor": policeBeats,
    "policeIncidentColor": policeIncidents,
    "recyclingDropoffColor": recyclingDropoff,
    "stateCleanupColor": stateCleanup,
    "superfundSiteColor": superfundSites,
    "swDistrictColor": soilwaterDistricts,
    "transitRouteColor": transitRoutes,
    "transitStopColor": transitStops,
    "waterCoverColor": waterCover,
    "wifiColor": wifi,
    "zipCodeColor": zipCodes,
  };

  Object.keys(color_dict).forEach(function (item) {
    console.log(item);
    // get the color element box for each layer
    document.getElementById(item).addEventListener("input", function (colorEvent) {
      var layer_style = color_dict[item].options.style;
      layer_style["color"] = colorEvent.target.value;
      color_dict[item].setStyle(layer_style);
      });
  });


  // add legend when layer is added
  var layer_checkboxes = document.querySelectorAll('label[class="leaflet-layerstree-header-label"]');
  var am_heatmap_checkbox = layer_checkboxes[11];
  var pm_heatmap_checkbox = layer_checkboxes[12]

  map.on("overlayadd", function (eventLayer) {
    console.log(eventLayer);
    // turn legend on depending on which heatmap is added
    if (eventLayer.layer.options.name === "heatmap_am") {
      if(map.hasLayer(heatmapAfternoon)) {
        console.log("Map has PM heatmap");
        map.removeLayer(heatmapAfternoon)
        map.removeControl(pmHeatmapControl)
      }
      amHeatmapControl.addTo(this);
      // we also will want to turn off the other heatmap layer so they aren't both on the map at the same time
      pm_heatmap_checkbox.style.pointerEvents = "none";
      pm_heatmap_checkbox.style.opacity = 0.5;
    }
    else if (eventLayer.layer.options.name === "heatmap_pm") {
      if(map.hasLayer(heatmapMorning)) {
        console.log("Map has AM heatmap");
        map.removeLayer(heatmapMorning)
        map.removeControl(amHeatmapControl)
      }
      pmHeatmapControl.addTo(this);
      // we also will want to turn off the other heatmap layer so they aren't both on the map at the same time
      am_heatmap_checkbox.style.pointerEvents = "none";
      am_heatmap_checkbox.style.opacity = 0.5;
    }
    else if (eventLayer.layer.options.name === "percent_bipoc") {
      percentBIPOCControl.addTo(this);
    }
    else if (eventLayer.layer.options.name === "percent_white") {
      percentWhiteControl.addTo(this);
    }
  });

  // remove legend when layer is added
  map.on("overlayremove", function (eventLayer) {
    console.log(eventLayer);
    // turn legend off depending on which heatmap is removed
    if (eventLayer.layer.options.name === "heatmap_am") {
      this.removeControl(amHeatmapControl);
      // turn the other heatmap layer back to toggle mode
      pm_heatmap_checkbox.style.pointerEvents = "auto";
      pm_heatmap_checkbox.style.opacity = 1;
    }
    else if (eventLayer.layer.options.name === "heatmap_pm") {
      this.removeControl(pmHeatmapControl);
      // turn the other heatmap layer back to toggle mode
      am_heatmap_checkbox.style.pointerEvents = "auto";
      am_heatmap_checkbox.style.opacity = 1;
    }
    else if (eventLayer.layer.options.name === "percent_bipoc") {
      this.removeControl(percentBIPOCControl);
    }
    else if (eventLayer.layer.options.name === "percent_white") {
      this.removeControl(percentWhiteControl);
    }
  });

  // event listener for adding drawn item to map
  map.on("pm:create", (event) => {
    var drawnLayer = event.layer;
    drawnItems.addLayer(drawnLayer);

    // in the case of dragging or rotating shape/marker, the event listener is the same
    // however, the leaflet-geoman plugin alters the layers for us, so we don't need this listener except for debugging
    // pm:edit covers cases like pm:rotateend, pm:dragend, pm:markerdragend
    // drawnLayer.on("pm:edit", (event) => {
    //   console.log(drawnLayer);
    // });
  });

  // event listener for removing drawn item to map
  map.on("pm:remove", (event) => {
    var layerToRemove = event.layer;
    drawnItems.removeLayer(layerToRemove);
  });

  // checkbox for question 1
  checkBox1.addEventListener("click", handleToggleQuestion1);
  function handleToggleQuestion1() {
    // PLEASE NOTE: right now, I am adding these layers manually, so as the number/type of layers changes,
    // you will need to update the list below manually
    var list_of_layers = new L.LayerGroup([bipocCensus, landfills, landfillBuffers, recyclingDropoff, stateCleanup, superfundSites,]);

    // if the checkbox is checked, display the output text
    if (this.checked == true) {
      list_of_layers.eachLayer(function (layer) {
        if (map.hasLayer(layer) == false) {
          map.addLayer(layer);
        }
      });
    } else {
      // else, remove all layers from map
      list_of_layers.eachLayer(function (layer) {
        if (map.hasLayer(layer) == true) {
          map.removeLayer(layer);
        }
      });
    }
  }

  // checkbox for question 2
  checkBox2.addEventListener("click", handleToggleQuestion2);
  function handleToggleQuestion2() {
    // PLEASE NOTE: right now, I am adding these layers manually, so as the number/type of layers changes,
    // you will need to update the list below manually
    var list_of_layers = new L.LayerGroup([heatmapAfternoon, openSpaces, cityParks,]);

    // if the checkbox is checked, display the output text
    if (this.checked == true) {
      if(map.hasLayer(heatmapMorning)) {
        map.removeLayer(heatmapMorning);
        map.removeControl(amHeatmapControl);
      }

      list_of_layers.eachLayer(function (layer) {
        if (map.hasLayer(layer) == false) {
          map.addLayer(layer);
        }
      });

      am_heatmap_checkbox.style.pointerEvents = "none";
      am_heatmap_checkbox.style.opacity = 0.5;

    } else {
      // else, remove all layers from map
      list_of_layers.eachLayer(function (layer) {
        if (map.hasLayer(layer) == true) {
          map.removeLayer(layer);
        }
      });
    }
  }

  // checkbox for question 3
  checkBox3.addEventListener("click", handleToggleQuestion3);
  function handleToggleQuestion3() {
    // PLEASE NOTE: right now, I am adding these layers manually, so as the number/type of layers changes,
    // you will need to update the list below manually
    var list_of_layers = new L.LayerGroup([transitRoutes, transitStops, bikeTrails, cityTrails,]);

    // if the checkbox is checked, display the output text
    if (this.checked == true) {
      list_of_layers.eachLayer(function (layer) {
        if (map.hasLayer(layer) == false) {
          map.addLayer(layer);
        }
      });
    } else {
      // else, remove all layers from map
      list_of_layers.eachLayer(function (layer) {
        if (map.hasLayer(layer) == true) {
          map.removeLayer(layer);
        }
      });
    }
  }
};
