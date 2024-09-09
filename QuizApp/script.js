import {quizData} from './data.js';
let currentQuestionIndex = 0;
let score = 0;
const form = document.querySelector("#quiz-form");
const questionHeading = document.querySelector("#questions");
const contentSection = document.querySelector(".content");
const quizSection = document.querySelector(".quiz-section");
const startBtn = document.querySelector('#start-btn')
const showResult = document.querySelector(".show-result")
const resultHeading = document.querySelector('#result')
const scoreCard = document.querySelector('#score')

function displayQuestions() {

    document.querySelectorAll('input[name="option"]').forEach(radio => radio.checked = false);
  const data = quizData[currentQuestionIndex];
  questionHeading.innerText = data.question;

  const input1 = document.getElementById("in-1");
  const input2 = document.getElementById("in-2");
  const input3 = document.getElementById("in-3");
  const input4 = document.getElementById("in-4");

  input1.value = "a";
  input2.value = "b";
  input3.value = "c";
  input4.value = "d";

  document.querySelector('label[for="in-1"] span').textContent = data.a;
  document.querySelector('label[for="in-2"] span').textContent = data.b;
  document.querySelector('label[for="in-3"] span').textContent = data.c;
  document.querySelector('label[for="in-4"] span').textContent = data.d;
}
function checkAnswer(e) {
  e.preventDefault();
  const selectedAnswer = document.querySelector('input[name="option"]:checked');

  if (selectedAnswer) {
    const selectAnsValue = selectedAnswer.value;
    const correctAnswer = quizData[currentQuestionIndex].correct;

    if (selectAnsValue === correctAnswer) {
      score++;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
      displayQuestions();
    } else {
      quizSection.style.display = "none";
      showResult.style.display = "flex";
      scoreCard.innerText = `${score}/${quizData.length}`
      resultHeading.innerText = "Congratulations! You have successfully completed the quiz!";
      form.style.display = "none";
    }
  } else {
    alert("Please select an option before submitting!");
  }
}
startBtn.addEventListener("click",()=>{
    console.log('hii');
    contentSection.style.display = "none";
    quizSection.style.display = "flex";
    displayQuestions();
})

document.getElementById("submit-btn").addEventListener("click", checkAnswer);

