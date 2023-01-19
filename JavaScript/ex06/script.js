
  let result = prompt("Advinhe o número que estou pensando? Está entre 0 e 10")

  let random = Math.round(Math.random() * 10)

  console.log(random)
  
  let tentativas = 1

 if (result == random) {
  alert("Parabéns! Você adivinhou na 1 tentativa")
 }
  while (result != random) {
      result = prompt("Errou, Tente Novamente")
      tentativas++;
    if (result == random) { 
      alert(`Parabéns! Você adivinhou o número em ${tentativas} tentativas` )
    } else if (tentativas > 4) {
      alert(`Perdeu! Você atingiu o número maximo de tentativas! O número era ${random}`)
      result = random
    }
  }



