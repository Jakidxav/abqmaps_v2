"use strict"; // JS strict mode

// POINT AND LAYER STYLE OPTIONS
// this function speeds up loading points in leaflet
export function pointToCircle(feature, latlng) {
  var geojsonMarkerOptions = {
    radius: 4,
    weight: 1,
  };

  var circleMarker = L.circleMarker(latlng, geojsonMarkerOptions);

  return circleMarker;
}

export const styleBikeTrails = {
  color: "#B73239",
  fillOpacity: 0,
  fillOpacityOriginal: 0,
  weight: 1,
  opacity: 1,
  opacityOriginal: 1,
};

export const styleBroadband = {
  color: "#14625f",
  fillOpacity: 0.5,
  fillOpacityOriginal: 0.5,
  weight: 1,
  opacity: 1,
  opacityOriginal: 1,
}

export const styleCensusTracts = {
  color: "#000000",
  fillOpacity: 0,
  fillOpacityOriginal: 0,
  weight: 1,
  opacity: 1,
  opacityOriginal: 1,
  dashArray: "5",
};

export const styleCityContours = {
  color: "#1E90FF",
  fillOpacityOriginal: 0,
  fillOpacity: 0,
  weight: 2,
  opacity: 1,
  opacityOriginal: 1,
};

export const styleCityLimits = {
  color: "#000000",
  fillOpacity: 0,
  fillOpacityOriginal: 0,
  weight: 2,
  opacity: 1,
  opacityOriginal: 1,
  dashArray: "5",
};

export const styleCityParks = {
  color: "#009A17",
  fillOpacity: 0.5,
  fillOpacityOriginal: 0.5,
  weight: 1,
  opacity: 1,
  opacityOriginal: 1,
};

export const styleCityTrails = {
  color: "#Ab784E",
  fillOpacity: 0.5,
  fillOpacityOriginal: 0.5,
  weight: 1,
  opacity: 1,
  opacityOriginal: 1,
};

export const styleHistoricPlaces = {
  color: "#FFB81C",
  fillOpacity: 0.5,
  fillOpacityOriginal: 0.5,
  weight: 1,
  opacity: 1,
  opacityOriginal: 1,
};

export const styleLandfills = {
  fillOpacity: 0.5,
  fillOpacityOriginal: 0.5,
  weight: 1,
  opacity: 1,
  opacityOriginal: 1,
  color: "#FF5B00",
};

export const styleLibraries = {
  color: "#2c15cd",
  fillOpacityOriginal: 0.6,
  weight: 1,
  opacity: 1,
  opacityOriginal: 1,
}

export const styleMajorDams = {
  color: "#808080",
  fillOpacity: 0.6,
  fillOpacityOriginal: 0.6,
  weight: 1,
  opacity: 1,
  opacityOriginal: 1,
};

export const styleNeighborhood = {
  color: "#8F3A84",
  fillOpacity: 0.25,
  fillOpacityOriginal: 0.25,
  weight: 2,
  opacity: 1,
  opacityOriginal: 1,
  dashArray: "5",
};

export const styleOpenSpaces = {
  color: "#006600",
  fillOpacity: 0.5,
  fillOpacityOriginal: 0.5,
  weight: 1,
  opacity: 1,
  opacityOriginal: 1,
};

export const stylePoliceBeats = {
  color: "#000000",
  fillOpacity: 0,
  fillOpacityOriginal: 0,
  weight: 1,
  opacity: 1,
  opacityOriginal: 1,
};

export const stylePoliceIncidents = {
  color: "#a10000",
  opacity: 1,
  opacityOriginal: 1,
  fillOpacity: 0.6,
  fillOpacityOriginal: 0.6,
};

export const styleRecyclingDropoff = {
  color: "#ff0066",
  opacity: 1,
  opacityOriginal: 1,
  fillOpacity: 0.6,
  fillOpacityOriginal: 0.6,
};

