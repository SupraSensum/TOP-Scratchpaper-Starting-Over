const body = document.querySelector('body');

const header = document.createElement('h1');
header.innerText = 'DOM Maniuplation and Events';

const container = document.createElement('div');

const redPara = document.createElement('p');
redPara.textContent = "Hey I'm red!";
redPara.style.cssText = "color: red";

const subHeader = document.createElement('h3');
subHeader.textContent = "I'm a blue h3!";
subHeader.style.cssText = "color: blue";

const subContainer = document.createElement('div');
subContainer.style.cssText = "border: 1px solid black; background-color: pink;";

const subContainerHeader = document.createElement('h1');
subContainerHeader.textContent = "I'm in a div";

const subContainerPara = document.createElement('p');
subContainerPara.textContent = "ME TOO!";

subContainer.append(
   subContainerHeader,
   subContainerPara
);

const buttons = [];
const buttonCopies = 3;
for (let i = 0; i < buttonCopies; i++) {
   const btn = document.createElement('button');
   btn.id = `btn-${i}`;
   btn.textContent = "Click Me!";
   btn.addEventListener("click", applyButtonStyle);
   buttons.push(btn);
}

// testing out event bubbling... wow
const bubbleButtons = [];
const bubbleButtonCopies = 3;
for (let i = 0; i < bubbleButtonCopies; i++) {
   const btn = document.createElement('button');
   btn.id = `btn-${i}`;
   btn.textContent = "Click Me!";
   bubbleButtons.push(btn);
}
const bubbleButtonsContainter = document.createElement('div');
bubbleButtonsContainter.append(...bubbleButtons);
bubbleButtonsContainter.addEventListener("click", applyButtonStyle);

// create a modal
const modal = document.createElement('div')
modal.id = 'modal';
modal.style.cssText = "outline: 1px solid red";
const modalButton = document.createElement('button');
modalButton.id = 'close-button';
modalButton.textContent = "Close"
const modalPara = document.createElement('p');
modalPara.textContent = "Modal content";
modal.append(modalButton, modalPara);

// JavaScript
modal.addEventListener("click", function () {
   console.log("Modal clicked! Closing...");
   this.style.display = "none"; // Close modal
});

modalButton.addEventListener("click", function (event) {
   event.stopPropagation(); // Prevent bubbling up to modal
   console.log("Close button clicked!");
   modal.style.display = "none"; // Close modal
});


body.append(
   header,
   redPara,
   subHeader,
   subContainer,
   ...buttons,
   bubbleButtonsContainter,
   modal
);

function applyButtonStyle(e) {
   e.target.style.cssText = "background-color: blue; color: white";
}