let viewHS = document.querySelector("#highScore");
let timer = document.querySelector("#timer");
let quizSection = document.querySelector("#quizSection");
let questionArea = document.querySelector("#questionArea");
let answerArea = document.querySelector("#answerSection");
//array ref:             0   1   2   3
let questionPotential = [q1, q2, q3, q4];
//array ref:           0   1   2   3
let answerPotential = [a1, a2, a3, a4];
let questionGen = document.querySelector("#questions");
let answerGen = document.querySelector("#answers");
let question = "";
let answers = "";

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
// timer function
//      if question is !true, --- 10 seconds

// Randomly pull a question, and then splice that question from the array, and then randomly assign answers to an array index

//Questions/Answers:

// 1. Which HTML element do we put JavaScript inside of?
// a. <js>  b. <javascript> c. <scripting> *d. <script>

// 2. in which HTML element do we place a JavaScript?
// a. the <head> section   b. the <body> section   *c. both <head> and <body>   d. the style.css

// 3. How would you write "Hello World" in an alert box?
// *a. alert("Hello World");   b. msgBox("Hello World")   c. alertBox("Hello World")   d. msg("Hello World")

// 4. How do you create a function in JavaScript?
// a. function = myFunction()   b. function:myFunction()   *c. function myFunction()   d. FUNCTION:
