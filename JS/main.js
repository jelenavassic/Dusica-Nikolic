const bar = document.querySelector(".bar");
const navItems = document.getElementById("hamitems");
const navigation = document.getElementById("navigation");
const hamnav = document.getElementById("hamnav");
const aboutImg = document.getElementById("aboutImg");
const emailInput = document.getElementById("email");
const errorElement = document.querySelector(".error");
const submitButton = document.getElementById("submit");

bar.addEventListener("click", () => {
  navItems.classList.toggle("show");
});

let menuResize = function () {
  if (window.innerWidth > 599) {
    navItems.classList.remove("show");
    navigation.style.display = "flex";
    hamnav.style.display = "none";
  } else {
    navigation.style.display = "none";
    hamnav.style.display = "flex";
  }
};

window.addEventListener("resize", menuResize);
menuResize();

document.getElementById("form").addEventListener("submit", function (event) {
  if (emailInput.value.trim() === "") {
    errorElement.style.display = "block";
    submitButton.disabled = true;
    event.preventDefault();
  } else {
    errorElement.style.display = "none";
    submitButton.disabled = false;
  }
  document.getElementById("email").addEventListener("input", function () {
    errorElement.style.display = "none";
    submitButton.disabled = false;
  });
});
