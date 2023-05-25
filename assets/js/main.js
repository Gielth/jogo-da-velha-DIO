let player = 'X';
let winner = null;
let initialPlayer = 'X';
let gamesPlayed = 1;
let gamesWonX = 0;
let gamesWonO = 0;
let gamesDrawed = 0;
const gameWinsX = document.getElementById('winsX');
const gameWinsO = document.getElementById('winsO');
const gameDraws = document.getElementById('draws');
const gameRounds = document.getElementById('rounds');
const activePlayer = document.getElementById('player');
const gameWinner = document.getElementById('winner');
const resetButton = document.getElementById('resetGame');
const upperLeft = document.getElementById('upperLeft');
const upperMiddle = document.getElementById('upperMiddle');
const upperRight = document.getElementById('upperRight');
const middleLeft = document.getElementById('middleLeft');
const middleMiddle = document.getElementById('middleMiddle');
const middleRight = document.getElementById('middleRight');
const bottomLeft = document.getElementById('bottomLeft');
const bottomMiddle = document.getElementById('bottomMiddle');
const bottomRight = document.getElementById('bottomRight');

activePlayer.innerText = player;
gameWinsX.innerText = gamesWonX
gameWinsO.innerText = gamesWonO
gameDraws.innerText = gamesDrawed
gameRounds.innerText = gamesPlayed

function checkDraw() {
    if (upperLeft.innerText !== '-' && upperMiddle.innerText !== '-'
        && upperRight.innerText !== '-' && middleLeft.innerText !== '-'
        && middleMiddle.innerText !== '-' && middleRight.innerText !== '-'
        && bottomLeft.innerText !== '-' && bottomMiddle.innerText !== '-'
        && bottomRight.innerText !== '-') {
        winner = "None";
        gameWinner.innerText = "Empate";
        upperLeft.style.backgroundColor = "#c93636";
        upperMiddle.style.backgroundColor = "#c93636";
        upperRight.style.backgroundColor = "#c93636";
        middleLeft.style.backgroundColor = "#c93636";
        middleMiddle.style.backgroundColor = "#c93636";
        middleRight.style.backgroundColor = "#c93636";
        bottomLeft.style.backgroundColor = "#c93636";
        bottomMiddle.style.backgroundColor = "#c93636";
        bottomRight.style.backgroundColor = "#c93636";
        return;
    }
}

function checkSequence(element1, element2, element3) {
    if (element1.innerText !== '-' && element1.innerText === element2.innerText && element2.innerText === element3.innerText) {
        return true;
    }

    if (element2.innerText !== '-' && element1.innerText === element2.innerText && element2.innerText === element3.innerText) {
        return true;
    } 

    if (element3.innerText !== '-' && element1.innerText === element2.innerText && element2.innerText === element3.innerText) {
        return true;
    }

    return false;
}

function changeBoxColor(element) {
    element.style.backgroundColor = 'forestgreen';
}

function changeWinner(element) {
    winner = element.innerText;
    gameWinner.innerText = winner;
}

