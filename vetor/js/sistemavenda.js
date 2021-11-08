let sistemavendas = () => {

    let opcao
    let vetvendedores = []
    let vetvendas = []
    let codigo
    let mes
    do{
    opcao = Number(prompt(`Informe: \n1. Cadastrar vendedor \n2. Cadastrar venda \n3. Consultar vendas no mes de determinado vendedor\n4. Consultar total de vendas de determinado vendedor\n5. Mostra a maior venda de determinado mes \n6. Mostra o mes com maior numero de vendas\n7. Sair`))
    switch(opcao){
        case 1: cadastravendedor(vetvendedores)
            break
        case 2: cadastravenda(vetvendas)
            break
        case 3: 
            codigo = Number(prompt(`Informe o codigo do vendedor`))
            mes = Number(prompt(`Informe o mes da venda que deseja consultar`))
            consultavendascodigomes(vetvendas, codigo, mes)
            break
        case 4: codigo = Number(prompt(`Informe o codigo do vendedor`))
            consultavendascodigo(vetvendas, codigo)
            break
        case 5: mes = Number(prompt(`Informe o mes de interesse`))
            consultavendedor(vetvendas, mes)   
            break
        case 6: consultavendasmes(vetvendas)
            break
        case 7: alert(`O programa será encerrado`)
            break
        default: alert(`Opção inválida`)
    }    
}
    while(opcao !=7)
}
let cadastravendedor = (vetvendedores) =>{
                let objeto = {
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
                achou = true // achei - nao posso cadastrar
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
    }
    let cadastravenda = (vetvendas) => {
        objeto1 = {
        codigo: Number(prompt(`Informe codigo do vendedor`)),
        mes: Number(prompt(`Informe o mes da venda`)),
        valor: Number(prompt(`Informe o valor da venda`))
    }
        let achou1 = false
        for(let i=0; i<vetvendas.length; i++)
        {   // nao podemos cadastrar duas vendas para um mesmo vendedor no mesmo mes
            if((vetvendas[i].codigo == objeto1.codigo) && (vetvendas[i].mes == objeto1.mes)){
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
}

let consultavendascodigomes = (vetvendas, codigo, mes) =>{
    // percorre o vetor de vendas
    let achou3 = false
    for(let i=0;i<vetvendas.length;i++){
        if((vetvendas[i].codigo == codigo) && (vetvendas[i].mes == mes))
        {
        console.log(`O valor da venda do funcionario ${codigo} no mes ${mes} foi ${vetvendas[i].valor}`)
        achou3 = true
        }
    }
    if(!achou3){
        console.log(`Nao existe venda informada para o vendedor neste mes`)
    }
}
 
let consultavendascodigo = (vetvendas, codigo) => {
    // percorre o vetor de vendas
    let soma = 0
    for(let i=0;i<vetvendas.length;i++){
        if(vetvendas[i].codigo == codigo){
            soma = soma + vetvendas[i].valor
        }
    }
    if(soma==0){
        console.log(`Venda nao encontrada para este funcionario, ou venda igual a 0`)
    }
    else{
        console.log(`O total de vendas do vendedor ${codigo} foi ${soma}`)
    }
}

let consultavendedor = (vetvendas, mes) =>

{
    let maiorvalor = 0    
                let vendedormaisvendeu = 0
            for(let i=0; i<vetvendas.length; i++){
                if(vetvendas[i].mes == mes){
                    if(vetvendas[i].valor > maiorvalor)
                    {
                        maiorvalor = vetvendas[i].valor
                        vendedormaisvendeu = vetvendas[i].codigo
                    }
                }
            }
            console.log(`O vendedor que mais vendeu foi ${vendedormaisvendeu} com ${maiorvalor}`)
}

let consultavendasmes = (vetvendas) => 
{
    let vetmes = [0,0,0,0,0,0,0,0,0,0,0,0]
        // percorre o vetor de vendas
        for(let i=0; i<vetvendas.length; i++){
            let aux = vetvendas[i].mes // mes da venda
            vetmes[aux-1] = vetmes[aux-1] + vetvendas[i].valor
        }
        console.log(vetmes)
}