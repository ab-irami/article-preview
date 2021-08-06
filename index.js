const shareBtn = document.querySelector(".img--share");
const hiddenMedium = document.querySelector(".hidden-section");
const svgPath = document.querySelector("path");



shareBtn.addEventListener("click",  function(){
    hiddenMedium.classList.toggle("section-open");
    svgPath.classList.toggle("path");
    shareBtn.classList.toggle("svg");
});






