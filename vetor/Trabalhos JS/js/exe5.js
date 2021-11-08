function desconto(){
    //entrada de dados
    //sintaxe para declarar variavel em js
    // let nome_variavel
    //converter texto para numero - funcao Number()
    let preço = Number(document.getElementById("preço").value)
    //processamento
    let media = preço * 0.9
    //saida
    //innerHTML permite colocar conteudo dentro do elemento
    // se uma funcao eh chamada por uma variavel, o nome comeca com minusculo
    document.getElementById("resultado").innerHTML = media
}