

var button = document.getElementById("myButton");


button.addEventListener("click", function() {
   
    alert("Button Clicked!");
});



//Assignment 6(2)
var div = document.getElementById("myDiv");


var originalColor = div.style.backgroundColor;


div.addEventListener("mouseenter", function() {
    div.style.backgroundColor = "blue";
});


div.addEventListener("mouseleave", function() {
   
    div.style.backgroundColor = originalColor;
});