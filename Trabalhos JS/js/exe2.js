function mult(){
    //entrada de dados
    //sintaxe para declarar variavel em js
    // let nome_variavel
    //converter texto para numero - funcao Number()
    let numero1 = Number(document.getElementById("numero1").value)
    let numero2 = Number(document.getElementById("numero2").value)
    let numero3 = Number(document.getElementById("numero3").value)
    //processamento
    let media = numero1 * numero2 * numero3
    //saida
    //innerHTML permite colocar conteudo dentro do elemento
    // se uma funcao eh chamada por uma variavel, o nome comeca com minusculo
    document.getElementById("resultado").innerHTML = media
}