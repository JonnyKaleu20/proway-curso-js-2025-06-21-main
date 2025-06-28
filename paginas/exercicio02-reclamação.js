function reclamacao(){
    let inputNome = document.querySelector("#campo-nome");
    let nome = inputNome.value;
    console.log(nome);

    let inputEmail = document.querySelector("#campo-email");
    let email = inputEmail.value;
    console.log(email);

    let inputReclamacao = document.querySelector("#campo-reclamacao");
    let reclamacao = inputReclamacao.value;
    console.log(reclamacao);

    let textarea = document.querySelector("#campo-reclamacoes");
    textarea.value = textarea.value +"\nNome: "+nome+ "\nE-mail: "+email+ "\nReclamação: "+reclamacao+
    "\n--------------------------------";
    alert("Reclamação Enviada!");
}