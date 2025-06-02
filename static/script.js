const rollBtn = document.getElementById('roll-btn');
const diceImg = document.getElementById('dice-img');
const sound = document.getElementById('roll-sound');
const historyList = document.getElementById('roll-history');
const toggleMode = document.getElementById('toggle-mode');
const body = document.body;

rollBtn.addEventListener('click', () => {
  fetch('/roll')
    .then(response => response.json())
    .then(data => {
      diceImg.src = `/static/dice/${data.value}.png`;
      diceImg.classList.add('shake');
      sound.play();

      setTimeout(() => {
        diceImg.classList.remove('shake');
      }, 500);

      historyList.innerHTML = '';
      data.history.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `🎲 ${item.value} at ${item.time}`;
        historyList.appendChild(li);
      });
    });
});

toggleMode.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});
