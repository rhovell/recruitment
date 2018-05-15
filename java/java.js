// menu button jscript
(function openDropDown(){
  // debugger
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
