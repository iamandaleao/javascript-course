let num = [5, 8, 2, 9, 3]
num.sort() // Ordena os elementos do array
num.push(1) // Adiciona o elemento 1 ao final do array
console.log(num) // Exibe o array no console
console.log(`O vetor tem ${num.length} posições`) // Exibe o tamanho do array
console.log(`O primeiro valor do vetor é ${num[0]}`) // Exibe o primeiro elemento do array
let pos = num.indexOf(8) // Encontra a posição do elemento 8 no array
if (pos == -1) { // Verifica se o elemento não foi encontrado
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor 8 está na posição ${pos}`) // Exibe a posição do elemento 8
}