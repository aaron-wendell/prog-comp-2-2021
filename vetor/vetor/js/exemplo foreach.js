let vetor  = [1, 2, 3, 4, 5]

vetor.forEach((elemento) => {
    console.log(`Valor do elemento `, elemento)
})

let vetor2 = [10, 20, 30, 40, 50]
vetor2.forEach((elemento, posicao) =>{
    console.log(`Valor do elemento ${elemento} na posicao ${posicao} `)
})

let vetor3 = [10, 20, 30, 40, 50]
vetor3.forEach((elemento, posicao) =>{
    if(posicao % 2 == 0){ //mostrar elementos na posicao par
    console.log(`Valor do elemento ${elemento} na posicao ${posicao} `)
}})

//funcao map
//altera conteudo do vetor original

let vetor4 = [9, 8, 7, 6, 4]
vetor4 = vetor4.map((elemento) =>{ //necessario o vetor receber a funcao do .map
    return Math.pow(elemento, 2) //eleva elemento ao quadrado
})
console.log(vetor4)

let filmes = [
    {
        nome: "Vingadores",
        ano: 2018,
        classificacao: "suspense"
    },
    {
        nome: "Xmen",
        ano: 2020, 
        classificacao: "ficcao"
    },
    {
        nome: "Batman",
        ano: 2010, 
        classificacao: "aventura"
    }
]
filmes.forEach((elemento) =>{
    console.log(`Nome do filme: ${elemento.nome}\nAno do filme: ${elemento.ano}\nClassificacao: ${elemento.classificacao}`)
})

// funcao reduce

let vetor5 = [5, 9, 12, 15, 18]
/* vetor5(5,9) = 14
    vetor5(14,12) = 26
    vetor5(26,15) = 41
    vetor5(41,18) = 59
*/

let soma = vetor5.reduce((total, elemento) =>{
    return total + elemento
})

let vetor6 = [6,7,9,3,10]
let pares = vetor6.filter((elemento) =>{
    return elemento % 2 == 0
})
console.log(pares)

let carros = ["Bmw", "Volvo", "Fiat"]
for(let elemento of carros){
    console.log(`${elemento}`)
}