function checkWinner() {
    const line1 = checkSequence(upperLeft, upperMiddle, upperRight)
    const line2 = checkSequence(middleLeft, middleMiddle, middleRight)
    const line3 = checkSequence(bottomLeft, bottomMiddle, bottomRight)
    const vertical1 = checkSequence(upperLeft, middleLeft, bottomLeft)
    const vertical2 = checkSequence(upperMiddle, middleMiddle, bottomMiddle)
    const vertical3 = checkSequence(upperRight, middleRight, bottomRight)   
    const diagonal1 = checkSequence(upperLeft, middleMiddle, bottomRight)
    const diagonal2 = checkSequence(upperRight, middleMiddle, bottomLeft)
    
    if (line1 && vertical1) {
        changeBoxColor(upperLeft);
        changeBoxColor(upperMiddle);
        changeBoxColor(upperRight);
        changeBoxColor(middleLeft);
        changeBoxColor(bottomLeft);
        changeWinner(upperLeft);
    } else if (line1 && vertical2) {
        changeBoxColor(upperLeft);
        changeBoxColor(upperMiddle);
        changeBoxColor(upperRight);
        changeBoxColor(middleMiddle);
        changeBoxColor(bottomMiddle);
        changeWinner(upperMiddle);
    } else if (line1 && vertical3) {
        changeBoxColor(upperLeft);
        changeBoxColor(upperMiddle);
        changeBoxColor(upperRight);
        changeBoxColor(middleRight);
        changeBoxColor(bottomRight);
        changeWinner(upperRight);
    } else if (line1) {
        changeBoxColor(upperLeft);
        changeBoxColor(upperMiddle);
        changeBoxColor(upperRight);
        changeWinner(upperLeft);
    } else if (line2 && vertical1) {
        changeBoxColor(middleLeft);
        changeBoxColor(middleMiddle);
        changeBoxColor(middleRight);
        changeBoxColor(upperLeft);
        changeBoxColor(bottomLeft);
        changeWinner(middleLeft);
    } else if (line2 && vertical2) {
        changeBoxColor(middleLeft);
        changeBoxColor(middleMiddle);
        changeBoxColor(middleRight);
        changeBoxColor(upperMiddle);
        changeBoxColor(bottomMiddle);
        changeWinner(middleMiddle);
    } else if (line2 && vertical3) {
        changeBoxColor(middleLeft);
        changeBoxColor(middleMiddle);
        changeBoxColor(middleRight);
        changeBoxColor(upperRight);
        changeBoxColor(bottomRight);
        changeWinner(middleRight);
    } else if (line2) {
        changeBoxColor(middleLeft);
        changeBoxColor(middleMiddle);
        changeBoxColor(middleRight);
        changeWinner(middleLeft);
    } else if (line3 && vertical1) {
        changeBoxColor(bottomLeft);
        changeBoxColor(bottomMiddle);
        changeBoxColor(bottomRight);
        changeBoxColor(upperLeft);
        changeBoxColor(middleLeft);
        changeWinner(bottomLeft);
    } else if (line3 && vertical2) {
        changeBoxColor(bottomLeft);
        changeBoxColor(bottomMiddle);
        changeBoxColor(bottomRight);
        changeBoxColor(upperMiddle);
        changeBoxColor(middleMiddle);
        changeWinner(bottomMiddle);
    } else if (line3 && vertical3) {
        changeBoxColor(bottomLeft);
        changeBoxColor(bottomMiddle);
        changeBoxColor(bottomRight);
        changeBoxColor(upperRight);
        changeBoxColor(middleRight);
        changeWinner(bottomRight);
    } else if (line3) {
        changeBoxColor(bottomLeft);
        changeBoxColor(bottomMiddle);
        changeBoxColor(bottomRight);
        changeWinner(bottomLeft);
    } else if (vertical1) {
        changeBoxColor(upperLeft);
        changeBoxColor(middleLeft);
        changeBoxColor(bottomLeft);
        changeWinner(upperLeft);
        return;
    } else if (vertical2) {
        changeBoxColor(upperMiddle);
        changeBoxColor(middleMiddle);
        changeBoxColor(bottomMiddle);
        changeWinner(upperMiddle);
        return;
    } else if (vertical3) {
        changeBoxColor(upperRight);
        changeBoxColor(middleRight);
        changeBoxColor(bottomRight);
        changeWinner(upperRight);
        return;
    } else if (diagonal1 && diagonal2) {
        changeBoxColor(upperLeft);
        changeBoxColor(middleMiddle);
        changeBoxColor(bottomRight);
        changeBoxColor(upperRight);
        changeBoxColor(bottomLeft);
        changeWinner(middleMiddle);
    } else if (diagonal1) {
        changeBoxColor(upperLeft);
        changeBoxColor(middleMiddle);
        changeBoxColor(bottomRight);
        changeWinner(upperLeft);
        return;
    } else if (diagonal2) {
        changeBoxColor(upperRight);
        changeBoxColor(middleMiddle);
        changeBoxColor(bottomLeft);
        changeWinner(upperRight);
    } else if (!line1 && !line2 && !line3 && !vertical1 && !vertical2 && !vertical3 && !diagonal1 && !diagonal2) {
        checkDraw();
    }
}

