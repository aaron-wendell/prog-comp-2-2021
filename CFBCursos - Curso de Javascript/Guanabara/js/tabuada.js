let tabuada = () => {
    let numero = document.getElementById('ntab')
    let resultado = window.document.getElementById('res')
    if(numero.value.length == 0)
    {
        alert(`Numero invalido`)
        resultado.innerHTML =  `Digite um numero valido para calcular a tabuada`
    }
    else{
        var n = Number(numero.value)
        resultado.innerHTML =  `Tabuada do ${n}`
        for (let i=1; i<11; i++){
            let item = document.createElement('option')
            item.text =  `${n} x ${i} = ${n*i}`
            item.value =  `tab${i}`
            resultado.appendChild(item)
        }
    }
}