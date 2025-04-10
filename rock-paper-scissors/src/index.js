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

   let humanWins = false;

   if (humanChoice === computerChoice)
      humanWins = "tie";
   else if (humanChoice === "rock" && computerChoice === "scissors")
      humanWins = true;
   else if (humanChoice === "paper" && computerChoice === "rock")
      humanWins = true;
   else if (humanChoice === "scissors" && computerChoice === "paper")
      humanWins = true;

   if (humanWins === "tie") {
      console.log(`It's a tie! You both played ${humanChoice}`);
      tie++;
   } else if (humanWins === true) {
      console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
      humanScore++;
   } else if (humanWins === false) {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
      computerScore++;
   } else {
      console.error("Unexpected error!");
      console.error({humanWins});
   }
}

function playGame(numRounds) {
   for (let i = 0; i < numRounds; i++) {
      playRound(getComputerChoice(), getComputerChoice());
   }

   console.log({humanScore, computerScore, tie});

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