let player = 'X';
let winner = null;
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

function checkSequence(element1, element2, element3) {
    let equalSequence = false;

    if (element1.innerText !== '-' && element1.innerText === element2.innerText && element2.innerText === element3.innerText) {
        equalSequence = true;
    }

    return equalSequence;
}

function changeBoxColor(element) {
    element.style.backgroundColor = 'forestgreen';
}

function changeWinner(element) {
    winner = element.innerText;
    gameWinner.innerText = winner;
}

function checkWinner() {
    if (checkSequence(upperLeft, upperMiddle, upperRight)) {
        changeBoxColor(upperLeft)
        changeBoxColor(upperMiddle)
        changeBoxColor(upperRight)
        changeWinner(upperLeft);
        return;
    }

    if (checkSequence(middleLeft, middleMiddle, middleRight)) {
        changeBoxColor(middleLeft)
        changeBoxColor(middleMiddle)
        changeBoxColor(middleRight)
        changeWinner(middleLeft);
        return;
    }

    if (checkSequence(bottomLeft, bottomMiddle, bottomRight)) {
        changeBoxColor(bottomLeft)
        changeBoxColor(bottomMiddle)
        changeBoxColor(bottomRight)
        changeWinner(bottomLeft);
        return;
    }

    if (checkSequence(upperLeft, middleLeft, bottomLeft)) {
        changeBoxColor(upperLeft)
        changeBoxColor(middleLeft)
        changeBoxColor(bottomLeft)
        changeWinner(upperLeft);
        return;
    }

    if (checkSequence(upperMiddle, middleMiddle, bottomMiddle)) {
        changeBoxColor(upperMiddle)
        changeBoxColor(middleMiddle)
        changeBoxColor(bottomMiddle)
        changeWinner(upperMiddle);
        return;
    }

    if (checkSequence(upperRight, middleRight, bottomRight)) {
        changeBoxColor(upperRight)
        changeBoxColor(middleRight)
        changeBoxColor(bottomRight)
        changeWinner(upperRight);
        return;
    }

    if (checkSequence(upperLeft, middleMiddle, bottomRight)) {
        changeBoxColor(upperLeft)
        changeBoxColor(middleMiddle)
        changeBoxColor(bottomRight)
        changeWinner(upperLeft);
        return;
    }

    if (checkSequence(upperRight, middleMiddle, bottomLeft)) {
        changeBoxColor(upperRight)
        changeBoxColor(middleMiddle)
        changeBoxColor(bottomLeft)
        changeWinner(upperRight);
    }
}

player = 'X'

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
    winner = null;
    player = 'X'
    activePlayer.innerText = player;
})