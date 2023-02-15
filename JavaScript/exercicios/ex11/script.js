

let StudentName = prompt('Calculador de média \n\n Nome do aluno(a): ')
let note1 = Number(prompt('Digite a primeira nota:'))
let note2 = Number(prompt('Digite a segunda nota:'))

let student = {name: StudentName, note1: note1, note2: note2}

const average = (note1, note2) => {
  return (note1 + note2) / 2
}

let media = average(note1, note2)

if (media >= 7) {
  alert(
    `A média do(a) aluno(a) ${student.name} é: ${media} \n\n Parabéns, ${student.name}! Você foi aprovado(a) no concurso!`
  )
} else {
  alert(
    `A média do(a) aluno(a) ${student.name} é: ${media} \n\n Não foi dessa vez, ${student.name}! Tente Novamente!`
  )
}