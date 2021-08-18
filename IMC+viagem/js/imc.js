 /* JavaScript */
 function organizar(){// usamos function p organizar}
 // vamos recuperar o peso digitado pelo usuario
 // document -> representa o documento HTML
 // getElementByID("peso") --> recupera a caixa de texto
 // .value -> recupera o valor dentro da caixa de texto
 // let peso -> declarando uma variavel que guarda o peso
 let peso = document.getElementById("peso").value
 // vamos recuperar a altura digitada pelo usuario
 let altura = document.getElementById("altura").value
 // calcular e mostrar o imc
 // comando de = eh de atribuisao
 // a barra / significa divisao
 let imc = peso / (altura * altura)
 alert(`O valor do imc é de ${imc.toFixed(2)}`)
}