function cadastrar(){
let inputProduto = document.querySelector("#campo-produto");
let produto = inputProduto.value;
console.log(produto);

let inputQuantidade = document.querySelector("#campo-quantidade");
let quantidade = inputQuantidade.value;
console.log(quantidade);

let inputPreco = document.querySelector("#campo-preco");
let preco = inputPreco.value;
console.log(preco);

let textarea = document.querySelector("#campo-produtos");
textarea.value = textarea.value + "\nProduto: "+produto +
"\nQuantidade: "+quantidade+ "\nPreço: "+preco+
"\n Preço Total: "+total+
"\n-----------------------------";

alert("Cadastro Realizado!");
}

function calcularTotalProduto(){
    let inputQuantidade = document.querySelector("#campo-quantidade");
let inputPreco = document.querySelector("#campo-preco");

    let quantidade = parseFloat(inputQuantidade.value);
    let preco = parseFloat(inputPreco.value);

let total = quantidade * preco;
return total;
}

function preencherCampoTotal(){
    let spanTotal = document.querySelector("#total-valor");

    let total = calcularTotalProduto();


    if (isNaN(total) === true) {
       
        return;
    }

    
    let totalFormatado = total.toLocaleString('pt-BR', {
        style: 'decimal', minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
    spanMedia.innerHTML = totalFormatado
}


function limparCampos(){
    let inputPreco = document.querySelector("#campo-preco");
    inputPreco.value ="";

    let inputQuantidade = document.querySelector("#campo-quantidade");
    inputQuantidade.value="";

    let inputProduto = document.querySelector("#campo-produto");
    inputProduto.value="";
}