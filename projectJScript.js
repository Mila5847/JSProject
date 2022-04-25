/*//Bracelet/Necklace 1
let displayDescription = document.getElementById("descriptionNecklace1");
displayDescription.addEventListener("mouseover", function(){

display("description1");

}, false);
displayDescription[0].addEventListener("mouseout", function(){
hide("description1");
}, false);

// Bracelet/Necklace 2

  displayDescription[1].addEventListener("mouseover", function(){
  display("description2");
}, false);
displayDescription[1].addEventListener("mouseout", function(){
  hide("description2");
}, false);

// Bracelet/Necklace 3

  displayDescription[2].addEventListener("mouseover", function(){
  display("description3");
}, false);
displayDescription[2].addEventListener("mouseout", function(){
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
}*/

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

  let table = document.getElementById("items");
  let tableContent = 
  `<table class="table table-hover"> 
    <tr>
      <th>Product Name</th>
      <th>Quantity</th>
      <th>Unit Price</th>
      <th>Edit</th>
      <th>Price</th>
    </tr>`;

  let totalPrice = 0;

  for(let i = 0; i < items.length; i++){
    
    let buttonAdd = `<button class="btn btn-outline-secondary" onclick="addItemToCart('`+ items[i].name + `',` + items[i].price + `, true)">+</button>`;
    let buttonRemove = `<button class="btn btn-outline-secondary" onclick="removeItemFromCart('`+ items[i].name + `')">-</button>`;
    
    tableContent += "<tr><td>" + items[i].name + "</td><td>" + items[i].quantity + "</td><td>" + items[i].price + "</td><td>" + buttonAdd + buttonRemove + "</td><td>" + (items[i].quantity * items[i].price) + " $" + "</td></tr>";

    totalPrice += (items[i].quantity * items[i].price);
  }
  tableContent += "<tr><td><b>Total Price</b></td><td></td><td></td><td></td><td>" + totalPrice + " $" + "</td></tr>";

  tableContent += "</table>";
  table.innerHTML = tableContent; 
 
}

//---------------------------------------------------------------------------------------------------

// Personal Information
function colorForms(){
  let nameForShipping = document.getElementById("shippingName");
  nameForShipping.addEventListener("blur", function (){
    blurColor("shippingName");
  }, false);
  nameForShipping.addEventListener("focus", function (){
    focusColor("shippingName")
  }, false);

  let emailForShipping = document.getElementById("shippingEmail");
  emailForShipping.addEventListener("blur", function (){
    blurColor("shippingEmail")
  }, false);
  emailForShipping.addEventListener("focus", function (){
    focusColor("shippingEmail")
  }, false);

  let phoneForShipping = document.getElementById("shippingPhone");
  phoneForShipping.addEventListener("blur", function (){
    blurColor("shippingPhone")
  }, false);
  phoneForShipping.addEventListener("focus", function (){
    focusColor("shippingPhone")
  }, false);
        
  function blurColor(id){
    let el = document.getElementById(id);
    el.style.backgroundColor = "pink";
  }
        
  function focusColor(id){
    let el = document.getElementById(id);
    el.style.backgroundColor = "violet";
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

//--------------------------------------------------------------------------------------------------------------------

// Purchase alert

function purchase(){
  window.alert("Thank you for your purchase! <3");
}
//Personal + Delivery summary
let userInput = document.getElementById("submit");
  userInput.addEventListener("click", submission);

  function submission(){
    //creating a paragraph
    let par =  document.createElement("p");    

    //storing user's name + email
    let storeName =  document.getElementById("shippingName").value; 
    let storeEmail = document.getElementById("shippingEmail").value;
    let storeNum = document.getElementById("shippingPhone").value;
    let myBr = document.createElement("br");

    

   if(document.getElementById('homeDeliver').checked){

      let street =  document.getElementById("streetName").value; 
      let city =  document.getElementById("cityName").value; 
      let state =  document.getElementById("stateName").value; 
      let zip =  document.getElementById("zip").value; 
    let displayThanks = document.createTextNode("Thank you " + storeName + " for your purchase! We will sent a confirmation to your email " +storeEmail +
     " and to your phone number " +storeNum);

     let displayAddress = document.createTextNode("We will deliver your package at " +street + " , " + city + " , " +state + " , " + zip);

 //adding info to paragraph
    par.appendChild(displayThanks);
    par.appendChild(myBr);
    par.appendChild(displayAddress);
    
 //getting the form 
    let parent=document.getElementById("displaySummary");
    
    //adding the paragraph to form
    parent.appendChild(par);
}
/*else if (document.getElementById('storeDeliver').checked){
      let street = document.getElementById("streetName");
      street.value = "77 Heaven-Road";
      let city = document.getElementById("cityName");
      city.value = "St. Heaven";
      let state = document.getElementById("stateName");
      state.value = "Los Angeles";
      let zip = document.getElementById("zip");
      zip.value = "6H7 1E7";
}*/

   
  }



