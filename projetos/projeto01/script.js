const meta = document.getElementById('meta')
const prazo = document.getElementById('prazo')
const botao = document.getElementById('btn')
const res = document.getElementById('resultado-display')

botao.addEventListener('click', (e) => {
    e.preventDefault()
    
    let valorMeta = Number(meta.value)
    let meses = Number (prazo.value)
    
    if(valorMeta <= 0 || meses <= 0){
        alert('Por favor, insira valores válidos acima de zero.')
        return;
    }

    let resultadoMensal = valorMeta / meses

    res.innerHTML = `
                    <h3>Plano Gerado! 🚀</h3>
                    <p>Para alcançar R$ ${valorMeta.toFixed(2)}, você precisa guardar:</p>
                    <p class="destaque">R$ ${resultadoMensal.toFixed(2)} / mês</p>
                    `
    res.style.display = ' block'
    
})