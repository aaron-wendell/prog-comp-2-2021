let objeto = () =>{

    let carro1 = new Object();
    carro1.marca = "Chevrolet"
    carro1.modelo = "Onix"
    carro1.ano = 2019
    carro1.cor = "preto"
    
    console.log(carro1)
    
    let carro2 = new Object();
    carro2.marca = "Fiat"
    carro2.modelo = "Palio"
    carro2.ano = 2014
    carro2.cor = "branco"
    
    console.log(carro2)
    
    let manga1 = new Object();
    manga1.nome = "Tokyo Revengers"
    manga1.autor = "Wakui Ken"
    manga1.ano = 2017
    manga1.capitulo = 217
    
    console.log(manga1)
    
    let manga2 = {
        nome: "Sket Dance",
        autor: "Kenta Shinohara",
        ano: 2007,
        capitulo: 288
    }
    
    console.log(manga2)
    
    let manga3 = new Object()
    {
    manga3["nome"] = "One Piece"
    manga3["autor"] = "Eiichiro Oda"
    manga3["ano"] = 1997
    manga3["capitulo"] = 1021
    }
    
    //cria vetores com objetos
    //tipo A

    let vetor = []
    for(let i=0; i<4; i++){
        // cria objeto
        let objeto = {
            nome: prompt(`Informe o nome do produto`),
            qtde: Number(prompt(`Informe a qtde do produto`)),
            preco: Number(prompt(`Informe o preco do produto`))
        }
        //adiciona objeto no vetor
        vetor.push(objeto)
    }
    
    /* tipo B
    //  for(let i=0; i<4; i++){
    //cria objeto
    // let objeto = 
      //  objeto.nome = prompt(`Informe o nome do produto`)
       // objeto.qtde = Number(prompt(`Informe a qtde do produto`))
       // objeto.preco = Number(prompt(`Informe o preco do produto`))
     } 

    //adiciona objeto no vetor
    vetor.push(objeto)
    // calcula a media de preco de produtos
     */
    
        let soma = 0
    
    for(let i=0; i<4; i++){
        soma = soma + vetor[i].preco
    }
    console.log(vetor)
    }