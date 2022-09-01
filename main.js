
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



//////////////////// BLINKING TEXT ////////////////////////////////////////////

let t = 0;

let adjectiveText = () => {
  let adjectives = ["Problem Solver", "Web Developer", "Dedicated", "Leader", "Team Player", "Hardworking", "Self-Starter"];
  document.querySelector("#blinktext").innerHTML = adjectives[t];

  t++;
  if (t > adjectives.length - 1) {
    t = 0;
  }

}

window.onload = () => {
  adjectiveText();
  
  setInterval(() => {
    adjectiveText();
  }, 2000);

}

