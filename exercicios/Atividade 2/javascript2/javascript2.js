function enviar(){
    let aviso = prompt('Selecione a tabela \n \n 1- Tabuada 0 até 2 \n 2- Tabuada 3 até 4 \n 3- Tabuada 6 até 7 \n 4- Tabuada 8 até 9 \n 5- Tabuada 10');
    let resultado = document.getElementById('calculo');
    let valor = parseInt(aviso)

    for(let numero = 1;numero <= 5;numero=numero+1){
         for(let multiplica = 0;multiplica <= 10; multiplica=multiplica+1 ){
            let multiplicacao = numero * multiplica;
            let linha = "" + numero + " * " + multiplica + " = " + multiplicacao + "<br>";
            resultado.innerHTML += (linha);   
         }
    }
    switch(valor){
        case 1:
            let res1=
            resultado
            break;
        case 2:
            break;
    }
}     
  