function printHighscores() {
    
    var highscores = JSON.parse(window.localStorage.getItem('highscores')) || [];
  console.log('highscores', highscores);
    
    highscores.sort(
        function (highscore1,highscore2) {
            if (highscore1.score>highscore2.score){
                return -1;
            }
            if (highscore1.score<highscore2.score){
                return 1;
            }
            return 0;
    })
  
    for (var i = 0; i < highscores.length; i += 1) {
      
      var liTag = document.createElement('li');
      liTag.textContent = highscores[i].initials + ' - ' + highscores[i].score;
  
      var olEl = document.getElementById('highscores');
      olEl.appendChild(liTag);
    }
  }
  
  function clearHighscores() {
    window.localStorage.removeItem('');
    window.location.reload();
  }
  
  document.getElementById('clear').onclick = clearHighscores;
  
  printHighscores();
  