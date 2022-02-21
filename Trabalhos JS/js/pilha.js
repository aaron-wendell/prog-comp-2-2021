pilha = []
var opcao = 1
while(opcao != 0){
    opcao = Number(prompt("1. Inserir elemento\n2. Remover elemento\n0. Parar o programa"))
        switch(opcao){
            case 1: numero = Number(prompt("Digite o elemento a ser inserido"))
                pilha.push(numero)
                console.log("Pilha: ", pilha)
                break
            case 2: pilha.pop()
               console.log("Pilha: ", pilha)
                break
        }
}