//limpar_campos => snake case
//limparCampos => camel case
//LimparCampos => pescal case
//limpar-campos => kebab case

//Padrão de nomeclatura para uma funççao em JS é camel case
function limparCampos() {

    let inputNome = document.querySelector("#campo-nome");  //Padrão de nomeclatura da variavel em JS é camel case
    inputNome.value = ""; //Definir o valor do campo como uma string vazia, ou seja, limpar o campo

    let inputSobrenome = document.querySelector("#campo-sobrenome");
    inputSobrenome.value = "";

    let inputIdade = document.querySelector("#campo-idade");
    inputIdade.value = "";

    let inputClasse = document.querySelector("#campo-classe");
    inputClasse.value = "";

    let inputModalidade = document.querySelector("input[name='modalidade']:checked");  //Necessário validar que p usúario escolheu alguma modalidade, caso contrário a limpeza não funcionará para os demais campos.
    if (inputModalidade !== null) {
        inputModalidade.checked = false;
    }

    let inputEstrangeiro = document.querySelector("#campo-estrangeiro");
    inputEstrangeiro.checked = false;
}
function calcularMedia() {
    let inputNota1 = document.querySelector("#campo-nota1");
    let inputNota2 = document.querySelector("#campo-nota2");
    let inputNota3 = document.querySelector("#campo-nota3");

    let nota1 = parseFloat(inputNota1.value);
    let nota2 = parseFloat(inputNota2.value);
    let nota3 = parseFloat(inputNota3.value);

    let media = (nota1 + nota2 + nota3) / 3;
    return media;
}


function preencherCampoMedia() {
    let spanMedia = document.querySelector("#media-valor");

    let media = calcularMedia();


    if (isNaN(media) === true) {
        //Return sem nada depois n faz o método ser com retorno, simplesmente encerra a execução deste método
        return;
    }


    let mediaFormatada = media.toLocaleString('pt-BR', {
        style: 'decimal', minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
    spanMedia.innerHTML = mediaFormatada

}
function cadastrar() {
    let inputNome = document.querySelector("#campo-nome");
    let nome = inputNome.value;
    console.log(nome);

    let inputSobrenome = document.querySelector("#campo-sobrenome");
    let sobrenome = inputSobrenome.value;
    console.log(sobrenome);

    let inputIdade = document.querySelector("#campo-idade");
    let idade = inputIdade.value;
    console.log(idade);

    let inputClasse = document.querySelector("#campo-classe");
    let classe = inputClasse.value;
    console.log(classe);

    let campoModalidade = document.querySelector("input[name='modalidade']:checked");
    if (campoModalidade === null) {
        alert("Escolha uma Modalidade")
        return;
    }

    let modalidade = campoModalidade.value;

    let campoestrangeiro = document.querySelector("#campo-estrangeiro");
    let estrangeiro = campoestrangeiro.checked;

    let media = calcularMedia();
    let statusMedia = "";
    if (media >= 6.00) {
        statusMedia = "Aprovado";
    } else {
        statusMedia = "Reprovado";
    }


    let textarea = document.querySelector("#campo-alunos");
    textarea.value = textarea.value + "\nNome: " + nome +
        "\nSobrenome: " + sobrenome +
        "\nIdade: " + idade +
        "\nStatus: "+statusMedia+
        "\n Média: "+media+
        "\nClasse: " + classe +
        "\nModalidade: " + modalidade +
        "\nEstrangeiro: " + estrangeiro +
        "\n-----------------------------";

    alert("Cadastro realizado com Sucesso!");
}