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
      SwitchStop()
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

export {}