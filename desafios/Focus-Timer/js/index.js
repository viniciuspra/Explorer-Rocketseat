import Controls from "./controls.js"
import Timer  from "./timer.js"
import Sounds from "./sounds.js"
import Events from "./events.js"
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
const sound = Sounds()

Events( { controls, timer, sound } )