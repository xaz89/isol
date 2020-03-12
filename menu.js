function menu() {
    var toggle = document.getElementById("nav");
    if (toggle.style.display === "none") {
        toggle.className = "entra";
        toggle.style.display = "flex";
        
        
    } else {
        toggle.style.display = "none";
    }
}