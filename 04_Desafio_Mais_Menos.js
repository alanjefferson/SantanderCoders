function maisMenos(arrayNumbers){
    var positiveNumbers = 0;
    var zeroNumbers = 0;
    var negativeNumbers = 0;

    for(i=0; i < arrayNumbers.length; i++){
        if(arrayNumbers[i] > 0){
            positiveNumbers = positiveNumbers + 1;
        }
        if(arrayNumbers[i] == 0){
            zeroNumbers = zeroNumbers + 1;
        }
        if(arrayNumbers[i] < 0){
            negativeNumbers = negativeNumbers + 1;
        }
    }

    var percentPositive = positiveNumbers / arrayNumbers.length;
    var percentZero = zeroNumbers / arrayNumbers.length;
    var percentNegative = negativeNumbers / arrayNumbers.length;

    var arrayPercents = [];
    arrayPercents.push(percentPositive);
    arrayPercents.push(percentZero);
    arrayPercents.push(percentNegative);
    
    return arrayPercents;
}

var arrayTest = [1, 2, 0, 0, 1, 2, 0, -1];
console.log(maisMenos(arrayTest));