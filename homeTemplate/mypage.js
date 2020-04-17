$(document).ready(function() {

  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function() {
      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");
  });

  //fix broken is-fullheight-with-navbar hero class
  $(".is-fullheight-with-navbar").css("min-height", "calc(100vh - " + $(".navbar").outerHeight() + "px)"); 

  feather.replace() //initialize feather icons

  initCarosel(); //initialize carosel
});

function initCarosel(){
  let items = $(".carosel-item").toArray();
  iterateCarosel(items, 0, items.length);
}
function iterateCarosel(items, counter, size){
  setTimeout(() => {
    let next = (counter + 1) % size;
    slide(items[counter], "slide-out-left");
    slide(items[next], "slide-in-left");
    iterateCarosel(items, next, size);
  },5000);
}
function slide(item, animation){
  let slideIn = (animation.split("-")[1] == "in");
  if (slideIn) item.classList.remove("is-hidden");
  item.classList.add(animation);
  setTimeout(() => {
    if (!slideIn) item.classList.add("is-hidden");
    item.classList.remove(animation);
  },1000);
}