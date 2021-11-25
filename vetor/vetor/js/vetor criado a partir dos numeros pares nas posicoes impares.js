let vet = []
    for(let i=0;i<6;i++){
        vet.push(Number(prompt(`Informe o numero ${i+1}`)))
    }
    let pares = []
    for(let i=0;i<6;i++){
        if(i%2!=0){
            if(vet[i] % 2==0){
                pares.push(vet[i])
            }
        }
}
    console.log(`Os valores pares nas posições ímpares são ${pares}`)