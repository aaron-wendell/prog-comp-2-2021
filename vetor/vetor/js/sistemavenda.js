let sistemavendas = () => {

    let opcao
    let vetvendedores = []
    do{
    opcao = Number(prompt(`Informe: \n1. Cadastrar vendedor \n2. Cadastrar venda \n3. Consulta vendedores\n4. Sair`))
    switch(opcao){
        case 1: let objeto = {
            codigo: Number(prompt(`Informe codigo`)),
            nome: prompt(`Informe o nome`),
            rg: prompt(`Informe rg`)
        }
        // verifica se achou eh falso
        let achou = false
        for(let i=0; i<vetvendedores.length; i++)
        {
            if(vetvendedores[i].codigo == objeto.codigo)
            {
                achou == true // achei - nao posso cadastrar
            }
        }
        if(!achou)
        {   // adiciona objeto no vetor
            vetvendedores.push(objeto)
            alert(`Vendedor cadastrado com sucesso!`)
        }
        else
        {
            alert(`Vendedor ja existente nesse codigo`)
        }
        // adiciona objeto no vetor
        console.log(vetvendedores)
            break
        case 2: let objeto1 = {
            codigo: Number(prompt(`Informe codigo do vendedor`)),
            mes: Number(prompt(`Informe o mes da venda`)),
            valor: Number(prompt(`Informe o valor da venda`))
        }
            let achou1 = false
            for(let i=0; i<vetvendas.length; i++)
            {
                if((vetvendas[i].codigo == objeto.codigo) && (vetvendas[i].mes == objeto.mes)){
                    achou1 = true // encontrou entao nao pode cadastrar a venda
                }
            }
            if(!achou1)
            {
                vetvendas.push(objeto1)
            }
            else{
                alert(`Ja existe venda desse vendedor nesse mes`)
            }
            console.log(vetvendas)
            break
        case 3: 
            console.log(`${vetvendedores}`)
            break
        case 4: alert(`O programa será encerrado`)
            break
        default: alert(`Opção inválida`)
    }    
}
    while(opcao !=4)
}