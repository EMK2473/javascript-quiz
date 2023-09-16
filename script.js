// Quiz Format:
//  60 Second Timer
//  4 Questions
//  15 seconds/ question
//  -10 seconds for an inccorect answer

// Functions Needed:

// function for each click event:
//      Start/Init function for Starting the quiz
//          Start/Init
//      function click event for each answer
//      function click event for high scores
//          high scores will need to store and get local data


//ToDo: 
// Add timer function, 
// click "Start" event function, 
// store scores locally & get scores via "high scores"

//Questions/Answers:

const Questions = 
[
{
// q = question variable
// a = answer variable

  q: "Which HTML element do we put JavaScript inside of?",
  a: [
  {text: "<js>", isCorrect: false},
  {text: "<javascript>", isCorrect: false},
  {text: "<scripting>", isCorrect: false},
  {text: "<script>", isCorrect: true}
    ]
},
{
  q: "In which HTML Element do we place Javascript?",
  a: [
  {text: "the <head> section", isCorrect:false},
  {text: "the <body> section", isCorrect: false},
  {text: "both the <head> and the <body>", isCorrect:true},
  {text: "the style.css file", isCorrect: false}
    ]
},
{
  q: "How to write 'Hello World' in an alert box?",
  a: [
  {text: "alert('Hello World')", isCorrect: true},
  {text: "msgBox('Hello World')", isCorrect:false},
  {text: "alertBox('Hello World')", isCorrect:false},
  {text: "msg('Hello World')", isCorrect: false}, 
 ]
},
{
  q: "How do you write a function in JavaScript?",
  a: [
  {text: "function = myFunction()", isCorrect: false},
  {text: "function:myFunction()", isCorrect:false},
  {text: "function myFunction", isCorrect:true},
  {text: "FUNCTION:", isCorrect:false},
  ]
}
]

// initial question# = 0
let currentQuest = 0;
// initial score = 0
let currentScore = 0;

// create on click event function

function loadQuestion() {
  const question = document.getElementById("quest");
  const options = document.getElementById("answer");

  question.textContent = Questions[currentQuest].q;
  options.innerHTML = ""

  for(let i = 0; i < questions[currentQuest].a.length; i++){
      const choiceDiv = document.createElement("div");
      const choice = document.createElement("input");
      const choiceLabel = document.createElement("label");

      choice.type = "radio";
      choice.name = "answer";
      choice.value = i;

      choiceLabel.textContent = Questions[currentQuest].a[i].text;

      choiceDiv.appendChild(choice);
      choiceDiv.appendChild(choiceLabel);
      options.appendChild(choiceDiv);
  }
}

loadQuestion()

function loadScore() {
  const totalScore = document.getElementById("score");
  totalScore.textContent = "You scored ${score} out of $[Questions.length}";
}

function nextQuestion() {
  if (currentQuest < Questions.length - 1){
    currentQuest++;
    loadQuestion();
  }
  else { 
    document.getElementById("ans").remove();
    document.getElementById("quest").remove();
    document.getElementById("button").remove();
    loadScore()
}
}

function checkAnswer(){
  const chosenAnswer = parseInt(document.querySelector('input[name="answer"]:checked').value);

  if(Questions[currentQuest].a[chosenAnswer].isCorrect){
    score++;
    nextQuestion();
  }
  else { nextQuestion();
  }
}

// function start() this needs to init the game 





// //array ref:             0   1   2   3
// let questionPotential = [q1, q2, q3, q4];
// let answerPotential = [a1, a2, a3, a4];
// let startButton = document.querySelector("#start-button");
// let highScore = document.querySelector("#highScore");
// let quizSection = document.querySelector("#quizSection");
// let questionArea = document.querySelector("#questionArea");
// let answerArea = document.querySelector("#answerSection");
// let generateQuestion = document.querySelector("#questions");
// let generateAnswer = document.querySelector("#answers");
// let timer = document.querySelector("#timer");
// let answerBTN = document.querySelector("#answers");

// let secondsLeft = 60;
// let questions = "";
// let answers = "";

// function startTimer() {
//   let timerInterval = setInterval(function () {
//     secondsLeft--;

//     if (secondsLeft === 0) {
//       clearInterval(timerInterval);
//       sendMessage(); //
//     }
//   }, 1200);
// }

// answerBTN.addEventListener("click", function () {});
