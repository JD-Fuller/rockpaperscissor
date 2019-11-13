
/**
 * 
 * @param {string} playerChoice 
 */
function play(playerChoice){
let computerChoice = 'rock';
/**
 * IF playerChoice == computerChoice { Then "Tie"}
 * 
 * IF playerChoice == Scissor { Then "You Lose"}
 * 
 * IF playerChoice == Paper { Then "You Win"}
 */
if (playerChoice == computerChoice) 
{return "Tie!"} 
else if (playerChoice == 'scissor') 
{document.querySelector('#gameResult')}
else if (playerChoice == 'paper')
{return "You Win!"}
}

