function clicar(){
    let precoant = prompt('Qual é o preço anterior do produto?');
    let precopost = prompt('Qual é o preço atual do produto?');
    let resultado = document.getElementById('resultado');   

    resultado.innerHTML = `<h1>Analisando os valores informados<h1>`;
    resultado.innerHTML += `O produto custava R$ ${parseFloat(precoant).toLocaleString('pt-BR')} e agora custa R$ ${parseFloat(precopost).toLocaleString('pt-BR')}<br>`;
    
    if(parseFloat(precopost) === parseFloat(precoant)){
        resultado.innerHTML += `<br>Não houve mudanças dos preços`;
    }
    else{
        if(parseFloat(precopost) < parseFloat(precoant)){
            resultado.innerHTML += `<br>Hoje o produto está mais barato.<br>`;
            resultado.innerHTML += `<br>O preço caiu R$ ${parseFloat(precoant-precopost).toLocaleString('pt-BR')} em relação ao preço anterior.<br>`;
            resultado.innerHTML += `<br>Uma variação de ${((parseFloat(precoant/precopost)-1)*100).toFixed(2)}% para baixo<br>`;
        }
    }
        if(parseFloat(precopost) > parseFloat(precoant)){
        resultado.innerHTML += `<br>Hoje o produto está mais caro.<br>`;
        resultado.innerHTML += `<br>O preço subiu R$ ${parseFloat(precopost-precoant).toLocaleString('pt-BR')} em relação ao preço anterior.<br>`;
        resultado.innerHTML += `<br>Uma variação de ${((parseFloat(precopost/precoant)-1)*100).toFixed(2)}% para cima<br>`;
    }
    
}

function evento(){
    document.getElementById('botao').addEventListener('click', clicar);
}

window.addEventListener('load', evento);