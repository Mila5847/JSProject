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

// Remove item from cart
function removeItemFromCart(itemName){
  let existingItem = localStorage.getItem(itemName);
  let existingItemArrayData = existingItem.split(";");
  existingItemArrayData[2]--;
  if(existingItemArrayData[2] == 0){
    localStorage.removeItem(itemName);
    document.location.reload(); 
    return;
  }
  let stringData = existingItemArrayData.join(";");
  localStorage.setItem(itemName, stringData);

  document.location.reload(); 
}

// Add item to cart
function addItemToCart(itemName, price, isCart){
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

    if(isCart){
      document.location.reload();
    }
}

function addItemFromLocalStorage(item, itemsArray){
  if(localStorage.getItem(item) != null){
    let itemData = {
      name : "",
      price: "",
      quantity: ""
    };
      let itemFromLocalStorage = localStorage.getItem(item);
      let itemInfo = itemFromLocalStorage.split(";");
      let itemName = itemInfo[0];
      itemData.name = itemName;

      let itemPrice = itemInfo[1];
      itemData.price = itemPrice;

      let itemQuantity = itemInfo[2];
      itemData.quantity = itemQuantity;
      itemsArray.push(itemData);
  }
}

function loadItems(){
  let items = [];
  let namesOfProducts = ["bracelet1", "bracelet2", "bracelet3", "necklace1", "necklace2", "necklace3"];
  for(let i = 0; i < namesOfProducts.length; i++){
    addItemFromLocalStorage(namesOfProducts[i], items);
  }
  console.log(items);

  let table = document.getElementById("items");
  let tableContent = 
  `<table class="table table-hover"> 
    <tr>
      <th>Product Name</th>
      <th>Quantity</th>
      <th>Price</th>
      <th>Edit</th>
      <th>Price</th>
    </tr>`;

    let totalprice = 0;

  for(let i = 0; i < items.length; i++){
    
    let buttonAdd = `<button class="btn btn-outline-secondary" onclick="addItemToCart('`+ items[i].name + `',` + items[i].price + `, true)">+</button>`;
    let buttonRemove = `<button class="btn btn-outline-secondary" onclick="removeItemFromCart('`+ items[i].name + `')">-</button>`;
    
    console.log(buttonAdd);

    tableContent += "<tr><td>" + items[i].name + "</td><td>" + items[i].quantity + "</td><td>" + items[i].price + "</td><td>" + (items[i].quantity * items[i].price) + "</td><td>" + buttonAdd + buttonRemove + "</td></tr>";
    totalprice += (items[i].quantity * items[i].price);
  }

  tableContent += "</table>";
  table.innerHTML = tableContent; 
  document.getElementById("totalPrice").innerHTML = totalprice;
}

//---------------------------------------------------------------------------------------------------
// Personal Information
function colorForms(){
  let nameForShipping = document.getElementById("shippingName");
  nameForShipping.addEventListener("blur", blurColor, false);
  nameForShipping.addEventListener("focus", focusColor, false);

  let emailForShippin = document.getElementById("shippingEmail");

        
  function blurColor(){
    shippingName.style.backgroundColor = "pink";
  }
        
  function focusColor(){
    shippingName.style.backgroundColor = "violet";
  }
}

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


