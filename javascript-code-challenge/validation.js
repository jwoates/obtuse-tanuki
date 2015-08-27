var regex = /(^[a-j]{1}$)|(^[NLQR]{1}$)|(^[NLQR](?=([a-j]|[ZNLQR]){2}))|(^[Z](?:_?[a-j]+)*$)/;
var splitWith =/ +?/g;
var validation = function(inputSting){
    var string = inputSting.split(splitWith);
    for(i=0; i < string.length; i++){
        var valid = regex.test(string[i]);
        if(valid){
            return (string[i] + " VALID");
            console.log(string[i] + " VALID");
        }else{
            console.log(string[i] + " INVALID");
            return (string[i] + " INVALID")
        };
    }
};
//validation('Ze Za Nj QZja\nRhfa QRZZaZZaj ssfsfsf');