"use strict"; // JS strict mode

  // this function allows us to create a custom color map for the heatmap data
  // the morning range is from ~62-78, while the afternoon range is from ~82-105
  export function heatmap2colormap(feature) {
    let fillColorByTemperature = "";
  
    // used example here to create colormap
    // based on matplotlib's RdYlBu_r colormap
    if (Number(feature.properties["DN"]) === -3.3999999521443642e+38) {
      fillColorByTemperature = '#00000000'; //clear
    } else if (Number(feature.properties["DN"]) >= 62 && Number(feature.properties["DN"]) < 64) {
      fillColorByTemperature = '#313695';
    } else if (Number(feature.properties["DN"]) >= 64 && Number(feature.properties["DN"]) < 66) {
      fillColorByTemperature = '#3b54a4';
    } else if (Number(feature.properties["DN"]) >= 66 && Number(feature.properties["DN"]) < 68) {
      fillColorByTemperature = '#4472b3';
    } else if (Number(feature.properties["DN"]) >= 68 && Number(feature.properties["DN"]) < 70) {
      fillColorByTemperature = '#598dc0';
    } else if (Number(feature.properties["DN"]) >= 70 && Number(feature.properties["DN"]) < 72) {
      fillColorByTemperature = '#70a8ce';
    } else if (Number(feature.properties["DN"]) >= 72 && Number(feature.properties["DN"]) < 74) {
      fillColorByTemperature = '#89beda';
    } else if (Number(feature.properties["DN"]) >= 74 && Number(feature.properties["DN"]) < 76) {
      fillColorByTemperature = '#a3d3e6';
    } else if (Number(feature.properties["DN"]) >= 76 && Number(feature.properties["DN"]) < 78) {
      fillColorByTemperature = '#bde2ee';
    } else if (Number(feature.properties["DN"]) >= 78 && Number(feature.properties["DN"]) < 80) {
      fillColorByTemperature = '#d6eef5';
    } else if (Number(feature.properties["DN"]) >= 80 && Number(feature.properties["DN"]) < 82) {
      fillColorByTemperature = '#e9f6e8';
    } else if (Number(feature.properties["DN"]) >= 82 && Number(feature.properties["DN"]) < 44) {
      fillColorByTemperature = '#f8fccd';
    } else if (Number(feature.properties["DN"]) >= 84 && Number(feature.properties["DN"]) < 86) {
      fillColorByTemperature = '#fff8b4';
    } else if (Number(feature.properties["DN"]) >= 86 && Number(feature.properties["DN"]) < 88) {
      fillColorByTemperature = '#fee99d';
    } else if (Number(feature.properties["DN"]) >= 88 && Number(feature.properties["DN"]) < 90) {
      fillColorByTemperature = '#fed687';
    } else if (Number(feature.properties["DN"]) >= 90 && Number(feature.properties["DN"]) < 92) {
      fillColorByTemperature = '#fdbf71';
    } else if (Number(feature.properties["DN"]) >= 92 && Number(feature.properties["DN"]) < 94) {
      fillColorByTemperature = '#fca55d';
    } else if (Number(feature.properties["DN"]) >= 94 && Number(feature.properties["DN"]) < 96) {
      fillColorByTemperature = '#f7864e';
    } else if (Number(feature.properties["DN"]) >= 96 && Number(feature.properties["DN"]) < 98) {
      fillColorByTemperature = '#f16740';
    } else if (Number(feature.properties["DN"]) >= 98 && Number(feature.properties["DN"]) < 100) {
      fillColorByTemperature = '#e34a33';
    } else if (Number(feature.properties["DN"]) >= 100 && Number(feature.properties["DN"]) < 102) {
      fillColorByTemperature = '#d52e27';
    } else if (Number(feature.properties["DN"]) >= 102 && Number(feature.properties["DN"]) < 104) {
      fillColorByTemperature = '#bd1726';
    } else {
      fillColorByTemperature = '#a50026';
    }
  
    const geojsonPolygonOptions = {
      fillColor: fillColorByTemperature,
      color: fillColorByTemperature,
      weight: 1,
      opacity: 1,
      fillOpacity: 1
    };
  
    return geojsonPolygonOptions;
  }

