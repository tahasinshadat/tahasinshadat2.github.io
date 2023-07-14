///////////////////// SCROLL TO TOP BUTTON /////////////////////////////////////

var scrollToTopBtn = document.getElementById("back_to_top_btn");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

var rootElement = document.documentElement;

function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
scrollToTopBtn.addEventListener("click", scrollToTop);

///////////////////// END OF SCROLL TO TOP BUTTON //////////////////////////////

// Handle form submission
document.getElementById("emailForm").addEventListener("submit", function(event) {
  // event.preventDefault(); // Prevent default form submission
  let form = event.target;
  let thankYouMessage = document.getElementById("thankYouMessage");
  form.style.display = 'none'; // Hide the form
  thankYouMessage.style.display = "block"; // Show the thank you message
  let header = document.getElementById("sendLabel");
  header.innderHTML = 'Thank You!'; // Change the header
  let modalBtns = document.getElementById('modalBtns');
  modalBtns.style.display = 'none'; // delete buttons
  let instructions = document.getElementById('instruct');
  instructions.style.display = 'none'; // delete instructions
  
});