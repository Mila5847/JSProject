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
    let jewelryName = [];
    let jewelryPrice = [];
    let jewelryQuantity = [];
    let bracelet1 = "";
    let bracelet2 = "";
    let bracelet3 = "";

    let necklace1 = "";
    let necklace2 = "";
    let necklace3 = "";

    if(localStorage.getItem("bracelet1") != null){
        bracelet1 = localStorage.getItem("bracelet1");
        let itemInfo = bracelet1.split(";");
        let itemName = itemInfo[0];
        jewelryName.push(itemName);

        let itemPrice = itemInfo[1];
        jewelryPrice.push(itemPrice)

        let itemQuantity = itemInfo[2];
        jewelryQuantity.push(itemQuantity);
    }

    if(localStorage.getItem("bracelet2") != null){
        bracelet2 = localStorage.getItem("bracelet2");
        let itemInfo = bracelet2.split(";");
        let itemName = itemInfo[0];
        jewelryName.push(itemName);

        let itemPrice = itemInfo[1];
        jewelryPrice.push(itemPrice)

        let itemQuantity = itemInfo[2];
        jewelryQuantity.push(itemQuantity);
    }

    if(localStorage.getItem("bracelet3") != null){
        bracelet3 = localStorage.getItem("bracelet3");
        let itemInfo = bracelet3.split(";");
        let itemName = itemInfo[0];
        jewelryName.push(itemName);

        let itemPrice = itemInfo[1];
        jewelryPrice.push(itemPrice)

        let itemQuantity = itemInfo[2];
        jewelryQuantity.push(itemQuantity);
    }

    if(localStorage.getItem("necklace1") != null){
        necklace1 = localStorage.getItem("necklace1");
        let itemInfo = necklace1.split(";");
        let itemName = itemInfo[0];
        jewelryName.push(itemName);

        let itemPrice = itemInfo[1];
        jewelryPrice.push(itemPrice)

        let itemQuantity = itemInfo[2];
        jewelryQuantity.push(itemQuantity);
    }
    
    if(localStorage.getItem("necklace2") != null){
        necklace2 = localStorage.getItem("necklace2");
        let itemInfo = necklace2.split(";");
        let itemName = itemInfo[0];
        jewelryName.push(itemName);

        let itemPrice = itemInfo[1];
        jewelryPrice.push(itemPrice)

        let itemQuantity = itemInfo[2];
        jewelryQuantity.push(itemQuantity);
    }    

    if(localStorage.getItem("necklace3") != null){
        necklace3 = localStorage.getItem("necklace3");
        let itemInfo = necklace3.split(";");
        let itemName = itemInfo[0];
        jewelryName.push(itemName);

        let itemPrice = itemInfo[1];
        jewelryPrice.push(itemPrice)

        let itemQuantity = itemInfo[2];
        jewelryQuantity.push(itemQuantity);
    }

   /* document.write("<table>");
    document.write(
      `<tr>
        <th>Product Name</th>
        <th>Quantity</th>
        <th>Price</th>
      </tr>`
      );

      for(let i = 0; i < jewelry.length; i++){
        document.write("<tr><td>" + jewelry[i] + "</td><td>" + jewelryPrice[i] + "</td><td>" + jewelryQuantity[i] + "</td></tr>");
      }

  document.write("</table>");  */
    
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


