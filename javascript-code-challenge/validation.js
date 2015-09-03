var regex = /(^[a-j]{1}$)|(^[NLQR]{1}$)|(^[NLQR](?=([a-j]|[ZNLQR]){2}))|(^[Z](?:_?[a-j]+)*$)/;
var splitWith =/[\n ]/;
validation = function(inputSting){
    var results = [];
    var string = inputSting.split(splitWith);
    for(i=0; i < string.length; i++){
        var valid = regex.test(string[i]);
        if(valid){
            results.push(string[i] + " VALID");
        }else{
            results.push(string[i] + " INVALID");
        };
    }
    return results;
};
validation('Ze Za Nj QZja\nRhfa QRZZaZZaj');