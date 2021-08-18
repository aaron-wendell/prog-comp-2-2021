function maior(){
    let numero1 = Number(document.getElementById("numero1").value)
    let numero2 = Number(document.getElementById("numero2").value)
    let numero3 = Number(document.getElementById("numero3").value)
    
    if((numero1>numero2) && (numero1>numero3))
    {alert(numero1)}
    else if((numero2>numero1) && (numero2>numero3))
    {alert(numero2)}
    else 
    {alert(numero3)}
}