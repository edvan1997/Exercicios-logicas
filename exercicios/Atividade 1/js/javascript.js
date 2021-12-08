function enviar(){
    let resultado = document.getElementById('calculo');

    for(let numero = 1;numero <= 5;numero=numero+1){
         for(let multiplica = 0;multiplica <= 10; multiplica=multiplica+1 ){
            let multiplicacao = numero * multiplica;
            let linha = "" + numero + " * " + multiplica + " = " + multiplicacao + "<br>";
            resultado.innerHTML += (linha);   
         }
    }
}     
  