function tabuada() {
    let num = document.getElementById('inum')
    let tab = document.getElementById('itabuada')
    if (num.value.length == 0) {
        window.alert('Digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${c} x ${n} = ${c*n}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}