function changeValue(element) {
    if (element.innerText !== '-') {
        alert("Escolha outro quadrado!");
        return;
    } else if (player === "X") {
        element.innerText = 'X';
        element.style.color = '#000';
        player = 'O';
        activePlayer.innerText = 'O'
    } else {
        element.innerText = 'O';
        element.style.color = '#000';
        player = 'X'
        activePlayer.innerText = 'X'
    }
}

function resetGame(element) {
    element.innerText = '-'
    element.style.color = 'darkgray'
    element.style.backgroundColor = 'darkgray'
}

upperLeft.addEventListener('click', () => {
    if (winner !== null) {
        return;
    } else {
        changeValue(upperLeft)
        checkWinner()
        checkDraw()
    }
})
upperMiddle.addEventListener('click', () => {
    if (winner !== null) {
        return;
    } else {
        changeValue(upperMiddle)
        checkWinner()
    }
})
upperRight.addEventListener('click', () => {
    if (winner !== null) {
        return;
    } else {
        changeValue(upperRight)
        checkWinner()
    }
})
middleLeft.addEventListener('click', () => {
    if (winner !== null) {
        return;
    } else {
        changeValue(middleLeft)
        checkWinner()
    }
})
middleMiddle.addEventListener('click', () => {
    if (winner !== null) {
        return;
    } else {
        changeValue(middleMiddle)
        checkWinner()
    }
})
middleRight.addEventListener('click', () => {
    if (winner !== null) {
        return;
    } else {
        changeValue(middleRight)
        checkWinner()
    }
})
bottomLeft.addEventListener('click', () => {
    if (winner !== null) {
        return;
    } else {
        changeValue(bottomLeft)
        checkWinner()
    }
})
bottomMiddle.addEventListener('click', () => {
    if (winner !== null) {
        return;
    } else {
        changeValue(bottomMiddle)
        checkWinner()
    }
})
bottomRight.addEventListener('click', () => {
    if (winner !== null) {
        return;
    } else {
        changeValue(bottomRight)
        checkWinner()
    }
})
resetButton.addEventListener('click', () => {
    resetGame(upperLeft)
    resetGame(upperMiddle)
    resetGame(upperRight)
    resetGame(middleLeft)
    resetGame(middleMiddle)
    resetGame(middleRight)
    resetGame(bottomLeft)
    resetGame(bottomMiddle)
    resetGame(bottomRight)
    gameWinner.innerText = ''
    if (winner === 'None') {
        if (initialPlayer === 'X') {
            winner = null;
            gamesPlayed++;
            gamesDrawed++;
            player = 'O';
            activePlayer.innerText = player;
            gameWinsX.innerText = gamesWonX
            gameWinsO.innerText = gamesWonO
            gameDraws.innerText = gamesDrawed
            gameRounds.innerText = gamesPlayed
            initialPlayer = 'O';
            console.log(gamesPlayed, gamesDrawed)
        } else {
            winner = null;
            gamesPlayed++;
            gamesDrawed++;
            player = 'X';
            activePlayer.innerText = player;
            gameWinsX.innerText = gamesWonX
            gameWinsO.innerText = gamesWonO
            gameDraws.innerText = gamesDrawed
            gameRounds.innerText = gamesPlayed
            initialPlayer = 'X';
            console.log(gamesPlayed, gamesDrawed)
        }
    }
    if (winner === 'X') {
        winner = null;
        gamesPlayed++;
        gamesWonX++;
        player = 'O';
        activePlayer.innerText = player;
        gameWinsX.innerText = gamesWonX
        gameWinsO.innerText = gamesWonO
        gameDraws.innerText = gamesDrawed
        gameRounds.innerText = gamesPlayed
        initialPlayer = 'O';
    } else if (winner === 'O') {
        winner = null;
        gamesPlayed++;
        gamesWonO++;
        player = 'X';
        activePlayer.innerText = player;
        gameWinsX.innerText = gamesWonX
        gameWinsO.innerText = gamesWonO
        gameDraws.innerText = gamesDrawed
        gameRounds.innerText = gamesPlayed
        initialPlayer = 'X';
    } else {
        winner = null;
        player = 'X';
        activePlayer.innerText = player;
        gameWinsX.innerText = gamesWonX
        gameWinsO.innerText = gamesWonO
        gameDraws.innerText = gamesDrawed
        gameRounds.innerText = gamesPlayed
        initialPlayer = 'X';
    }
})