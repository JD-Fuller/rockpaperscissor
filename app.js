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
    s => s.type.toLowerCase() == playerChoice.toLowerCase()
  );
debugger;
  document.querySelector("#gameResult").innerHTML = `
  <h4>${results.type}</h4>
  <p>${results.status}</p>`;




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
