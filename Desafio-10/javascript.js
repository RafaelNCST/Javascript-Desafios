function clicar(){
    let a = prompt('Digite o valor de a');
    let b = prompt('Digite o valor de b');
    let c = prompt('Digite o valor de c');
    let conta = (parseFloat(b)**2)-(4*parseFloat(a*c));
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<h1>Resolvendo Bhaskara<h1>`;
    resultado.innerHTML += `A equação atual é ${a}x²+${b}x+${c}=0<br>`;
    resultado.innerHTML += `<br>O cálculo realizado será: Δ = ${b}² - 4.${a}.${c}<br>`;
    resultado.innerHTML += `<br>O valor calculado foi Δ = ${conta}`;
}

function evento(){
    document.getElementById('botao').addEventListener('click', clicar);
}

window.addEventListener('load', evento);