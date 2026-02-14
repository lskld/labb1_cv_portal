var projectModal1 = document.getElementById("card1_modal");
var projectModal2 = document.getElementById("card2_modal");
var projectModal3 = document.getElementById("card3_modal");
var modal = document.getElementsByClassName("modal");

var projectBtn1 = document.getElementById("card1_btn")
var projectBtn2 = document.getElementById("card2_btn")
var projectBtn3 = document.getElementById("card3_btn")

projectBtn1.onclick = function () {
    projectModal1.style.display = "block";
}

projectBtn2.onclick = function () {
    projectModal2.style.display = "block";
}

projectBtn3.onclick = function () {
    projectModal3.style.display = "block";
}

window.onclick = function(event) {
  if (event.target == projectModal1 ||
      event.target == projectModal2 ||
      event.target == projectModal3) {
    projectModal1.style.display = "none";
    projectModal2.style.display = "none";
    projectModal3.style.display = "none";
  }
}