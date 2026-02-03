const f_text = document.getElementById('f_text')
const botao = document.getElementById('btn_add')
const botaoApagar = document.getElementById('btn_apagar')
const res = document.getElementById('res')

let tarefas = []

function mostrarTarefas(){
    res.innerHTML = ''
    let lista = document.createElement('ul')

    for(let tarefa of tarefas){
        lista.innerHTML += `<li>${tarefa}</li>`
    }
    res.appendChild(lista)
}

if(localStorage.getItem('tarefas')){
    tarefas =JSON.parse(localStorage.getItem('tarefas'))
    mostrarTarefas()
}

function adicionar(){
    let texto = f_text.value
    if(texto.trim() !== ''){
        tarefas.push(texto)

        localStorage.setItem('tarefas', JSON.stringify(tarefas))
        f_text.value = ''
        f_text.focus()
    }else{
        alert('Digite algo antes de adicionar')
    }
    
}

botao.addEventListener('click', () =>{
    adicionar()
    mostrarTarefas()
})

botaoApagar.addEventListener('click', () =>{
    localStorage.clear()
    tarefas = []
    res.innerHTML = ''
})
 


