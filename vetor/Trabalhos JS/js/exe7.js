function eng(){
    let peso = Number(document.getElementById("peso").value)
    let media = peso * 1.15
    document.getElementById("engordar").innerHTML = media.toFixed(1)
}

function ema(){
    let peso = Number(document.getElementById("peso").value)
    let media = peso * 0.8
    document.getElementById("emagrecer").innerHTML = media.toFixed(1)
}