const gameArea = document.getElementById('gameArea');
const scoreDisplay = document.getElementById('score');
const missesDisplay = document.getElementById('misses');

let score = 0;
let misses = 0;
let targetDuration = 1500;

function createTarget() {
    const target = document.createElement('div');
    target.classList.add('target');
    
    // Random position within game area
    const x = Math.floor(Math.random() * 370);
    const y = Math.floor(Math.random() * 370);
    target.style.left = `${x}px`;
    target.style.top = `${y}px`;
    
    // Append target to game area
    gameArea.appendChild(target);

    // Event listener for clicking target
    target.addEventListener('click', () => {
        score++;
        scoreDisplay.textContent = `Score: ${score}`;
        gameArea.removeChild(target);
    });

    // Remove target after a short delay
    setTimeout(() => {
        if (gameArea.contains(target)) {
            misses++;
            missesDisplay.textContent = `Misses: ${misses} / 5`;
            gameArea.removeChild(target);

            // End game if player reaches 5 misses
            if (misses >= 5) {
                alert(`Game Over! Your score is ${score}.`);
                resetGame();
            }
        }
    }, targetDuration);

    // Increase difficulty as score increases
    if (score % 5 === 0 && targetDuration > 500) {
        targetDuration -= 100;
    }
}

function resetGame() {
    score = 0;
    misses = 0;
    targetDuration = 1500;
    scoreDisplay.textContent = `Score: 0`;
    missesDisplay.textContent = `Misses: 0 / 5`;
}

setInterval(createTarget, 2000);




