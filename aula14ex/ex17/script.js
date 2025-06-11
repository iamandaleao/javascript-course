function tabuada() {
  let num = document.getElementById("txtn")
  let operacao = document.getElementById("operacao")
  let tab = document.getElementById("seltab")

  if (num.value.length == 0) {
    window.alert("Por favor, digite um número!")
  } else {
    let n = Number(num.value)
    let c = 1
    tab.innerHTML = ""

    while (c <= 10) {
      let item = document.createElement("option")

      if (operacao.value === "multiplicar") {
        item.text = `${n} x ${c} = ${n * c}`
      } else if (operacao.value === "dividir") {
        let resultado = (n / c).toFixed(2)
        item.text = `${n} ÷ ${c} = ${resultado}`
      }

      tab.appendChild(item)
      c++
    }
  }
}
