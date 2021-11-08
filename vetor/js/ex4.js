let ex4 = () =>
{
    let vethab = [20]
    
    for(let i=0; i<3; i++){
        let objeto = {
        idade: Number(prompt(`Digite a sua idade`)),
        sexo: prompt(`Informe seu sexo`),
        renda: Number(prompt(`Informe a sua renda familiar`)),
        filho: Number(prompt(`Informe o numero de filhos`))    
        }
        vethab.push(objeto)
    }
    console.log(vethab)
    
    consultavet = (vethab) => {
    let salario = 0
    for(let i=0; i<vethab.length; i++){
        if(vethab[i].renda > 0){
        salario = salario + vethab[i].renda
        }
    }
    let media = salario/vethab[i].length
    if (salario>0){
    document.write("A média salarial dos habitantes é ", media)
    }
    let maior = 0
    for(let i=0; i<vethab.length; i++){
        if(vethab[i].idade > maior)
        {
         maior = vethab[i].idade
        }
    }
    let menor = 150
    for(let i=0; i<vethab.length; i++){ 
        if(vethab[i].idade < menor)
        {
        menor = vethab[i].idade
        }
    }
    document.write("\nA menor idade é ", menor, " e a maior idade é ", maior)

    let mulher = 0
    for(let i=0; i<vethab.length; i++)
    {
        if(vethab[i].sexo == "mulher")   
        {
            if((vethab[i].renda < 600) && (vethab[i].filho > 2)) 
            {
                mulher = mulher + 1
            }
        }
    }
    
    document.write("\nO número de mulheres com mais de 2 filhos e com renda familiar abaixo de 600 é ", mulher)
}
        consultavet(vethab)   
}