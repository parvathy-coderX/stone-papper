const choices = ["stone", "paper", "scissors"];
const emojis = { stone: "🪨", paper: "📄", scissors: "✂️" };

let userScore = 0;
let computerScore = 0;

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const result_div = document.getElementById("result");
const choiceButtons = document.querySelectorAll(".choice");
const resetBtn = document.getElementById("reset-btn");

function computerChoice() {
  return choices[Math.floor(Math.random() * 3)];
}

function getResult(user, computer) {
  if (user === computer) return "draw";
  if (
    (user === "stone" && computer === "scissors") ||
    (user === "paper" && computer === "stone") ||
    (user === "scissors" && computer === "paper")
  ) {
    return "win";
  }
  return "lose";
}

function playGame(userChoice) {
  const compChoice = computerChoice();
  const result = getResult(userChoice, compChoice);

  let message = `You chose ${emojis[userChoice]} <b>${userChoice}</b>.<br>Computer chose ${emojis[compChoice]} <b>${compChoice}</b>.<br>`;

  if (result === "win") {
    userScore++;
    message += "<span style='color:green;'>You win this round!</span>";
  } else if (result === "lose") {
    computerScore++;
    message += "<span style='color:red;'>You lose this round!</span>";
  } else {
    message += "<span style='color:gray;'>It's a draw!</span>";
  }

  userScore_span.textContent = userScore;
  computerScore_span.textContent = computerScore;
  result_div.innerHTML = message;
}

choiceButtons.forEach(btn => {
  btn.addEventListener("click", () => playGame(btn.dataset.choice));
});

resetBtn.addEventListener("click", () => {
  userScore = 0;
  computerScore = 0;
  userScore_span.textContent = userScore;
  computerScore_span.textContent = computerScore;
  result_div.innerHTML = "Make your move!";
});