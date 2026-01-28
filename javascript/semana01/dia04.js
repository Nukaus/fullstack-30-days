//  Calculadora básica

function calculadora(n1, n2, operacao){
    let resultado

    switch(operacao){
        case '+':
            resultado = n1 + n2
            break
        case '-':
            resultado = n1 - n2
            break
        case '*':
            resultado = n1 * n2
            break
        case '/':
            resultado = n1 / n2
            break
        default:
            return 'Operação inválida'
    }
    return resultado

}

let caso1 = calculadora(10,5, '+')
let caso2 = calculadora(10,5, '-')
let caso3 = calculadora(10,5, '*')
let caso4 = calculadora(10,5, '/')

console.log(caso1, caso2, caso3, caso4)