var currentQuestion = document.querySelector(".current-question");
const choiceA = document.getElementById("choiceA");
const choiceB = document.getElementById("choiceB");
const choiceC = document.getElementById("choiceC");
const choiceD = document.getElementById("choiceD");
const right = document.querySelector(".correct");
const timerElement = document.querySelector(".timer");
const startButton = document.querySelector(".start-button");
const resetButton = document.querySelector(".reset-button");
const answerButtons = document.querySelectorAll(".answer-choice");
const quitButton = document.querySelector(".quit");
const nextButton = document.querySelector(".nxtButton");
const scoreCard = document.querySelector(".score-container")


//Array of questions
let questions = [{

  question: "What does HTML stand for?",
  choices: ["Hyper Trainer Marking Language", "Hyper Text Marketing Language", "Hyper Text Markup Language", "Hyper Text Markup Leveler"],
  correctAnswer: "Hyper Text Markup Language"
},

{
  question: "In Java, a method is a container that holds classes.",
  choices: ["True", "False"],
  correctAnswer: "False"
},
{
  question: "<h1>Text</h1 > is the correct way of making a header in HTML.",
  choices: ["True", "False"],
  correctAnswer: "True"
},
{
  question: "Which of the following is the correct way of making a string in Java ?",
  choices: ["String 'Text'", "String text = 'text'", "String text = 'text'", "String text = 'text'"],
  correctAnswer: "String text = 'text'"
},
{
  question: "Is this the correct way to make an object in Java ? Class class = new Class();",
  choices: ["True", "False"],
  correctAnswer: "True"
},
{
  question: "Is this HTML code correct ? <html> <head> <title>Title</title> </head> <h1>Header</h1> <p>Paragraph</p> </html>",
  choices: ["Yes", "No"],
  correctAnswer: "No"
},
];
//Timer count down
var timerDuration = 100; // in seconds
let currentQuestionIndex = 0;
// let timeLeft = timerDuration;
function startTimer() {
  const timerInterval = setInterval(function() {
    if (timerDuration > 0) { 
      //if timer is greater then 0 then timer will run
    timerDuration--;
    timerElement.textContent = timerDuration + " seconds left till end of quiz";
   } else clearInterval(timerInterval === 0); 
             endQuiz();
         }, 1000);
}
startButton.addEventListener("click", startQuiz);

// The startQuiz function is called when the start button is clicked
function startQuiz() {
  startButton.style.display = "none";
  startTimer();
  displayQuestion();

  // Prevents start button from being clicked when round is in progress
  startButton.disabled = true;
};

function displayQuestion() {
  var current = questions[currentQuestionIndex];
  currentQuestion.textContent = current.question;
  // Remove existing choice buttons
  choiceA.style.display = "none";
  choiceB.style.display = "none";
  choiceC.style.display = "none";
  choiceD.style.display = "none";

  // Loop through the choices and display choice buttons
  for (let i = 0; i < current.choices.length; i++) {
      const choiceButton = document.getElementById(`choice${String.fromCharCode(65 + i)}`);
      choiceButton.textContent = current.choices[i];
      choiceButton.style.display = "block";
  }
}
answerButtons.forEach((button) => {
  button.addEventListener("click", () => {
    var selectedAnswer = button.textContent;
    var currentQuestion = questions[currentQuestionIndex];
    var correctAnswer = currentQuestion.correctAnswer;
    console.log("selected answer:", selectedAnswer);
    console.log("correct answer:", correctAnswer);
// show the next button
    nextButton.style.display = "block";
    if (String(selectedAnswer).trim() === String(correctAnswer).trim()) {
      // handles correct answer
      console.log("correct")
    } else {
      // handles incorrect answer
      console.log("incorrect");
    }
    // next question
    // currentQuestionIndex++;
  
    displayQuestion();
    answerButtons.forEach((button) => {
      button.setAttribute("disabled", "true");
    });

  });
});

// if next button is clicked
nextButton.addEventListener("click", ()=>{
     // Increment to the next question
    currentQuestionIndex++;
    displayQuestion();

    nextButton.style.display = "none";
    console.log("question completed");

    answerButtons.forEach((button) => {
      button.removeAttribute("disabled");
});
});

function endQuiz() {
  // Handle quiz end, show results or feedback
}

// startQuiz();