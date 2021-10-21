function clicar(){
    let distancia = prompt('Digite uma distância em metros (m)')
    let resultado = document.getElementById('resultado').style.fontFamily = 'verdana';
    resultado.innerHTML = `A distância de ${distancia} metros, corresponde a...`
    document.getElementById('Km').innerHTML = `${distancia/1000} quilômetros (Km)\n`
    document.getElementById('Hm').innerHTML = `${distancia/100} hectômetros (Hm)\n`
    document.getElementById('Dam').innerHTML = `${distancia/10} decâmetros (Dam)\n`
    document.getElementById('dm').innerHTML = `${distancia*10} decímetros (dm)\n`
    document.getElementById('cm').innerHTML = `${distancia*100} centímetros (cm)\n`
    document.getElementById('mm').innerHTML = `${distancia*1000} milímetros (mm)`
}

function evento(){
    document.getElementById('botao').addEventListener('click', clicar)
}

window.addEventListener('load', evento)