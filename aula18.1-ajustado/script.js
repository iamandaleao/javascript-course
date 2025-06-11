let num = document.querySelector("input#fnum")
let lista = document.querySelector("ul#lista") // agora é uma <ul>
let res = document.querySelector("div#res")
let valores = []

// Atalho para Enter
const inputNumero = document.querySelector('input[type="number"]')
inputNumero.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    document.querySelector('input[type="button"]').click()
  }
})

function isNumero(n) {
  return Number(n) >= 1 && Number(n) <= 100
}

function inLista(n, l) {
  return l.indexOf(Number(n)) != -1
}

function adicionar() {
  if (isNumero(num.value) && !inLista(num.value, valores)) {
    valores.push(Number(num.value))

    let item = document.createElement("li") // trocou option por li
    item.textContent = `✔️ Valor ${num.value} adicionado.`
    lista.appendChild(item) // trocou appendChild em select por ul

    res.innerHTML = ""
  } else {
    window.alert("Valor inválido ou já encontrado na lista.")
  }

  num.value = ""
  num.focus()
}

function finalizar() {
  if (valores.length === 0) {
    window.alert("Adicione valores antes de finalizar!")
  } else {
    let tot = valores.length
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0

    for (let pos in valores) {
      soma += valores[pos]
      if (valores[pos] > maior) maior = valores[pos]
      if (valores[pos] < menor) menor = valores[pos]
    }

    let media = soma / tot

    res.classList.remove("show-res") // reinicia animação se for necessário
    void res.offsetWidth // truque pra forçar o reflow
    res.innerHTML = `
          <h3>📊 Resumo Final:</h3>
          <ul>
            <li><strong>Total:</strong> ${tot} números inseridos</li>
            <li><strong>Maior valor:</strong> ${maior}</li>
            <li><strong>Menor valor:</strong> ${menor}</li>
            <li><strong>Soma total:</strong> ${soma}</li>
            <li><strong>Média:</strong> ${media.toFixed(2)}</li>
          </ul>
      `
    res.classList.add("show-res") // adiciona animação
  }
}

