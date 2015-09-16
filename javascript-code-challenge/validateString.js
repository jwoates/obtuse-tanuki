/* 
 * validate string
 * Joe Cuffney
 */
 
 //rule 1
var lower = ['a','b','c','d','e','f','g','h','i','j'];
var upper = ['N', 'L', 'Q', 'R'];
 
 function validateString(str){
    var res = "";
	var arr = str.split(/[\s\n]+/);
	for(i=0;i<arr.length;i++){
	    res = res + ' ' + val(arr[i]) + ' ';
	}
	return res;
 }
 
 function val(str) {
		// rule 2
		if (lower.indexOf(str) != -1) {
			return str + " VALID";
		}
		// rule 3
		if (str.charAt(0) == 'Z') {
			return val(str.substr(1));
		}
		// rule 4
		if (upper.indexOf(str.charAt(0)) != -1) {
			var temp = str.substr(1);
			var strLen = temp.length;
			for (var i = 1; i < strLen; i++) {
				if (val(temp.substr(0,i)) && val(temp.substr(i))) {
					return str + " VALID";
				}
			}
			return str + " INVALID";
		}
		// rule 5
		return str + " INVALID";
	}

console.log(validateString("j")); //j VALID
console.log(validateString("fj")); //fj INVALID
console.log(validateString("Ze")); //Ze VALID
console.log(validateString("Za Nj")); //Za VALID Nj INVALID
console.log(validateString("QZja\nRhfa")); //QZja VALID Rhfa INVALID
console.log(validateString("QRZZaZZaj")); //QRZZaZZaj VALID


