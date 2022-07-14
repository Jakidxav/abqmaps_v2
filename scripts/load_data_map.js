function loadScript(src) {
    let script = document.createElement('script');
    script.setAttribute('src', src);
    document.head.appendChild(script);
}

const data_list = [
    "../data/abq_city_limits.js",
    "../data/bike_trails.js",
    "../data/city_parks.js",
    "../data/open_spaces.js",
    "../data/city_trails.js",
    "../data/historic_places.js",
    "../data/apd_beats.js",
    "../data/police_incidents.js",
    "../data/neighborhoods.js",
    "../data/zip_codes.js",
    "../data/transit_routes.js",
    "../data/transit_stops.js",
    "../data/water_cover.js",
    "../data/landfill_data.js",
    "../data/heatmap_afternoon.js",
    "../data/heatmap_morning.js",
    //"../data/land_use.js",
    //"../data/streets_data.js",
    //"../data/ido_zoning.js",
];

data_list.forEach(script_path => {
    loadScript(script_path);
});