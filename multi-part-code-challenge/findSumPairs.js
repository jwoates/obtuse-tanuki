/*
 * Joe Cuffney findSumPairs
 */

function contains(val,pairs){
    for(var i=0 ; i < pairs.length; i ++){
        if(pairs[i] === val){
            return true;
        }else if(pairs[i] > val){
            //since its sorted... we havent found it if > val
            return false;
        }
    }
    return false;
}

function findSumPairs(intArr, sumTotal){
    pairs = [];
    sorted = intArr.sort();
    for(var i = 0 ; i < sorted.length; i++){
        if((contains(sumTotal-sorted[i],sorted.slice(i,sorted.length)))){
            pairs.push(([sorted[i],sumTotal-sorted[i]]));
        }
    }
    return pairs;
}

console.log(findSumPairs([-1, 0, 1, 2], 3));
console.log(findSumPairs([-1, 0, 1, 2], 1));
