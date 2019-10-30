var quantity = null;


//Change Picture on Description Page

//Credit to Rushil Khurana for walking me through the use of selectedIndex
function changePic() {
  var e = document.getElementById("glaze");
  if (e.selectedIndex == 0) {
    document.getElementById("descmenuitem").src="assets/pics/Roll.png"
  } else if (e.selectedIndex == 1) {
    document.getElementById("descmenuitem").src="assets/pics/sugar.png"
  } else if (e.selectedIndex == 2) {
    document.getElementById("descmenuitem").src="assets/pics/vanilla.png"
  } else if (e.selectedIndex == 3) {
    document.getElementById("descmenuitem").src="assets/pics/chocolate.png"
  };
};

//Add items to Basket
//This code was inspired by W3 https://www.w3schools.com/html/tryit.asp?filename=tryhtml5_webstorage_local_clickcount
function clickCounter() {
  var cartList = JSON.parse(localStorage.getItem("cart"));
  if (cartList.length == 0) {
    document.getElementById("hbasket").innerHTML = "Basket";
  } else {
    document.getElementById("hbasket").innerHTML = "Basket(" + cartList.length + ")";
  }
};

//This function is made to display the cart number on separate pages.
function displayCart() {
  if (JSON.parse(localStorage.getItem("cart")) == null) {
    cartList = [];
  } else {
    var currentCart = JSON.parse(localStorage.getItem("cart"));
    cartList = currentCart;
  };
  if (cartList.length == 0) {
    document.getElementById("hbasket").innerHTML = "Basket";
  } else {
    document.getElementById("hbasket").innerHTML = "Basket(" + cartList.length + ")";
  }
};











//Assignment 6B


function originalBun(glaze, quantity) {
  this.glaze = glaze;
  this.quantity = quantity;
  this.flavor = "Original";
};


//add items to Local Storage list onclick
function addToArray(){
  if (JSON.parse(localStorage.getItem("cart")) == null) {
    cartList = [];
  } else {
    var currentCart = JSON.parse(localStorage.getItem("cart"));
    cartList = currentCart;
    console.log("Okay");
  };
  var x = new originalBun("None","None");
  var e = document.getElementById("glaze");
  if (e.selectedIndex == 0) {
    x.glaze = "None";
  } else if (e.selectedIndex == 1) {
    x.glaze = "Sugar-Milk";
  } else if (e.selectedIndex == 2) {
    x.glaze = "Vanilla-Milk";
  } else if (e.selectedIndex == 3) {
    x.glaze = "Double-Chocolate";
  };
  var i = document.getElementById("quantityof");
  if (i.selectedIndex == 0) {
    x.quantity = 1;
  } else if (i.selectedIndex == 1) {
  	x.quantity = 3;
  } else if (i.selectedIndex == 2) {
  	x.quantity = 6;
  } else if (i.selectedIndex == 3) {
  	x.quantity = 12;
  };
  cartList.push(x);
  localStorage.setItem("cart", JSON.stringify(cartList));
};




//Iteration help: https://stackoverflow.com/questions/3010840/loop-through-an-array-in-javascript
function displayList() {
  if (JSON.parse(localStorage.getItem("cart")) == null) {
    cartList = [];
  } else {
    var currentCart = JSON.parse(localStorage.getItem("cart"));
    cartList = currentCart;
  };
  var cartListLength = cartList.length;
  for (var i = 0; i < cartListLength; i++) {
    document.getElementById("bdescflavor" + i).innerHTML = (cartList[i].flavor);
    document.getElementById("baskettotalprice" + i).innerHTML = "$" + ((cartList[i].quantity)*2);
    document.getElementById("brollglaze" + i).innerHTML = "Glaze: " + (cartList[i].glaze);
    document.getElementById("brollquantity" + i).innerHTML = "Quantity: " + (cartList[i].quantity);
    document.getElementById(i).innerHTML = "Delete";
    if (cartList[i].glaze == "None") {
      document.getElementById("bmenuitem" + i).src="assets/pics/Roll.png";
    } else if (cartList[i].glaze == "Sugar-Milk") {
      document.getElementById("bmenuitem" + i).src="assets/pics/sugar.png";
    } else if (cartList[i].glaze == "Vanilla-Milk") {
      document.getElementById("bmenuitem" + i).src="assets/pics/vanilla.png";
    } else if (cartList[i].glaze == "Double-Chocolate") {
      document.getElementById("bmenuitem" + i).src="assets/pics/chocolate.png";
    };
    document.getElementById("subtotal").innerHTML = "Subtotal (" + cartListLength +") items:";
  }; 
};





function deleteItem(clicked_id) {
  var cartList = JSON.parse(localStorage.getItem("cart"));
  var indexToBeDeleted = clicked_id;
  var numberOfIndexToBeDeleted = parseInt(indexToBeDeleted, 10);
  cartList.splice(numberOfIndexToBeDeleted, 1);
  console.log(cartList);
  localStorage.setItem("cart", JSON.stringify(cartList));
  window.location.reload()
};

//https://stackoverflow.com/questions/921290/is-it-possible-to-clone-html-element-objects-in-javascript-jquery


/*function createClone() {
  if (JSON.parse(localStorage.getItem("cart")) == null) {
    cartList = [];
  } else {
    var currentCart = JSON.parse(localStorage.getItem("cart"));
    cartList = currentCart;
  };
  if (cartList.length == 0) {
    console.log("nothing in here")
  } else if (cartList.length > 0) {
    var elementToClone = "replicate" + ((cartList.length)-1);
    var newElementName = "replicate" + cartList.length;
    var newIdName = "item" + cartList.length;
    var newMenuItem = "bmenuitem" + cartList.length;
    var newDesc = "bdescflavor" + cartList.length;
    var newBasketTotal = "baskettotalprice" + cartList.length;
    var newGlaze = "brollglaze" + cartList.length;
    var newQuantity = "brollquantity" + cartList.length;
    var newDelete = cartList.length;
  var newChild = document.createElement("replicate1");
  newChild.innerHTML = `
        <div class="item0" id="">
          <img class="bmenuitem" id="" src="">
          <div class="brolldesc">
            <!-- Flavor  -->      
            <h1 class="bdescflavor" id=""></h1>
            <!-- Price  -->     
            <h2 class="baskettotalprice" id=""></h2>
            <!-- Description  -->
            <br>
            <h3 class="brolldescription" id=""></h3>
            <br>
            <br>
            <h3 class="brolldescription" id=""></h3>
            <h3 class="delete" id="" onclick="deleteItem(this.id); displayList()"></h3>
          </div>
        </div>
        `;
  document.getElementById('replicate0').appendChild(newChild);
  };*/

