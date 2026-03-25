let myChoice = document.getElementById("my-choice");
let comChoice = document.getElementById("com-choice");
let result = document.getElementById("Result");
let rounds= document.getElementById("Rounds");
let winCount= document.getElementById("winCount");
let LossCount = document.getElementById("lossCount");
let Draw = document.getElementById("drawCount");
console.log(result);

console.log(myChoice);

console.log(comChoice);

let wonCount = 0;
let lossCount =0;
let roundCount=0;
let drawCount =0;

function playgame(choice) {
  if (choice == "rock") {
    myChoice.textContent = "Your choice : Rock 🪨";
    roundCount++;
  } else if (choice == "paper") {
    myChoice.textContent = "Your choice : Paper 📄";
    roundCount++;
  } else {
    myChoice.textContent = "Your choice : Scissor ✂️";
    roundCount++;
  }

  let arr = ["Rock", "Paper", "Scissor"];

  let ComChoise = Math.floor(Math.random() * 3);
  if (
    (arr[ComChoise] == "Rock" && choice == "paper") ||
    (arr[ComChoise] == "Paper" && choice == "scissor") ||
    (arr[ComChoise] == "Scissor" && choice == "rock")
  ) {
    comChoice.textContent = "Compter Choice : " + arr[ComChoise];
    result.textContent = "Congo 😍 You Won 👑👑!!!";
    wonCount++;

  } else if (
    (arr[ComChoise] == "Rock" && choice == "rock") ||
    (arr[ComChoise] == "Paper" && choice == "paper") ||
    (arr[ComChoise] == "Scissor" && choice == "scissor")
  ) {
    comChoice.textContent = "Compter Choice : " + arr[ComChoise];
    result.textContent = " Its Draw ⚔️";
    drawCount++;
  } else {
    comChoice.textContent = "Compter Choice : " + arr[ComChoise];

    result.textContent = " Computer Won 🤖";
    lossCount++;
  }
  rounds.textContent ="Rounds "+roundCount ;
  winCount.textContent="Win "+wonCount;
  LossCount.textContent ="Loss "+ lossCount;
  Draw.textContent="Draw "+drawCount;
  
}
