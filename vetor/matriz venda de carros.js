function cadastracarro(vetor){
    objeto = {                
        marca:  prompt(`Insira a marca do carro`),
        modelo: prompt(`Insira o modelo do carro`),
        ano: Number(prompt(`Insira o ano do carro`))
    }
    vetor.push(objeto)
}

function vendecarro(vetor, matriz){
    for(let i=0; i<vetor.length; i++){
        matriz[i] = [] // inicializa a linha da matriz
        for(let j=0; j<4; j++){
            matriz[i][j] = Number(prompt(`Informe o total de vendas do ${vetor[i].marca} ${vetor[i].modelo} ${vetor[i].ano} no ${j+1} trimestre `))
        }
    } 
}

let totalcarro = (vetor, matriz) => {
    for(let i=0; i<vetor.length; i++){ //cada carro
        let soma = 0
        for(let j=0; j<4; j++){ //trimestre
            soma += matriz[i][j]
        }
        alert(`Carro ${vetor[i].marca} ${vetor[i].modelo} ${vetor[i].ano} vendeu R$${soma}`)
    }
}

let totaltrimestre = (matriz) =>{
    for(let j=0; j<4; j++){ //cada trimestre
        let soma = 0
        for(let i=0; i<vetor.length; i++){ //cada carro
            soma += matriz[i][j]
        }
        alert(`Total vendido no trimestre ${j+1}: R$${soma}`)
    }
}

let opcao
let vetor = []
let matriz = []

do{
    opcao = Number(prompt('Digite a opcao desejada\n1. Cadastra carro\n2. Vender Carros\n3. Total vendido por carro\n4. Total vendido por trimestre\n5. Carro mais vendido\n6. Trimestre mais vendido\n7. Sair'))
    switch(opcao){
        case 1: cadastracarro(vetor) 
            break
        case 2: vendecarro(vetor, matriz)
            break
        case 3: totalcarro(vetor, matriz)
            break
        case 4: totaltrimestre(matriz)
            break
        case 7: alert('O programa sera encerrado')
        if(cancel){
            opcao = 3
        }
            break
        default: alert(`Opcao invalida`)
    }
}
while(opcao!=7)