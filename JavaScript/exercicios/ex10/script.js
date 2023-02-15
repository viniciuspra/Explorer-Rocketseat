
let num1 = Number(prompt('Digite o primeiro número:'))
let num2 = Number(prompt('Digite o segundo número:'))

let sum = num1 + num2
let sub = num1 - num2
let product = num1 * num2
let divi = num1 / num2
let rest = num1 % num2

alert(`A soma dos dois números é: ${sum}`)
alert(`A subtração dos dois números é: ${sub}`)
alert(`A multiplicação dos dois números é: ${product}`)
alert(`A divisão dos dois números é: ${divi}`)
alert(`O resto dos dois números é: ${rest}`)

if (sum % 2 == 0) {
  alert(`A soma dos dois números é PAR: ${sum}`)
} else {
  alert(`A soma dos dois números é IMPAR: ${sum}`)
}

if (num1 === num2) {
  alert('Os números inseridos são iguais!')
} else { 
  alert('Os números inseridos são diferentes!')
}
