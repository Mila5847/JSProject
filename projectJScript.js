//Bracelet/Necklace 1
let displayDescription1 = document.getElementsByClassName("braceletsAndNecklaces")[0];
displayDescription1.addEventListener("mouseover", function(){
display("description1");
}, false);
displayDescription1.addEventListener("mouseout", function(){
hide("description1");
}, false);

// Bracelet/Necklace 2
let displayDescription2 = document.getElementsByClassName("braceletsAndNecklaces")[1];
  displayDescription2.addEventListener("mouseover", function(){
  display("description2");
}, false);
displayDescription2.addEventListener("mouseout", function(){
  hide("description2");
}, false);

// Bracelet/Necklace 3
let displayDescription3 = document.getElementsByClassName("braceletsAndNecklaces")[2];
  displayDescription3.addEventListener("mouseover", function(){
  display("description3");
}, false);
displayDescription3.addEventListener("mouseout", function(){
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

//---------------------------------------------------------------------------------------------------

// Add item to cart
function addItemToCart(itemName, price){
    if(localStorage.getItem(itemName) == null){
        let itemData = itemName + ";" + price + ";" + 1;
        localStorage.setItem(itemName, itemData);
        return;
    }
    let existingItem = localStorage.getItem(itemName);
    let existingItemArrayData = existingItem.split(";");
    existingItemArrayData[2]++;
    let stringData = existingItemArrayData.join(";");
    localStorage.setItem(itemName, stringData);
}

function loadItems(){
    
}


//---------------------------------------------------------------------------------------------------

// Delivery Information
function delivery(){
    if(document.getElementById('homeDeliver').checked) {
        let street = document.getElementById("streetName");
        street.value = '';
        let city = document.getElementById("cityName");
        city.value = '';
        let state = document.getElementById("stateName");
        state.value = '';
        let zip = document.getElementById("zip"); 
        zip.value = '';

    }
    else if(document.getElementById('storeDeliver').checked){
    let storeCheckChecked = document.getElementById("storeDeliver");
    let street = document.getElementById("streetName");
    street.value = "77 Heaven-Road";
    let city = document.getElementById("cityName");
    city.value = "St. Heaven"
    let state = document.getElementById("stateName");
    state.value = "Los Angeles"
    let zip = document.getElementById("zip");
    zip.value = "6H7 1E7"
    }
}

function homeDeliver(){

}

