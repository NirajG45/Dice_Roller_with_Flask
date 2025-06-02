function rollDice() {
    const dice = document.getElementById('dice');
    dice.classList.add('rolling');

    fetch('/roll')
    .then(response => response.json())
    .then(data => {
        setTimeout(() => {
            const faces = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];
            dice.textContent = faces[data.number - 1];
            dice.classList.remove('rolling');
        }, 300);
    });
}
