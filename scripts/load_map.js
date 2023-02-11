//import styling and colormaps here
import {
  heatmap2colormap,
  // landuse2colormap,
  // zoning2colormap,
} from "./load_colormaps.js";

import {
  pointToCircle,
  styleBikeTrails,
  styleBroadband,
  styleCensusTracts,
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
$("#aboutMapModal").modal("show");

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
  const censusTracts = L.geoJSON(censustracts, {
    style: styleCensusTracts,
    name: "census_tracts",
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

  // zoning data
  //  const ido_zoning = L.geoJSON(zoning, {
  //   style: zoning2colormap,
  //   name: "zoning",
  // });

  // add layer for drawing lines and polygons
  var drawnItems = L.featureGroup();
  drawnItems.options = {
    name: "drawn_items",
  }
  var drawnItemsLabel = "Drawn Items";
  drawnItemsLabel += '&nbsp;&nbsp;<label for="drawnItemsColor"></label><input type="color" id="drawnItemsColor" name="drawnItemsColor" value="#3388ff">'
  // drawnItemsLabel += '</br><input id="drawn_items" class="" type="range" orient="horizontal" min="0" max="1" step="0.01">'

  var neighborhoodsLabel = 'Neighborhoods'
  neighborhoodsLabel += '&nbsp;&nbsp;<label for="neighborhoodsColor"></label><input type="color" id="neighborhoodsColor" name="neighborhoodsColor" value="#8F3A84">'
  neighborhoodsLabel += '</br><input id="neighborhoods" class="" type="range" orient="horizontal" min="0" max="1" step="0.01">'
  // add point and polygon data to aggregate layer
  var overlaysTree = [
    { label: drawnItemsLabel, layer: drawnItems },
    {
      label: "Municipal and state",
      collapsed: true,
      children: [
        { label: 'City Limits </br><input id="city_limits" class="" type="range" orient="horizontal" min="0" max="1" step="0.01">', layer: cityLimits, },
        { label: 'Contours (50ft) </br><input id="city_contours" class="" type="range" orient="horizontal" min="0" max="1" step="0.01">', layer: cityContours },
        { label: 'Historic Places </br><input id="historic_places" class="" type="range" orient="horizontal" min="0" max="1" step="0.01">', layer: historicPlaces },
        { label: neighborhoodsLabel, layer: neighborhoodAssociations },
        { label: 'Zip Codes </br><input id="zip_codes" class="" type="range" orient="horizontal" min="0" max="1" step="0.01">', layer: zipCodes },
      ],
    },
    {
      label: "Demographic",
      collapsed: true,
      children: [{ label: 'Census Tracts (2020) </br><input id="census_tracts" class="" type="range" orient="horizontal" min="0" max="1" step="0.01">', layer: censusTracts }],
    },
    {
      label: "Environment",
      collapsed: true,
      children: [
        { label: 'Heatmap - AM', layer: heatmapMorning },
        // { label: 'Heatmap - AM </br><input id="heatmap_am" class="" type="range" orient="horizontal" min="0" max="1" step="0.01">', layer: heatmapMorning },
        { label: 'Heatmap - PM', layer: heatmapAfternoon },
        // { label: 'Heatmap - PM </br><input id="heatmap_pm" class="" type="range" orient="horizontal" min="0" max="1" step="0.01">', layer: heatmapAfternoon },
        { label: 'Major Dams </br><input id="major_dams" class="" type="range" orient="horizontal" min="0" max="1" step="0.01">', layer: majorDams },
        { label: 'Open Spaces </br><input id="open_spaces" class="" type="range" orient="horizontal" min="0" max="1" step="0.01">', layer: openSpaces },
        { label: 'Parks </br><input id="city_parks" class="" type="range" orient="horizontal" min="0" max="1" step="0.01">', layer: cityParks },
        { label: 'Soil-Water Districts </br><input id="sw_districts" class="" type="range" orient="horizontal" min="0" max="1" step="0.01">', layer: soilwaterDistricts },
        { label: 'Water Cover (2010) </br><input id="water_cover" class="" type="range" orient="horizontal" min="0" max="1" step="0.01">', layer: waterCover },
      ],
    },
    {
      label: "Waste and pollution",
      collapsed: true,
      children: [
        { label: 'Landfills </br><input id="landfills" class="" type="range" orient="horizontal" min="0" max="1" step="0.01">', layer: landfills },
        { label: 'Landfill Buffers </br><input id="landfill_buffers" class="" type="range" orient="horizontal" min="0" max="1" step="0.01">', layer: landfillBuffers },
        { label: 'Recycling Dropoff Sites </br><input id="recycling_dropoff" class="" type="range" orient="horizontal" min="0" max="1" step="0.01">', layer: recyclingDropoff },
        { label: 'State Cleanup Program Sites </br><input id="state_cleanup" class="" type="range" orient="horizontal" min="0" max="1" step="0.01">', layer: stateCleanup },
        { label: 'State Superfund Sites </br><input id="superfund_sites" class="" type="range" orient="horizontal" min="0" max="1" step="0.01">', layer: superfundSites },
      ],
    },
    {
      label: "Transportation",
      collapsed: true,
      children: [
        //{ label: "Streets", layer: abqStreets },
        { label: 'Trails - Bike </br><input id="bike_trails" class="" type="range" orient="horizontal" min="0" max="1" step="0.01">', layer: bikeTrails },
        { label: 'Trails - Walk/Hike) </br><input id="city_trails" class="" type="range" orient="horizontal" min="0" max="1" step="0.01">', layer: cityTrails },
        { label: 'Transit Routes </br><input id="transit_routes" class="" type="range" orient="horizontal" min="0" max="1" step="0.01">', layer: transitRoutes },
        { label: 'Transit Stops </br><input id="transit_stops" class="" type="range" orient="horizontal" min="0" max="1" step="0.01">', layer: transitStops },
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
        { label: 'Free Wifi Spots </br><input id="wifi" class="" type="range" orient="horizontal" min="0" max="1" step="0.01">', layer: wifi },
        { label: 'State Public Libraries </br><input id="libraries" class="" type="range" orient="horizontal" min="0" max="1" step="0.01">', layer: libraries },
        { label: 'Underserved Broadband </br><input id="broadband" class="" type="range" orient="horizontal" min="0" max="1" step="0.01">', layer: broadbandNeed },
      ],
    },
    {
      label: "Prisons and policing",
      collapsed: true,
      children: [
        { label: 'Police Beats </br><input id="police_beats" class="" type="range" orient="horizontal" min="0" max="1" step="0.01">', layer: policeBeats },
        { label: 'Police Incidents </br><input id="police_incidents" class="" type="range" orient="horizontal" min="0" max="1" step="0.01">', layer: policeIncidents },
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
  var pmHeatmapControl = L.control({ position: "bottomleft" });

  amHeatmapControl.onAdd = function (map) {
    var div = L.DomUtil.create("div", "info legend");
    var amTemperatures = ["62", "64", "66", "68", "70", "72", "74", "76", "78", "80",];
    var amTemperatureColors = ["#313695", "#3b54a4", "#4472b3", "#598dc0", "#70a8ce", "#89beda", "#a3d3e6", "#bde2ee", "#d6eef5", "#e9f6e8", ];

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

  pmHeatmapControl.onAdd = function (map) {
    var div = L.DomUtil.create("div", "info legend");
    var pmTemperatures = ["82", "84", "86", "88", "90", "92", "94", "96", "98", "100", "102", ">104",];
    var pmTemperatureColors = ["#f8fccd", "#fff8b4", "#fee99d", "#fed687", "#fdbf71", "#fca55d", "#f7864e", "#f16740", "#e34a33", "#d52e27", "#bd1726", "#a50026",];

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
    "bike_trails": bikeTrails,
    "broadband": broadbandNeed,
    "census_tracts": censusTracts,
    "city_limits": cityLimits,
    "city_parks": cityParks,
    "city_trails": cityTrails,
    "city_contours": cityContours,
    // "drawn_items": drawnItems,
    // "heatmap_pm": heatmapAfternoon,
    // "heatmap_am": heatmapMorning,
    "historic_places": historicPlaces,
    "landfills": landfills,
    "landfill_buffers": landfillBuffers,
    "libraries": libraries,
    "major_dams": majorDams,
    "neighborhoods": neighborhoodAssociations,
    "open_spaces": openSpaces,
    "police_beats": policeBeats,
    "police_incidents": policeIncidents,
    "recycling_dropoff": recyclingDropoff,
    "state_cleanup": stateCleanup,
    "superfund_sites": superfundSites,
    "sw_districts": soilwaterDistricts,
    "transit_routes": transitRoutes,
    "transit_stops": transitStops,
    "water_cover": waterCover,
    "wifi": wifi,
    "zip_codes": zipCodes,
  };

  // https://github.com/jjimenezshaw/Leaflet.Control.Layers.Tree/issues/21
  Object.keys(sliders_dict).forEach(function (item) {
    // get the opacity slider for a particular layer
    document.getElementById(item).addEventListener("input", function (sliderEvent) {
      console.log(sliders_dict[item].options.style);
      var layer_style = sliders_dict[item].options.style;

      layer_style["fillOpacity"] = layer_style["fillOpacityOriginal"] * sliderEvent.target.value;
      layer_style["opacity"] = layer_style["opacityOriginal"] * sliderEvent.target.value;
      sliders_dict[item].setStyle(layer_style)
      });
    document.getElementById(item).value = 1;
  });

  // add opacity capabilities to each layer
  const color_dict = {
    // "bike_trails": bikeTrails,
    // "broadband": broadbandNeed,
    // "census_tracts": censusTracts,
    // "city_limits": cityLimits,
    // "city_parks": cityParks,
    // "city_trails": cityTrails,
    // "city_contours": cityContours,
    // // "drawn_items": drawnItems,
    // // "heatmap_pm": heatmapAfternoon,
    // // "heatmap_am": heatmapMorning,
    // "historic_places": historicPlaces,
    // "landfills": landfills,
    // "landfill_buffers": landfillBuffers,
    // "libraries": libraries,
    // "major_dams": majorDams,
    "neighborhoodsColor": neighborhoodAssociations,
    // "open_spaces": openSpaces,
    // "police_beats": policeBeats,
    // "police_incidents": policeIncidents,
    // "recycling_dropoff": recyclingDropoff,
    // "state_cleanup": stateCleanup,
    // "superfund_sites": superfundSites,
    // "sw_districts": soilwaterDistricts,
    // "transit_routes": transitRoutes,
    // "transit_stops": transitStops,
    // "water_cover": waterCover,
    // "wifi": wifi,
    // "zip_codes": zipCodes,
  };

  Object.keys(color_dict).forEach(function (item) {
    // get the opacity slider for a particular layer
    document.getElementById(item).addEventListener("input", function (colorEvent) {
      console.log(colorEvent.target.value)
      var layer_style = color_dict[item].options.style;
      layer_style["color"] = colorEvent.target.value;
      color_dict[item].setStyle(layer_style)
      });
  });



  // add legend when layer is added
  var layer_checkboxes = document.querySelectorAll('label[class="leaflet-layerstree-header-label"]');
  var am_heatmap_checkbox = layer_checkboxes[10];
  var pm_heatmap_checkbox = layer_checkboxes[11]

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
    var list_of_layers = new L.LayerGroup([landfills, landfillBuffers, recyclingDropoff, stateCleanup, superfundSites,]);

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
