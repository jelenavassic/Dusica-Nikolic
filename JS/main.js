

const bar = document.querySelector('.bar');
const navItems = document.getElementById('hamitems');
const navigation = document.getElementById('navigation');
const hamnav = document.getElementById('hamnav');
const aboutImg=document.getElementById('aboutImg');

bar.addEventListener('click', () => {
  navItems.classList.toggle('show');
});

let menuResize = function(){
  if (window.innerWidth > 599) {
    navItems.classList.remove('show');
    navigation.style.display="flex";
    hamnav.style.display="none";
   }
  else {
    // aboutImg.setAttribute('src', '../media/photo/2.jpg');
    navigation.style.display = "none";
    hamnav.style.display="flex";
  }
}


window.addEventListener('resize', menuResize);
menuResize()


document.getElementById("form").addEventListener("submit", function (event) {
  // Get the email input element
  var emailInput = document.getElementById("email");

  // Get the error message element
  var errorElement = document.querySelector(".error");

  // Check if the email field is empty
  if (emailInput.value.trim() === "") {
    // Display the error message
    errorElement.style.display = "block";

    // Prevent the form from being submitted
    event.preventDefault();
  } else {
    // If the email field is not empty, hide the error message
    errorElement.style.display = "none";
  }
});


document.getElementById("form").addEventListener("submit", function (event) {
  var emailInput = document.getElementById("email");
  var errorElement = document.querySelector(".error");
  var submitButton = document.getElementById("submit");

  // Check if the email field is empty
  if (emailInput.value.trim() === "") {
    // Display the error message
    errorElement.style.display = "block";

    // Disable the submit button
    submitButton.disabled = true;

    // Prevent the form from being submitted
    event.preventDefault();
  } else {
    // If the email field is not empty, hide the error message
    errorElement.style.display = "none";

    // Enable the submit button
    submitButton.disabled = false;
  }
});
 