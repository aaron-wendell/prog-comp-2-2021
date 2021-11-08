    let ex3 = () =>{

        let vetorhabitantes = [50]
         
        for(i=0; i<3; i++){
            // cadastro dos habitantes
            let objeto = {
                altura: Number(prompt(`Informe a sua altura`)),
                idade: Number(prompt(`Informe a sua idade`)),
                sexo: prompt(`Informe o seu sexo (homem ou mulher)`),
                olhos: prompt(`Informe a cor dos seus olhos`)
            }
            // inserir objeto no vetor
            vetorhabitantes.push(objeto)
        }
            // parte 1 - buscar media de idade dos habitantes de olhos castanhos e altura acima de 1.60

            let media = 0
            for(let i=0;i<3; i++)
            {   
                if((vetorhabitantes[i].olhos == "C") && (vetorhabitantes[i].altura>1.60)){
                    media = vetorhabitantes[i].idade + media
                }
            }
            
            if(media>0){
                document.write("\nA média de idade das pessoas com olhos castanhos e altura superior a 1,60 é ", media/3)
            }
            else{
                document.write("\nNão há pessoas com olhos castanhos e altura superior a 1,60")
            }
            // parte 2 - achar maior idade
            let maior = 0
            for(let i=0;i<3; i++)
            {  
            if(vetorhabitantes[i].idade>maior){
                maior = vetorhabitantes[i].idade
            }
            }
            document.write("\nA maior idade registrada é ", maior)
            // parte 3 - mulheres com idade entre 20 e 45 anos ou que tenham olhos verdes e altura inferior a 1,70
            
            let mulher = 0
            for(let i=0; i<3; i++)
            {
                if (vetorhabitantes[i].sexo == "mulher")
                {  
                    if(vetorhabitantes[i].idade <= 45) {
                        if(vetorhabitantes[i].idade >= 20)
                        {   mulher = mulher + 1
                        }
                    }
                    else if((vetorhabitantes[i].olhos == "V") && (vetorhabitantes[i].altura < 1.70)){
                        mulher = mulher + 1
                    }
                }
            }
            document.write("\nO numero de mulheres com idade entre 20 e 45 anos ou que tenham olhos verdes e altura inferior a 1,70 é ", mulher)
            // parte 4 - Porcentagem de homens
            
            let homem = 0
            for(let i=0;i<3; i++)
            {
                if(vetorhabitantes[i].sexo == "homem")
                {
                    homem = homem + 1
                }
            }
            if(homem>0){
                document.write("\nA porcentagem de homens é ", 100 * homem/3,"%")
            }

            else if(homem == 3){
                document.write("\nA porcentagem de homens é de 100%")
            }

            else{
                document.write("\nNão houve homens registados")
            }
            
    }