function escada(altura){
    var arrayEscada = [];
    for (i = 1; i <= altura; i++) {
        arrayEscada.push(" ".repeat(altura-i) + "#".repeat(i));
    }
    return arrayEscada;
}

console.log(escada(5));