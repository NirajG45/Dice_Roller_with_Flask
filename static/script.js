function rollDice() {
    fetch('/roll')
    .then(response => response.json())
    .then(data => {
        const faces = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];
        document.getElementById('dice').textContent = faces[data.number - 1];
    });
}
