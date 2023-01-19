const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const texto = document.querySelector("h2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const inputNumber = document.querySelector("#input-number")
let random = Math.round(Math.random() * 10)
let xAttempts = 1

// event
btnTry.addEventListener("click", TryClick)
btnReset.addEventListener("click", resetPage)
document.addEventListener('keypress', enterResetPage)

//function Callback
function TryClick(event) {
  event.preventDefault();
  if (random == 0) {
    random++
  }
  
  if(Number(inputNumber.value) <= 0 || Number(inputNumber.value) > 10 ) {
    alert("Digite somente números entre 1 e 10!");
    xAttempts--
  } else if (Number(inputNumber.value) == random) {
    screen1.classList.add("hide")
    screen2.classList.remove("hide")
    
    let tentativa = document.querySelector(".screen2 > h2").innerText = `Acertou em ${xAttempts} tentativas!`
  } else {
    texto.innerText = 'Errou, Tente Novamente'
    texto.style.color = 'red'
  }
  inputNumber.value = ''
  inputNumber.focus()

  xAttempts++
}
function resetPage() {
   window.location.reload()
}
function enterResetPage(e) {
  if (e.key == "Enter" && screen1.classList.contains("hide")) {
    resetPage()
  }
}