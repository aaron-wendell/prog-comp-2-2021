matriz = () =>{
    var mat = []
    for(let i=0; i<5; i++){
        mat[i] = []
        for(let j=0; j<5; j++){
           mat[i][j] = Number(prompt(`Informe um numero da linha ${i+1} e coluna ${j+1}`))
        }
    }
    let principal = 0
    for(let i=0; i<5; i++){
        principal = principal + mat[i][i]
    }
    alert(`Diagonal principal: `, principal)
    let l4 = 0
    for(let j=0; j<5; j++){
        l4 = l4 + mat[3][j]
    }
    alert(`Linha 4: `, l4)
    var col2 = 0
    for(let i=0; i<5; i++){
        col2 = mat[i][1]
    }
    alert(`Coluna 2: `, col2)
    let secundaria = 0
    for(let i=0; i<5; i++){
        secundaria = secundaria + mat[i][4-i]
    }
    alert(`Diagonal secundaria: `, secundaria)
}