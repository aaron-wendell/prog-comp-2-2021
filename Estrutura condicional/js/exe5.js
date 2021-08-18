function calcular(){
    // recuperar dados do usuario
    let numero1 = Number(document.getElementById("numero1").value)
    let numero2 = Number(document.getElementById("numero2").value)
    let opcao = Number(document.getElementById("opcao").value)

    // calculo do resultado
    let resultado

    switch (opcao){ //resultado sera a media
        case 1: resultado = (numero1 + numero2) / 2
        break
    case 2:
       if(numero1 > numero2) {
           resultado = numero1 - numero2
    }
        else {
            resultado = numero2 - numero1
        }    
    break
    case 3: //multiplicacao
        resultado = numero1 * numero2
    break
    case 4:
        if(numero2 != 0) {// != significa diferente
            resultado = numero1 / numero2
        }
        else {
            resultado = "Nao pode dividir por zero!!!"
        }
    break
    default: resultado =   "Opcao invalida"
}

    alert(`O resultado é ${resultado}`)
}