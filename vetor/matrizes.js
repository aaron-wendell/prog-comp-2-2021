let sistemanotas = () =>{
     // declaracao de matriz 4x4
     let matriz = []
     matriz[0] = []
     matriz[1] = []
     matriz[2] = []
     matriz[3] = []

     for(let i=0; i<4; i++){
         alert(`Informe as 4 notas do aluno ${i+1}`)
         for(let j=0; j<4; j++){
             matriz[i][j] = Number(prompt(`Informe a nota ${j+1}`))
         }
     }
     for(let i=0; i<4; i++){
        soma = 0
        for(let j=0; j<4; j++){
            soma += matriz[i][j]
        }
        console.log(`A media do aluno ${i+1} é ${soma/4}`)
    }
}
