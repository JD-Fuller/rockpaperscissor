let selections = [
  {
    type: "Rock",
    status: "Tie Ball Game!"
  },
  {
    type: "Paper",
    status: "Winner, Winner chicken dinner!"
  },
  {
    type: "Scissor",
    status: "You Lose! Ha-ha!"
  }
];

/**
 * IF playerChoice == computerChoice { Then "Tie"}
 *
 * IF playerChoice == Scissor { Then "You Lose"}
 *
 * IF playerChoice == Paper { Then "You Win"}
 */
/**
 *
 * @param {string} playerChoice
 */
function play(playerChoice) {
  let computerChoice = "rock";

  let results = selections.find(
    selection => selection.type.toLowerCase() == playerChoice.toLowerCase()
  );

  document.querySelector("#gameResult").innerHTML = `<p>${results.status}`;



  
//   if (playerChoice.toLowerCase() == computerChoice) {
//     document.querySelector("#gameResult").innerHTML = `
// <p>${results.status}</p>`;
//   } else if (playerChoice.toLowerCase() == "scissor") {
//     document.querySelector("#gameResult").innerHTML = `
// <p>${results.lose}</p>`;
//   } else if (playerChoice.toLowerCase() == "paper") {
//     document.querySelector("#gameResult").innerHTML = `
// <p>${results.win}</p>`;
//   }
}
