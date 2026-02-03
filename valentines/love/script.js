const theimg = document.getElementById("booooppp");
//img ^^
const sadness = document.getElementById("sadimg");

const thingy2 = document.getElementById("yesyesyesbutton");

const nonono = document.getElementById("nobutts");

thingy2.addEventListener("click", function() {
    theimg.style.display = "block";
    //img ^^
    sadness.style.display = "none";

});

nonono.addEventListener("click", function() {
    sadness.style.display = "block";
    theimg.style.display = "none";
});