
let number; 

let items = []

do {
  number = Number(
    prompt(
      `Olá usuário!  Digite a opção desejada

   1. Cadastrar um item na lista. 
   2. Mostrar itens cadastrados.
   3. Sair do programa.

  ----------------------------------------`
  ))

  if (number == 1) {

    let item = prompt("Adicione um item a lista!")
    items.push(' ' + item)

  } else if(number == 2) {

    if(items.length == 0) {
      alert("Não existem itens cadastrados!")
    } else {
      alert(items)
    }

  } else if (number == 3) {
    alert("Voce saiu!")
  }
}while (number != 3)
