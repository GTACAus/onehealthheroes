/*
  This is your site JavaScript code - you can add interactivity!
*/

// Print a message in the browser's dev tools console each time the page loads
// Use your menus or right-click / control-click and choose "Inspect" > "Console"
console.log("Hello 🌎");

/* 
Make the "Click me!" button move when the visitor clicks it:
- First add the button to the page by following the steps in the TODO 🚧
*/
const btn = document.querySelector("button"); // Get the button from the page
if (btn) { // Detect clicks on the button
  btn.onclick = function () {
    // The 'dipped' class in style.css changes the appearance on click
    btn.classList.toggle("dipped");
  };
}


// ----- GLITCH STARTER PROJECT HELPER CODE -----

// Open file when the link in the preview is clicked
let goto = (file, line) => {
  window.parent.postMessage(
    { type: "glitch/go-to-line", payload: { filePath: file, line: line } }, "*"
  );
};
// Get the file opening button from its class name
const filer = document.querySelectorAll(".fileopener");
filer.forEach((f) => {
  f.onclick = () => { goto(f.dataset.file, f.dataset.line); };
});


// Open a particular card when button is clicked
let cards;
let currentCard = 0;

window.onload = function () {
  cards = document.querySelectorAll(".card");
  showCard(currentCard);
};

function showCard(index) {
  cards.forEach((card, i) => {
    card.classList.toggle("active", i === index);
  });
}

function nextPage() {
  if (currentCard < cards.length - 1) {
    currentCard++;
    showCard(currentCard);
  }
}

function prevPage() {
  if (currentCard > 0) {
    currentCard--;
    showCard(currentCard);
  }
}

function goToCardById(cardId) {
  const index = Array.from(cards).findIndex(card => card.id === cardId);
  if (index !== -1) {
    currentCard = index;
    showCard(currentCard);
  } else {
    console.warn("Card with ID '" + cardId + "' not found.");
  }
}
