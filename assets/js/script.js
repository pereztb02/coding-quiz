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
const scoreCard = document.querySelector(".score-container");
var userScore = 0;
var quizContainer = document.querySelector(".quiz-container");
let timerInterval;
const deci = document.querySelector(".decimal")
//Array of questions
let questions = [
  {
    question: "What does HTML stand for?",
    choices: [
      "Hyper Trainer Marking Language",
      "Hyper Text Marketing Language",
      "Hyper Text Markup Language",
      "Hyper Text Markup Leveler",
    ],
    correctAnswer: "Hyper Text Markup Language",
  },

  {
    question: "In Java, a method is a container that holds classes.",
    choices: ["True", "False"],
    correctAnswer: "False",
  },
  {
    question: "<h1>Text</h1> is the correct way of making a header in HTML.",
    choices: ["True", "False"],
    correctAnswer: "True",
  },
  {
    question:
      "Which of the following is the correct way of making a string in Java ?",
    choices: [
      "String 'Text'",
      "'String' text = 'text'",
      "String: text = 'text'",
      "String text = 'text'",
    ],
    correctAnswer: "String text = 'text'",
  },
  {
    question:
      "Is this the correct way to make an object in Java ? Class class = new Class();",
    choices: ["True", "False"],
    correctAnswer: "True",
  },
  {
    question:
      "Is this HTML code correct ? <html> <head> <title>Title</title> </head> <h1>Header</h1> <p>Paragraph</p> </html>",
    choices: ["Yes", "No"],
    correctAnswer: "No",
  },
];
//Timer count down
var timerDuration = 15; // in seconds
let currentQuestionIndex = 0;
// let timeLeft = timerDuration;
function startTimer() {
  timerInterval = setInterval(function () {
    if (timerDuration > 0) {
      //if timer is greater then 0 then timer will run
      timerDuration--;
      timerElement.textContent =
        timerDuration + " seconds left till end of quiz";
    } else {
      clearInterval(timerInterval);
      endQuiz();
    }
  }, 1000);
}

startButton.addEventListener("click", startQuiz);

// The startQuiz function is called when the start button is clicked
function startQuiz() {
  console.log("started");
  //hide start quiz button onclick
  startButton.style.display = "none";
  //show quit quiz button onclick
  quitButton.style.display = "block";
  //show quiz container onclick
  quizContainer.style.display = "block";
//show quiz container onclick
resetButton.style.display = "block";
  startTimer();
  displayQuestion();

  // Prevents start button from being clicked when round is in progress
  startButton.disabled = true;
}

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
    const choiceButton = document.getElementById(
      `choice${String.fromCharCode(65 + i)}`
    );
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
      console.log("correct");
      // Change the button color to green for the correct answer
      button.style.backgroundColor = "lightgreen";
      userScore++; //increment the users score
    } else {
      // handles incorrect answer
      console.log("incorrect");
      // Change the button color to red for the incorrect answer
      button.style.backgroundColor = "#eb52529c";
    }
    displayQuestion();
    answerButtons.forEach((button) => {
      button.setAttribute("disabled", "true");
    });
  });
});

// if next button is clicked
nextButton.addEventListener("click", () => {
  // Increment to the next question
  currentQuestionIndex++;
  displayQuestion();
  if (currentQuestionIndex === questions.length) {
    endQuiz();
  }
  // Hide the "Next" button after it's clicked
  nextButton.style.display = "none";
  console.log("question completed");

  // Enable the choice buttons for the next question
  answerButtons.forEach((button) => {
    button.removeAttribute("disabled");
    // Change the button color back to white
    button.style.backgroundColor = "white";
  });
});
//reset button functionality
resetButton.addEventListener("click", () => {   
  console.log("reset button clicked")
  clearInterval(timerInterval);
  currentQuestionIndex = 0;
  timerDuration = 15;
  // /display score card
  startButton.style.display = "block";

  nextButton.style.display = "none";
  //hide score card
  scoreCard.style.display = "none";
  //hide quiz container
  quizContainer.style.display = "none";
  //hide reset quiz button
  resetButton.style.display = "none";
  //show quit quiz button
  quitButton.style.display = "block";
});

//quit button functionality
quitButton.addEventListener("click", () => {
  clearInterval(timerInterval);
  //hide the timer element
  timerElement.style.display = "none";
  endQuiz();
});
function endQuiz() {
  // Handle quiz end, show results and feedback
  console.log("quiz ended");
  console.log("your score: " + userScore + " out of " + questions.length);
  right.textContent = userScore;
  deci.textContent = questions.length;
  //hide the next button
  nextButton.style.display = "none";
  //display score card
  scoreCard.style.display = "block";
  //hide quiz container
  quizContainer.style.display = "none";
  //show reset quiz button
  resetButton.style.display = "block";
  //hide quit quiz button
  quitButton.style.display = "none";
  startButton.disabled = false;
}