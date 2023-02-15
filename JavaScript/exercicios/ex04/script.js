// Media do aluno

let nome = prompt('Qula seu nome?');
let nota1 = prompt('Digite a primeira nota:');
let nota2 = prompt('Digite a segunda nota:');
let nota3 = prompt('Digite a terceira nota:');

let media = (Number(nota1) + Number(nota2) + Number(nota3)) / 3;

if (media < 7) {
  var result = "Reprovado"
} else {
  var result = "Aprovado"
}

alert(`A media do aluno ${nome} é ${media.toFixed(1)} ele está ${result}`);