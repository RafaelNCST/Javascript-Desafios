let cotacao = prompt('Digite a cotação atual do dolar');
function clicar(){
    let dinheiroatual = prompt('Quanto de dinheiro você possui atualmente?');
    let resultado = document.getElementById('resultado');
    let conta = parseFloat(dinheiroatual*cotacao);
    resultado.innerHTML = `Com ${dinheiroatual} Você tem: ${conta.toLocaleString('pt-BR')} US$`;
}

function evento(){
    document.getElementById('botao').addEventListener('click', clicar);
}

window.addEventListener('load', evento);