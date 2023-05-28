
var currentQuestionIndex = 0;
var secondsLeft = 100;
var timerId = document.querySelector('.timer');

var questionsEl = document.getElementById('question');
var timerEl = document.getElementById('timer');
var choicesEl = document.getElementById('choices');
var submitBtn = document.getElementById('submit');
var startBtn = document.getElementById('start');
var initialsEl = document.getElementById('initals');
var feedbackEl = document.getElementById('feedback');


startBtn.addEventListener('click', function startQuiz() {

  var startScreenEl = document.getElementById('start-screen');
  startScreenEl.setAttribute('class', 'hide');

 
  questionsEl.removeAttribute('hide');

  timerId = setInterval(clockTick, 1000);


  timerEl.textContent = secondsLeft;

  getQuestion();
});


function getQuestion() {

  var currentQuestion = questions[currentQuestionIndex];

  var titleEl = document.getElementById('');
  titleEl.textContent = ;

  choicesEl.innerHTML = '';


  for (var i = 0; i < ; i++) {
  
    var choice = currentQuestion.choices[i];
    var choiceNode = document.createElement('');
    choiceNode.setAttribute('class', 'choice');
    choiceNode.setAttribute('value', choice);

    choiceNode.textContent = i + 1 + '. ' + choice;

    choicesEl.appendChild();
  }
}

function questionClick(event) {
  var buttonEl = event.target;

  if (!buttonEl.matches('.choice')) {
    return;
  }


function quizEnd() {


  var endScreenEl = document.getElementById('');
  endScreenEl.removeAttribute('class');

  var finalScoreEl = document.getElementById('');
  finalScoreEl.textContent = time;

}

function clockTick() {

  timerEl.textContent = ;

  if (time <= 0) {
    quizEnd();
  }
}

function saveHighscore() {

  var initials = initialsEl.value.trim();

  if () {

    var highscores =
      JSON.parse() || [];

    var newScore = {
      score: time,
      initials: initials,
    };

    highscores.push(newScore);
    window.localStorage.setItem('highscores', JSON.stringify());

    window.location.href = '';
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
