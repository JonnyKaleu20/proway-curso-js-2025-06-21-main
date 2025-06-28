function realizarsoma() {    /* Serve para executar um trecho de codigo que tem o o objetive de resolver algum problema*/

  let inputNumero1 = document.querySelector("#campo-numero1"); /*Pegar o campo (input) que contém o id = "campo-numero1"*/ 
  let numero1 = parseInt(inputNumero1.value); /*Pegar o valor (numero digitado) do campo numero1*/ 

  let inputNumero2 = document.querySelector("#campo-numero2");
  let numero2 = parseInt(inputNumero2.value);

   alert("Soma: " +(numero1 + numero2))
}



function apresentarVariaveis(){
let nome = "Pedro";
let sobrenome = "Carlos";
let idade = 20;
let salario = 1800.20;
let empregado = false; // falso = false, verdadeiro = true 

// Tipos de dados:
// String = armazenar texto
//Int = inteiro
//Float = numeros reais
//Boolean = tipo lógico (vdd, falso)


//Adicionar 15 reais de salario
let aumento = 15.00
salario = salario + aumento
alert("Nome: " +nome +"Salario: R$" +salario)  
}

function apresentarIdade(){
    let dataNascimento = new Date(1996, 7 , 15);
    let anoNascimento = dataNascimento.getFullYear();

    let dataHoraAtual= new Date();
    let anoAtual = dataHoraAtual.getFullYear();// 2025
    let idade = anoAtual - anoNascimento
    console.log("Idade: "+idade);

    if(idade <= 17){
        console.log("Menor de Idade")
    }else{
        console.log("Adulto")
    }
}