console.log("hello, world!");

let computerScore = 0;
let humanScore = 0;

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

function getHumanChoice() {
   return prompt("Enter your choice");
}

function playRound(humanChoice, computerChoice) {
   humanChoice = humanChoice.toLowerCase();

   let humanWins = false;

   // rock > scissors
   // paper > rock
   // scissors > paper

   // switch(humanChoice) {
   //    case "rock":
   //       if (computerChoice === "scissors") {
   //          humanWins = true;
   //       }
   //       break;
   //    case "paper":
   //       if(computerChoice === "rock") {
   //          humanWins = true;
   //       }
   //       break;
   //    case "scissors":
   //       if (computerChoice === "paper") {
   //          humanWins = true;
   //       }
   //       break;
   //    default:
   //       humanWins = null;
   // }

   if (humanChoice === "rock" && computerChoice === "scissors")
      humanWins = true;
   else if (humanChoice === "paper" && computerChoice === "rock")
      humanWins = true;
   else if (humanChoice === "scissors" && computerChoice === "paper")
      humanWins = true;

   if (humanWins) {
      console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
      humanScore++;
   } else {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
      computerScore++
   }
}

function playGame(numRounds) {
   for (let i = 0; i < numRounds; i++) {
      playRound(getComputerChoice(), getComputerChoice());
   }

   console.log({humanScore, computerScore});

   humanScore = 0;
   computerScore = 0;
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