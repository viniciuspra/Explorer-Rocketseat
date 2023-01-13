
let patientName = prompt('Qual o nome do paciente:')
let patientWeight = prompt('Qual o peso do paciente:')
let patientHeight = prompt('Qual a altura do paciente em cm:')

const patient = {name: patientName, weight: patientWeight, height: patientHeight}

const patients = []

patients.push(patient)


const patientsImc = (weight, height) => {
  return weight / ((height / 100) * (height / 100))
}

let Imc = []

for (let i = 0; i < patients.length; i++) {
  Imc[i] = patientsImc(patients[i].weight, patients[i].height)

  alert(`Paciente ${patients[i].name} possui o IMC de ${Imc[i].toFixed(2)}`)
}

