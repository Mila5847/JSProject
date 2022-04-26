//Bracelet/Necklace 1
let jewelry = document.getElementsByClassName("braceletsAndNecklaces");
jewelry[0].addEventListener("mouseover", function(){
    display("description1");
  }, false);
jewelry[0].addEventListener("mouseout", function(){
    hide("description1");
  }, false);

// Bracelet/Necklace 2

jewelry[1].addEventListener("mouseover", function(){
  display("description2");
}, false);
jewelry[1].addEventListener("mouseout", function(){
  hide("description2");
}, false);

// Bracelet/Necklace 3

jewelry[2].addEventListener("mouseover", function(){
  display("description3");
}, false);
jewelry[2].addEventListener("mouseout", function(){
  hide("description3");
}, false);

// Functions for Bracelets/Necklces
function display(id){
  let element = document.getElementById(id);
  element.style.display = "inline";
}

function hide(id){
  let element = document.getElementById(id);
  element.style.display = "none";
}