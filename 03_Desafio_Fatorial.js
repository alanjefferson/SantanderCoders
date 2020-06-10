function fatorial(numero){
    var resultado = 1;
    for (let i=numero; i >= 1; i--){
        resultado = resultado * i;
    }
    return resultado;
}

console.log(fatorial(5));