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
  if (typeof(Storage) !== "undefined") {
    if (sessionStorage.clickcount) {
      sessionStorage.clickcount = Number(sessionStorage.clickcount)+1;
    } else {
      sessionStorage.clickcount = 1;
    }
    document.getElementById("hbasket").innerHTML = "Basket(" + sessionStorage.clickcount + ")";
	}
};

//This function is made to display the cart number on separate pages.
function displayCart() {
  if (sessionStorage.clickcount == null) {
    document.getElementById("hbasket").innerHTML = "Basket"
} else {
  document.getElementById("hbasket").innerHTML = "Basket(" + sessionStorage.clickcount + ")";
}
};

//Add items to Wishlist
function clickCounterWish() {
  if (typeof(Storage) !== "undefined") {
    if (sessionStorage.clickcountwish) {
      sessionStorage.clickcountwish = Number(sessionStorage.clickcountwish)+1;
    } else {
      sessionStorage.clickcountwish = 1;
    }
    document.getElementById("wishlist").innerHTML = "Wishlist(" + sessionStorage.clickcountwish + ")";
  }
};

//This is similar to displayCart, but for the wishlist
function displayWish() {
  if (sessionStorage.clickcountwish == null) {
    document.getElementById("wishlist").innerHTML = "Wishlist"
} else {
  document.getElementById("wishlist").innerHTML = "Wishlist(" + sessionStorage.clickcountwish + ")";
}
};




/* Unused but potentially useful code
function original() {
  document.getElementById("descflavor").innerHTML = "Original";
};

window.addEventListener("load", function () {

});
*/