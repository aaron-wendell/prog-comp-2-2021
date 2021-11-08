

let sistemaimobiliaria = () => {
    let opcao
    let vetorimovel = []
    do{
        opcao = Number(prompt(`Informe \n1. Cadastra\n2. Consulta A\n3. Consulta B\n4. Consulta C\n5. Sair`))
        switch(opcao){
            case 1: cadastraimovel(vetorimovel)
                break
            case 2: let tipo = prompt(`Qual tipo de imovel A ou C`).toUpperCase()
                consultaimovel(vetorimovel, tipo)
                break
            case 3: consultavalortotal(vetorimovel[i].valor)
                break
            case 4: consultaimovelgrande(vetorimovel)
                break
            case 5: alert(`O programa será encerrado`)
                break
            default: alert(`Opcao invalida`)
        }
    }
    while (opcao !=5)
}

let cadastraimovel = (vetorimovel) =>{
    
    let objeto = {
        codigo: Number(prompt(`Digite o codigo do imovel`)),
        tipo: prompt(`Digite o tipo de imovel (A. Apartamento e C. Casa)`).toUpperCase(),
        tamanho: Number(prompt(`Digite o tamanho do imovel`)),
        valor: Number(prompt(`Digite o valor do imovel`))
}
    let achou = false
    for(let i=0; i<vetorimovel.length; i++){
        if(vetorimovel[i].codigo == objeto.codigo){
            achou = true
            alert(`Codigo ja existe!`)
        }
    }
    if(!achou){
    vetorimovel.push(objeto)
    alert(`Imovel cadastrado com sucesso!`)
}
}

let consultaimovel = (vetorimovel, tipo) => {
    for(let i=0; i<vetorimovel.length; i++){
    if(vetorimovel[i].tipo == tipo)
    {
        console.log(vetorimovel[i])
    }
}
}

let consultavalortotal = (vetorimovel) => {
    let soma = 0
    for(let i=0; i<vetorimovel.length; i++){
        soma = soma + vetorimovel[i].valor
    }
    alert(`O valor total dos imoveis eh ${soma}`)
}

let consultaimovelgrande = (vetorimovel) => {
    for(let i=0; i<vetorimovel.length; i++){
        if(vetorimovel[i].tamanho > 100){
            console.log(vetorimovel[i])
        }
    }
}