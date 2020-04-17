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

  let item = $(".carosel-item").toArray()[0];
  setTimeout(slideOutLeft(item), 2000);
});

function slideOutLeft(item){
  item.classList.toggle("slide-out-left");
  setTimeout(() => {
    item.classList.toggle("offscreen-left");
    item.classList.toggle("slide-out-left");
  }, 1000);
}

// function initCarosel(){
//   let items = $(".carosel-item").toArray();
//   items.forEach((item, index) => {
//     item.style.left = (index * 100) + "vw";
//   });
// }

// function slide(lr){
//   //inital loop correction
//   if (lr){
    
//   }

//   let items = $(".carosel-item").toArray();
//   items.forEach((item) => {
//     let left = item.style.left;
//     let units = parseInt(left.slice(0, left.length-2));
//     item.style.left = (lr ? (units - 100) : (units + 100)) + "vw";
//   });

//   //post loop correction
//   if (!lr){

//   }
// }

/**
 * Cycling carosel:
 * |   N    | Viewport |    2    |    3    |   ...   | (where N is last frame)
 * We have calc(...vw...) (Viewport Width) to implement the functionality
 * We need animation/transition, drag functionality, and threshold logic to 
 * determine whether to snap back to original frame or snap to new frame when user "drops"
 * 
 * First priority:
 * init function to set correct left property for arbitrary number of slides and in correct order
 * slide function to slide left or right in a cycle
 * 
 * Second priority:
 * animation of sliding on slide function
 * 
 * Third priority:
 * drag to change left property between 3 slides (left, center, right)
 * 
 * Fourth priority:
 * snapping to original or new frame based on a threshold 
 */