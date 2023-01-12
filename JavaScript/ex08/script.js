
const patients = [
  { name: "vinicius", age: 20, weight: 85, height: 180 },
  { name: "pedro", age: 32, weight: 75, height: 173 },
  { name: "paula", age: 25, weight: 65, height: 164 },
]

let patientsNames = []
let patientsAge = []
let patientsWeight = []
let patientsHeight = []

for (let patient  of patients) {
  patientsNames.push(patient.name)
  patientsAge.push(patient.age)
  patientsWeight.push(patient.weight)
  patientsHeight.push(patient.height)
}

alert(`
O Paciente ${patientsNames[0]} tem ${patientsAge[0]} anos, tem ${patientsHeight[0]} cm de altura e pesa ${patientsWeight[0]}Kg!
----------------------------------------------------------------------------
O Paciente ${patientsNames[1]} tem ${patientsAge[1]} anos, tem ${patientsHeight[1]} cm de altura e pesa ${patientsWeight[1]}Kg!
----------------------------------------------------------------------------
O Paciente ${patientsNames[2]} tem ${patientsAge[2]} anos, tem ${patientsHeight[2]} cm de altura e pesa ${patientsWeight[2]}Kg! 
----------------------------------------------------------------------------`)
