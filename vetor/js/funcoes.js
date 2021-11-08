function principal (){
    let opcao
    let idade = 10 // escopo local --> Funciona no local onde foi definido
    let peso = 60
    let altura = 1.59
    do{
        opcao = Number(prompt(`Digite \n1. F1\n2. F2\n3. F3\n4. F4\n5. Sair`))
        switch(opcao){
           case 1:  idade = Number(prompt(`Informe sua idade`))
                    idade = f1(idade)
           break
           case 2: idade = Number(prompt(`Informe sua idade`))
                   peso = Number(prompt(`Informe seu peso`))
                   f2(idade, peso)
           break
           case 3:  idade = Number(prompt(`Informe sua idade`))
                    peso = Number(prompt(`Informe seu peso`))
                    altura = Number(prompt(`Informe sua altura`))
                    f3(idade, peso, altura)
           break
           case 4:  vetor.push(1)   // add 1, 2 e 3
                    vetor.push(2)
                    vetor.push(3)
                    f4(vetor) // passar vetor como parametro
                    alert(vetor)
           break
           case 5: alert(`Programa sera encerrado`)
           break
           default: alert(`Opcao invalida`)
        }
    }
    while(opcao != 5)
}
// funcao q recebe parametro
function f1(idade){
        // let idade = 10
    alert(`Valor de idade ${idade}`)
    idade = idade + 10
    return idade // retorna o resultado da funcao
}
// funcao que recebe parametro
function f2(idade, peso){
    alert(`Valor de idade ${idade} e do peso ${peso}`)
}

function f3(idade, peso, altura){
    alert(`Valor de idade ${idade}, peso ${peso} e altura ${altura}`)
}

function f4(vetor){
    // alterar valor do vetor
    vetor[0] = vetor [0] + 10
    vetor[1] = vetor [1] + 10
    vetor[2] = vetor [2] + 10
    vetor[3] = vetor [3] + 10
}
