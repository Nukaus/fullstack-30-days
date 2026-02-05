function atualizarProgresso(diaAtual) {
    const totalDias = 30;
    const porcentagem = (diaAtual / totalDias) * 100;

    // Selecionar os elementos
    const preenchimento = document.getElementById('progress-fill');
    const textoPorcentagem = document.getElementById('progress-percentage');
    const textoDescricao = document.getElementById('progress-desc');

    // Aplicar os valores
    preenchimento.style.width = `${porcentagem}%`;
    textoPorcentagem.innerText = `${porcentagem.toFixed(0)}%`;
    textoDescricao.innerText = `Dia ${diaAtual} de ${totalDias}`;
}

// Chame a função passando o dia em que você está hoje
atualizarProgresso(14); // Exemplo: Se você está no dia 12