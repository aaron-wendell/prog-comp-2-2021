    let viagem = () => {
        let opcao
        let vetviagem = []
        do{
            opcao = Number(prompt(`Informe \n1. Cadastra Viagem\n2. Consulta preço médio das viagens disponíveis\n3. Consulta Viagens por tipo\n4. Consulta viagem mais barata de um determinado país\n5. Sair`))
            switch(opcao){
                case 1: cadastro(vetviagem)
                    break
                case 2: alert(`O valor medio eh`, consultapreco(vetviagem))
                    break
                case 3: let tipo = prompt(`Informe o tipo de viagem - A para aereo e T para terrestre`).toUpperCase()
                    consultatipo(vetviagem, tipo)
                    break
                case 4: let pais = prompt(`Informe o pais`)
                    consultapais(vetviagem, pais)
                    break
                case 5: alert(`O programa sera encerrado`)
                    break
                default: alert(`Opção invalida`)
            }
        }
        while(opcao!=5)
    }

    let cadastro = (vetviagem) => {

            let objeto = {
            codigo: Number(prompt(`Digite o codigo da viagem`)),
            pais: prompt(`Informe o pais de destino`),
            cidade: prompt(`Informe a cidade de destino`),
            preco: Number(prompt(`Informe o preco`)),
            tipo: prompt(`Informe tipo da viagem - A para aereo T para terrestre`).toUpperCase()
            }
        let achou = false
        for(let i=0; i<vetviagem.length; i++){
            if(vetviagem[i].codigo == objeto.codigo){
                achou = true
                alert(`Codigo da viagem ja existe!`)
            }
        }
        if(!achou){
        vetviagem.push(objeto)
        alert(`Viagem cadastrada com sucesso!`)
    }
    }

    let consultapreco = (vetviagem) => {

        let i = 0
        let pmedio = 0
        while(i<vetviagem.length){
            pmedio += vetviagem[i].preco
            }    
        return pmedio/vetviagem.length
    }

    let consultatipo = (vetviagem, tipo) => {

        for(let i=0; i<vetviagem.length; i++){
            if(vetviagem[i].tipo == tipo)
            {
                console.log(vetviagem[i])
            }
        }
    }

    let consultapais = (vetviagem, pais) =>{
        let maior = 10000000
        for(let i=0; i<vetviagem.length; i++){
            if(vetviagem[i].pais == pais){
                if(vetviagem[i].preco < maior){
                maior = vetviagem[i]
            }
            }
        }
        console.log(maior)
    }