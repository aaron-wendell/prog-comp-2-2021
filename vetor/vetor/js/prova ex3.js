let vet = [6, 8, 9, 163, 14, 15, 17, 19, 25, 20]
vet.forEach((elemento, posicao) =>{
    if(posicao%2!=0){
    return elemento % 2 == 0
}})

let vet2 = []

    for(let i=0;i<6;i++){
        if(i%2!=0){
            if(vet[i] % 2==0){
                pares.push(vet[i])
            }
        }
}
    console.log(`Os valores pares nas posições ímpares são ${pares}`)