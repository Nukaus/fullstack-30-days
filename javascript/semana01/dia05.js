// Lista de nomes

let nome = ['Cristiano', 'Camille', 'Lucas', 'Rafael']
// console.log(nome)

for(let c in nome){
    console.log(nome[c])
}

/* for(let c = 0; c < nome.length; c++){
    console.log(nome[c])
} */

// Somar valores de um array

let valores = [1, 2, 5, 8, 9]
let soma = 0
for(let pos in valores){
    soma += valores[pos]
}

console.log(soma)