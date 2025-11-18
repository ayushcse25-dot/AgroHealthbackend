document.addEventListener("DOMContentLoaded", function() {

    const hamburger = document.getElementById("hamburger");
    const navLinks = document.querySelector("nav #cover");
    const icon = hamburger.querySelector("span");
    hamburger.addEventListener("click", function() {
        hamburger.classList.toggle("fixed");
        navLinks.classList.toggle("active");
        hamburger.classList.toggle("open");
        if (hamburger.classList.contains("open")) {
            icon.innerHTML = "&times;";
        } else {
            icon.innerHTML = "&#9776;";
        }
    });

    
});

// Navigate to different pages
function s(){
    window.location.href = "/cart/";  // ChatBot page
}

function p(){
    window.location.href = "/products/";  // Pest detector (cam page)
}

function a(){
    window.location.href = "/about/";  // Alerts page
}

function i(){
    window.location.href = "/about/";  // Info page
}

function aiad(){
    window.location.href = "/products/";  // AI Crop Advisor page
}

// Webcam handling (only run if element exists)
const webcamElement = document.getElementById('webcam');
if(webcamElement && typeof Webcam !== 'undefined') {
    const canvasElement = document.getElementById('canvas');
    const webcam = new Webcam(webcamElement, 'user', canvasElement);
    webcam.start();
}
