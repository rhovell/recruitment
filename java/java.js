// menu button jscript
(function openDropDown(){
  // console.log("function called");
  let menu = document.querySelector("#menuButton");
  let menuList = document.querySelector("#dropDownMenu");
  let body = document.querySelector("body");
  menu.addEventListener("click", showMenu);
  function showMenu(){
    // console.log("clicked");
    menuList.classList.add("open");
    menuList.style.display = "block";
    if(menuList.classList.contains("open")){
      // console.log("if open");
      menu.removeEventListener("click", showMenu);
      menu.addEventListener("click", hideMenu);
    }
    // body.addEventListener("click", hideMenu);
  function hideMenu(){
    menuList.style.display = "none";
    menuList.classList.remove("open");
    // console.log("hide menu called");
      menu.addEventListener("click", showMenu);
  }
  }
})();


// javascript for hero heroBannervar
slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("hero-banner-image");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";

delayedHeroScroll = setTimeout(function playSlides(){
  console.log("playSlides called");
plusSlides(n);
},8000)

}
