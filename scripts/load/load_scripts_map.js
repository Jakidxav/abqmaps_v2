function loadScript(src) {
    let script = document.createElement('script');
    script.setAttribute('src', src); 
    document.head.appendChild(script);
}

function loadModule(src) {
  let script = document.createElement('script');
  script.setAttribute('src', src);
  script.setAttribute("type", "module");
  document.head.appendChild(script);
}

/*
For some reason, you cannot include JQuery and Leaflet in this import file.
These libraries must be imported in a <script> tag in map_overlay.html.
*/
const scripts_list = [
  //"../scripts/jquery_3.5.1.slim.min.js",
  //"../scripts/leaflet_1.7.1.js",
  "../scripts/bootstrap/popper_1.16.1.min.js",
  "../scripts/bootstrap/bootstrap_4.6.1.bundle.min.js",
  "../scripts/leaflet/leaflet_easyprint.js",
  "../scripts/leaflet/leaflet_ruler.js",
  "../scripts/leaflet/leaflet_fullscreen.js",
  "../scripts/leaflet/leaflet_coordinates.js",
  "../scripts/leaflet/leaflet_geoman.js",
];

// these scripts need to be loaded as modules, i.e. <script src="..." type="module"></script>
const modules_list = [
  "../scripts/map_overlay.js",
  "../scripts/feature_colormaps.js",
  "../scripts/feature_style_options.js",
];

scripts_list.forEach(script_path => {
  loadScript(script_path);
});

modules_list.forEach(script_path => {
  loadModule(script_path);
})

$(document).ready(function(){
    $(".toggle").click(function(){
      $(".toggle-hide").toggle(speed="slow");
    });
});