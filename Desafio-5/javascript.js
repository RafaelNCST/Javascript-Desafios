function clicar(){
    let distancia = prompt('Digite uma distância em metros (m)');
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<h1> A distância de ${distancia} metros, corresponde a...<h1>`;
    resultado.innerHTML += `<br>${(parseFloat(distancia.replace(',','.'))/1000).toLocaleString('pt-BR')} quilômetros (Km)<br>`;
    resultado.innerHTML += `<br>${(parseFloat(distancia.replace(',','.'))/100).toLocaleString('pt-BR')} hectômetros (Hm)<br>`;
    resultado.innerHTML += `<br>${(parseFloat(distancia.replace(',','.'))/10).toLocaleString('pt-BR')} decâmetros (Dam)<br>`;
    resultado.innerHTML += `<br>${(parseFloat(distancia.replace(',','.'))*10).toLocaleString('pt-BR')} decímetros (dm)<br>`;
    resultado.innerHTML += `<br>${(parseFloat(distancia.replace(',','.'))*100).toLocaleString('pt-BR')} centímetros (cm)<br>`;
    resultado.innerHTML += `<br>${(parseFloat(distancia.replace(',','.'))*1000).toLocaleString('pt-BR')} milímetros (mm)`
}

function evento(){
    document.getElementById('botao').addEventListener('click', clicar);
}

window.addEventListener('load', evento);