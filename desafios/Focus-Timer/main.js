const playButton = document.querySelector('.play');
const pauseButton = document.querySelector('.pause');
const stopButton = document.querySelector('.stop');
const setButton = document.querySelector('.set');
const volumeButton = document.querySelector('.volume');
const muteButton = document.querySelector('.mute');
const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');
let minutes

function countdown() {
    setTimeout(() => {
      let seconds = Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)

      console.log(seconds)
      if (seconds <= 0) {
        seconds = 3

        minutesDisplay.textContent = minutes - 1
      }
      
      secondsDisplay.textContent = String(seconds - 1).padStart(2, '0')
      countdown()
    }, 1000)
}

function playPause(e) {
  pauseButton.classList.toggle("hide")
  playButton.classList.toggle("hide")
  stopButton.classList.remove("hide")
  setButton.classList.add("hide")

  countdown()
}
function toggleVolume(e) {
  volumeButton.classList.toggle("hide")
  muteButton.classList.toggle("hide")
}
function timeFunction() {
  minutes = Number(prompt("Quantos minutos: \n"))
  if (minutes > 60 || minutes == '' || minutes == 0) {
    alert("Digite um Numero entre 1 e 60")
  }else if(minutes < 10){
    minutesDisplay.textContent = '0' + minutes
  } else {
    minutesDisplay.textContent = minutes
  }
}

playButton.addEventListener('click', playPause);
pauseButton.addEventListener('click', (e) => { 
    pauseButton.classList.toggle("hide")
    playButton.classList.toggle("hide")
});
setButton.addEventListener('click', timeFunction);
stopButton.addEventListener('click', (e) => {
    playButton.classList.remove("hide")
    pauseButton.classList.add("hide")
    setButton.classList.remove("hide") 
    stopButton.classList.add("hide") 
});
volumeButton.addEventListener('click', toggleVolume)
muteButton.addEventListener('click', toggleVolume)
