let myChoice = document.getElementById("my-choice");
let comChoice = document.getElementById("com-choice");
let result = document.getElementById("Result");
console.log(result);

console.log(myChoice);

console.log(comChoice);

function playgame(choice) {
  if (choice == "rock") {
    myChoice.textContent = "Your choice : Rock 🪨";
  } else if (choice == "paper") {
    myChoice.textContent = "Your choice : Paper 📄";
  } else {
    myChoice.textContent = "Your choice : Scissor ✂️";
  }


let arr = ["Rock", "Paper", "Scissor"];

let ComChoise = Math.floor(Math.random() * 3);
if ((arr[ComChoise] == "Rock" && choice == "paper") || (arr[ComChoise] == "Paper" && choice == "scissor") ||(arr[ComChoise] == "Scissor" && choice == "rock")
) 
{
    comChoice.textContent="Compter Choice : "+arr[ComChoise];
  result.textContent = "Congo 😍 You Won 👑👑!!!";
} 

else if (
  (arr[ComChoise] == "Rock" && choice == "rock") ||
  (arr[ComChoise] == "Paper" && choice == "paper") ||
  (arr[ComChoise] == "Scissor" && choice == "scissor")
) {
        comChoice.textContent="Compter Choice : "+arr[ComChoise];
  result.textContent = " Its Draw ⚔️";
} else {
        comChoice.textContent="Compter Choice : "+arr[ComChoise];

  result.textContent = " Computer Won 🤖";
}
}

