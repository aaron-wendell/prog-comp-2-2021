let gerenciaredessociais = () => {
    // cadastro das redes sociais
    let vetorredessociais = []
    for(let i=0; i<5; i++)
    {
        let objeto = {
            codigo: Number(prompt(`Informe codigo da rede social`)),
            nome: prompt(`Informe nome da rede social`),
            url: prompt(`Informe url da rede social`)
        }
        // inserir objeto no vetor
        vetorredessociais.push(objeto)
    }
    // cadastro dos usuarios
    let vetorusuarios = []
    for(let i=0; i<5; i++)
    {
        let objeto = {
            login: prompt(`Informe o login do usuario`),
            nome: prompt(`Informe o nome do usuario`),
            codigoredesocial: Number(prompt(`Informe o codigo da rede social`)),
            qtdeposts: Number(prompt(`Informe o numero de posts`))
        }
        // so faremos isso se a rede social existir
        let achou = false //assumo q nao encontrei a rede social
        let j = 0 // indice do vetor de redes sociais
        while(!achou && j<5){
            if (vetorredessociais[j].codigo == objeto.codigoredesocial){ //achou rede social
                vetorusuarios.push(objeto) //inseriu rede social
                achou = true
                alert(`Usuario inserido com sucesso!`)
            }
            j++
        }
        if(!achou){
            alert(`Usuario nao inserido, pois a Rede social nao foi encontrada`)
        }
        i++
        vetorusuarios.push(objeto)
    }
    //ex1 o usuario informa a rede social e o programa retorna quantos posts foram feitos

    let function(){

    vetorredessociais.push(nome.objeto)}

    while(!achou && j<5)
    {
        j == usuario





    }
    //ex2 o programa retorna quantos posts foram feitos em todas as redes sociais

    //ex3 o usuario informa o login e o programa retorna quantos posts foram feitos

    //ex4 o programa retorna quantos posts foram feitos por cada usuario

}