export const styleSWDistricts = {
  color: "#cb4154",
  fillOpacity: 0.5,
  fillOpacityOriginal: 0.5,
  weight: 1,
  opacity: 1,
  opacityOriginal: 1,
}

export const styleStateCleanup = {
  color: "#8031A7",
  opacity: 1,
  opacityOriginal: 1,
  fillOpacity: 0.6,
  fillOpacityOriginal: 0.6,
};

export const styleSuperfundSites = {
  color: "#000000",
  fillOpacity: 0.5,
  fillOpacityOriginal: 0.5,
  weight: 2,
  opacity: 1,
  opacityOriginal: 1,
}

export const styleTransitRoutes = {
  color: "#FFF200",
  fillOpacity: 0.5,
  weight: 1,
  opacity: 1,
  opacityOriginal: 1,
};

export const styleTransitStops = {
  color: "#FFF200",
  opacity: 1,
  opacityOriginal: 1,
  fillOpacity: 0.6,
  fillOpacityOriginal: 0.6,
};

export const styleTribalAreas = {
  color: "#3C64F7",
  fillColor: "#F8F0E3",
  opacity: 1,
  opacityOriginal: 1,
  fillOpacity: 0.7,
  fillOpacityOriginal: 0.7,
  dashArray: "5",
};

export const styleWaterCover = {
  color: "#00FFED",
  fillOpacity: 0.5,
  fillOpacityOriginal: 0.5,
  weight: 1,
  opacity: 1,
  opacityOriginal: 1,
};

export const styleWifi = {
  color: "#70b0b8",
}

export const styleZipCodes = {
  color: "#0096FF",
  fillOpacity: 0,
  fillOpacityOriginal: 0,
  weight: 2,
  opacity: 1,
  opacityOriginal: 1,
  dashArray: "5",
};


// CUSTOM COLORMAPS
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
    opacityOriginal: 1,
    fillOpacity: 1,
    fillOpacityOriginal: 1,
  };

  return geojsonPolygonOptions;
}


