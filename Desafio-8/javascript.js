function clicar(){
    let produto = prompt('Qual o produto que você está comprando?');
    let preco = prompt(`Qual é o preço de ${produto}?`);
    let resultado = document.getElementById('resultado');
    let desconto = (parseFloat(preco)*10)/100;
    resultado.innerHTML = `<h1>Calculando desconto de 10% para ${produto}<h1>`;
    resultado.innerHTML += `O preço original era R$ ${preco}<br>`;
    resultado.innerHTML += `<br>Você acabar de ganhar R$ ${desconto} de desconto (-10%)<br>`
    resultado.innerHTML += `<br>No fim, você vai pagar R$ ${preco-desconto} no produto ${produto}`

}

function evento(){
    document.getElementById('botao').addEventListener('click', clicar);
}

window.addEventListener('load', evento);