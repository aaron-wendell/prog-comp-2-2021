function soma() {
    var ini = document.getElementById('in')
    var fim = window.document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.querySelector('div#res')
    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0)
    {        
        res.innerHTML = `Impossivel contar`
        alert('Erro!! Faltam dados')
    }
    else{
        res.innerHTML = 'Contando:  <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p<=0){
            alert(`Passo invalido. Considerando passo 1`)
            p = 1
        }
        if(i<f){
            //contagem crescente
            for(let x=i; x<=f; x+=p){
                res.innerHTML += `${x} \u{1F449} `
            }
        }
        else{
            //contagem decrescente
            for(let x=i; x>=f; x-=p){
                res.innerHTML += `${x} \u{1F449} `
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}