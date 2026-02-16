var projectModal1 = document.getElementById("card1_modal");
var projectModal2 = document.getElementById("card2_modal");
var projectModal3 = document.getElementById("card3_modal");
var modal = document.getElementsByClassName("modal");

var projectBtn1 = document.getElementById("card1_btn")
var projectBtn2 = document.getElementById("card2_btn")
var projectBtn3 = document.getElementById("card3_btn")

if (projectBtn1 && projectModal1) {
    projectBtn1.onclick = function () {
        projectModal1.style.display = "block";
    }
}

if (projectBtn2 && projectModal2) {
    projectBtn2.onclick = function () {
        projectModal2.style.display = "block";
    }
}

if (projectBtn3 && projectModal3) {
    projectBtn3.onclick = function () {
        projectModal3.style.display = "block";
    }
}

window.onclick = function(event) {
    if (projectModal1 && event.target == projectModal1) {
        projectModal1.style.display = "none";
    }
    if (projectModal2 && event.target == projectModal2) {
        projectModal2.style.display = "none";
    }
    if (projectModal3 && event.target == projectModal3) {
        projectModal3.style.display = "none";
    }
}

/* ==== HIDDEN CLICKABLE AREA EASTER EGG==== */

var hiddenAreas = document.getElementsByClassName("hidden_clickable_area");

for (let i = 0; i < hiddenAreas.length; i++) {
    hiddenAreas[i].onclick = function() { 
        document.documentElement.style.backgroundColor = "#e6ffff"
    }
}

/* ==== HIDDEN KEYBOARD COMBINATION EASTER EGG ==== */

const secretCombination = "hello";
let keypresses = "";

document.addEventListener('keydown', function(event) {
    keypresses += event.key;

    if(keypresses === secretCombination){
        document.documentElement.style.backgroundColor = "#e6ffff"
        keypresses = "";
    }

    if(keypresses.length >= 5) {
        keypresses = "";
    }
});
