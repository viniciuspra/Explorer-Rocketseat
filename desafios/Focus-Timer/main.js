const playButton = document.querySelector('.play');
const pauseButton = document.querySelector('.pause');
const stopButton = document.querySelector('.stop');
const setButton = document.querySelector('.set');
const volumeButton = document.querySelector('.volume');
const muteButton = document.querySelector('.mute');
const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');
let minutes = Number(minutesDisplay.textContent)
let TimerTimeOut

const SwitchButtonsControls = {
  ResetContols: function playPause(e) {
    pauseButton.classList.toggle("hide")
    playButton.classList.toggle("hide")
    stopButton.classList.remove("hide")
    setButton.classList.add("hide")
    countdown()
  },
  ResetPlay: function PausePlay() {
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

function UpdateTimerDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, "0")
  secondsDisplay.textContent = String(seconds).padStart(2, "0")
}
function ResetTimer() {
  UpdateTimerDisplay(minutes, 0)
  clearTimeout(TimerTimeOut)
}
function countdown() {
    TimerTimeOut = setTimeout(() => {
      let seconds = Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)
  
      UpdateTimerDisplay(minutes, 0)
      
      if (minutes <= 0) {
        SwitchButtonsControls.SwitchStop()
        return
      }
      
      if (seconds <= 0) {
        seconds = 60
        --minutes
      }

      UpdateTimerDisplay(minutes, String(seconds - 1))
      
      countdown()
    }, 1000)
}
function timeFunction() {
  minutes = Number(prompt("Quantos minutos: \n"))
  if (!minutes || minutes >= 100) {
    SwitchButtonsControls.ResetContols
  }else {
    UpdateTimerDisplay(minutes, 0)
  }
}
function toggleVolume(e) {
  volumeButton.classList.toggle("hide")
  muteButton.classList.toggle("hide")
}

playButton.addEventListener("click", SwitchButtonsControls.ResetContols)
pauseButton.addEventListener("click", () => {
  SwitchButtonsControls.ResetPlay()
  clearTimeout(TimerTimeOut)
})
setButton.addEventListener('click', timeFunction);
stopButton.addEventListener('click', () => {
  SwitchButtonsControls.SwitchStop()
  ResetTimer()
});
volumeButton.addEventListener('click', toggleVolume)
muteButton.addEventListener('click', toggleVolume)
