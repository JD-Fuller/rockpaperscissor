// let selections = [
//   {type: "Rock",
//   status: "Tie Ball Game!"},
//   {type: "Paper",
//   status: "Winner, Winner chicken dinner!"},
//   {type: "Scissor",
//   status: "You Lose! Ha-ha!"}
// ];


// let selections = [
//   {tie: "Tie Ball Game!",
//   win: "Winner, winner chicken dinner!",
//   lose: "You lose! Go home ya loser!"
//   }
// ]

let selections = [
  {type: "Rock",
  tie: "Tie Ball Game!",
  win: "Winner, winner chicken dinner!",
  lose: "You lose! Go home ya loser!"},
  {type: "Paper",
  tie: "Tie Ball Game!",
  win: "Winner, winner chicken dinner!",
  lose: "You lose! Go home ya loser!"},
  {type: "Scissor",
  tie: "Tie Ball Game!",
  win: "Winner, winner chicken dinner!",
  lose: "You lose! Go home ya loser!"}
]
// let choiceGen = [
// { type: "Rock"},
// { type: "Paper"},
// { type: "Scissor"},
// // { type: "Wizard"},
// // { type: "Spock"},
// // { type: "Batman"},
// // { type: "Lizard"}
// ]

let computerSelection = [
  "rock", "paper", "scissor"
];
/**
 *
 * @param {string} playerChoice
 */
function play(playerChoice) {
  // let computerChoice = "rock";
let computerChoice = computerSelection[Math.floor(Math.random()*computerSelection.length)];
  let results = selections.find(
    s => s.type.toLowerCase() == playerChoice.toLowerCase()
  );
  // This code works for basic, canned response
  // document.querySelector("#gameResult").innerHTML = `
  // <h4>${results.type}</h4>
  // <p>${results.status}</p>`;


  if (playerChoice.toLowerCase() == computerChoice) {
    document.querySelector("#gameResult").innerHTML = `
<p>${results.tie}</p>`;

  } else if (playerChoice.toLowerCase() == "scissor" && computerChoice == "rock") {
    document.querySelector("#gameResult").innerHTML = `
<p>${results.lose}</p>`;
}
else if (playerChoice.toLowerCase() == "scissor" && computerChoice == "paper") {
 document.querySelector("#gameResult").innerHTML = `
<p>${results.win}</p>`;
}
 else if (playerChoice.toLowerCase() == "paper" && computerChoice == "rock") {
  document.querySelector("#gameResult").innerHTML = `
<p>${results.win}</p>`;
}
else if (playerChoice.toLowerCase() == "paper" && computerChoice == "scissor") {
    document.querySelector("#gameResult").innerHTML = `
<p>${results.lose}</p>`;
}
else if (playerChoice.toLowerCase() == "rock" && computerChoice == "paper") {
 document.querySelector("#gameResult").innerHTML = `
<p>${results.lose}</p>`;
}
else if (playerChoice.toLowerCase() == "rock" && computerChoice == "scissor") {
  document.querySelector("#gameResult").innerHTML = `
 <p>${results.win}</p>`;
 }


}





// *
//  * IF playerChoice == computerChoice { Then "Tie"}
//  *
//  * IF playerChoice == Scissor { Then "You Lose"}
//  *
//  * IF playerChoice == Paper { Then "You Win"}
//  */