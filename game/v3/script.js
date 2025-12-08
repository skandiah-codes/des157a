(function(){
	
	"use strict";
	/* 
	This gets the player: gameData.players[gameData.index]
	This gets the first die: gameData.dice[gameData.roll1-1]
	This gets the second die: gameData.dice[gameData.roll2-1]
	This gets the score of the current player: gameData.score[gameData.index]
	*/
	
	const startGame = document.getElementById('startgame');
	const gameControl = document.getElementById('gamecontrol');
	const game = document.getElementById('game');
	const score = document.getElementById('score');
	const actionArea = document.getElementById('actions');
	const rollSound = new Audio("sounds/diceroll.mp3");
	const clickSound = new Audio ("sounds/clickSound.mp3")


	const gameData = {
		dice: ['imgs/1die.jpg', 'imgs/2die.jpg', 'imgs/3die.jpg', 
			   'imgs/4die.jpg', 'imgs/5die.jpg', 'imgs/6die.jpg'],
		players: ['player 1','player 2'],
		score: [0, 0],
		roll1: 0,
		roll2: 0,
		rollSum: 0,
		index: 0,
		gameEnd: 29
	};
	

	// use div 

document.getElementById("game").innerHTML += `
    <div id="playerPhoto">
    </div>
`;
	document.getElementById('overlay').classList.add('showing');

	document.getElementById('start').addEventListener('click', function () {
	clickSound.play();
    document.getElementById('overlay').classList.remove('showing');
    document.getElementById('overlay').classList.add('hidden');
	});

	document.addEventListener('keydown', function(event){
    if (event.key === 'Escape'){
        document.getElementById('overlay').classList.add('hidden');
        document.getElementById('overlay').classList.remove('showing');
    }
});

	startGame.addEventListener('click', function () {
		clickSound.currentTime = 0;
    	clickSound.play();
		gameData.index = Math.round(Math.random());
		console.log(gameData.index);


		gameControl.innerHTML = '<button id="quit">how do i play?</button>';
		gameControl.innerHTML += '<h2>the game has started</h2>';
		


		document
			.getElementById('quit').addEventListener('click', function () {
				clickSound.currentTime = 0;
    			clickSound.play();
   			 setTimeout(function () {
        			location.reload();
   			 }, 150); //lets click sound play fully
			});

		setUpTurn();
	});

	function setUpTurn() {
		game.innerHTML = `<p class="generalInfo">roll the dice for <strong>${gameData.players[gameData.index]}</strong></p>`;

		game.innerHTML += `
		    <div class="gameSetup">
        <img class="actionPigs" src="imgs/p1PreRoll.jpg" alt="player">
        <img class="actionPigs" src="imgs/p2PreRoll.jpg" alt="player"> 
    </div>
	`
		actionArea.innerHTML = '<button id="roll">roll the dice</button>';


		document.getElementById('roll').addEventListener('click', function(){

			throwDice();

		});
	}

	function throwDice() {
    actionArea.innerHTML = '';
	//shaking sound!
	rollSound.currentTime = 0;
    rollSound.play();
	//shows shaking of die
    game.innerHTML = ''
        + '<img class="die shaking" src="imgs/1die.jpg">'
        + '<img class="die shaking" src="imgs/1die.jpg">';
	
	//shows pigs w/ the die results
    setTimeout(function () {

        gameData.roll1 = Math.floor(Math.random() * 6) + 1;
        gameData.roll2 = Math.floor(Math.random() * 6) + 1;
        gameData.rollSum = gameData.roll1 + gameData.roll2;

        game.innerHTML =
            '<p>roll the dice for <strong>' + gameData.players[gameData.index] + '</strong></p>' +
			'<img src=imgs/p1PostRoll.jpg>' +
            '<img class="die" src="' + gameData.dice[gameData.roll1 - 1] + '">' +
            '<img class="die" src="' + gameData.dice[gameData.roll2 - 1] + '">' +
			'<img src=imgs/p2PostRoll.jpg>';



		//snake eyes
        if (gameData.rollSum === 2) {
            game.innerHTML += '<p>uh oh... snake eyes!</p>';
            gameData.score[gameData.index] = 0;
            gameData.index = gameData.index ? 0 : 1;
            showCurrentScore();
            setTimeout(setUpTurn, 2000);
        }

        // if one of the die was a 1
        else if (gameData.roll1 === 1 || gameData.roll2 === 1) {
            game.innerHTML += '<p>oh no! one of your dies rolled a 1... switching to '
                + gameData.players[gameData.index] + '</p>';
            gameData.index = gameData.index ? 0 : 1;
            setTimeout(setUpTurn, 2000);
        }

        // normal roll
        else {
            gameData.score[gameData.index] += gameData.rollSum;

            actionArea.innerHTML =
                '<button id="rollagain">roll again</button>' +
                '<button id="pass">pass</button>';

            document.getElementById('rollagain').addEventListener('click', function () {
                throwDice();
            });

            document.getElementById('pass').addEventListener('click', function () {
				clickSound.play();
                gameData.index = gameData.index ? 0 : 1;
                setUpTurn();
            });

            checkWinningCondition();
        }
    }, 1000); // matches shake animation time within css
}


	function checkWinningCondition() {
		if (gameData.score[gameData.index] > gameData.gameEnd) {
			score.innerHTML = `<h2>${gameData.players[gameData.index]} 
			wins with ${gameData.score[gameData.index]} points!</h2>`;

			actionArea.innerHTML = '';
			document.getElementById('quit').innerHTML = 'start a new game?';
		} else {
			// show current score...
			showCurrentScore();
		}
	}

	function showCurrentScore() {
		score.innerHTML = `<p><strong>${gameData.players[0]}:
		${gameData.score[0]}</strong></p> <p><strong>${gameData.players[1]}:
		${gameData.score[1]}</strong></p>`;
	}
}());


