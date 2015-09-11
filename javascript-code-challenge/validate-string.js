/****************************************************************************
 * Separates a string by whitespace and validates each string separated
 * Returns one line per potential strings, followed by 'VALID' if the string 
 * passes the rules set above or 'INVALID' if it doesn't
 ****************************************************************************/
function validateString(str) {
	var validLower = ['a','b','c','d','e','f','g','h','i','j'];
	var validUpper = ['N', 'L', 'Q', 'R'];

	//split the string by whitespace and validate each separated string
	var strArr = str.split(/[\s\n]+/);
	var arrLen = strArr.length;
	var resultStr = '';

	for (var i = 0; i < arrLen; i++) {
			resultStr += strArr[i];
			resultStr += validate(strArr[i]) ? ' VALID':' INVALID';
			if (i < arrLen-1) resultStr += '\n';
	}
	return resultStr;

	// validate a string
	function validate(str) {

		// Every valid lower-case letter by itself is valid
		if (validLower.indexOf(str) != -1) {
			return true;
		}

		// If ♥ is a valid set of strings, then so is Z♥
		if (str.charAt(0) == 'Z') {
			return validate(str.substr(1));
		}

		// If ♥ and ♦ are valid sets of strings, then so are N♥♦, L♥♦, Q♥♦, and R♥♦
		if (validUpper.indexOf(str.charAt(0)) != -1) {
			str = str.substr(1);
			var strLen = str.length;
			var subStr1, subStr2;
			for (var i = 1; i < strLen; i++) {
				substr1 = str.substr(0,i);
				substr2 = str.substr(i);
				if (validate(substr1) && validate(substr2)) {
					return true;
				}
			}
			return false;
		}

		// All other strings are invalid
		return false;
	}
}

console.log(validateString("Ze"));
console.log(validateString("Za Nj"));
console.log(validateString("QZja\nRhfa"));
console.log(validateString("QRZZaZZaj"));