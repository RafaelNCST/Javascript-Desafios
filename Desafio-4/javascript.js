function clicar(){
    let produto = prompt('Qual o nome do produto comprado?');
    let preco = prompt('Qual o preço desse produto?');
    let pagamento = prompt('Quanto você pagou?');
    if(pagamento<preco){
        alert('O pagamento não é suficiente');
    }else{
        alert(`Você comprou ${produto} que custou R$ ${preco},00. \nDeu R$ ${pagamento},00 em dinheiro e vai receber R$ ${pagamento-preco},00 de troco. \nVolte Sempre!`);
    }
}

function evento(){
    document.getElementById('botao').addEventListener('click', clicar);
}

window.addEventListener('load', evento);