import { ResetControls, ResetPlay, SwitchStop} from "./controls.js"
import {ResetTimer, countdown } from "./timer.js"

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

playButton.addEventListener("click", () => {
  ResetControls(pauseButton, playButton, stopButton, setButton)
  countdown(secondsDisplay, minutesDisplay, SwitchStop, TimerTimeOut)
})
pauseButton.addEventListener("click", () => {
  ResetPlay(pauseButton, playButton)
  clearTimeout(TimerTimeOut)
})
setButton.addEventListener('click', () => {
  minutes = Number(prompt("Quantos minutos: \n"))
  if (!minutes || minutes >= 100) {
    ResetControls(pauseButton, playButton, stopButton, setButton)
  } else {
    UpdateTimerDisplay(minutes, 0)
  }
});
stopButton.addEventListener('click', () => {
  SwitchStop(pauseButton, playButton, stopButton, setButton)
  ResetTimer()
});


