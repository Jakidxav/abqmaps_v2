"use strict"; // JS strict mode

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
