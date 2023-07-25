function clicou() {
    var data = new Date()
    var ano = data.getFullYear()
    var anoNas = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')

    if (anoNas.value.length == 0 || Number(anoNas.value) > ano) {
        window.alert('[ERRO!] Verifique os dados e tente novamente!')
    } else {
        var sex = window.document.getElementsByName('genero')
        var idade = ano - Number(anoNas.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (sex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10 ) {
                //criança
                img.setAttribute('src','imagens/homem-criança.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src','imagens/homem-jovem.png')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src','imagens/homem-adulto.png')
            } else {
                //idoso
                img.setAttribute('src','imagens/homem-idoso.png')
            }    
        } else if (sex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10 ) {
                //criança
                img.setAttribute('src','imagens/mulher-criança.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src','imagens/mulher-jovem.png')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src','imagens/mulher-adulta.png')
            } else {
                //idoso
                img.setAttribute('src','imagens/mulher-idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos um ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

    
}






