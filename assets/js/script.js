var currentQuestion = document.querySelector(".current-question");
var choices = document.querySelector(".choices");
var right = document.querySelector(".correct");
var wrong = document.querySelector(".incorrect");
var timerElement = document.querySelector(".time-left");
var startButton = document.querySelector(".start-button");


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
const timerDuration = 100; // in seconds
let currentQuestionIndex = 0;
let timeLeft = timerDuration;

// The startQuiz function is called when the start button is clicked
function startQuiz() {
 
 displayQuestion();
 startTimer();
  // Prevents start button from being clicked when round is in progress
  //startButton.disabled = true;
};
startButton.addEventListener.("click", startQuiz);
function displayQuestion() {
  if (currentQuestionIndex < questions.length) {
      const question = questions[currentQuestionIndex];
      questionElement.textContent = question.question;

      choicesElement.innerHTML = "";
      question.choices.forEach((choice, index) => {
          const choiceButton = document.createElement("button");
          choiceButton.textContent = choice;
          choiceButton.addEventListener("click", () => checkAnswer(index));
          choicesElement.appendChild(choiceButton);
      });
  } else {
      endQuiz();
  }
};
function checkAnswer(selectedIndex) {
  const question = questions[currentQuestionIndex];
  if (selectedIndex === question.correctAnswer) {
      // Handle correct answer
  } else {
      // Handle wrong answer
  }

  currentQuestionIndex++;
  displayQuestion();
}

function startTimer() {
  const timerInterval = setInterval(() => {
      if (timeLeft > 0) {
          timeLeft--;
          timerElement.textContent = timeLeft + "s";
      } else {
          clearInterval(timerInterval);
          endQuiz();
      }
  }, 1000);
}

function endQuiz() {
  // Handle quiz end, show results or feedback
}

startQuiz();