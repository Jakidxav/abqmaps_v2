"use strict"; // JS strict mode

// this function speeds up loading points in leaflet
export function pointToCircle(feature, latlng) {
  var geojsonMarkerOptions = {
    radius: 1,
    fillColor: "#a10000",
    color: "red",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8,
  };

  var circleMarker = L.circleMarker(latlng, geojsonMarkerOptions);

  return circleMarker;
}

export const styleBikeTrails = {
  fillOpacity: 0,
  weight: 1,
  opacity: 1,
  color: "#B73239",
};

export const styleCityContours = {
  fillOpacity: 0,
  weight: 0.5,
  opacity: 1,
  color: "#1E90FF",
};

export const styleCityLimits = {
  fillOpacity: 0,
  weight: 2,
  opacity: 1,
  color: "#000000",
};

export const styleCityParks = {
  fillOpacity: 0.5,
  weight: 1,
  opacity: 1,
  color: "#009A17",
};

export const styleCityTrails = {
  fillOpacity: 0.5,
  weight: 1,
  opacity: 1,
  color: "#Ab784E",
};

export const styleHistoricPlaces = {
  fillOpacity: 0.5,
  weight: 1,
  opacity: 1,
  color: "#FFB81C",
};

export const styleLandfills = {
  fillOpacity: 0.5,
  weight: 1,
  opacity: 1,
  color: "#FF5B00",
};

export const styleNeighborhood = {
  fillOpacity: 0,
  weight: 2,
  opacity: 1,
  color: "#8F3A84",
};

export const styleOpenSpaces = {
  fillOpacity: 0.5,
  weight: 1,
  opacity: 1,
  color: "#8031A7",
};

export const stylePoliceBeats = {
  fillOpacity: 0,
  weight: 1,
  opacity: 1,
  color: "#000000",
};

export const stylePoliceIncidents = {
  fillOpacity: 0,
  weight: 1,
  opacity: 1,
  color: "#a10000",
};

export const styleStreets = {
  fillOpacity: 0.5,
  weight: 1,
  opacity: 1,
  color: "#FF9600",
};

export const styleTransitRoutes = {
  fillOpacity: 0.5,
  weight: 1,
  opacity: 1,
  color: "#FFF200",
};

export const styleTransitStops = {
  fillOpacity: 0,
  weight: 1,
  opacity: 1,
  color: "#FFF200",
};

export const styleWaterCover = {
  fillOpacity: 0.5,
  weight: 1,
  opacity: 1,
  color: "#00FFED",
};

export const styleZipCodes = {
  fillOpacity: 0,
  weight: 2,
  opacity: 1,
  color: "#0096FF",
};
