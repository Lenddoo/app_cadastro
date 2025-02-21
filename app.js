document.getElementById("nome").addEventListener("blur", function(){
    fnAdicionarMensagemDeErro("mensagem-erro-nome", "limpar")

    let nomeValido = fnValidarMinimoDeCaracteres(3, this.value);
    if(nomeValido == false){
        fnAdicionarMensagemDeErro("mensagem-erro-nome", "<i class='bi bi-exclamation-circle-fill'></i> Minimo de 3 caracteres")
    }

    let nomeobrigatorio = fnValidarCampoObrigatorio(this.value)
    if(nomeobrigatorio == false){
        fnAdicionarMensagemDeErro("mensagem-erro-nome", "<i class='bi bi-exclamation-circle-fill'></i> Campo obrigatorio")
    }
})

document.getElementById("email").addEventListener("blur", function(){

    let emailValido = fnValidarMinimoDeCaracteres(5, this.value);
})

document.getElementById("senha").addEventListener("blur", function(){

    let senhaValida = fnValidarMinimoDeCaracteres(8, this.value);
})

document.getElementById("confSenha").addEventListener("blur", function(){
 
})

document.getElementById("cidade").addEventListener("blur", function(){

    let cidadeValida = fnValidarMinimoDeCaracteres(8, this.value);    
})

document.getElementById("estado").addEventListener("blur", function(){

    let estadoValida = fnValidarMinimoDeCaracteres(8, this.value);   
})

