<<<<<<< HEAD
let menu=document.querySelector('#menu-bar');
let navbar=document.querySelector('.navbar');


window.onscroll=()=>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}
menu.addEventListener('click',()=>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
=======
let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};
menu.addEventListener("click", () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
});

// Get references to the radio buttons and the card sections
const bookHotelRadio = document.getElementById("bookHotel");
const bookFlightRadio = document.getElementById("bookFlight");
const hotelCards = document.getElementById("hotelCards");
const flightCards = document.getElementById("flightCards");

// Event listener for the "Book Hotel" radio button
bookHotelRadio.addEventListener("change", function () {
  if (this.checked) {
    hotelCards.style.display = "block"; // Show hotel cards
    flightCards.style.display = "none"; // Hide flight cards
  }
});

// Event listener for the "Book Flight" radio button
bookFlightRadio.addEventListener("change", function () {
  if (this.checked) {
    hotelCards.style.display = "none"; // Hide hotel cards
    flightCards.style.display = "block"; // Show flight cards
  }
>>>>>>> 357b88cbc2cdf7c84a1f30ffac10e4502a161cc3
});
