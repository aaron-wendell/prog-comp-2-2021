let sistemavendas = () => {

    let opcao
    let vetvendedores = []
    do{
    opcao = prompt(`Informe: \n1. Cadastrar vendedor \n2. Cadastrar venda \n3. Sair`)
    switch(opcao){
        case 1: let objeto = {
            codigo: Number(prompt(`Informe codigo`)),
            nome: prompt(`Informe o nome`),
            rg: prompt(`Informe rg`)
        }
        // adiciona objeto no vetor
        vetvendedores.push(objeto)
            break
        case 2: 
            break
        case 3: alert(`O programa será encerrado`)
            break
        default: alert(`Opção inválida`)
    }    
}
    while(opcao !=3)
}