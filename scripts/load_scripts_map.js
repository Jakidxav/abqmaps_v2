function loadScript(src) {
    let script = document.createElement('script');
    script.setAttribute('src', src);
    document.head.appendChild(script);
}

/*
For some reason, you cannot include JQuery and Leaflet in this import file.
These libraries must be imported in a <script> tag in map_overlay.html.
*/
const scripts_list = [
  //"../scripts/jquery_3.5.1.slim.min.js",
  //"../scripts/leaflet_1.7.1.js",
  "../scripts/popper_1.16.1.min.js",
  "../scripts/bootstrap_4.6.1.bundle.min.js",
  "../scripts/leaflet_easyprint.js",
  "../scripts/leaflet_ruler.js",
  "../scripts/leaflet_fullscreen.js",
  "../scripts/leaflet_coordinates.js",
  "../scripts/map_overlay.js",
];

scripts_list.forEach(script_path => {
  loadScript(script_path);
});

$(document).ready(function(){
    $(".toggle").click(function(){
      $(".toggle-hide").toggle(speed="slow");
    });
});