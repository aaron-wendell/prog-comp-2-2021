function vt(){
    let viagem = Number(document.getElementById("viagem").value)
    let kml = Number(document.getElementById("kml").value)
    let valor = Number(document.getElementById("valor").value)

    let total = viagem / kml * valor
    
    if(gasto >= 100)
    {alert("Viagem muito cara")}
    else if((gasto < 100) && (gasto>60))
    {alert("Viagem cara")}
    else if ((gasto < 60) && (gasto >= 60))
    {alert("Viagem barata")}
    else 
    {alert("Viagem muito barata")}

    document.getElementById("resultado").innerHTML = total.toFixed(2)
}