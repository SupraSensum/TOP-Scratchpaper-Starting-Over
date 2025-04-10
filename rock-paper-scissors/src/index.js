console.log("hello, world!");

let computerScore = 0;
let humanScore = 0;
let tie = 0;

const items = [
   "rock",
   "paper",
   "scissors"
];

function getRandValFromZeroTo(maxValExclusive) {
   return Math.floor(Math.random() * maxValExclusive);
}

function getComputerChoice() {
   const randomIndex = getRandValFromZeroTo(items.length);
   return items[randomIndex];
}

function getHumanChoice() {
   return prompt("Enter your choice");
}

function playRound(humanChoice, computerChoice) {
   humanChoice = humanChoice.toLowerCase();

   const result = determineOutcome(humanChoice, computerChoice);
   updateScore(result);
   reportRound(result, humanChoice, computerChoice);
}

function determineOutcome(h, c) {
   const wins = {
      rock: "scissors",
      paper: "rock",
      scissors: "paper"
   };

   if (h === c)
      return "tie";
   else if (wins[h] === c)
      return "win";
   else if (wins[c] === h)
      return "lose";
   else
      return null;
}

function updateScore(result) {
   if (result === "win")
      humanScore++;
   else if (result === "lose")
      computerScore++;
   else if (result === "tie")
      tie++;
   else
      console.error("Unexpected error");
}

function reportRound(result, h, c) {
   if (result === "win")
      console.log(`You ${result}! ${h} beats ${c}`);
   else if (result === "lose")
      console.log(`You ${result}! ${c} beats ${h}`);
   else if (result === "tie")
      console.log(`It's a ${result}! Both drew ${h}`);
   else
      console.error("Unexpected error");
}

function playGame(numRounds) {
   for (let i = 0; i < numRounds; i++) {
      playRound(getComputerChoice(), getComputerChoice());
   }

   const sum = humanScore + computerScore + tie;
   const sumCheck = sum === numRounds;
   console.log({humanScore, computerScore, tie, sum, sumCheck});

   humanScore = 0;
   computerScore = 0;
   tie = 0;
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