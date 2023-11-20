let num = document.getElementById('inum')
let numtab = document.getElementById('adnum')
let res = document.getElementById('res')
let valAd = []

// Função para verificar se o número está dentro da faixa de 1 a 100
function eNum(n) {
   
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true; // O número está dentro do intervalo
    } else {
        return false; // o número não está dentro do intervalo
    }
}

// Função para verificar se o número está na lista
function eList(n , l) {
    if (l.indexOf(Number(n)) != -1) {
        return true     // o numero esta na lista
    } else {
        return false    // o numero não esta na lista
    }
}

// Função para adicionar valores na lista
function adicionar() {
    // Verifique se o número está dentro da faixa de 1 a 100 e encontra-se na lista
    if (eNum(num.value) == false || eList(num.value, valAd) == true ) {
        window.alert('Valor invalido ou já encontra-se na lista.')
    } else {        
        // Cria um elemento option
        let item = document.createElement('option')
        // Adiciona o valor na lista
        valAd.push(Number(num.value))
        // Adiciona o texto no elemento option
        item.text = `Valor ${num.value} adicionado.`
        // Adiciona o elemento option na lista
        numtab.appendChild(item)
        // Limpa a resposta
        res.innerHTML = ''  
    }
    // Limpa o input
    num.value = ''
    // Coloca o foco no input
    num.focus()
}    

// Função que trata os valores adicionados 
function finalizar() { 
   // Verifica se a lista está vazia
   if (valAd.length == 0) {
    window.alert('Adicione valor antes de finalizar')
   } else {
    // Contador
    let totElem = valAd.length
    // Maior valor
    let maior = valAd[0]
    // Menor valor
    let menor = valAd[0]
    // Soma
    let soma = 0
    // Média
    let media = 0
    // Percorre a lista
    for (let pos in valAd) {
        // Soma os valores
        soma += valAd[pos]
        // Verifica o maior valor
        if (valAd[pos] > maior) {
            maior = valAd[pos] 
        }
        // Verifica o menor valor
        if (valAd[pos] <  menor) {
            menor = valAd[pos] 
        }
    }
    // Calcula a média
    media = soma / totElem
    
    // Adiciona os resultados na resposta
    res.innerHTML += `<p> Ao todo temos ${totElem} numeros cadastrados.<p>`
    res.innerHTML += `<p> O maior valor informado foi ${maior}.<p>`
    res.innerHTML += `<p> O menor valor informado foi ${menor}.<p>`
    res.innerHTML += `<p> Somando todos os valores, temos ${soma}.<p>`
    res.innerHTML += `<p> A média dos vaores é ${media}.<p>`
    }
       
}