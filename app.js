
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
var score = {
  wins: 0, 
  ties: 0, 
  losses: 0,
}



let computerSelection = [
  "rock", "paper", "scissor"
];
/**
 *
 * @param {string} playerChoice
 */
function play(playerChoice) {
 
  //RANDOM ComputerChoice Generator
let computerChoice = computerSelection[Math.floor(Math.random()*computerSelection.length)];
  let results = selections.find(
    s => s.type.toLowerCase() == playerChoice.toLowerCase()
  );

  //Result Selections
  if (playerChoice.toLowerCase() == computerChoice) {
    document.querySelector("#gameResult").innerHTML = `
    <h4>${results.type}</h4>
    <p>${results.tie}</p>`
console.log("tie");
// Add in score if there is a tie
    score.ties++;
    console.log(score.ties);
    document.querySelector("#tie").innerHTML = `
    <h4>Ties</h4>
<p>${score.ties}</p>`;
    
  } 
  
  else if (playerChoice.toLowerCase() == "scissor" && computerChoice == "rock") {
    document.querySelector("#gameResult").innerHTML = `
    <h4>${results.type}</h4>
    <p>${results.lose}</p>`;
score.losses++;
document.querySelector("#lose").innerHTML = `
<h4>Loses</h4>
<p>${score.losses}</p>`;
}

  else if (playerChoice.toLowerCase() == "scissor" && computerChoice == "paper") {
 document.querySelector("#gameResult").innerHTML = `
    <h4>${results.type}</h4>
    <p>${results.win}</p>`;
score.wins++;
document.querySelector("#win").innerHTML = `
<h4>Wins</h4>
<p>${score.wins}</p>`;
}
 
else if (playerChoice.toLowerCase() == "paper" && computerChoice == "rock") {
  document.querySelector("#gameResult").innerHTML = `
    <h4>${results.type}</h4>
    <p>${results.win}</p>`;
score.wins++;
document.querySelector("#win").innerHTML = `
<h4>Wins</h4>
<p>${score.wins}</p>`;
}


  else if (playerChoice.toLowerCase() == "paper" && computerChoice == "scissor") {
    document.querySelector("#gameResult").innerHTML = `
    <h4>${results.type}</h4>
    <p>${results.lose}</p>`;
score.losses++;
document.querySelector("#lose").innerHTML = `
<h4>Loses</h4>
<p>${score.losses}</p>`;
}


  else if (playerChoice.toLowerCase() == "rock" && computerChoice == "paper") {
 document.querySelector("#gameResult").innerHTML = `
    <h4>${results.type}</h4>
    <p>${results.lose}</p>`;
score.losses++;
document.querySelector("#lose").innerHTML = `
<h4>Loses</h4>
<p>${score.losses}</p>`;
}


  else if (playerChoice.toLowerCase() == "rock" && computerChoice == "scissor") {
  document.querySelector("#gameResult").innerHTML = `
    <h4>${results.type}</h4>
    <p>${results.win}</p>`;
 score.wins++;
 document.querySelector("#win").innerHTML = `
 <h4>Wins</h4>
<p>${score.wins}</p>`;
 }
}





// *
//  * IF playerChoice == computerChoice { Then "Tie"}
//  *
//  * IF playerChoice == Scissor { Then "You Lose"}
//  *
//  * IF playerChoice == Paper { Then "You Win"}
//  */



  // This code works for basic, canned response
  // document.querySelector("#gameResult").innerHTML = `
  // <h4>${results.type}</h4>
  // <p>${results.status}</p>`;


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
