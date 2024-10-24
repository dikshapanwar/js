





//2.MYSELF
const options = document.querySelectorAll('.option');
const resultMessage = document.querySelector('#result-message');
const playerChoiceDisplay = document.querySelector('#player-choice');
const computerChoiceDisplay = document.querySelector('#computer-choice');
const restartBtn = document.querySelector('#restart');

options.forEach(option => {
    option.addEventListener('click', () => {
        const playerChoice = option.id;
        const computerChoice = getComputerChoice();
        const result = determineWinner(playerChoice, computerChoice);

        // Display choices and result
        playerChoiceDisplay.textContent = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
        computerChoiceDisplay.textContent = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
        resultMessage.textContent = result;

        // Show restart button
        restartBtn.classList.remove('hidden');
    });
});
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors']
    const randomIndex = Math.floor(Math.random() * choices.length);
    console.log(randomIndex);
    return choices[randomIndex]

}
function determineWinner(player, computer) {
    if (player === computer) {
        return "It's a draw!";
    }
    if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        return 'You win!';
    }
    return 'You lose!';
}

restartBtn.addEventListener('click', () => {
    // Reset the game
    playerChoiceDisplay.textContent = '';
    computerChoiceDisplay.textContent = '';
    resultMessage.textContent = '';
    restartBtn.classList.add('hidden');
});
