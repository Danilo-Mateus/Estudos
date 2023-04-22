function carregar() {
    var msg = window.document.getElementById("msg")
    var imagem = window.document.getElementById("imagem")
    var data = new Date();
    var hora = data.getHours()
    var min = data.getMinutes()
    var seg = data.getSeconds()
    
    msg.innerHTML = `agora são ${hora} horas e ${min} minutos.`
    
    
    if (hora >= 0 && hora < 12){
        imagem.src = "fotomanha.png"
        document.body.style.background = "#e2cd9f"
     } 
    else if (hora >= 12 && hora < 18){
        imagem.src = "fototarde.png"
        document.body.style.background = "#b9846f"
     }
     else{
       imagem.src = "fotonoite.png"
       document.body.style.background = "#515154"
        }
    }