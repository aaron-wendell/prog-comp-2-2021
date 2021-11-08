let sistemavenda = () =>{
    // vetor de meses
    let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
    let matriz = []

    let opcao
    do{
        opcao = Number(prompt(`1. Cadastrar venda\n2. Total vendido em cada mes\n3. Total vendido em cada semana\n4. Total vendido ano\n5. Sair`))
        switch(opcao){
            case 1: cadastravenda(matriz, meses)
                break
            case 2: totalvendidomes(matriz, meses)
                break
            case 3: totalvendidosemana(matriz)
                break
            case 4: totalvendidoano(matriz)
                break
            case 5: alert(`O programa sera encerrado`)
                break
            default: alert(`Opcao invalida`)
        }
    }
    while(opcao !=5)
}

    cadastravenda = (matriz, meses) => {
    for(let i=0; i<12; i++){
        matriz[i] = [   ]
        alert(`Informe as vendas do mes ${meses[i]}`)
        for(let j=0; j<4; j++){
            matriz[i][j] = Number(prompt(`Informe o valor vendido na semana ${j+1}`))
            matriz[i][j].toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
        }
    }
}
    totalvendidomes = (matriz, meses) =>{
    let soma
        for(let i=0; i<12; i++){
            soma = 0
            for(let j=0; j<4; j++){
            document.write(`<br>O valor da venda no mes de ${meses[i]} na semana ${j+1} foi ${matriz[i][j]}`)
            //soma do mes
            soma = soma + matriz[i][j]
            }
            document.write(`<br>Total vendido no mes de ${meses[i]} foi ${soma}`)
        }
    }
    totalvendidosemana = (matriz) =>{
        let soma
        for(let j=0; j<4; j++){
            soma = 0
            for(let i=0; i<12; i++){
                soma = soma + matriz[i][j]
            }
            document.write(`<br>O valor da venda nas semanas ${j+1} foi ${soma}`)
        }
    }
    totalvendidoano = (matriz) =>{
        let soma = 0
        for(let i=0; i<12; i++){
            for(let j=0; j<4; j++){
                soma = soma + matriz[i][j]
            }
        }
        alert(`O total vendido no ano foi ${soma}`)
    }