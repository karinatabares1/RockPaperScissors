let playerScore = 0;
let computerScore = 0;
let gameOver = false;


function getElement(id) {
    return document.getElementById(id);
}

function updateScore() {
    getElement("player-score").textContent = playerScore;
    getElement("computer-score").textContent = computerScore;
}

function updateResult(result) {
    getElement("game-result").textContent = result;
}


function updateChoices(playerChoice, computerChoice) {
    getElement("player-choice").textContent = "Elegiste: " + playerChoice;
    getElement("computer-choice").textContent = "PC eligió: " + computerChoice;
}


function playGame(jugada) {
    if (gameOver) {
        return; 
    }

    let pc = aleatorio(1, 3);
    let playerChoice = eleccion(jugada);
    let computerChoice = eleccion(pc);

    updateChoices(playerChoice, computerChoice);

    if (jugada === pc) {
        updateResult("EMPATE");
    } else if (
        (jugada === 1 && pc === 3) ||
        (jugada === 2 && pc === 1) ||
        (jugada === 3 && pc === 2)
    ) {
        updateResult("GANASTE 🤩🥳");
        playerScore++;
    } else {
        updateResult("PERDISTE😪😓");
        computerScore++;
    }

    updateScore();

  
    if (playerScore === 3 || computerScore === 3) {
        gameOver = true;
        let finalResult = playerScore === 3 ? "¡Felicidades, ganaste 🥳!" : "Lo siento, perdiste😓.";
        alert(finalResult);
        updateResult(finalResult);
        disableButtons();
    }
}


function disableButtons() {
    getElement("rock").disabled = true;
    getElement("paper").disabled = true;
    getElement("scissors").disabled = true;
}


function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


function eleccion(jugada) {
    let resultado = "";
    if (jugada == 1) {
        resultado = "Piedra🪨";
    } else if (jugada == 2) {
        resultado = "Papel🗞️";
    } else if (jugada == 3) {
        resultado = "Tijera✂️";
    } else {
        resultado = "GAME OVER";
    }
    return resultado;
}

document.addEventListener("DOMContentLoaded", function() {
    getElement("rock").addEventListener("click", function() {
        playGame(1);
    });
    getElement("paper").addEventListener("click", function() {
        playGame(2);
    });
    getElement("scissors").addEventListener("click", function() {
        playGame(3);
    });
});