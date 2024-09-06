function toggleStyle() {
    var styleElement = document.getElementById("mainStyle");
    var currentStyle = styleElement.getAttribute("href");
    var newStyle;
    if (currentStyle == "style1.css") {
        newStyle = "style2.css";
    }
    else {
        newStyle = "style1.css";
    }

    styleElement.setAttribute("href", newStyle);
    localStorage.setItem("stylesheet", newStyle);
}

window.onload = function() {
    var savedStyle = localStorage.getItem("stylesheet");
    var styleElement = document.getElementById("mainStyle");
    if (savedStyle) {
        styleElement.setAttribute("href", savedStyle);
    }
}