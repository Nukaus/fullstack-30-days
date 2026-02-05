// Dia 02

const f_num = document.getElementById('f_num')
const res = document.getElementById('res')
const botao = document.getElementById('btn_check')

botao.addEventListener('click', () => {
    let num = Number(f_num.value)
    res.innerHTML = ''
    if(num % 2 == 0){
        res.innerHTML = `O número ${num} é Par!`
    }else{
        res.innerHTML = `O número ${num} é Ímapar!`
    }
})

// Dia 03

const f_valor = document.getElementById('f_valor')
const res_tab = document.getElementById('res_tab')
const operador = document.getElementById('operador')
const botao_tab = document.getElementById('btn_checktab')

function tabuada(){
    let num = Number(f_valor.value)
    switch(operador.value){
        case '+':
            for(let c = 0; c <= 10; c++){
                let soma = num + c
                res_tab.innerHTML += `${num} + ${c} = ${soma} <br>`
           }
           break
        case '-':
            for(let c = 0; c <= 10; c++){
                let soma = num - c
                res_tab.innerHTML += `${num} - ${c} = ${soma} <br>`
           }
           break
        case '*':
            for(let c = 0; c <= 10; c++){
                let soma = num * c
                res_tab.innerHTML += `${num} * ${c} = ${soma} <br>`
           }
           break
        case '/':
            for(let c = 0; c <= 10; c++){
                let soma = num / c
                res_tab.innerHTML += `${num} / ${c} = ${soma} <br>`
           }
           break
    }
}

botao_tab.addEventListener('click', () => {
    tabuada()
})

//  Contador Regressivo

const cont = document.getElementById('cont')
const res_cont = document.getElementById('res_cont')
const botao_cont = document.getElementById('btn_cont')

botao_cont.addEventListener('click', () => {
    res_cont.innerHTML = ''
    let contador = Number(cont.value)
    for(c = 0; c < contador; contador --){
        res_cont.innerHTML += `${contador} `
    }

    cont.value = ''
    cont.focus()
})

// Dia 04

const f_n1 = document.getElementById('f_n1')
const f_n2 = document.getElementById('f_n2')
const operandos = document.getElementById('operandos')
const res_calc = document.getElementById('res_calc')
const botao_calc = document.getElementById('btn_calcular')

function calcular(n1, n2, operador){
    switch(operador){
        case '+': return n1 + n2
        case '-': return n1 - n2
        case '*': return n1 * n2
        case '/': return n1 / n2
        default:
            return 'Operação inválida'
    }
}

botao_calc.addEventListener('click', () => {
    let n1 = Number(f_n1.value)
    let n2 = Number(f_n2.value)
    let operador = operandos.value

    let dados = calcular(n1, n2, operador)
    res_calc.innerHTML =`${n1} ${operador} ${n2} = ${dados}`

    f_n1. value = ''
    f_n2. value = ''
})

// Dia 05

// Lista de Nomes

const f_nome = document.getElementById('f_nome')
const botao_add = document.getElementById('btn_add')
const res_lista = document.getElementById('res_lista')

let lista = []

function adcionar(){
    let nome = f_nome.value
    lista.push(nome)
}

function mostrarTela(){
    res_lista.innerHTML = ''
    let nomes = document.createElement('ul')
    
    for(let item of lista){
        nomes.innerHTML += `<li>${item}</li>`
    }

    res_lista.appendChild(nomes)

    f_nome.value = ''
    f_nome.focus()
}

botao_add.addEventListener('click', () => {
    adcionar()
    mostrarTela()
})

//  Somar valores de um array

const f_number = document.getElementById('f_number')
const botao_number = document.getElementById('btn_addnum')
const btn_soma = document.getElementById('btn_soma')
const res_number = document.getElementById('res_number')

let numeros = []

function addnum(){
    res_number.innerHTML = ''
    let number = Number(f_number.value)
    numeros.push(number)

    return
}

function somarValores(){
    let somaTotal = 0
    for(let num in numeros){
        somaTotal += numeros[num]
    }

    return somaTotal
}

function mostrarLista(){
    addnum()
    somarValores()

    for(let num of numeros){
        res_number.innerHTML += `${num} `
    }

    f_number.value = ''
    f_number.focus()

}

function mostrarSoma(){
    let soma = somarValores()

    if(numeros.length < 2 ){
        res_number.innerHTML = 'Você precisa addicionar mais de 1 valor para realizar a soma!'
    }else{
        res_number.innerHTML += `<br>A soma total dos valores é igual a: ${soma}`
    }
}

botao_number.addEventListener('click', () => {
    mostrarLista()

})

btn_soma.addEventListener('click', () => {
    mostrarSoma()
})

// Dia 12

const f_item = document.querySelector('#f_item')
const botao_item = document.querySelector('#btn_additem')
const botao_limpar = document.querySelector('#btn_limpar')
const res_task = document.querySelector('#res_task')

let listaTarefas = []

function mostrarTarefas(){
    res_task.innerHTML = ''

    let lista_task = document.createElement('ul')
    for(let tarefa of listaTarefas){
        lista_task.innerHTML += `<li>${tarefa}</li>`
    }

    res_task.appendChild(lista_task)
}

if(localStorage.getItem('tarefas2')){
    listaTarefas = JSON.parse(localStorage.getItem('tarefas2'))
    mostrarTarefas()
}

function addLista(){
    let item = f_item.value

    if(item.trim() !== ''){
        listaTarefas.push(item)

        localStorage.setItem('tarefas2', JSON.stringify(listaTarefas))
        f_item.value = ''
        f_item.focus()
    }else{
        alert('Você precisa adcionar um item.')
    }
}

botao_item.addEventListener('click', () => {
    addLista()
    mostrarTarefas()
})

botao_limpar.addEventListener('click', () => {
    listaTarefas = []
    res_task.innerHTML = ''
    localStorage.removeItem('tarefas2')
})


    

