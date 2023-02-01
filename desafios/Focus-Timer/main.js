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
  
      secondsDisplay.textContent = "00"
      
      if (minutes <= 0) {
        SwitchButtonsControls.SwitchStop()
        return
      }
      
      if (seconds <= 0) {
        seconds = 2

        minutesDisplay.textContent = String(minutes - 1).padStart(2, '0')
      }

      secondsDisplay.textContent = String(seconds - 1).padStart(2, '0').padStart(2, "0")
      
      countdown()
    }, 1000)
}

const SwitchButtonsControls = {
  SwitchPlay: function playPause(e) {
    pauseButton.classList.toggle("hide")
    playButton.classList.toggle("hide")
    stopButton.classList.remove("hide")
    setButton.classList.add("hide")
    countdown()
  },
  SwitchPause: function PausePlay() {
    pauseButton.classList.toggle("hide")
    playButton.classList.toggle("hide")
  },
  SwitchStop: function StopSet() {
    playButton.classList.remove("hide")
    pauseButton.classList.add("hide")
    setButton.classList.remove("hide")
    stopButton.classList.add("hide")
  },
}
function timeFunction() {
  minutes = Number(prompt("Quantos minutos: \n"))
  if (minutes > 60 || minutes == '' || minutes == 0) {
    alert("Digite um Numero entre 1 e 60")
  }else {
    minutesDisplay.textContent = String(minutes).padStart(2, '0')
  }
}
function toggleVolume(e) {
  volumeButton.classList.toggle("hide")
  muteButton.classList.toggle("hide")
}

playButton.addEventListener("click", SwitchButtonsControls.SwitchPlay)
pauseButton.addEventListener("click", SwitchButtonsControls.SwitchPause)
setButton.addEventListener('click', timeFunction);
stopButton.addEventListener('click', SwitchButtonsControls.SwitchStop);
volumeButton.addEventListener('click', toggleVolume)
muteButton.addEventListener('click', toggleVolume)
