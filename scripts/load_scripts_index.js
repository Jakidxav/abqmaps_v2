function loadScript(src) {
    let script = document.createElement('script');
    script.setAttribute('src', src);
    document.head.appendChild(script);
}
    
const scripts_list = [
    "../scripts/jquery_3.5.1.slim.min.js",
    "../scripts/popper_1.16.1.min.js",
    "../scripts/bootstrap_4.6.1.bundle.min.js",
    "../scripts/run_prettify.js",
];

scripts_list.forEach(script_path => {
    loadScript(script_path);
});

// loadScript("../scripts/jquery_3.5.1.slim.min.js");
// loadScript("../scripts/popper_1.16.1.min.js");
// loadScript("../scripts/bootstrap_4.6.1.bundle.min.js");
// loadScript("../scripts/run_prettify.js");