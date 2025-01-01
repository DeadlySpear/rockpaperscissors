let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
  };
  updateScoreElem()
  
  function playGame(playerMove) {
    const computerMove = pickComputerMove();
  
    let result = '';
  
    if (playerMove === 'scissors') {
  
      if (computerMove === 'rock') {
        result = 'You lose.';
      } else if (computerMove === 'paper') {
        result = 'You win.';
      } else if (computerMove === 'scissors') {
        result = 'Tie.';
      }
  
    } else if (playerMove === 'paper') {
      if (computerMove === 'rock') {
        result = 'You win.';
      } else if (computerMove === 'paper') {
        result = 'Tie.';
      } else if (computerMove === 'scissors') {
        result = 'You lose.';
      }
      
    } else if (playerMove === 'rock') {
      if (computerMove === 'rock') {
        result = 'Tie.';
      } else if (computerMove === 'paper') {
        result = 'You lose.';
      } else if (computerMove === 'scissors') {
        result = 'You win.';
      }
    } 
  
    if (result === 'You win.') {
      score.wins += 1;
    } else if (result === 'You lose.') {
      score.losses += 1;
    } else if (result === 'Tie.') {
      score.ties += 1;
    }
  
    localStorage.setItem('score', JSON.stringify(score));
    updateScoreElem();
    document.querySelector(".move").innerHTML= `You<img class="your-move" src="rps_icons/${playerMove}-emoji.png"><img class="computer-move" src="rps_icons/${computerMove}-emoji.png">Computer`;
    document.querySelector(".winLoss").innerHTML= `${result}`
  }
  
  
  function pickComputerMove() {
    const randomNumber = Math.random();
  
    let computerMove = '';
  
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
      computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
      computerMove = 'paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
      computerMove = 'scissors';
    }
  
    return computerMove;
  } 
  function updateScoreElem(){
    document.querySelector(".score").innerHTML=`Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
  }
  function reset(){
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem('score');
    updateScoreElem();
    document.querySelector(".winLoss").innerHTML=null;
    document.querySelector(".move").innerHTML=`You<img class= "your-move" src="rps_icons/rock-emoji.png"><img class= "computer-move" src="rps_icons/rock-emoji.png">Computer`;
    stopRep(a);
    autoplayButton();
  }
  function autoGame(){
    playerMove=pickComputerMove()
    playGame(playerMove);
  }
  function gameRunner(){
    a=setInterval(autoGame,1000)
    return a;
  }
  function stopRep(a){
    clearInterval(a)
  }
  function autoplayButton(){document.querySelector(".autoplay-stop").innerHTML=`<button class="autoplay" onclick="gameRunner();stopButton()">
    Autoplay</button>`}
  
  function stopButton(){
    document.querySelector(".autoplay-stop").innerHTML=`<button class="stop" onclick="stopRep(a);autoplayButton()">Stop</button>`
  }