function calcular(){
        let salario = Number(document.getElementById("salario").value)
        let aumento 
        if  (salario<=300)
            {aumento = 1.15}
        else if ((salario >300) && (salario<=600))
            {aumento = 1.1}
        else if ((salario>600) && (salario<=900))
            {aumento = 1.05}
        else if (salario>900)
            {aumento = 1.0}
        else {"Erro!!"
        }
        let novo
        if (salario<=300)
            {novo = salario * 1.15}
        else if ((salario >300) && (salario<=600))
            {novo = salario * 1.10}
        else if ((salario>600) && (salario<=900))
            {novo = salario * 1.05}
        else if (salario>900)
            {novo = salario * 1.00}
        else {text="Erro!!"
        }
        alert(`O aumento é de ${aumento} e o novo salário é ${novo}`)
    }
}