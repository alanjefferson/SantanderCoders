function produto(numeros){
    var resultado = 1;
    for (let i=0; i < numeros.length; i++){
        resultado = resultado * numeros[i];
    }
    return resultado;
}

var numeros = [];
//numeros = [1, 2, 3, 4, 5];
numeros = [1, 4, 7];
console.log(produto(numeros));