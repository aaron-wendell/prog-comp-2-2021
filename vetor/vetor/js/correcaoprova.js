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