function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    var sec = data.getSeconds()
    msg.innerHTML = `Agora são ${hora} horas, ${min} minutos e ${sec} segundos.`
    if(hora >= 6 && hora < 12){
       // document.write(`Bom dia`)
        img.src = 'img/manha.jpg'
        document.body.style.background = '#e2cd9f'
        if(min<2){
            msg.innerHTML = `Agora são ${hora} horas, ${min} minuto e ${sec} segundos.`
            if(sec<2){
                msg.innerHTML = `Agora são ${hora} horas, ${min} minuto e ${sec} segundo.`
            }
        }
        else if(sec<2){   
                msg.innerHTML = `Agora são ${hora} horas, ${min} minutos e ${sec} segundo.`
        }
    }
    else if(hora >=12 && hora < 18){
        // document.write(`Boa tarde`)
        img.src = 'img/tarde.jpg'
        document.body.style.background = '#b9846f'
        if(min<2){
            msg.innerHTML = `Agora são ${hora} horas, ${min} minuto e ${sec} segundos.`
            if(sec<2){
                msg.innerHTML = `Agora são ${hora} horas, ${min} minuto e ${sec} segundo.`
            }
        }
        else if(sec<2){   
                msg.innerHTML = `Agora são ${hora} horas, ${min} minutos e ${sec} segundo.`
        }
    }
    else if(hora>=0 && hora<2){
        msg.innerHTML = `Agora é ${hora} hora, ${min} minutos e ${sec} segundos.`
        if(min<2){
            msg.innerHTML = `Agora é ${hora} hora, ${min} minuto e ${sec} segundos.`
            if(sec<2){
                msg.innerHTML = `Agora é ${hora} horas, ${min} minuto e ${sec} segundo.`
            }
        }
        else if(sec<2){   
                msg.innerHTML = `Agora é ${hora} hora, ${min} minutos e ${sec} segundo.`
        }
        // document.write(`Boa noite`)
        img.src = 'img/noite.jpg'
        document.body.style.background = '#515154'
    }

    else {
        if(min<2){
            msg.innerHTML = `Agora é ${hora} hora, ${min} minuto e ${sec} segundos.`
            if(sec<2){
                msg.innerHTML = `Agora é ${hora} horas, ${min} minuto e ${sec} segundo.`
            }
        }
        else if(sec<2){   
                msg.innerHTML = `Agora é ${hora} hora, ${min} minutos e ${sec} segundo.`
        }
        // document.write(`Boa noite`)
        img.src = 'img/noite.jpg'
        document.body.style.background = '#515154'
    }
}