function alert1(){
    alert('Você clicou no 1° Botão');
}

function alert2(){
    alert('Você clicou no 1° Botão');
}

function alert3(){
    alert('Você clicou no 1° Botão');
}

function clicar(){
    document.getElementById('botao1').addEventListener('click', alert1);
    document.getElementById('botao2').addEventListener('click', alert2);
    document.getElementById('botao3').addEventListener('click', alert3);
}

window.addEventListener('load', clicar);
