("use strict"); // JS strict mode

function loadScript(src) {
  let script = document.createElement("script");
  script.setAttribute("src", src);
  document.head.appendChild(script);
}

const data_list = [
  "../data/bike_trails.js",
  "../data/city_contours_50ft.js",
  "../data/city_limits.js",
  "../data/city_parks.js",
  "../data/city_trails.js",
  "../data/heatmap_afternoon.js",
  "../data/heatmap_morning.js",
  "../data/historic_places.js",
  "../data/landfill_data.js",
  "../data/landfill_buffers.js",
  //"../data/land_use.js",
  "../data/neighborhoods.js",
  "../data/open_spaces.js",
  "../data/police_beats.js",
  "../data/police_incidents.js",
  //"../data/streets_data.js",
  "../data/recycling_dropoff.js",
  "../data/state_cleanup.js",
  "../data/transit_routes.js",
  "../data/transit_stops.js",
  "../data/water_cover.js",
  "../data/zip_codes.js",
  //"../data/ido_zoning.js",
];

data_list.forEach((script_path) => {
  loadScript(script_path);
});