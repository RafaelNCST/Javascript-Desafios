function clicar(){
    let nome = prompt('Qual o nome do aluno?');
    let nota1 = prompt(`Primeira nota de ${nome}:`);
    let nota2 = prompt(`Segunda nota de ${nome}:`);
    let media = (parseFloat(nota1) + parseFloat(nota2))/2;
    let resultado = document.getElementById('resultado');

    resultado.innerHTML = `<h1>Analisando a situação de ${nome}<h1>`;
    resultado.innerHTML += `Com as notas de ${parseFloat(nota1).toLocaleString('pt-BR')} e ${parseFloat(nota2).toLocaleString('pt-BR')} a média será: ${media.toLocaleString('pt-BR')}<br>`;
    
    if(media > 6){
        resultado.innerHTML += `<br>Com média acima de 6,0 o aluno ${nome} está <mark id="mark1">aprovado(a)</mark><br>`
    }else{
        if(media < 6 && media > 3){
            resultado.innerHTML += `<br>Com média entre 6,0 e 3,0 o aluno ${nome} está de <mark id="mark2">recuperação</mark><br>`
        }
        if(media < 3){
            resultado.innerHTML += `<br>Com média abaixo de 3,0 o aluno ${nome} está <mark id="mark3">reprovado(a)</mark><br>`
        }
    }
}

function evento(){
    document.getElementById('botao').addEventListener('click', clicar);
}

window.addEventListener('load', evento)