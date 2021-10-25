function clicar(){
    let ano = prompt('Qual é o ano que você quer verificar?');
    let anofloat = parseFloat(ano);
    let resultado = document.getElementById('resultado');   

    resultado.innerHTML = `<h1>Analisando o ano de ${ano}<h1>`;
    
    if(anofloat % 4 === 0 && anofloat % 100 != 0){
        resultado.innerHTML += `O ano de ${ano} <mark id="marca1">É BISSEXTO</mark><span id="span1"> &#9989;</span>`;
    }else{
        if(anofloat % 400 === 0){
            resultado.innerHTML += `O ano de ${ano} <mark id="marca1">É BISSEXTO</stronger></mark><span id="span1"> &#9989;</span>`;
        }else{
            resultado.innerHTML += `O ano de ${ano} <mark id="marca2">NÃO É BISSEXTO</mark><span id="span2"> &#10060;</span>`;
        }
    }  
    
}

function evento(){
    document.getElementById('botao').addEventListener('click', clicar);
}

window.addEventListener('load', evento);