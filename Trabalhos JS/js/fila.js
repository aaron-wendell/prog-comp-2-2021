fila = []
var opcao = 1
while(opcao != 0){
    opcao = Number(prompt("1. Inserir elemento\n2. Remover elemento\n0. Parar o programa"))
        switch(opcao){
            case 1: numero = Number(prompt("Digite o elemento a ser inserido"))
                fila.push(numero)
                console.log("Fila: ", fila)
                break
            case 2: fila.shift()
               console.log("Fila: ", fila)
                break
        }
}