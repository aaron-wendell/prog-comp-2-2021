let exercicio0 = function(){
    let vet = [] //declaracao de vetor
    for(let i=0;i<5;i++){
        vet.push(Number(prompt(`Informe o valor ${i+1}`)))
    }
    // soma 10 em todos os elementos do vetor
    for(let i=0;i<5;i++){
        vet[i] = vet[i] + 10
    }
    console.log(vet) //comando console.log() identifica o vetor e mostra os resultados
}
let exercicio1 = function(){
    let vet = []
    for(let i=0;i<6;i++){
        vet.push(Number(prompt(`Informe o numero ${i+1}`)))
    }
    let pares = []
    let impares = []
    for(let i=0;i<6;i++){
        if(vet[i] % 2==0){
            pares.push(vet[i])
        }
        else if(vet[i] % 2 != 0){
            impares.push(vet[i])
        }
    }
    console.log(`Os valores pares são ${pares} e a quantidade deles é ${pares.length}`)
    console.log(`Os valores ímpares são ${impares} e a quantidade deles é ${impares.length}`)
}

// arrow function ou funcao com seta
// ecma script 6

let exercicio3 = () => {
    let vet = []
    let vet2 = []
    for(let i=0; i<10; i++){
        vet.push(prompt(`Informe o codigo do produto`))
        vet2.push(Number(prompt(`Informe o estoque do produto de codigo ${vet[i]}`)))
    }
    let codigocliente = Number(prompt(`Informe o codigo do cliente`))
    do{
        //pede codigo para compra
        let codigo = prompt(`Informe o codigo do produto para compra`)
        let achou = false
        // verifica existencia do codigo 
        for(let i=0; i<10; i++){
            if (vet[i] == codigo){
                achou = true
                //se existe pede qtde p comprar
                let qtde = Number(prompt(`Informe a quantidade para a compra`))
                if(qtde <= vet2[i]){
                     // se tem estoque, ira atualizar
                     vet2[i] = vet2[i] - qtde
                }
                else{
                    alert(`Infelizmente, nao temos o produto em estoque`)
                }
            }
        }
        if(achou == false)
        {
            alert(`Infelizmente, nao temos o produto`)
        }
        codigocliente = Number(prompt(`Informe o codigo do cliente para a proxima compra. Digite 0 para encerrar `))
       
        codigocliente = Number(prompt(`Informe o codigo do cliente para a proxima compra. Digite 0 para encerrar`))
    }
    while(codigocliente != 0)

    console.log(`O valor do estoque eh ${vet2}`)
}

let exercicio4 = () => {
    let vet = []
    for(let i=0;i<15;i++)
    {
        vet.push(Number(prompt(`Informe o numero ${i+1}`)))
    }
    let posicao30 = []
    for(let i=0;i<15;i++){
        if(vet[i] == 30)
        posicao30.push(i) //guarda a posicao i e nao o 30 - vet[i]
    }

    console.log(`As posicoes onde aparecem o numero 30 sao ${posicao30}`)
}
let exercicio5 = () =>{
    let logica = []
    let linguagem = []

    // entrada de dados
    for(let i=0;i<15;i++){
        logica.push(Number(prompt(`Informe o numero do aluno ${i+1} matriculado na disciplina de logica`)))
    }
    for(let j=0;j<10;j++){
        linguagem.push(Number(prompt(`Informe o numero de alunos matriculados em linguagem`)))
    }

    //interseccao

    let interseccao = []
    for(let i=0; i<15; i++){
        for(let j=0;j<10;j++){
            if (logica[i] == linguagem[j]){
                    interseccao.push(logica[i])
            }
        }
    }
    console.log(`Os alunos que fazem tanto a disciplina logica como linguagem sao ${interseccao} `)
}

let prova1 = () =>{
    let qtde1=0; qtde2=0; qtde3=0; qtde4=0; qtde5=0

    do{
        opcao = Number(prompt(`Digite onde sera a entrega \n 1. AVA \n 2. Papel \n 3. Whatsapp \n 4. Email \n 5. Tanto faz `))
    
            switch(opcao){
                case 1: qtde1++
                        break
                case 2: qtde2++
                        break
                case 3: qtde3++
                        break
                case 4: qtde4++
                        break
                case 5: qtde5++
                        break
                default: alert(`Opção inválida. Tente Novamente `)
            }
        }
        while(opcao<5)
        let total = qtde1 + qtde2 + qtde3 + qtde4 + qtde5
        console.log(`Total de votos: ${total} 
        AVA ${qtde1} - Papel ${qtde2} - Whatsapp ${qtde3} - Email ${qtde4} - Tanto faz ${qtde5}`)
        console.log(`${(tf/(qtde1+qtde2+qtde3+qtde4+qtde5)*100)}`)
        let troca 
        for(let i=0; i<4; i++){
            if(qtde1>qtde2){
                troca = qtde1; qtde1 = qtde2; qtde2 = troca
            }
            if(qtde2>qtde3){
                troca = qtde2; qtde2 = qtde3; qtde3 = troca
            }
            if(qtde3>qtde4){
                troca = qtde3; qtde3 = qtde4; qtde4 = troca
            }
            if(qtde4>qtde5){
                troca = qtde4; qtde4 = qtde5; qtde5 = troca
            }
        }


    }


let prova2 = () =>{
    let nome = []
    let mediajog = []
    for(let i=0; i<3; i++){
        nome.push(prompt(`Informe o nome do jogador`))
        mediajog.push(Number(prompt(`Informe a media de pontos do jogador no ultimo campeonato do NBB`)))
    }

    let soma = 0
    for(let i=0; i<3; i++){
        soma = soma + mediajog[i]}
    console.log(`A media de pontos do time é ${soma/3}`)

    let maior = 0
    let nomemaior = ""
    for(let i=0; i<3; i++){
        if (mediajog[i] > maior)
            maior = mediajog[i]
            nomemaior = nome[i]
    }
    console.log(`O jogador que fez mais pontos eh ${nomemaior} com ${maior} pontos`)


    for(let i=0; i<3; i++){
        if(mediajog[i] % 2 == 0){
            nome.push(mediajog[i])
        }
    }
    console.log(`Os jogadores que fizeram media de pontos pares sao ${nome}`)
}


