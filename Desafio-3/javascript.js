function clicar(){
    let numero = prompt('Digite um número inteiro qualquer');
    alert(`Antes de ${numero} temos o número ${numero-1}. \nDepois de ${numero}, temos o número ${parseInt(numero)+1}`);
}

function eventos(){
    document.getElementById('botao').addEventListener('click', clicar);
}

window.addEventListener('load', eventos);