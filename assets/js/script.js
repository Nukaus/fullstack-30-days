const btnNome = window.document.getElementById('btnNome')
const saida = window.document.getElementById('saida')
let ligado = false

btnNome.addEventListener("click", () =>{
    if(ligado == false){
        ligado = true
        saida.textContent = 'Estado: ON'
        btnNome.textContent = 'Ligado'
    }else{
        ligado = false
        saida.textContent = 'Estado: OFF'
        btnNome.textContent = 'Desligado'
    }
})