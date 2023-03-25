// script for toggle
const MenuItems = document.getElementById("MenuItems");
      MenuItems.style.maxHeight = "0px";
      function menutoggle() {
        if (MenuItems.style.maxHeight == "0px") {
          MenuItems.style.maxHeight = "200px";
        } else {
          MenuItems.style.maxHeight = "0px";
        }
      }

//script for form toggle
const LoginForm = document.getElementById("LoginForm");
const RegForm = document.getElementById("RegForm");
const indicator = document.getElementById("indicator");
function register() {
  RegForm.style.transform = "translateX(0px)";
  LoginForm.style.transform = "translateX(0px)";
  indicator.style.transform = "translateX(100px)";
}
function login() {
  RegForm.style.transform = "translateX(300px)";
  LoginForm.style.transform = "translateX(300px)";
  indicator.style.transform = "translateX(0px)";
}


//script for product gallery

const ProductImg = document.getElementById("ProductImg");
const SmallImg = document.getElementsByClassName("small-img");
SmallImg[0].onclick = function () {
  ProductImg.src = SmallImg[0].src;
};
SmallImg[1].onclick = function () {
  ProductImg.src = SmallImg[1].src;
};
SmallImg[2].onclick = function () {
  ProductImg.src = SmallImg[2].src;
};
SmallImg[3].onclick = function () {
  ProductImg.src = SmallImg[3].src;
};