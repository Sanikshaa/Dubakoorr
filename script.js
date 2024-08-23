document.querySelector('.envelope').addEventListener('click', function() {
    this.classList.toggle('open');
    if (this.classList.contains('open')) {
        startConfetti();
    } else {
        stopConfetti();
    }
});

function startConfetti() {
    const confettiContainer = document.getElementById('confetti');
    for (let i = 0; i < 100; i++) {
        let confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.backgroundColor = randomColor();
        confetti.style.animationDelay = `${Math.random() * 2}s`;
        confettiContainer.appendChild(confetti);
    }
}

function stopConfetti() {
    const confettiContainer = document.getElementById('confetti');
    while (confettiContainer.firstChild) {
        confettiContainer.removeChild(confettiContainer.firstChild);
    }
}

function randomColor() {
    const colors = ['#ff6b6b', '#feca57', '#48dbfb', '#1dd1a1', '#5f27cd'];
    return colors[Math.floor(Math.random() * colors.length)];
}
