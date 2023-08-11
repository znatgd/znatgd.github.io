/**
 * Hello, this is my website.
 * I should really make a readme file, but I'm too lazy LOL
 * You can read this on console too
 */
console.log("Hello, this is my website.");
console.log("I should really make a readme file, but anyways");
console.log("You are reading this on console (unless you are seeing the source)");
// plan for mobile friendly website
var getWidth = window.innerWidth;
var getHeight = window.innerHeight;
console.log(getWidth);
console.log(getHeight);
function checkMobile() {
    if (getWidth < getHeight) {
        document.getElementsByTagName("body").style.fontSize = "x-large";
        document.getElementsByClassName("headCont").style.fontSize = "x-small";
    }
}