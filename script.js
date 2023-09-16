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
    q: "What does JS stand for",
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
  "muahaha i apparently need this to no skip my array"
  // please give feedback on how I could fix this?
];
let currentQuest = 0; 
let currentScore = 0; 
let secondsLeft = 60; 
let startBut = document.querySelector("#startBtn");
function startQuestions() {
  startTimer();
  nextQuestion();
}
startBut.addEventListener("click", function () {
  if ((currentQuest == 0)) {
    startQuestions();
  }
});
function showScore() {
  let totalScore = document.getElementById("score");
  totalScore.textContent = `You scored ${score, + secondsLeft} points`;
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
    nextQuestion();
  } else {
    secondsLeft -= 10;
    nextQuestion();
  }
  // conditional to stop timer when no questions/showScore
}
function startTimer() {
  let timerInterval = setInterval(function () {
    secondsLeft--;
    document.querySelector("#timer").textContent = secondsLeft;
    if (secondsLeft === 0) {
      showScore();
      clearInterval(timerInterval);
      sendMessage();
    }
  }, 1000);
}
