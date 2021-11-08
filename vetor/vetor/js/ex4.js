function provas(){
    let matriz = []
    var nome = []
    let soma
    var media = []
    for(let i=0; i<3; i++){
        soma = 0
        let objeto = {
            nome: prompt(`Qual o nome do aluno?`), //insere nome do aluno no vetor
            media: 0
        }
        nome.push(objeto)
        matriz[i] = []  //arruma espaco na memoria p matriz
            for(let j=0; j<3; j++){
                matriz[i][j] = Number(prompt(`Qual a nota de ${objeto.nome} na prova ${j+1}`))
            }
        }
    for(let i=0; i<3; i++){
        for(let j=0; j<5; j++){
            nome[i].media = nome[i].media + matriz[i][j]
        }
        nome[i].media = nome[i].media/5 
        media = media + nome[i].media
            if(nome[i].media>=6){
                console.log(`${nome[i].nome} teve media ${nome[i].media} portanto esta aprovado`)
            }
            else if(nome[i].media>=3){
                console.log(`${nome[i].nome} teve media ${nome[i].media} portanto esta de exame`)
            }
            else{
                console.log(`${nome[i].nome} teve media ${nome[i].media} portanto esta reprovado`)
            }
    }
    media = media / 3
    console.log(`A media da sala foi ${media}`)
}