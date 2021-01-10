var m = document.getElementById("m")
var pc = document.getElementById("pc")

function displayMobile() {
    m.style.display = "block";
}

function displayPC() {
    pc.style.display = "block";
}

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent) || (window.innerWidth <= 1000) && (window.innerHeight <= 1000)) {
    displayMobile()
} else {
    displayPC()
}