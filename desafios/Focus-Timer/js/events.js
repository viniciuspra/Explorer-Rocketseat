import {
  buttonPause,
  buttonPlay,
  buttonSoundOff,
  buttonSoundOn,
  buttonSet,
  buttonStop
} from './elements.js'

export default function Events({ controls, timer, sound }) {
  buttonPlay.addEventListener("click", () => {
    controls.play()
    timer.countdown()
    sound.PlayAudio()
  })

  buttonPause.addEventListener("click", () => {
    controls.pause()
    timer.hold()
    sound.PlayAudio()
  })

  buttonStop.addEventListener("click", () => {
    controls.reset()
    timer.reset()
    sound.PlayAudio()
  })

  buttonSoundOff.addEventListener("click", () => {
    buttonSoundOn.classList.remove("hide")
    buttonSoundOff.classList.add("hide")
    sound.bgAudio.pause()
    sound.bgAudio.play()
  })

  buttonSoundOn.addEventListener("click", function () {
    buttonSoundOn.classList.add("hide")
    buttonSoundOff.classList.remove("hide")
    sound.bgAudio.pause()
  })

  buttonSet.addEventListener("click", function () {
    let newMinutes = controls.getMinutes()

    if (!newMinutes) {
      timer.reset()
      return
    } else if (newMinutes >= 100 || newMinutes < 0) {
      alert("Erro, Digite um número entre 0 e 99!!")
      return
    }
    timer.updateDisplay(newMinutes, 0)
    timer.updateMinutes(newMinutes)
  })
}