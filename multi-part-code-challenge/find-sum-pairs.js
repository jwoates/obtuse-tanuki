// find pairs of sums in a given array of integers and a sum
function findSumPairs(intArr, sum) {
	var seen = [];
	var results = [];
	var intArrLen = intArr.length;

	for (var i = 0; i < intArrLen; i++) {
		var target = sum - intArr[i];
		if (seen.indexOf(target) == -1) {
			seen.push(intArr[i]);
		}
		else {
			results.push([Math.min(intArr[i], target), Math.max(intArr[i], target)]);
		}
	}
	return results;
}

// execute
console.log(findSumPairs([-1,0,1,2], 3));
console.log(findSumPairs([-1,0,1,2], 1));