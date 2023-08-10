function contar() {
    let numi = document.getElementById('ini')
    let numf = document.getElementById('inf')
    let nump = document.getElementById('inp')
    let res = document.getElementById('res')

    if (numi.value.length == 0 || numf.value.length == 0 || nump.value.length == 0) {
        window.alert('[ERRO!!!]')
        res.innerHTML = 'Impossível contar !'
    } else {
        let ni = Number(numi.value)
        let nf = Number(numf.value)
        let np = Number(nump.value)
        res.innerHTML = 'Contando: <br>'
        if (np <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1.')
            np = 1
        }
        if (ni < nf) {
            for (let c = ni; c <= nf; c += np) {
                res.innerHTML += `${c} \u{1F449} ` 
            }
        } else {
            for (let c = ni; c >= nf; c -= np) {
                res.innerHTML += `${c} \u{1F449} `                
            }
        }
        res.innerHTML += ' \u{1F3C1}'
    }
}