function sal(){
    //entrada de dados
    //sintaxe para declarar variavel em js
    // let nome_variavel
    //converter texto para numero - funcao Number()
    let salario = Number(document.getElementById("salario").value)
    let vendas = Number(document.getElementById("vendas").value)
    //processamento
    let media = salario + vendas * 0.04
    //saida
    //innerHTML permite colocar conteudo dentro do elemento
    // se uma funcao eh chamada por uma variavel, o nome comeca com minusculo
    document.getElementById("resultado").innerHTML = media
}
function com(){
    let vendas = Number(document.getElementById("vendas").value)
    let media = vendas * 0.04
    document.getElementById("comissao").innerHTML = media
}