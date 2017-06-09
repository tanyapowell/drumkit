function playSound(e) {
  const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
  const key = document.querySelector(`.key[data-key='${e.keyCode}']`);

  if(!audio) return; //will stop the function from running altogether if there is no audio for that key

  key.classList.add('playing');
  audio.currentTime = 0; //rewind to beginning
  audio.play();
}

function removeTransition(e) {
  if(e.propertyName !== 'transform') return; // skip if not transformed
  this.classList.remove('playing');
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);