// this function allows us to create a custom color map for the bipoc census data
// the range is from 0-100
export function percentbipoc2colormap(feature) {
  let fillColorByPercent = "";

  // used example here to create colormap
  // based on matplotlib's Blues colormap
    if (Number(feature.properties["percent_bipoc"]) >= 0 && Number(feature.properties["percent_bipoc"]) < 5) {
    fillColorByPercent = '#f7fbff';
  } else if (Number(feature.properties["percent_bipoc"]) >= 5 && Number(feature.properties["percent_bipoc"]) < 10) {
    fillColorByPercent = '#eef5fc';
  } else if (Number(feature.properties["percent_bipoc"]) >= 10 && Number(feature.properties["percent_bipoc"]) < 15) {
    fillColorByPercent = '#e3eef9';
  } else if (Number(feature.properties["percent_bipoc"]) >= 15 && Number(feature.properties["percent_bipoc"]) < 20) {
    fillColorByPercent = '#d9e8f5';
  } else if (Number(feature.properties["percent_bipoc"]) >= 20 && Number(feature.properties["percent_bipoc"]) < 25) {
    fillColorByPercent = '#d0e1f2';
  } else if (Number(feature.properties["percent_bipoc"]) >= 25 && Number(feature.properties["percent_bipoc"]) < 30) {
    fillColorByPercent = '#c6dbef';
  } else if (Number(feature.properties["percent_bipoc"]) >= 30 && Number(feature.properties["percent_bipoc"]) < 35) {
    fillColorByPercent = '#b7d4ea';
  } else if (Number(feature.properties["percent_bipoc"]) >= 35 && Number(feature.properties["percent_bipoc"]) < 40) {
    fillColorByPercent = '#a6cee4';
  } else if (Number(feature.properties["percent_bipoc"]) >= 40 && Number(feature.properties["percent_bipoc"]) < 45) {
    fillColorByPercent = '#94c4df';
  } else if (Number(feature.properties["percent_bipoc"]) >= 45 && Number(feature.properties["percent_bipoc"]) < 50) {
    fillColorByPercent = '#7fb9da';
  } else if (Number(feature.properties["percent_bipoc"]) >= 50 && Number(feature.properties["percent_bipoc"]) < 55) {
    fillColorByPercent = '#6aaed6';
  } else if (Number(feature.properties["percent_bipoc"]) >= 55 && Number(feature.properties["percent_bipoc"]) < 60) {
    fillColorByPercent = '#5ba3d0';
  } else if (Number(feature.properties["percent_bipoc"]) >= 60 && Number(feature.properties["percent_bipoc"]) < 65) {
    fillColorByPercent = '#4a98c9';
  } else if (Number(feature.properties["percent_bipoc"]) >= 65 && Number(feature.properties["percent_bipoc"]) < 70) {
    fillColorByPercent = '#3b8bc2';
  } else if (Number(feature.properties["percent_bipoc"]) >= 70 && Number(feature.properties["percent_bipoc"]) < 75) {
    fillColorByPercent = '#2e7ebc';
  } else if (Number(feature.properties["percent_bipoc"]) >= 75 && Number(feature.properties["percent_bipoc"]) < 80) {
    fillColorByPercent = '#2070b4';
  } else if (Number(feature.properties["percent_bipoc"]) >= 80 && Number(feature.properties["percent_bipoc"]) < 85) {
    fillColorByPercent = '#1764ab';
  } else if (Number(feature.properties["percent_bipoc"]) >= 85 && Number(feature.properties["percent_bipoc"]) < 90) {
    fillColorByPercent = '#0d57a1';
  } else if (Number(feature.properties["percent_bipoc"]) >= 90 && Number(feature.properties["percent_bipoc"]) < 95) {
    fillColorByPercent = '#084a91';
  } else { // range from 95 - 100
    fillColorByPercent = '#083c7d';
  }

  const geojsonPolygonOptions = {
    fillColor: fillColorByPercent,
    color: "black",
    weight: 1,
    opacity: 1,
    opacityOriginal: 1,
    fillOpacity: 0.7,
    fillOpacityOriginal: 0.7,
    dashArray: "5",
  };

  return geojsonPolygonOptions;
}


