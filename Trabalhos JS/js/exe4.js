function mp(){
    //entrada de dados
    //sintaxe para declarar variavel em js
    // let nome_variavel
    //converter texto para numero - funcao Number()
    let nota1 = Number(document.getElementById("nota1").value)
    let nota2 = Number(document.getElementById("nota2").value)

    //processamento
    let media = ( (nota1*2 )+ (nota2*3) ) / (2+3)
    //saida
    //innerHTML permite colocar conteudo dentro do elemento
    // se uma funcao eh chamada por uma variavel, o nome comeca com minusculo
    document.getElementById("resultado").innerHTML = media.toFixed(2)
}