'use strict';



/**
 * navbar toggle
 */

const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");

const navElemArr = [navOpenBtn, navCloseBtn];

for (let i = 0; i < navElemArr.length; i++) {
  navElemArr[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
  });
}

/**
 * toggle navbar when click any navbar link
 */

const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.remove("active");
  });
}

/**
 * header active when window scrolled down
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 50 ? header.classList.add("active")
    : header.classList.remove("active");
});

/**
 * Mission and Vision 
 */

let buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', function(){
    buttons.forEach(btn => btn.classList.remove('active'));
    this.classList.add('active');
  });
});

/**
 * Contact Form
 */
const form = document.getElementById('contact-form');

form.addEventListener('submit', (event) => 
{
  event.preventDefault();

  const name = form.elements.name.value;
  const email = form.elements.email.value;
  const message = form.elements.message.value;

  if (name && email && message) 
  {
      alert("Message Send Successfully!!!");
  } 
  else 
  {
      // Form is invalid, display an error message
      alert("Message Not Send");
  }
  form.reset();
});


//** Contact Page
 
// Get the modal
var modal = document.getElementById("myModal");
    
// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() 
{
  modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() 
{
  modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



 


// function validateForm() 
//     {
//         var name = document.forms["contactForm"]["name"].value;
//         var email = document.forms["contactForm"]["email"].value;
//         var message = document.forms["contactForm"]["message"].value;
//         var error = "";

//         if (name == "") 
//         {
//             error += "Please enter your name.\n";
//         }
//         if (email == "") 
//         {
//             error += "Please enter your email address.\n";
//         } else if (!validateEmail(email)) 
//         {
//             error += "Please enter a valid email address.\n";
//         }
//         if (message == "") 
//         {
//             error += "Please enter a message.\n";
//         }
//         if (error != "") 
//         {
//             alert(error);
//             return false;
//         }
//     }    
//     function validateEmail(email) 
//     {
//         var re = /\S+@\S+\.\S+/;
//         return re.test(email);
//     }