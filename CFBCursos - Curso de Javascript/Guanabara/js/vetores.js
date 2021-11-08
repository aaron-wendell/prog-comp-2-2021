let num = [5, 8, 2, 9, 3]
num[5] = 6
num.push(7)
num.length
num.sort()
console.log(`O vetor tem ${num.length} posicoes`)

for(let i=0; i<num.length; i++){
    console.log(`A posicao ${i} tem o valor ${num[i]}`)
}

console.log(`OI`)

for(let i in num){
    console.log(`A posicao ${i} tem o valor ${num[i]}`)
}

let i = num.indexOf(4)

if(i == -1){
    console.log(`O valor nao foi encontrado`)
}
else{
console.log(`O valor esta na posicao ${i}`)
}