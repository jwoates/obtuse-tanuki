// print the first 100 primes
function print100Primes() {
	var primes = [];
	var numPrimes;
	var count = 0;
	var currNum = 2;
	var notPrime = false;

	while (count < 100) {
		numPrimes = primes.length;
		// check for any divisors
		for (var i = 0; i < numPrimes; i++) {
			if (currNum % primes[i] == 0) {
				notPrime = true;
				break;
			}
		}

		// if prime, add to array of primes and increment count
		if (!notPrime) {
			console.log(currNum);
			primes.push(currNum);
			count++;
		}

		// increment current number and reset boolean
		notPrime = false;
		currNum++;
	}
}

// execute
print100Primes();