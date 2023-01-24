import { Modal } from './modal.js'

// Form
const form = document.querySelector('form');
const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');

form.onsubmit = (e) => {
  e.preventDefault();

  Modal.open();

  const weight = inputWeight.value
  const height = inputHeight.value
  const result = IMC(weight, height)

  Modal.Message.innerText = `Seu IMC é de ${result}`
}

function IMC(weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2)
}



