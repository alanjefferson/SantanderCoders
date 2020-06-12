function alturaArvoreUtopica(ciclos){
    var altura = 1;
    for(i = 1; i <= ciclos; i++){
        if(i % 2 == 0){
            altura = altura + 1;
        }else{
            altura = altura * 2;
        }
    }
    return altura;
}

console.log(alturaArvoreUtopica(0));
console.log(alturaArvoreUtopica(1));
console.log(alturaArvoreUtopica(2));
console.log(alturaArvoreUtopica(3));
console.log(alturaArvoreUtopica(4));
console.log(alturaArvoreUtopica(5));
console.log(alturaArvoreUtopica(6));
console.log(alturaArvoreUtopica(7));
console.log(alturaArvoreUtopica(8));