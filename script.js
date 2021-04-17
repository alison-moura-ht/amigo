function responder(mensagem) {
    if(mensagem == "Olá!") {
        let mensagens = document.getElementById("mensagens")
        mensagens.innerHTML += `
        <div class="texto-direita">
            <div class="caixa-mensagem mensagem-usuario">
                Olá!
            </div>
        </div>
        `

        mensagens.innerHTML += `
        <div>
            <div class="caixa-mensagem">
                E ai!
            </div>
        </div>
        `
    }
    if(mensagem == "Não te gosto!") {
        // alert(":'(")
    }
    if(mensagem == "Está elegante hoje!") {
        // alert("Você também ein!")
    }
}