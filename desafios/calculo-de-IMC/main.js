import { Modal } from './modal.js'
import { AletError } from './alert-error.js'
import { IMC, notNumber} from './utils.js'

const form = document.querySelector('form');
const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');

form.onsubmit = (e) => {
  e.preventDefault();
  
  const weight = inputWeight.value
  const height = inputHeight.value

  const showAlertError = notNumber(weight) || notNumber(height)
  
  if (showAlertError == true) {
    AletError.open()
    return;
  } 
  AletError.close()

  const result = IMC(weight, height)

  DisplayResultMessage(result)
}

function DisplayResultMessage(result) {
  Modal.Message.innerText = `Seu IMC é de ${result}`
  Modal.open()
}

weight.onkeypress = () => AletError.close()
height.onkeypress = () => AletError.close()