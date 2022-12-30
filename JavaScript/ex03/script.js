/*
  Pegar 2 numeros e fazer operações matemáticas soma, subtração, multiplicação, divisão e resto da divisão. 
*/ 

let num1 = prompt("Digite um numero: ");
let num2 = prompt("Digite outro numero: ");

let sum = Number(num1) + Number(num2);
let sub = Number(num1) - Number(num2);
let product = Number(num1) * Number(num2);
let divi = Number(num1) / Number(num2);
let resto = Number(num1) % Number(num2);

alert(` ${num1} + ${num2} = ${sum}`);
alert(` ${num1} - ${num2} = ${sub}`);
alert(` ${num1} * ${num2} = ${product}`);
alert(` ${num1} / ${num2} = ${divi}`);
alert(` ${num1} % ${num2} = ${resto}`);





