const Questions = [
  {
    q: "Which file type contains JavaScript?",
    a: [
      { text: "script.js", isCorrect: true },
      { text: "README.md", isCorrect: false },
      { text: "index.html", isCorrect: false },
      { text: "style.css", isCorrect: false },
    ],
  },
  {
    q: "What does 'js' stand for in 'script.js'?",
    a: [
      { text: "Jumbo Shrimp", isCorrect: false },
      { text: "Jamocha Shake", isCorrect: false },
      { text: "JavaScript", isCorrect: true },
      { text: "Just Salsa", isCorrect: false },
    ],
  },
  {
    q: "Teenage Mutant Ninja Turtle method to ____ pizza?",
    a: [
      { text: ".partydude", isCorrect: false },
      { text: ".slice", isCorrect: true },
      { text: ".splice", isCorrect: false },
      { text: ".cowabunga", isCorrect: false },
    ],
  },
  {
    q: "Conjunction, junction, what's your... ?",
    a: [
      { text: "if", isCorrect: false },
      { text: "else", isCorrect: false },
      { text: "for", isCorrect: false},
      { text: "function", isCorrect: true},
    ],
  },
  "i apparently need this to avoid skipping q#1 in my array. please give me feedback on why?",
  // // please give feedback on how I could fix this?
];
let currentQuest = 0;
let currentScore = 0;
let secondsLeft = 10;
let startBut = document.querySelector("#startBtn");
let nextBut = document.querySelector("#nextBut");
let instructions = document.querySelector("#instructions");
let timerInterval;
function startQuestions() {
  startTimer();
  nextQuestion();
  startBut.style.display = "none";
  nextBut.style.display = "block";
  instructions.style.display= "none";
}
startBut.addEventListener("click", function () {
  if (currentQuest == 0) {
    startQuestions();
  }
});
function showScore() {
  let totalScore = document.getElementById("score");
  totalScore.textContent = `let score = ${secondsLeft};`;
  document.getElementById("timer").remove();
  document.getElementById("tryAgainBtn").style.display = "block";
  document.getElementById("highScoreBtn").style.display = "block";
  if (secondsLeft == 100) {
    document.getElementById("perfection").style.display = "block";
  }
  if (secondsLeft <= 0) {
    document.getElementById("youLose").style.display = "block";
  }
  if (secondsLeft >= 95 && secondsLeft <= 99) 
  {document.getElementById("possible").style.display = "block";} 
  clearInterval(timerInterval);
}

function nextQuestion() {
  if (currentQuest < Questions.length - 1) {
    let question = document.getElementById("quest");
    let answers = document.getElementById("answer");
    question.textContent = Questions[currentQuest].q;
    answers.innerHTML = "";
    for (let i = 0; i < Questions[currentQuest].a.length; i++) {
      let choiceDiv = document.createElement("div");
      let choice = document.createElement("input");
      let choiceLabel = document.createElement("label");
      choice.type = "radio";
      choice.name = "answer";
      choice.value = i;
      choiceLabel.textContent = Questions[currentQuest].a[i].text;
      choiceDiv.appendChild(choice);
      choiceDiv.appendChild(choiceLabel);
      answers.appendChild(choiceDiv);
    }
    currentQuest++;
  } else {
    document.getElementById("answer").remove();
    document.getElementById("quest").remove();
    document.getElementById("nextBut").remove();
    showScore();
  }
}

function checkAnswer() {
  let chosenAnswer = parseInt(
    document.querySelector('input[name="answer"]:checked').value
  );
  if (Questions[currentQuest - 1].a[chosenAnswer].isCorrect) {
    secondsLeft += 23.25;
    nextQuestion();
  } else { secondsLeft -= 74.5; nextQuestion();
  }

}
function startTimer() {
  timerInterval = setInterval(function () {
    secondsLeft--;
    document.querySelector("#timer").textContent = secondsLeft;
    if (secondsLeft <= 0) {
      document.getElementById("answer").remove();
      document.getElementById("quest").remove();
      document.getElementById("nextBut").remove();
      showScore();
      clearInterval(timerInterval);
    }
  }, 1000);
}

function tryAgain() {
  location.reload();
}

function viewHS() {
  document.getElementById("highScoreBtn").style.display = "none";
  document.getElementById("score").style.display = "none";
  document.getElementById("hsLog").style.display = "block";
}

let hsInput = document.querySelector("#hsText");
let hsForm = document.querySelector("#hsForm");
let hsList = document.querySelector("#hsList");
let hScores = [];

// store and append initial input into hScore somehow
function renderHS() {
  hsList.innerHTML = "";
  for (let i = 0; i < hScores.length; i++) {
    let hScore = hScores[i];
    let li = document.createElement("li");
    li.textContent = `Score: ${hScore.score}, Timestamp: ${hScore.timestamp} Initials: ${hScore.initials}`;
    li.setAttribute("data-index", i);
    let button = document.createElement("button");
    button.textContent = "clear()";
    li.appendChild(button);
    hsList.appendChild(li);
  }
}


function initStorage() {
  let storedHighScores = JSON.parse(localStorage.getItem("hScores"));
  if (storedHighScores !== null) {
    hScores = storedHighScores;
  }
}

function storeHS() {
  localStorage.setItem("hScores", JSON.stringify(hScores));
}
// store initials?
// push initials?
// change hsText to initialText
hsForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let hsText = hsInput.value.trim();
  if (hsText === "") {
    return;
  }
  hsInput.value = "";
  const scoreObject = {
    score: secondsLeft,
    timestamp: new Date().toLocaleString(),
    initials: hsText,
  };
  hScores.push(scoreObject);
  storeHS();
  renderHS();
  console.log(hsText)
});

hsList.addEventListener("click", function (event) {
  let element = event.target;
  if (element.matches("button") === true) {
    let index = element.parentElement.getAttribute("data-index");
    hScores.splice(index, 1);
    storeHS();
    renderHS();
  }
});
initStorage();

