//Bracelet 1
  let displayDescription1 = document.getElementsByClassName("braceletsAndNecklaces")[0];
  displayDescription1.addEventListener("mouseover", function(){
  display("description1");
}, false);
displayDescription1.addEventListener("mouseout", function(){
  hide("description1");
}, false);

// Bracelet 2
let displayDescription2 = document.getElementsByClassName("braceletsAndNecklaces")[1];
  displayDescription2.addEventListener("mouseover", function(){
  display("description2");
}, false);
displayDescription2.addEventListener("mouseout", function(){
  hide("description2");
}, false);

// Bracelet 3
let displayDescription3 = document.getElementsByClassName("braceletsAndNecklaces")[2];
  displayDescription3.addEventListener("mouseover", function(){
  display("description3");
}, false);
displayDescription3.addEventListener("mouseout", function(){
  hide("description3");
}, false);

// Functions
function display(id){
  let element = document.getElementById(id);
  element.style.display = "inline";
}

function hide(id){
  let element = document.getElementById(id);
  element.style.display = "none";
}