function findSumPairs(intArr, sumTotal){
    var sumPairs = [];
    for(var i=0; i<intArr.length; i++){
        var j = i+1;
        for(j; j<intArr.length; j++){
            if(intArr[i] + intArr[j] === sumTotal){
                sumPairs.push([intArr[i],intArr[j]]);
            }
        };
    };
    console.log(sumPairs);
};
findSumPairs([1,2,3,4,5,6], 6);