var currentQuestionIndex = 0;
var secondsLeft = 10;
var timerId = document.querySelector('.timer');

var questionsEl = document.getElementById('question');
var timerEl = document.getElementById('timer');
var choicesEl = document.getElementById('choices');
var submitBtn = document.getElementById('submit');
var startBtn = document.getElementById('start');
var initialsEl = document.getElementById('initials');
var feedbackEl = document.getElementById('feedback');

console.log('timerId', timerId);
console.log('timerEl', timerEl);

function startQuiz() {

  var startScreenEl = document.getElementById('start-screen');
  startScreenEl.setAttribute('class', 'hide');

 
  questionsEl.removeAttribute('class');

  timerId = setInterval(clockTick, 1000);


  timerEl.textContent = secondsLeft;

  getQuestion();
};


function getQuestion() {

  var currentQuestion = questions[currentQuestionIndex];

  var titleEl = document.getElementById('question-title');
  titleEl.textContent = currentQuestion.title;

  choicesEl.innerHTML = '';


  for (var i = 0; i < currentQuestion.choices.length; i++) {
  console.log('choices', currentQuestion.choices[i])
    var choice = currentQuestion.choices[i];
    var choiceNode = document.createElement('button');
    choiceNode.setAttribute('class', 'choice');
    choiceNode.setAttribute('value', choice);

    choiceNode.textContent = i + 1 + '. ' + choice;

    choicesEl.appendChild(choiceNode);
  }
}

function questionClick(event) {
  var buttonEl = event.target;
  var currentQuestion = questions[currentQuestionIndex];

  if (!buttonEl.matches('.choice')) {
    return;
  }

  if (buttonEl.value != currentQuestion.answer) {
    secondsLeft -= 10
    feedbackEl.setAttribute('class', 'feedback')
    feedbackEl.textContent = "Wrong!"
    setTimeout( function() {
        feedbackEl.setAttribute('class', 'feedback hide')
    }, 500);
  }
  else {
    feedbackEl.setAttribute('class', 'feedback')
    feedbackEl.textContent = "Right!"
    setTimeout( function() {
        feedbackEl.setAttribute('class', 'feedback hide')
    }, 500);
  }

  currentQuestionIndex += 1;
  setTimeout( function() {
    if (currentQuestionIndex >= questions.length){
        questionsEl.setAttribute('class', 'hide');
        saveHighscore();
        quizEnd()}
    else{
        getQuestion();
    }
}, 1000);
}



function quizEnd() {


  var endScreenEl = document.getElementById('end-screen');
  endScreenEl.removeAttribute('class', 'hide');

  var finalScoreEl = document.getElementById('final-score');
  finalScoreEl.textContent = secondsLeft;

}

function clockTick() {

    secondsLeft--;
  timerEl.textContent = secondsLeft;
  if (secondsLeft <= 0) {
    questionsEl.setAttribute('class', 'hide');
    quizEnd();
    clearInterval(timerId);
    saveHighscore();
  }
}

function saveHighscore() {

  var initials = initialsEl.value.trim();
  
  if (initials) {
    var highscores = JSON.parse(window.localStorage.getItem('highscores')) || [];

    var newScore = {
      score: secondsLeft,
      initials: initials,
    };

    highscores.push(newScore);

    console.log('highscore', highscores);

    window.localStorage.setItem('highscores', JSON.stringify(highscores));

    window.location.href = './highscores.html';
  }
}

function checkForEnter(event) {
  if (event.key === 'Enter') {
    saveHighscore();
  }
}

submitBtn.onclick = saveHighscore;

startBtn.onclick = startQuiz;

choicesEl.onclick = questionClick;

initialsEl.onkeyup = checkForEnter;