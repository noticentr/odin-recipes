const buttons = document.querySelectorAll('button');
const resultElement = document.getElementById('result');
const humanScoreField = document.getElementById('humanScore');
const computerScoreField = document.getElementById('computerScore');

let humanScore = 0
let computerScore = 0

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const userChoice = getHumanChoice(button)
        const computerChoice = getComputerChoice();
        const winner = determineWinner(userChoice, computerChoice);
        resultElement.textContent = `You chose ${userChoice}, Computer chose ${computerChoice}. Result: ${winner}`;
		humanScoreField.textContent = humanScore.toString();
		computerScoreField.textContent = computerScore.toString();
    });
});

function getHumanChoice(button) {
	return button.id;
}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'Draw!';
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
		humanScore++;
        return 'You win!';
    } else {
		computerScore++;
        return 'Computer wins!';
    }
}
