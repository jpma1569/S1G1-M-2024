// Função para gerar um número aleatório entre min e max (inclusive)
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Inicializar o número secreto
let secretNumber = generateRandomNumber(1, 100);

// Função para verificar o palpite do jogador e fornecer feedback
function guessNumber() {
    const guessInput = document.getElementById('guessInput');
    const resultMessage = document.getElementById('resultMessage');
    const guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess < 1 || guess > 100) {
        resultMessage.textContent = 'Por favor, digite um número válido entre 1 e 100.';
        resultMessage.style.color = 'red';
        return;
    }

    if (guess === secretNumber) {
        resultMessage.textContent = 'Parabéns! Você adivinhou o número corretamente!';
        resultMessage.style.color = 'green';
    } else if (guess < secretNumber) {
        resultMessage.textContent = 'Dica: O número que estou pensando é maior.';
        resultMessage.style.color = 'blue';
    } else if (guess > secretNumber) {
        resultMessage.textContent = 'Dica: O número que estou pensando é menor.';
        resultMessage.style.color = 'blue';
    }
}
