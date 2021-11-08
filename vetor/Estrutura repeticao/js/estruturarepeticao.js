let  exercicio0 = function(){
let soma = 0 // valor que neutraliza a soma (0 nao atrapalha a soma)

let i = 1

while(i <=10){

    let nota = Number(prompt(`Informe a sua nota`))

    soma = soma + nota

    i++
}
    let media = soma / 10
    alert(`A media das notas e ${media}`)
}

let exercicio1 = function (){
    
    let a, b, c, d, aux
    let contador = 1
    while(contador<=5){
    a = Number(prompt(`Informe o valor de a`))
    b = Number(prompt(`Informe o valor de b`))
    c = Number(prompt(`Informe o valor de c`))
    d = Number(prompt(`Informe o valor de d`))

    let i = 1
    while(i <=3){ // Bubble Sort
        if(a > b){ //troca a com b
            aux = a
            a = b
            b = aux
        }
        if (b > c){ //troca b com c
            aux = b
            b = c
            c = aux
        }
        if(c > d){ //troca c com d
            aux = c
            c = d 
            d = aux 
        }
        i++
    }
        alert(`Ordem crescente ${a} ${b} ${c} ${d} e Ordem decrescente ${d} ${c} ${b} ${a}`)
        contador++
    }
}
let exercicio2 = function() {
    let numero = 120
    let saida = ""  //variavel acumuladora
    let lucro = 0
    let maior = 0 // valor bem peqeueno
    let maiornumero = 0
    let maiorpreco = 0
    for (let preco = 5.0; preco>=1; preco = preco - 0.5){
        lucro = (preco * numero) - 200
        if (lucro > maior){   //maior recebe o lucro
            maior = lucro
            maiornumero = numero
            maiorpreco = preco
        }
        saida = saida + `<tr> <td> R$${preco} </td> <td> ${numero} </td> <td> R$200 </td><td> R$${lucro}</td></tr>`
        //prepara p proxima vez
        numero = numero +26
        document.getElementById("corpo").innerHTML = saida
    }
    alert(`Maior lucro ${maior} com quantidade ${maiornumero} com preco ${maiorpreco}`)
}
function exercicio3(){
    let i = 1
    let f1 = 0
    let f2 = 0
    let f3 = 0
    let f4 = 0
    let f5 = 0
    while (i <=8){
    let idade = Number(prompt(`Informe sua idade`))
    if (idade <=15){
        f1++
    }
   else if((idade > 15) && (idade < 31)) {
       f2++
   }
   else if((idade > 30) && (idade < 46 )){
       f3++
   }
   else if((idade > 45) && (idade < 61)){
       f4++
   }
   else{ //60+
       f5++
   }
   i++ // o i precisa ser incrementado
}
alert(`Faixa 1 ${f1} \nFaixa 2 ${f2} \nFaixa 3 ${f3} \nFaixa 4 ${f4} \nFaixa 5 ${f5} \n F1 ${f1/8*100}% \n F2 ${f2/8*100}% \n F3 ${f3/8*100}% \n F4 ${f4/8*100}%\n F5 ${f5/8*100}%`)
}
function exercicio4(){
    
}
function exercicio5(){
    
}
function exercicio6(){
    let valor
    let transacao
    let totalprazo = 0 
    let totalvista = 0
    for(let i=1;i<=15;i++){
        valor = Number(prompt(` Informe o valor da transação ${i}`))
        transacao = prompt(`Informe o tipo de transacao (V para a vista e P para prazo) ${i}`).toUpperCase()
        if(transacao == 'V'){ // a vista
            totalvista = totalvista + valor
        }
        else if (transacao == 'P'){ // a prazo
            totalprazo = totalprazo + valor
        }
    }
    // soma os totais
    let totalgeral = totalprazo + totalvista
    // primeira parcela do total prazo
    let parcela = totalprazo / 3
    alert(`Total a vista ${totalvista} - Total a prazo ${totalprazo} - Total geral ${totalgeral} - 1ª parcela a prazo ${parcela}`)
}
function exercicio21(){
    let voto
    let qtde1 = 0; let qtde2 = 0; let qtde3 = 0; let qtde4 = 0; let qtdebranco = 0; let qtdenulo = 0
    voto = Number(prompt(`Informe um voto`))
    do{
        switch(voto){
            case 1: qtde1++
                    break
            case 2: qtde2++
                    break
            case 3: qtde3++
                    break
            case 4: qtde4++
                    break
            case 5: qtdenulo++
                    break
            case 6: qtdebranco++
                    break
        }
        voto = Number(prompt(`Informe um novo voto. Digite 0 para sair da votação`))
    }
    while (voto!=0)
    let total = qtde1 + qtde2 + qtde3 + qtde4 + qtdebranco + qtdenulo
    console.log(`Cand1 ${qtde1} - Cand2 ${qtde2} - Cand3 ${qtde3} - Cand4 ${qtde4}`)
    console.log(`Votos nulos ${qtdenulo} - Percentual de votos nulos ${qtdenulo/total*100}`)
    console.log(`Votos brancos ${qtdebranco} - Percentual de votos em branco ${qtdebranco/total*100}`)
}

let  exercicio23 = function(){
    let opcao //recebe opcao do usuario
    //vamos receber um menu de opcoes
    let salario // receber salario
    do{
        opcao = Number(prompt(`Digite \n 1. Novo Salário \n 2. Férias \n 3. Décimo Terceiro \n 4. Sair `))
        switch(opcao){
            case 1: salario = Number(prompt(`Informe o salário`))
                    if(salario < 2100){
                        alert(`Novo salário ${salario + salario*15/100}`)
                    }
                    else if((salario > 2100) && (salario <= 6000))
                    {
                        alert(`Novo salário ${salario + salario*10/100}`)
                    }
                    else{
                        alert(`Novo salário ${salario + salario*5/100}`)
                    }    
                    break
            case 2: salario = Number(prompt(`Informe o salário`))
                    alert(`O valor das férias é ${salario + 1/3*salario}`)
                    break
            case 3: salario = Number(prompt(`Informe o salario`))
                    let meses = Number(prompt(`Informe numero de meses trabalhados`))
                    alert(`Décimo terceiro a receber ${salario * meses/12}`)
                    break
            case 4: alert(`O programa será encerrado. `)
                    break
            default: alert(`Opção inválida. Tente Novamente `)
        }
    }
    while(opcao != 4)


}