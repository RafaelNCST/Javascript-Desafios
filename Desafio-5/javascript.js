function clicar(){
    let distancia = prompt('Digite uma distância em metros (m)')
    let msg = document.getElementById('msg');
    let resultado = document.getElementById('texto')
    msg.innerHTML = 'Clique no botão acima para adicionar um novo valor'
    resultado.innerHTML = `A distância de ${distancia} metros, corresponde a...`
    document.getElementById('Km').innerHTML = `${(parseFloat(distancia.replace(',','.'))/1000).toLocaleString('pt-BR')} quilômetros (Km)\n`
    document.getElementById('Hm').innerHTML = `${(parseFloat(distancia.replace(',','.'))/100).toLocaleString('pt-BR')} hectômetros (Hm)\n`
    document.getElementById('Dam').innerHTML = `${(parseFloat(distancia.replace(',','.'))/10).toLocaleString('pt-BR')} decâmetros (Dam)\n`
    document.getElementById('dm').innerHTML = `${(parseFloat(distancia.replace(',','.'))*10).toLocaleString('pt-BR')} decímetros (dm)\n`
    document.getElementById('cm').innerHTML = `${(parseFloat(distancia.replace(',','.'))*100).toLocaleString('pt-BR')} centímetros (cm)\n`
    document.getElementById('mm').innerHTML = `${(parseFloat(distancia.replace(',','.'))*1000).toLocaleString('pt-BR')} milímetros (mm)`
}

function evento(){
    document.getElementById('botao').addEventListener('click', clicar)
}

window.addEventListener('load', evento)