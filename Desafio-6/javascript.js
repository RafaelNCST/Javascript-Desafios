function clicar(){
    let temp = prompt('Digite uma temperatura em °C (Celsius)');
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<h1>A temperatura de ${temp}°C, corresponde a...</h1>`;
    resultado.innerHTML += `${(parseFloat(temp.replace(',','.'))+273.15).toLocaleString('pt-BR')}°K (Kelvin)<br>`;
    resultado.innerHTML += `<br>${((parseFloat(temp.replace(',','.'))*1.8)+32).toLocaleString('pt-BR')}°F (Fahrenheit)`;
}

function evento(){
    document.getElementById('botao').addEventListener('click',clicar);
}

window.addEventListener('load', evento);