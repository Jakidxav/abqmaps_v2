("use strict"); // JS strict mode

function loadScript(src) {
  let script = document.createElement("script");
  script.setAttribute("src", src);
  document.head.appendChild(script);
}

const data_list = [
  "../data/bike_trails.js",
  "../data/broadband_need.js",
  "../data/bernalillo_percent_bipoc_2020.js",
  "../data/bernalillo_percent_white_2020.js",
  "../data/city_contours_50ft.js",
  "../data/city_limits.js",
  "../data/city_parks.js",
  "../data/city_trails.js",
  "../data/heatmap_afternoon.js",
  "../data/heatmap_morning.js",
  "../data/historic_places.js",
  "../data/landfill_data.js",
  "../data/landfill_buffers.js",
  "../data/major_dams.js",
  "../data/neighborhoods.js",
  "../data/open_spaces.js",
  "../data/police_beats.js",
  "../data/police_incidents.js",
  "../data/public_libraries.js",
  "../data/public_wifi.js",
  "../data/recycling_dropoff.js",
  "../data/soil_water_districts.js",
  "../data/state_cleanup.js",
  "../data/state_superfund.js",
  "../data/transit_routes.js",
  "../data/transit_stops.js",
  "../data/water_cover.js",
  "../data/zip_codes.js",
];

data_list.forEach((script_path) => {
  loadScript(script_path);
});