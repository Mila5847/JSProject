# Jewelry Shop - Angel

## Project Overview
Done throughout my first year of College in Computer Science for my Web Programming and JS Libraries class, the development of the Jewelry Shop Angel project
allowed me and my teammate Kim, to explore the dynamicity of a website and experiment with it. The Jewelry Store allows you to select bracelets and/or necklaces,
go to the checkout and "pay" for the purchase.

## Table of Contents
- [Project Description](#project-description)
- [Installation](#installation)
- [Features](#features)
- [Challenges](#challenges)
- [Future Improvements Ideas](#improvements)
- [Acknowledgments](#acknowledgments)

<a name="project-description"></a>
## Project Description 
The project is developed using mostly HTML and CSS for the design, and JS for the functionalities (dynamicity). The website opens on a
welcome page with a description of the small business and instructions on how to navigate the website. Five pages could be accessed through the navigation bar:
the welcome page (About us), the bracelets page, the necklaces page, the shipping page, and the cart page.
### About us page
![image](https://github.com/Mila5847/JSProject/assets/46633364/530ccff1-ba49-4374-9de5-65991e9b1735)
![image](https://github.com/Mila5847/JSProject/assets/46633364/e6d22ab4-ad84-4a13-abbc-182f2a0f1fbb)
### Bracelets page
![image](https://github.com/Mila5847/JSProject/assets/46633364/5999f3c2-de76-444c-985a-5bbb0a0d40e7)
![image](https://github.com/Mila5847/JSProject/assets/46633364/ad5d1a9a-bdc0-4bec-8413-bd80db1da292)
### Necklaces page
![image](https://github.com/Mila5847/JSProject/assets/46633364/fc5fcb24-6f42-44d5-8de9-f7d81089bf7d)
![image](https://github.com/Mila5847/JSProject/assets/46633364/9c3a170e-cba5-42ec-8ef3-c05040e495e4)
### Cart page
![image](https://github.com/Mila5847/JSProject/assets/46633364/805fca9b-b3d4-44ec-b398-3cfcccae76ba)
![image](https://github.com/Mila5847/JSProject/assets/46633364/e88f3ee5-51df-4809-9f04-bd0e8cfae73a)
### Shipping page
![image](https://github.com/Mila5847/JSProject/assets/46633364/0a82f09c-186b-4ad2-b213-02363d254edf)
![image](https://github.com/Mila5847/JSProject/assets/46633364/764e2454-4093-4bdd-86d6-852b5e077a5a)
![image](https://github.com/Mila5847/JSProject/assets/46633364/2d250bd5-0266-4ebb-837d-ce552e59d883)
![image](https://github.com/Mila5847/JSProject/assets/46633364/659c2031-b23f-42b2-bcc5-11f29db2ffd4)

<a name="features"></a>
## Features 
- The client can view the shop's inventory.
- The client can view the items' descriptions and prices.
- The client can select the desired items (bracelets/necklaces).
- The client can view the total cost of their purchase, and add or remove items.
- The client can choose if the purchase should be delivered to an address or the local store.
- The client can cancel the order.
<a name="improvements"></a>

<a name="challenges"></a>
## Challenges
The biggest challenge was to make the cart functionality. Whenever the client adds or removes an item from the cart, the local storage has to be updated 
so if the website is refreshed, the items stay in the cart. This was achieved with those two methods:
```javascript
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
```
When we display the chosen items in the cart, we display the product's name, quantity, and price that we get from the added item.
```javascript
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
```
## Future Improvements Ideas
- Authentication (username, password), log-in/sign-in page could be implemented so the client's information is secured and the website is only 
accessed by authorized people.
- Credit/Debit card validation could be implemented to ensure the card's validity.
- The design could be improved to make the website more modern and clean-looking.
- More items could be added to the shop's inventory.
<a name="acknowledgments"></a>
## Acknowledgments 
I would like to thank my brother, Petar Kehayov, for helping me with the challenge mentioned above. 
