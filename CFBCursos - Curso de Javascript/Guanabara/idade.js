function verificar()  {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || fano.value > ano){
        alert(`Erro! Verifique os dados e tente novamente`)
    }
    else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var img = document.createElement('img')
        img.style.width = "250px"
        img.style.height= "250px"
        img.style.borderRadius = "50%"
        var raca = document.getElementsByName('radraca')
        var racan = ''
        var nomen = ''
        img.setAttribute('id', 'foto')
        res.innerHTML = `Idade calculada ${idade}`
        var genero = ''
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade <= 10){
                nomen = 'criança'
                if(raca[0].checked){
                    racan = 'branco'
                    img.setAttribute('src', 'img/crianca-homem.jpg')
                }
                else if(raca[1].checked){
                    racan = 'pardo'
                    img.setAttribute('src', 'img/crianca pardo.jpg')
                }
                else if(raca[2].checked){
                    racan = 'preto'
                    img.setAttribute('src', 'img/crianca preto.jpg')
                }
                else if(raca[3].checked){
                    racan = 'asiático'
                    img.setAttribute('src', 'img/crianca asiatico.jpg')
                }
                else if(raca[4].checked){
                    racan = 'índio'
                    img.setAttribute('src', 'img/crianca homem indio.jpg')
                    }
                else{
                    racan = 'árabe'
                    img.setAttribute('src', 'img/crianca arabe.jpg')
                }
            }
            else if(idade<21){
                nomen = 'jovem'
                if(raca[0].checked){
                    racan = 'branco'
                    img.setAttribute('src', 'img/jovem homem.jpg')
                }
                else if(raca[1].checked){
                    racan = 'pardo'
                    img.setAttribute('src', 'img/jovem pardo.jpg')
                }
                else if(raca[2].checked){
                    racan = 'preto'
                    img.setAttribute('src', 'img/jovem preto.jpg')
                }
                else if(raca[3].checked){
                    racan = 'asiático'
                    img.setAttribute('src', 'img/jovem asiatico.jpg')
            }
            else if(raca[4].checked){
                racan = 'índio'
                img.setAttribute('src', 'img/jovem indio.jpg')
                }
                else{
                    racan = 'árabe'
                    img.setAttribute('src', 'img/jovem arabe.jpg')
                }
            }
            else if(idade<50){
                nomen = 'adulto'
                if(raca[0].checked){
                    racan = 'branco'
                    img.setAttribute('src', 'img/adulto.png')
                }
                else if(raca[1].checked){
                    racan = 'pardo'
                    img.setAttribute('src', 'img/adulto pardo.jpg')
                }
                else if(raca[2].checked){
                    racan = 'preto'
                    img.setAttribute('src', 'img/adulto preto.jpg')
                }
                else if(raca[3].checked){
                    racan = 'asiático'
                    img.setAttribute('src', 'img/adulto asiatico.jpg')
                }
                else if(raca[4].checked){
                    racan = 'índio'
                    img.setAttribute('src', 'img/adulto indio.jpg')
                }
                else{
                    racan = 'árabe'
                    img.setAttribute('src', 'img/adulto arabe.jpg')
                }
            }
            else{
                nomen = 'idoso'
                if(raca[0].checked){
                    racan = 'branco'
                    img.setAttribute('src', 'img/velho.jpg')
                }
                else if(raca[1].checked){
                    racan = 'pardo'
                    img.setAttribute('src', 'img/velho pardo.jpg')
                }
                else if(raca[2].checked){
                    racan = 'preto'
                    img.setAttribute('src', 'img/velho preto.jpg')
                }
                else if(raca[3].checked){
                    racan = 'asiático'
                    img.setAttribute('src', 'img/velho asiatico.jpg')
                }
                else if(raca[4].checked){
                    racan = 'índio'
                    img.setAttribute('src', 'img/velho indio.jpg')
                }
                else{
                    racan = 'árabe'
                    img.setAttribute('src', 'img/velho arabe.jpg')
                }
            }
        }
        else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >=0 && idade <= 10){
                nomen = 'criança'
                if(raca[0].checked){
                    racan = 'branca'
                    img.setAttribute('src', 'img/crianca mulher.jpg')
                }
                else if(raca[1].checked){
                    racan = 'parda'
                    img.setAttribute('src', 'img/crianca parda.jpg')
                }
                else if(raca[2].checked){
                    racan = 'preta'
                    img.setAttribute('src', 'img/crianca preta.jpg')
                }
                else if(raca[3].checked){
                    racan = 'asiática'
                    img.setAttribute('src', 'img/crianca asiatica.jpg')
                }
                else if(raca[4].checked){
                    racan = 'índia'
                    img.setAttribute('src', 'img/crianca indio.jpg')
                }
                else{
                    racan = 'árabe'
                    img.setAttribute('src', 'img/crianca mulher arabe.jpg')
                }
            }
            else if(idade<21){
                nomen = 'jovem'
                if(raca[0].checked){
                    racan = 'branca'
                    img.setAttribute('src', 'img/jovem mulher.jpg')
                }
                else if(raca[1].checked){
                    racan = 'parda'
                    img.setAttribute('src', 'img/jovem parda.jpg')
                }
                else if(raca[2].checked){
                    racan = 'preta'
                    img.setAttribute('src', 'img/jovem preta.jpg')
                }
                else if(raca[3].checked){
                    racan = 'asiática'
                    img.setAttribute('src', 'img/jovem asiatica.jpg')
                }
                else if(raca[4].checked){
                    racan = 'índia'
                    img.setAttribute('src', 'img/jovem india.jpg')
                }
                else{
                    racan = 'árabe'
                    img.setAttribute('src', 'img/jovem mulher arabe.jpg')
                }
            }
            else if(idade<50){
                nomen = 'adulta'
                if(raca[0].checked){
                    racan = 'branca'
                    img.setAttribute('src', 'img/adulta.jpg')
                }
                else if(raca[1].checked){
                    racan = 'parda'
                    img.setAttribute('src', 'img/adulta parda.jpg')
                }
                else if(raca[2].checked){
                    racan = 'preta'
                    img.setAttribute('src', 'img/adulta preta.jpg')
                }
                else if(raca[3].checked){
                    racan = 'asiática'
                    img.setAttribute('src', 'img/adulta asiatica.jpg')
                }
                else if(raca[4].checked){
                    racan = 'índia'
                    img.setAttribute('src', 'img/adulta india.jpg')
                }
                else{
                    racan = 'árabe'
                    img.setAttribute('src', 'img/adulta arabe.jpg')
                }
            }
            else{
                nomen = 'idosa'
                if(raca[0].checked){
                    racan = 'branca'
                    img.setAttribute('src', 'img/velha.jpg')
                }
                else if(raca[1].checked){
                    racan = 'parda'
                    img.setAttribute('src', 'img/velha parda.jpg')
                }
                else if(raca[2].checked){
                    racan = 'preta'
                    img.setAttribute('src', 'img/velha preta.jpg')
                }
                else if(raca[3].checked){
                    racan = 'asiática'
                    img.setAttribute('src', 'img/velha asiatica.jpg')
                }
                else if(raca[4].checked){
                    racan = 'índia'
                    img.setAttribute('src', 'img/velha india.jpg')
                }
                else{
                    racan = 'árabe'
                    img.setAttribute('src', 'img/velha arabe.jpg')
                }
            }
        }
        res.style.textalign = 'center'
        res.innerHTML = `Detectamos ${genero} ${nomen} ${racan} com ${idade} anos`
        res.appendChild(img)
    }
}