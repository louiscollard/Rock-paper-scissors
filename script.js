let playerChoice = document.querySelector(".player-choice");
let computerChoice = document.querySelector(".computer-choice");
const btnRock = document.querySelector(".btn-rock");
const btnPaper = document.querySelector(".btn-paper");
const btnScissors = document.querySelector(".btn-scissors");
let round = document.querySelector(".round");
let result = document.querySelector(".result");
let playerResult = document.querySelector(".player-score");
let computerResult = document.querySelector(".computer-score");

const items = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
let numberOfRound = 1;

function randomize(arr) {
	return Math.floor(Math.random() * arr.length);
}

function getComputerChoice() {
	const computerResult = randomize(items);

	if (computerResult === 0) return (computerChoice.textContent = "rock");
	if (computerResult === 1) return (computerChoice.textContent = "paper");
	if (computerResult === 2) return (computerChoice.textContent = "scissors");
}

function playRound(playerSelection, computerSelection) {
	if (playerSelection === computerSelection) {
		return "It's a tie!";
	} else if (
		(playerSelection === "rock" && computerSelection === "scissors") ||
		(playerSelection === "paper" && computerSelection === "rock") ||
		(playerSelection === "scissors" && computerSelection === "paper")
	) {
		playerScore++;
		playerResult.textContent = `Player : ${playerScore}`;
		result.textContent = "You win the round!";
	} else {
		computerScore++;
		computerResult.textContent = `Computer : ${computerScore}`;
		result.textContent = "You loose the round!";
	}
}

function game(playerSelection) {
	if (numberOfRound < 6) {
		const computerSelection = getComputerChoice();
		playRound(playerSelection, computerSelection);
		round.textContent = `Round : ${numberOfRound}`;
		numberOfRound++;
	}

	if (numberOfRound === 6) {
		if (playerScore > computerScore) {
			result.textContent = "You win the game!";
		} else if (playerScore < computerScore) {
			result.textContent = "You lose the game!";
		} else {
			result.textContent = "It's a tie game!";
		}
	}
}

btnRock.addEventListener("click", () => {
	playerChoice.textContent = "rock";
	game("rock");
});

btnPaper.addEventListener("click", () => {
	playerChoice.textContent = "paper";
	game("paper");
});

btnScissors.addEventListener("click", () => {
	playerChoice.textContent = "scissors";
	game("scissors");
});
