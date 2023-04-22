function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.getElementById('res');
    if(fano.value.length == 0 || fano.value > ano){
       window.alert('[ERRO] Verifique os dados e tente novamente');
    } else {
       var fsex = document.getElementsByName("radsex");
       var idade = ano - Number(fano.value);
       res.innerHTML = `Idade calculada: ${idade}`;
       var genero = '';
       var img = document.createElement('img');
       img.setAttribute('id', 'foto');
       if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                // código para a faixa etária entre 0 e 10 anos
                img.setAttribute('src', 'foto-bebe-m.png')
            } else if (idade >= 10 && idade < 21){
                // código para a faixa etária entre 10 e 21 anos
                img.setAttribute('src','foto-jovem-m.png')
            } else if (idade >= 21 && idade < 60){
                // código para a faixa etária entre 21 e 60 anos
                img.setAttribute('src','foto-adulto-m.png')
            } else if (idade >= 60 ){
                // código para a faixa etária acima de 60 anos
                img.setAttribute('src','foto-idoso-m.png')
            }
            res.innerHTML = `A sua idade é de: ${idade} e seu gênero é: ${genero}`;
            res.appendChild(img);

       } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src','foto-bebe-f.png')
                // código para a faixa etária entre 0 e 10 anos
            } else if (idade >= 10 && idade < 21){
                img.setAttribute('src','foto-jovem-f.png')
                // código para a faixa etária entre 10 e 21 anos
            } else if (idade >= 21 && idade < 60){
                img.setAttribute('src','foto-adulto-f.png')
                // código para a faixa etária entre 21 e 60 anos
            } else if (idade >= 60 ){
                img.setAttribute('src','foto-idoso-f.png')
                // código para a faixa etária acima de 60 anos
            }
            res.innerHTML = `A sua idade é de: ${idade} e seu gênero é: ${genero}`;
            res.appendChild(img);

       }
    }
}