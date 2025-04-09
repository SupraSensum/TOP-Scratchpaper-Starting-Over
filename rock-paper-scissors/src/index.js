console.log("hello, world!");

const items = [
   "rock",
   "paper",
   "scissors"
];

function getRandValFromZeroTo(maxValExclusive) {
   return Math.floor(Math.random() * maxValExclusive);
}

function getComputerChoice() {
   randomIndex = getRandValFromZeroTo(items.length);
   return items[randomIndex];
}

function runRandomnessStats(cycles) {
   const itemsCounter = {
      "rock": 0,
      "paper": 0,
      "scissors": 0
   };

   for (let i = 0; i < cycles; i++) {
      itemsCounter[getComputerChoice()]++;
   }

   console.log(itemsCounter);
}