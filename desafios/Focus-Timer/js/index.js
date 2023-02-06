import Controls from "./controls.js"
import Timer  from "./timer.js"
import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  buttonSoundOn,
  buttonSoundOff,
  minutesDisplay,
  secondsDisplay,
} from "./elements.js"

const {} = elements

const controls = Controls({
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset
})

buttonPlay.addEventListener("click", function () {
  controls.play()
  timer.countdown()
})

buttonPause.addEventListener("click", function () {
  controls.pause()
  timer.hold()
})

buttonStop.addEventListener("click", function () {
  controls.reset()
  timer.reset()
})

buttonSoundOff.addEventListener("click", function () {
  buttonSoundOn.classList.remove("hide")
  buttonSoundOff.classList.add("hide")
})

buttonSoundOn.addEventListener("click", function () {
  buttonSoundOn.classList.add("hide")
  buttonSoundOff.classList.remove("hide")
})

buttonSet.addEventListener("click", function () {
  let newMinutes = controls.getMinutes()

  if (!newMinutes) {
    timer.reset()
    return
  }
  timer.updateDisplay(newMinutes, 0)
  timer.updateMinutes(newMinutes)
})
