function carregar() {
    var mensagem = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var hrAtual = new Date()
    var hora = hrAtual.getHours()
    var min = `${hrAtual.getMinutes() < 10 ? '0' : ''}${hrAtual.getMinutes()}`

    mensagem.innerHTML = `Agora são <strong>${hora}:${min}</strong> horas.`
    if (hora >= 0 && hora < 6) {
        // Boa madrugada
        img.src = 'imagens/fotomadrugada.png'
        document.body.style.background = '#080105'
    } else if (hora >= 6 && hora < 12) {
        //Bom dia
        img.src = 'imagens/fotomanha.png'
        document.body.style.background = '#9fbbee'
    } else if (hora >= 12 && hora <= 18) {
        //Boa tarde
        img.src = 'imagens/fototarde.png'
        document.body.style.background = '#d88465'
    } else {
        //Boa noite
        img.src = 'imagens/fotonoite.png'
        document.body.style.background = '#242425'
    }
}






