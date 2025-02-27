document.getElementById("nome").addEventListener("blur", function(){
    fnAdicionarMensagemDeErro("mensagem-erro-nome", "limpar")

    let nomeValido = fnValidarMinimoDeCaracteres(3, this.value);
    if(nomeValido == false){
        fnAdicionarMensagemDeErro("mensagem-erro-nome", "<i class='bi bi-exclamation-circle-fill'></i> Minimo de 3 caracteres")
        n.classList.add("erro-linha")
    }

    let nomeobrigatorio = fnValidarCampoObrigatorio(this.value)
    if(nomeobrigatorio == false){
        fnAdicionarMensagemDeErro("mensagem-erro-nome", "<i class='bi bi-exclamation-circle-fill'></i> Campo obrigatorio")
    }
})

document.getElementById("email").addEventListener("blur", function(){
    fnAdicionarMensagemDeErro("mensagem-erro-email", "limpar")
    
    let emailValido = fnValidarMinimoDeCaracteres(5, this.value);
    if(emailValido == false){
        fnAdicionarMensagemDeErro("mensagem-erro-email", "<i class='bi bi-exclamation-circle-fill'></i> Minimo de 5 caracteres")
    }

    let emailobrigatorio = fnValidarCampoObrigatorio(this.value)
    if(emailobrigatorio == false){
        fnAdicionarMensagemDeErro("mensagem-erro-email", "<i class='bi bi-exclamation-circle-fill'></i> Campo obrigatorio")
    }

    let email = fnValidarEmail(this.value)
    if (email == false){
        fnAdicionarMensagemDeErro("mensagem-erro-email", "<i class='bi bi-exclamation-circle-fill'></i> Esse email não e valido")
    }
})

document.getElementById("senha").addEventListener("blur", function(){
    fnAdicionarMensagemDeErro("mensagem-erro-senha", "limpar")

    let senhaValida = fnValidarMinimoDeCaracteres(8, this.value);
        if(senhaValida == false){
            fnAdicionarMensagemDeErro("mensagem-erro-senha", "<i class='bi bi-exclamation-circle-fill'></i> Minimo de 8 caracteres")
        }

    let senhaobrigatorio = fnValidarCampoObrigatorio(this.value)
        if(senhaobrigatorio == false){
            fnAdicionarMensagemDeErro("mensagem-erro-senha", "<i class='bi bi-exclamation-circle-fill'></i> Campo obrigatorio")
        }
    
    let senhaMaiuscula = fnValidarSenhaMaiuscula(this.value)
        if (senhaMaiuscula == false){
            fnAdicionarMensagemDeErro("mensagem-erro-senha", "<i class='bi bi-exclamation-circle-fill'></i> Deve conter uma letra maiscula")
        }

    let senhaEspecial = fnValidarSenhaCaracterEspecial(this.value)
        if (senhaEspecial == false){
            fnAdicionarMensagemDeErro("mensagem-erro-senha", "<i class='bi bi-exclamation-circle-fill'></i> Deve conter um caracter especial ")
        }
})

document.getElementById("confSenha").addEventListener("blur", function(){
    fnAdicionarMensagemDeErro("mensagem-erro-confSenha", "limpar")

    let confSenhaobrigatorio = fnValidarCampoObrigatorio(this.value)
    if(confSenhaobrigatorio == false){
        fnAdicionarMensagemDeErro("mensagem-erro-confSenha", "<i class='bi bi-exclamation-circle-fill'></i> Campo obrigatorio")
    }

    let senha = document.getElementById("senha").value
    let confSenha = fnValidarSenhaIgual(this.value, senha)
    if (confSenha == false){
        fnAdicionarMensagemDeErro("mensagem-erro-confSenha", "<i class='bi bi-exclamation-circle-fill'></i> Escreva a mesma senha")
    }
})

document.getElementById("cidade").addEventListener("blur", function(){
    fnAdicionarMensagemDeErro("mensagem-erro-cidade", "limpar")

    let cidadeValida = fnValidarMinimoDeCaracteres(5, this.value);
    if(cidadeValida == false){
        fnAdicionarMensagemDeErro("mensagem-erro-cidade", "<i class='bi bi-exclamation-circle-fill'></i> Minimo de 5 caracteres")
    }

    let cidadeobrigatorio = fnValidarCampoObrigatorio(this.value)
    if(cidadeobrigatorio == false){
        fnAdicionarMensagemDeErro("mensagem-erro-cidade", "<i class='bi bi-exclamation-circle-fill'></i> Campo obrigatorio")
    }    
})

document.getElementById("estado").addEventListener("blur", function(){
    fnAdicionarMensagemDeErro("mensagem-erro-estado", "limpar")

    let estadoValida = fnValidarMinimoDeCaracteres(2, this.value);
    if(estadoValida == false){
        fnAdicionarMensagemDeErro("mensagem-erro-estado", "<i class='bi bi-exclamation-circle-fill'></i> Minimo de 2 caracteres")
    }

    let estadoobrigatorio = fnValidarCampoObrigatorio(this.value)
    if(estadoobrigatorio == false){
        fnAdicionarMensagemDeErro("mensagem-erro-estado", "<i class='bi bi-exclamation-circle-fill'></i> Campo obrigatorio")
    }   
})

