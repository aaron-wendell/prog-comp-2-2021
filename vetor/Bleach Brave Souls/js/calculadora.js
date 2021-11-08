function vitoria(){
    let ataque = Number(document.getElementById("ataque").value) 
    let defesa = Number(document.getElementById("defesa").value)
    let ataque2 = Number(document.getElementById("ataque2").value)
    let defesa2 = Number(document.getElementById("defesa2").value)
    let total = (ataque - ataque2) + (defesa - defesa2)
    if (total>=0) {alert(`Você ganhou por ${total} pontos`);
}
    else {alert(`Você perdeu por ${total} pontos`);
}
}