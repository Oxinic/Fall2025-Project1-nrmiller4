// Noland Miller - CS 330 Project 1
// Spider-Man movie page animations

console.log("Loading page...");

window.onload = function() {
    console.log("Script loaded");
    
    // animate the left and right sections
    var leftSide = document.querySelector('.movie-main');
    var rightSide = document.querySelector('.movie-details');
    
    if (leftSide && rightSide) {
        setTimeout(function() {
            leftSide.classList.add('slide-left');
        }, 150);
        
        setTimeout(function() {
            rightSide.classList.add('slide-right');
        }, 350);
    }
    
    console.log("Page loaded!");
    console.log("Done!");
};
