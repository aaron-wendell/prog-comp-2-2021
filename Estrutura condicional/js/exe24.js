function calcular(){
    let preco = Number(document.getElementById("preco").value)
    let categoria = Number(document.getElementById("categoria").value)
    if (document.getElementById("R").checked){ //sim
        situacao="R"
    }
    else {situacao="N"} //nao
    let aumento
    if(preco <=25){
        switch(categoria){
            case 1: aumento = (5 * preco) / 100
                break
            case 2: aumento = (8 * preco) / 100
                break
            case 3: aumento = (10 * preco) / 100
                break
        }
    }
    else{
        switch(categoria){
            case 1: aumento = (12 * preco) / 100
                break
            case 2: aumento = (15 * preco) / 100
                break
            case 3: aumento = (18 * preco) / 100
                break
        }
    }
    let imposto
    if((categoria ==2) || (situacao =='R')){
        imposto = (5 * preco) / 100
    }
    else {
        imposto = (8 * preco) / 100
    }
    let valor = preco + aumento - imposto
    if(valor <=50){
        classificacao = "Barato"
    }
    else if (valor <=120){
        classificacao = "Normal"
    }
    else{
        classificacao = "Caro"
    }

    document.getElementById("imposto").innerHTML = imposto
    document.getElementById("aumento").innerHTML = aumento
    document.getElementById("valor").innerHTML = valor
    document.getElementById("classificacao").innerHTML = classificacao

}