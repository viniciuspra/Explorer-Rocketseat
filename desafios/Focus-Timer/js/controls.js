function ResetControls(pauseButton, playButton, stopButton, setButton) {
  pauseButton.classList.toggle("hide")
  playButton.classList.toggle("hide")
  stopButton.classList.remove("hide")
  setButton.classList.add("hide")
}

function ResetPlay(pauseButton, playButton) {
  pauseButton.classList.toggle("hide")
  playButton.classList.toggle("hide")
}

function SwitchStop(pauseButton, playButton, stopButton, setButton) {
  pauseButton.classList.add("hide")
  playButton.classList.remove("hide")
  stopButton.classList.add("hide")
  setButton.classList.remove("hide")
}

export { ResetControls, ResetPlay, SwitchStop }
