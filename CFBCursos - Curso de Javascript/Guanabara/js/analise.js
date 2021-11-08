var numero = document.querySelector('input#numero')
var cx = document.getElementById('analise')
var res = document.getElementById('res')
var numeros = []

function valido(num){
    if(Number(num)>=1 && Number(num)<101){
        return true
    }
    else{
        return false
    }
}

function nalista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }
    else{
        return false
    }
}

function adicionar() {
    if (!nalista(numero, numeros)) {
        if(valido(numero)){
                valores.push(Number(numero.value))
                numeros[i] = numero
                var lista = document.createElement('lista')
                lista.text = `Numero ${numero} adicionado`
                lista.value = `num${i}`
                res.appendChild(lista)
                res.innerHTML = ``
        }
        else{
            alert(`Valor invalido`)
        }
    }
    else {
        alert(`Valor ja contido na lista`)
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if(numeros.length==0){
        alert(`Adicione valores antes de finalizar`)
    }
    else{
        let tot = numeros.length
        let maior = numeros[0]
        let menor = numeros[0]
        let soma = 0
        let media = 0
        for(let cx in numeros){
            if(numeros[cx] > maior){
                maior = numeros[cx]
            }
            if(numeros[cx]<menor){
                menor = numeros[cx]
            }
        }
        media = soma/tot
        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo temos ${tot} numeros cadastrados`
        res.innerHTML += `<p> O menor numero cadastrado foi ${menor}`
        res.innerHTML += `<p> O maior numero cadastrado foi ${maior}`
        res.innerHTML += `<p> A soma dos numeros eh ${soma}`
        res.innerHTML += `<p> A media dos numeros eh ${media}`
    }
}