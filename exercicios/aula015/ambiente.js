let num = [5, 8, 2];
console.log(num)
num.push(1)
console.log(num)
num.sort()
console.log(num)
console.log(num.length)
let pos = num.indexOf(4)
if (pos == -1) {
    console.log('O valor não foi encontrado.')
} else {
    console.log(`O vetor esta na posição ${pos}.`)
}