/*
  this function allows us to color land use classes by color
  
  the distinct classes are:
  01 | Low-density Residential
  02 | Multi-family
  03 | Commercial Retail
  04 | Commercial Services
  05 | Office
  06 | Industrial
  07 | Institutional / Medical
  08 | Educational
  09 | Airport
  10 | Transportation
  11 | Agriculture
  --> class 12 seems to be missing in this dataset
  13 | Parks and Open Space
  14 | Drainage
  15 | Vacant
  16 | Utilities
  17 | Community
  18 | KAFB
  */
  export function landuse2colormap(feature) {
    let fillColorByLandUse = "";
    
    if (feature.properties["LandUseCat"] === "01 | Low-density Residential") {
      fillColorByLandUse = '#f7f7a2'; 
    } else if (feature.properties["LandUseCat"] === "02 | Multi-family") {
      fillColorByLandUse = '#ffc94d';
    } else if (feature.properties["LandUseCat"] === "03 | Commercial Retail") {
      fillColorByLandUse = '#ff5722';
    } else if (feature.properties["LandUseCat"] === "04 | Commercial Services") {
      fillColorByLandUse = '#ff5722';
    } else if (feature.properties["LandUseCat"] === "05 | Office") {
      fillColorByLandUse = '#ff9966';
    } else if (feature.properties["LandUseCat"] === "06 | Industrial") {
      fillColorByLandUse = '#df34ed';
    } else if (feature.properties["LandUseCat"] === "07 | Institutional / Medical") {
      fillColorByLandUse = '#64ffda';
    } else if (feature.properties["LandUseCat"] === "08 | Educational") {
      fillColorByLandUse = '#ffab00';
    } else if (feature.properties["LandUseCat"] === "09 | Airport") {
      fillColorByLandUse = '#90a4ae';
    } else if (feature.properties["LandUseCat"] === "10 | Transportation") {
      fillColorByLandUse = '#d50000';
    } else if (feature.properties["LandUseCat"] === "11 | Agriculture") {
      fillColorByLandUse = '#8bf385';
    } else if (feature.properties["LandUseCat"] === "13 | Parks and Open Space") {
      fillColorByLandUse = '#006600';
    } else if (feature.properties["LandUseCat"] === "14 | Drainage") {
      fillColorByLandUse = '#d7ccc8';
    } else if (feature.properties["LandUseCat"] === "15 | Vacant") {
      fillColorByLandUse = '#efebe9';
    } else if (feature.properties["LandUseCat"] === "16 | Utilities"){
      fillColorByLandUse = '#40c4ff';
    } else if (feature.properties["LandUseCat"] === "17 | Community") {
      fillColorByLandUse = '#b8b8b8';
    } else if (feature.properties["LandUseCat"] === "18 | KAFB") {
      fillColorByLandUse = '#000000';
    } else { 
      fillColorByLandUse = '#00000000'; // clear
    }
    
    
    const geojsonPolygonOptions = {
      fillColor: fillColorByLandUse,
      color: '#000000',
      weight: 1,
      opacity: 1,
      fillOpacity: 0.75
    };
  
    return geojsonPolygonOptions;
  }
  
  
  /*
  this function allows us to color ido zoning codes use classes by color
  
  the distinct classes are:
  // mixed-use: brown #996633
  MX-FB-FX: form-based flexible development
  MX-FB-ID: form-based infill development
  MX-FB-UD: form-based urban development
  MX-H: high intensity
  MX-M: moderate intensity
  MX-L: low intensity
  MX-T: transition
  
  // manufacturing: purple #df34ed
  NR-GM: general manufacturing
  NR-LM: light manufacturing
  
  // business: salmon #ff9966
  NR-BP: business park
  
  // sensitive use : dark gray #6a6a6a
  NR-SU
  
  // open spaces: green #006600
  NR-PO-A: city-owned or managed public parks
  NR-PO-B: pulic open space: green
  NR-PO-C: non-city parks and open spaces
  NR-PO-D: city biopark
  
  // planned: light gray #b8b8b8
  PC: planned community
  PD: planned development
  
  // single-family: yellow #f7f7a2
  R-1A: single-family (small lot)
  R-1B: single-family (medium lot)
  R-1C: single-family (large lot)
  R-1D: single-family (extra large lot)
  
  // multi-family: orange #ffc94d
  R-MC: manufactured home community
  R-MH: multi-family high density
  R-ML: multi-family low density
  R-T: townhouse
  
  // rural and agricultural: light green #8bf385
  R-A: rural and agricultural
  
  // unclassified: white #ffffff
  UNCL
  */
  export function zoning2colormap(feature) {
    let fillColorZoning = "";
    
    if (feature.properties["Name"].startsWith("MX")) {
      fillColorZoning = '#996633'; 
    } else if (feature.properties["Name"] === "NR-GM" || feature.properties['Name'] === "NR-LM") {
      fillColorZoning = '#df34ed';
    } else if (feature.properties["Name"] === "NR-BP") {
      fillColorZoning = '#ff9966';
    } else if (feature.properties["Name"] === "NR-SU") {
      fillColorZoning = '#6a6a6a';
    } else if (feature.properties["Name"].startsWith("NR-PO")) {
      fillColorZoning = '#006600';
    } else if (feature.properties["Name"].startsWith("P")) {
      fillColorZoning = '#b8b8b8';
    } else if (feature.properties["Name"].startsWith('R-1')) {
      fillColorZoning = '#f7f7a2';
    } else if (feature.properties["Name"].startsWith("R-M") || feature.properties.name === 'R-T') {
      fillColorZoning = '#ffc94d';
    } else if (feature.properties["Name"] === "R-A") {
      fillColorZoning = '#8bf385';
    } else { // else unclassified
      fillColorZoning = '#ffffff';
    }
    
    
    const geojsonPolygonOptions = {
      fillColor: fillColorZoning,
      color: '##000000', // black border
      weight: 1,
      opacity: 1,
      fillOpacity: 0.75
    };
  
    return geojsonPolygonOptions;
  }