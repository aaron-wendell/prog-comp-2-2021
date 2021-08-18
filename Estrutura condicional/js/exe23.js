function verificar(){
   let codigo = Number(document.getElementById("codigo").value)
   let quantidade = Number(document.getElementById("quantidade").value)
   let precoun
    if((codigo>=1) && (codigo <=10)){
        precoun = 10
    }
    else if((codigo>=11) && (codigo<=20)){
        precoun=15
    }
    else if((codigo>=21)&& (codigo<=30)){
        precoun = 20
    }
    else if((codigo>=31) && (codigo <=40)){
        precoun = 30
    }
    else {
        precoun=0
    }

   
   let precototal = precoun*quantidade
   let valordesconto
    if(precototal<250){
        valordesconto = (5 * precototal)/100
    }
    else if ((precototal>=250) && (precototal <= 500)){
        valordesconto = (10 * precototal)/100
    }
    else{
        valordesconto = (15*precototal)/100
    }
    let precofinal = precototal - valordesconto
    //saida
    document.getElementById("precoun").innerHTML = precoun
    document.getElementById("precototal").innerHTML = precototal
    document.getElementById("valordesconto").innerHTML = valordesconto
    document.getElementById("precofinal").innerHTML = precofinal
}