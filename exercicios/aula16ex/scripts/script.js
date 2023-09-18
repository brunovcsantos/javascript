let num = document.getElementById('inum')
let numtab = document.getElementById('adnum')
let res = document.getElementById('res')
let valAd = []

function eNum(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function eList(n , l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (eNum(num.value) == false || eList(num.value, valAd) == true ) {
        window.alert('Valor invalido ou já encontra-se na lista.')
    } else {        
        let item = document.createElement('option')
        valAd.push(Number(num.value))
        item.text = `Valor ${num.value} adicionado.`
        numtab.appendChild(item)
        res.innerHTML = ''  
    }
    num.value = ''
    num.focus()
}    

function finalizar() { 
   if (valAd.length == 0) {
    window.alert('Adicione valor antes de finalizar')
   } else {
    let totElem = valAd.length
    let maior = valAd[0]
    let menor = valAd[0]
    let soma = 0
    let media = 0
    for (let pos in valAd) {
        soma += valAd[pos]
        if (valAd[pos] > maior) {
            maior = valAd[pos] 
        }
        if (valAd[pos] <  menor) {
            menor = valAd[pos] 
        }
    }
    media = soma / totElem
    
    res.innerHTML += `<p> Ao todo temos ${totElem} numeros cadastrados.<p>`
    res.innerHTML += `<p> O maior valor informado foi ${maior}.<p>`
    res.innerHTML += `<p> O menor valor informado foi ${menor}.<p>`
    res.innerHTML += `<p> Somando todos os valores, temos ${soma}.<p>`
    res.innerHTML += `<p> A média dos vaores é ${media}.<p>`
    }
       
}