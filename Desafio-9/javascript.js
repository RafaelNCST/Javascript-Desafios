function clicar(){
    let nome = prompt('Qual é o nome do funcionário?');
    let salario = prompt(`Qual é o salário atual de ${nome}?`);
    let porcentagem = prompt(`O salário de ${nome} vai ser reajustado em qual porcentagem?`);
    let resultado = document.getElementById('resultado');
    let reajuste = (parseFloat(salario*porcentagem))/100

    resultado.innerHTML = `${nome} recebeu um aumento salarial!<br>`;
    resultado.innerHTML += `<br>O salário atual era R$ ${parseFloat(salario).toLocaleString('pt-BR')}<br>`;
    resultado.innerHTML += `<br>Com um aumento de ${porcentagem}%, o salário vai aumentar R$ ${parseFloat(parseFloat(reajuste).toFixed(2)).toLocaleString('pt-BR')} no próximo mês<br>`;
    resultado.innerHTML += `<br>E a partir daí, Pedro Paulo vai passar a ganhar R$ ${parseFloat((parseFloat(salario)+reajuste).toFixed(2)).toLocaleString('pt-BR')}.`;  //Meio feio, possível mudar!

}

function evento(){
    document.getElementById('botao').addEventListener('click', clicar);
}

window.addEventListener('load', evento);