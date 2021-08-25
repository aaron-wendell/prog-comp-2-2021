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

    let codigo = Number(prompt(`Informe o codigo da rede social`))
    //percorre vetor procurando
    let conta = 0   
    for(let i=0;i<5; i++)
    {   // percorre o vetor de usuarios
        if(vetorusuarios[i].codigoredesocial == codigo)
        {
            conta = conta + vetorusuarios[i].qtdeposts
        }
    }
    if(conta == 0)
    {
        console.log(`Nao houve postagem ou rede social nao existe`)
    }
    else{
        console.log(`A quantidade de posts na rede social ${codigo} foi ${conta}`)
    }

    //ex2 o programa retorna quantos posts foram feitos em todas as redes sociais

    for(let i=0; i<5; i++){ //para cada rede social
        let post = 0
        for(let j=0; j<5; j++)
        {   //procura usuarios
            if(vetorredessociais[i].codigo == vetorusuarios[i].codigoredesocial)
            {
                post = post + vetorusuarios[i].qtdeposts
            }
        }
        // terminou soma dos posts de uma rede social
        console.log(`A quantidade de posts da rede social ${vetorredessociais[i].nome} foi ${posts}`)
    }
    if(post == 0)
    {
        console.log(`Nao houve postagem nas redes sociais`)
    }
    

    //ex3 o usuario informa o login e o programa retorna quantos posts foram feitos
    let login = prompt(`Digite o login `)
    // procura o login no vetor de usuarios
    let somapost = 0
    let achou = false // nao encontrei o usuario
    for(let i=0; i<5; i++)
    {   
        if(vetorusuarios[i].login == login)
        {
            somapost = somapost + vetorusuarios[i].qtdeposts
            achou = true
        }
        
    }
    if (achou == true)
    {
        alert(`O usuario ${nome} realizou ${somapost}`)
    }
    else{
        alert(`Usuario nao encontrado`)
    }

    //ex4 o programa retorna quantos posts foram feitos por cada usuario
    
    let vetorusuariospost = []
        for(let i=0; i<3; i++)
        {   
            let achou = false
            for(let j=0; j<vetorusuariospost.length; j++)
            {
                if(vetorusuarios[i].login == vetorusuariospost[i].login)
                {
                    //soma qtde posts do usuario
                    vetorusuariospost[j].qtde = vetorusuariospost[j].qtde + vetorusuarios[i].qtdeposts
                    achou = true
                }
            }
        }
        //usuario ainda nao existe no vetorusuariospost, ent vamos criar
        if(!achou)
        {   //criar usuario no vetor
            vetorusuariospost.push({
                login: vetorusuarios[i].login,
                qtde: vetorusuarios[i].qtdeposts
            })
        }
        console.log(vetorusuariospost)
        
}