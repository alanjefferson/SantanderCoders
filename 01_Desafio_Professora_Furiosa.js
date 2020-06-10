function acontece(alunos, qtdMin){
    var alunosNaHora = [];
    for (let i=0; i < alunos.length; i++){
        if(alunos[i] <= 0) {
            alunosNaHora.push(alunos[i]);
        }
    }
    return alunosNaHora.length >= qtdMin;
}
  
function aberturas(dias, qtdMin){
    var abertura = [];
    for (let i=0; i < dias.length; i++){
        abertura.push(acontece(dias[i], qtdMin));
    }
    return abertura;
}
  
var alunosDaSegunda = [10, -5, 3, 0];
var alunosDaTerca = [11, -6, 4, 1, 8];
var alunosDaQuarta = [-1, -7, 0, 0, -2];
var dias = [alunosDaSegunda, alunosDaTerca, alunosDaQuarta];

//console.log(acontece(alunosDaSegunda, 4));
//console.log(acontece(alunosDaTerca, 5));
//console.log(acontece(alunosDaQuarta, 5));
console.log(aberturas(dias, 5));