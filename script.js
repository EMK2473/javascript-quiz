const Questions = [
  {
    q: "Which HTML element do we put JavaScript inside of?",
    a: [
      { text: "<js>", isCorrect: false },
      { text: "<javascript>", isCorrect: false },
      { text: "<scripting>", isCorrect: false },
      { text: "<script>", isCorrect: true },
    ],
  },
  {
    q: "What does JS stand for?",
    a: [
      { text: "jumbo smoothie", isCorrect: false },
      { text: "Java Smoothie", isCorrect: false },
      { text: "JavaScript", isCorrect: true },
      { text: "Jamocha Shake", isCorrect: false },
    ],
  },
  {
    q: "How to write 'Hello World' in an alert box?",
    a: [
      { text: "alert('Hello World')", isCorrect: true },
      { text: "msgBox('Hello World')", isCorrect: false },
      { text: "alertBox('Hello World')", isCorrect: false },
      { text: "msg('Hello World')", isCorrect: false },
    ],
  },
  {
    q: "How do you write a function in JavaScript?",
    a: [
      { text: "function = myFunction()", isCorrect: false },
      { text: "function:myFunction()", isCorrect: false },
      { text: "function myFunction", isCorrect: true },
      { text: "FUNCTION:", isCorrect: false },
    ],
  },
  "muahaha i apparently need this to not skip q#1 in my array"
  // please give feedback on how I could fix this?
];
let currentQuest = 0; 
let currentScore = 0; 
let secondsLeft = 10; 
let startBut = document.querySelector("#startBtn");
let nextBut = document.querySelector("#nextBut")

function startQuestions() {
  startTimer();
  nextQuestion();
  startBut.style.display = 'none';
  nextBut.style.display = 'block';
}
startBut.addEventListener("click", function () {
  if ((currentQuest == 0)) {
    startQuestions();
  }
});
function showScore() {
  let totalScore = document.getElementById("score");
  totalScore.textContent = `You scored ${score, + secondsLeft} points`;
  document.getElementById("timer").remove();
  document.getElementById("tryAgainBtn").style.display = "block";
  document.getElementById("highscoreBtn").style.display = "block";
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
    score++;
    secondsLeft += 24;
    nextQuestion();
  } else {
    secondsLeft -= 10;
    nextQuestion();
  }
}
function startTimer() {
  let timerInterval = setInterval(function () {
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

function tryAgain(){
  location.reload()
}




// need to implement how to store and render High Scores
function viewHS(){
  document.getElementById("highscoreBtn").style.display = "none";
  document.getElementById("score").style.display = "none";
  document.getElementById("hsLog").style.display = "block";
}

let hsInput = document.querySelector("#hsText");
let hsForm = document.querySelector("#hsLog");
let hsList = document.querySelector("#hsList");
let hScores = []

function renderHS() {
  hsList.innerHTML = "";
  for (let i = 0; i < hScores.length; i++) {
    let hScore = hScore[i];
    let li = document.createElement("li");
    li.textContent = hScore;
    li.setAttribute("data-index", i);
    let button = document.createElement("button");
    button.textContent = "Clear High Score";
    li.appendChild(button);
    hsList.appendChild(li);
  }
}
function initStorage() {
  let storedHighScores = JSON.parse(localStorage.getItem("hScores"));
  if (storedHighScores !== null) {
    hScores = storedHighScores;
  }
  renderHS();
}

function storeHS() {
  localStorage.setItem("hScores", JSON.stringify(hScores));
}

// Add submit event to form
hsForm.addEventListener("submit", function(event) {
  event.preventDefault();

  let hsText = hsInput.value.trim();

  if (hsText === "") {
    return;
  }
  hScores.push(hsText);
  hsInputInput.value = "";

  storeHS();
  renderHS();
});

hsList.addEventListener("click", function(event) {
  let element = event.target;
  if (element.matches("button") === true) {
    let index = element.parentElement.getAttribute("data-index");
    hScores.splice(index, 1);
    storeHS();
    renderHS();
  }
});

initStorage()