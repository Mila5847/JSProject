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

// Remove everything from cart
function discardPurchase(){
  let clearLocalStorage = localStorage.clear()
  document.location.reload();
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
    let par =  document.createElement("h3");    

    //storing user's name + email
    let storeName =  document.getElementById("shippingName").value; 
    let storeEmail = document.getElementById("shippingEmail").value;
    let storeNum = document.getElementById("shippingPhone").value;
    let storeCard = document.getElementById("CardholderName").value;
    let storeDate = document.getElementById("expDate").value;

    let myBr = document.createElement("br");
    let myBr2 = document.createElement("br");
    let myBr3 = document.createElement("br");
    let btn = document.createElement("button");
  
   if(document.getElementById('homeDeliver').checked){

      let street =  document.getElementById("streetName").value; 
      let city =  document.getElementById("cityName").value; 
      let state =  document.getElementById("stateName").value; 
      let zip =  document.getElementById("zip").value; 

    let displayThanks = document.createTextNode("Thank you " + storeName + " for your purchase! We will sent a confirmation to your email " +storeEmail +
     ", and to your phone number " +storeNum);

    let displayAddress = document.createTextNode("Your package will be delivered at " +street + ", " + city + ", " +state + ", " + zip);

    let displayCard = document.createTextNode("The payment will be made with the card with the card holder name: "+storeCard + " which expires on " +storeDate);

    btn.innerHTML="Cancel Order";
    btn.id="cancelOrder";
    
    par.appendChild(displayThanks);
    par.appendChild(myBr);
    par.appendChild(displayAddress);
    par.appendChild(myBr2); 
    par.appendChild(displayCard);
    par.appendChild(myBr3);
    par.appendChild(btn);
    
    
    let parent=document.getElementById("displaySummary");
    parent.appendChild(par);
    //create a cancel button to clear the nodes
  btn.addEventListener("click", function(){
    
    let element = document.getElementById("displaySummary");
      while(element.hasChildNodes()){
        element.removeChild(element.firstChild); 
      }
  window.alert("Your order will be cancelled. Press 'OK' to continue");
  });
}
//if the store delivery is checked
else if (document.getElementById('storeDeliver').checked){
      let street = "77 Heaven-Road";
      let city = "St. Heaven";
      let state = "Los Angeles";
      let zip = "6H7 1E7";

      let displayThanks = document.createTextNode("Thank you " + storeName + " for your purchase! We will sent a confirmation to your email " +storeEmail +
      ", and to your phone number " +storeNum);
 
      let displayAddress = document.createTextNode("We will have your package ready for pick-up at our store on " +street + ", " + city + ", " +state + ", " + zip);
 
      let displayCard = document.createTextNode("The payment will be made with the card with the card holder name: "+storeCard + " which expires on " +storeDate);
  
      btn.innerHTML="Cancel Order";
      btn.id="cancelOrder";
      
      par.appendChild(displayThanks);
      par.appendChild(myBr);
      par.appendChild(displayAddress);
      par.appendChild(myBr2); 
      par.appendChild(displayCard);
      par.appendChild(myBr3);
      par.appendChild(btn);
      
      
      let parent=document.getElementById("displaySummary");
      parent.appendChild(par);
      //create a cancel button to clear the nodes
    btn.addEventListener("click", function(){
      
      let element = document.getElementById("displaySummary");
        while(element.hasChildNodes()){
          element.removeChild(element.firstChild); 
        }
    window.alert("Your order will be cancelled. Press 'OK' to continue");
    });


}  
  } 
    

   



