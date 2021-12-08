function enviar(){
    let sexo=document.getElementById('sexo').value;


    if(sexo == "masculino" || sexo == "MASCULINO"){
        document.getElementById('fundo').style.background('blue');
    
    }else if(sexo == "feminino"){
        document.getElementById('fundo').style.background('yellow');
    }else{}
}