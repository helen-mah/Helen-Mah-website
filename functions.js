function toggleStyleSheet(){
    var styleElement = document.getElementById("mainStyleSheet");

    var fileName = styleElement.getAttribute("href");

    var newFileName = "style.css";
    if (fileName == "style2.css") {
        newFileName = "style.css";
    }
    else {
        newFileName = "style2.css";
    }

    styleElement.setAttribute("href", newFileName);
    localStorage.setItem("stylesheet", newFileName);
}


window.onload = function(){
    var styleElement = localStorage.getItem("stylesheet") || "light.css";
    var element = document.getElementById("mainStyleSheet");
    element.setAttribute("href", styleElement);
}

function show() {
    /*https://www.geeksforgeeks.org/how-to-show-images-on-click-using-html/*/
    document.getElementById('image')
    .style.display = "block";
    
    document.getElementById('btnID')
            .style.display = "none";
}