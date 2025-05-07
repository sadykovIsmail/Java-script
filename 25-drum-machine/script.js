// Existing click event code remains the same
const drumPads = document.querySelectorAll('.drum-pad');
const display = document.getElementById('display');

drumPads.forEach(pad => {
  pad.addEventListener('click', () => {
    const audio = pad.querySelector('audio');
    if (audio) {
      audio.currentTime = 0;
      audio.play();
      display.innerText = `Playing: ${pad.id}`;
    }
  });
});

// Add keydown event listener for key triggers
document.addEventListener('keydown', (event) => {
  const key = event.key.toUpperCase(); // Make sure it's uppercase like 'Q'
  const pad = document.getElementById(key);

  if (pad && pad.classList.contains('drum-pad')) {
    const audio = pad.querySelector('audio');
    if (audio) {
      audio.currentTime = 0;
      audio.play();
      display.innerText = `Playing: ${key}`;
    }
  }
});
