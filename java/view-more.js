var view = document.getElementById('view');
var more = document.getElementById('more');

view.onclick = function() {
    if (more.style.display === "none") {
        more.style.display = "inline";
        view.innerHTML = "View Less";
    } else {
        more.style.display = "none";
        view.innerHTML = "View More";
    }
}
