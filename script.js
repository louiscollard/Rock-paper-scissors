const items = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
	const computerResult = Math.floor(Math.random() * items.length);

	if (computerResult === 0) return "rock";
	if (computerResult === 1) return "paper";
	if (computerResult === 2) return "scissors";

	console.log(computerResult);
}

function playRound(playerSelection, computerSelection) {
	playerSelection = playerSelection.toLowerCase();
	computerSelection = computerSelection.toLowerCase();

	if (playerSelection === "rock" && computerSelection === "paper")
		return "You Lose! Paper beats Rock";
	if (playerSelection === "rock" && computerSelection === "scissors")
		return "You Win! Rock beats Scissors";
	if (playerSelection === "rock" && computerSelection === "rock")
		return "It's a tie!";

	if (playerSelection === "paper" && computerSelection === "scissors")
		return "You Lose! Scissors beats Paper";
	if (playerSelection === "paper" && computerSelection === "rock")
		return "You Lose! Rock beats Paper";
	if (playerSelection === "paper" && computerSelection === "paper")
		return "It's a tie!";

	if (playerSelection === "scissors" && computerSelection === "rock")
		return "You Lose! Rock beats Scissors";
	if (playerSelection === "scissors" && computerSelection === "paper")
		return "You Win! Scissors beats Paper";
	if (playerSelection === "scissors" && computerSelection === "scissors")
		return "It's a tie!";
}

const playerSelection = "Rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
