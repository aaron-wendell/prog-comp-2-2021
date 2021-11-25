/*
1) cadastrar em um vetor 4 carros contendo marca, modelo, ano e valor, e para cada carro, informar em uma matriz a 
nota do carro para cada uma das 5 avaliações que ele recebe da empresa Guia Quatro Rodas da Editora Abril.

2) calcular e mostrar a média de notas de cada carro, informe junto a marca e modelo do carro

3) calcular e mostrar o modelo e marca do carro com menor nota em cada avaliação

4) calcular e mostrar qual avaliação teve menor média de notas */

let vetor = []
let mat = []
let opcao 

do{
    opcao = Number(prompt('Digite a opcao desejada\n1. Cadastra 4 carros\n2. Mostrar a media de notas de cada carro\n3. Carro com menor nota\n4. Carro com menor media de notas\n5. Sair'))
    switch(opcao){
        case 1: cadastracarro(vetor)
            break
        case 2: medianotas(vetor, mat)
            break
        case 3: menornota(vetor, mat)
            break
        case 4: 
            break
        case 5: alert('O programa sera encerrado')
            break
        default: alert(`Opcao invalido`)
    }
}
while(opcao!=5)

function cadastracarro(vetor){
    for(let i=0; i<4; i++){
        objeto = {                
            marca:  prompt(`Insira a marca do carro`),
            modelo: prompt(`Insira o modelo do carro`),
            ano: Number(prompt(`Insira o ano do carro`)),
            valor: Number(prompt(`Insira o valor`))
        }
        vetor.push(objeto)
    }
    for(let i=0; i<4; i++){
        mat[i] = []
        for(let j=0; j<5; j++){
            mat[i][j] = Number(prompt(`Avaliacao ${j+1} do carro ${vetor[i].marca} ${vetor[i].modelo} ${vetor[i].ano}`))
        }
    }
}

function medianotas(vetor, mat){
    for(let i=0; i<4; i++){
        let media = 0
        let soma = 0
        for(let j=0; j<5; j++){
            soma = mat[i][j]
        }
        media = soma/5
        alert(`Media de notas do carro ${vetor[i].marca} ${vetor[i].modelo} ${vetor[i].ano}: ${media}`)
    }
}

function menornota(vetor, mat){
    let menorvet = []
    let menor
    for(let j=0; j<5; j++){ //cada nota
        menor = 100
        for(let i=0; i<4;){ 
            if(mat[i][j] < menor){
                menor = mat[i][j]
                menorvet.push(vetor[i])
            }
        }
        alert(`Carro com menor na avaliação ${j+1} foi o ${menorvet} ${menorvet[i].marca} ${menorvet[i].modelo} ${menorvet[i].ano}`)  
    }
}

