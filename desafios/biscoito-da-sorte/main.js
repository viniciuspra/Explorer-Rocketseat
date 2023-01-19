let click = document.querySelector("#cookie")
let screen1 = document.querySelector(".screen1");
let screen2 = document.querySelector(".screen2");
let btn = document.querySelector("#btn");

click.addEventListener("click", cliclCookie)
document.addEventListener("keypress", enterResetPage)

function cliclCookie(e) {
  screen1.classList.add("hide");
  screen2.classList.remove('hide')
  NewPhrase()
}
function resetPage(e) {
  window.location.reload()
}
function enterResetPage(e) {
  if (e.key == "Enter" && screen1.classList.contains("hide")) {
    resetPage()
  }
}

// phrase generator
let phrases = [
  "A vida trará coisas boas se tiver paciência.",
  "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.",
  "Não compense na ira o que lhe falta na razão.",
  "A maior de todas as torres começa no solo.",
  "Não há que ser forte. Há que ser flexível.",
  "Defeitos e virtudes são apenas dois lados da mesma moeda.",
  "Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?",
  "Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.",
  "Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.",
  "Siga os bons e aprenda com eles.",
  "O bom-senso vale mais do que muito conhecimento.",
  "Quem quer colher rosas tem de estar preparado para suportar os espinhos.",
  "Aquele que se importa com o sentimento dos outros, não é um tolo.",
  "Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos.",
  "O riso é a menor distância entre duas pessoas.",
  "Amizade e Amor são coisas que se unem num piscar de olhos.",
  "A paciência na adversidade é sinal de um coração sensível.",
  "Todas as coisas são difíceis antes de se tornarem fáceis."
]
function NewPhrase() {
  //Muda a frase sempre que a função é chamada
  let random = Math.floor(Math.random() * (phrases.length))
  document.querySelector('.screen2 p').innerHTML = phrases[random]
  console.log(phrases[random]);
}