// this function allows us to create a custom color map for the white (non-hispanic) census data
// the range is from 0-100
export function percentwhite2colormap(feature) {
  let fillColorByPercent = "";

  // used example here to create colormap
  // based on matplotlib's Blues colormap
   if (Number(feature.properties["percent_white"]) >= 0 && Number(feature.properties["percent_white"]) < 5) {
    fillColorByPercent = '#f7fbff';
  } else if (Number(feature.properties["percent_white"]) >= 5 && Number(feature.properties["percent_white"]) < 10) {
    fillColorByPercent = '#eef5fc';
  } else if (Number(feature.properties["percent_white"]) >= 10 && Number(feature.properties["percent_white"]) < 15) {
    fillColorByPercent = '#e3eef9';
  } else if (Number(feature.properties["percent_white"]) >= 15 && Number(feature.properties["percent_white"]) < 20) {
    fillColorByPercent = '#d9e8f5';
  } else if (Number(feature.properties["percent_white"]) >= 20 && Number(feature.properties["percent_white"]) < 25) {
    fillColorByPercent = '#d0e1f2';
  } else if (Number(feature.properties["percent_white"]) >= 25 && Number(feature.properties["percent_white"]) < 30) {
    fillColorByPercent = '#c6dbef';
  } else if (Number(feature.properties["percent_white"]) >= 30 && Number(feature.properties["percent_white"]) < 35) {
    fillColorByPercent = '#b7d4ea';
  } else if (Number(feature.properties["percent_white"]) >= 35 && Number(feature.properties["percent_white"]) < 40) {
    fillColorByPercent = '#a6cee4';
  } else if (Number(feature.properties["percent_white"]) >= 40 && Number(feature.properties["percent_white"]) < 45) {
    fillColorByPercent = '#94c4df';
  } else if (Number(feature.properties["percent_white"]) >= 45 && Number(feature.properties["percent_white"]) < 50) {
    fillColorByPercent = '#7fb9da';
  } else if (Number(feature.properties["percent_white"]) >= 50 && Number(feature.properties["percent_white"]) < 55) {
    fillColorByPercent = '#6aaed6';
  } else if (Number(feature.properties["percent_white"]) >= 55 && Number(feature.properties["percent_white"]) < 60) {
    fillColorByPercent = '#5ba3d0';
  } else if (Number(feature.properties["percent_white"]) >= 60 && Number(feature.properties["percent_white"]) < 65) {
    fillColorByPercent = '#4a98c9';
  } else if (Number(feature.properties["percent_white"]) >= 65 && Number(feature.properties["percent_white"]) < 70) {
    fillColorByPercent = '#3b8bc2';
  } else if (Number(feature.properties["percent_white"]) >= 70 && Number(feature.properties["percent_white"]) < 75) {
    fillColorByPercent = '#2e7ebc';
  } else if (Number(feature.properties["percent_white"]) >= 75 && Number(feature.properties["percent_white"]) < 80) {
    fillColorByPercent = '#2070b4';
  } else if (Number(feature.properties["percent_white"]) >= 80 && Number(feature.properties["percent_white"]) < 85) {
    fillColorByPercent = '#1764ab';
  } else if (Number(feature.properties["percent_white"]) >= 85 && Number(feature.properties["percent_white"]) < 90) {
    fillColorByPercent = '#0d57a1';
  } else if (Number(feature.properties["percent_white"]) >= 90 && Number(feature.properties["percent_white"]) < 95) {
    fillColorByPercent = '#084a91';
  } else { // range from 95 - 100
    fillColorByPercent = '#083c7d';
  }

  const geojsonPolygonOptions = {
    fillColor: fillColorByPercent,
    color: "black",
    weight: 1,
    opacity: 1,
    opacityOriginal: 1,
    fillOpacity: 0.7,
    fillOpacityOriginal: 0.7,
    dashArray: "5",
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
    
    if (feature.properties["IDOZoneDis"].startsWith("MX")) {
      fillColorZoning = '#996633'; 
    } else if (feature.properties["IDOZoneDis"] === "NR-GM" || feature.properties['IDOZoneDis'] === "NR-LM") {
      fillColorZoning = '#df34ed';
    } else if (feature.properties["IDOZoneDis"] === "NR-BP") {
      fillColorZoning = '#ff9966';
    } else if (feature.properties["IDOZoneDis"] === "NR-SU") {
      fillColorZoning = '#6a6a6a';
    } else if (feature.properties["IDOZoneDis"].startsWith("NR-PO")) {
      fillColorZoning = '#006600';
    } else if (feature.properties["IDOZoneDis"].startsWith("P")) {
      fillColorZoning = '#b8b8b8';
    } else if (feature.properties["IDOZoneDis"].startsWith('R-1')) {
      fillColorZoning = '#f7f7a2';
    } else if (feature.properties["IDOZoneDis"].startsWith("R-M") || feature.properties["IDOZoneDis"] === 'R-T') {
      fillColorZoning = '#ffc94d';
    } else if (feature.properties["IDOZoneDis"] === "R-A") {
      fillColorZoning = '#8bf385';
    } else { // else unclassified
      fillColorZoning = '#ffffff';
    }
    
    const geojsonPolygonOptions = {
      fillColor: fillColorZoning,
      color: fillColorZoning,
      // color: '#000000', // black border
      weight: 1,
      opacity: 1,
      fillOpacity: 1,
    };
  
    return geojsonPolygonOptions;
  }
