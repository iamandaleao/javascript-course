let valores = [8, 1, 7, 4, 2, 9]
valores.sort() // Ordena os elementos do array
// console.log(valores) Exibe o array no console 

/* console.log(valores[0]) // Exibe o primeiro elemento do array
console.log(valores[1]) // Exibe o segundo elemento do array
console.log(valores[2]) // Exibe o terceiro elemento do array
console.log(valores[3]) // Exibe o quarto elemento do array
console.log(valores[4]) // Exibe o quinto elemento do array
console.log(valores[5]) // Exibe o sexto elemento do array 

 for (let pos = 0; pos < valores.length; pos++) { // Percorre o array
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`) // Exibe a posição e o valor do elemento
}*/

for (let pos in valores) { // Percorre o array usando o índice
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`) // Exibe a posição e o valor do elemento
}