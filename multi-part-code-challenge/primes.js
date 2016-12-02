/*
 * Joe Cuffney - primes 1-100
 */
 
 //every non prime can be generated as a multiple of primes
function printPrimes(upperBound){
    console.log(1);
    var primes = [2];
    for(i = 3; i <= upperBound; i++){
        
        var p = true;
        for ( j = 0; j < Math.sqrt(i);j++){
            if(i % primes[j] === 0){
                p=false;
                break;
                
            }
        }
        if(p){
            console.log(i);
            primes.push(i);
        }
        p=true;
    }
}
printPrimes(100);
