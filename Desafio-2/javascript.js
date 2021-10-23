function clicar(){
    let nome = prompt('Qual o seu nome?');
    let idade = prompt(`Olá ${nome}! Quantos anos você tem?`);
    alert(`Acabei de conhecer ${nome}, que tem ${idade} anos de idade!`);
}

function evento(){
    document.getElementById('botao').addEventListener('click', clicar);
}

window.addEventListener('load', evento);