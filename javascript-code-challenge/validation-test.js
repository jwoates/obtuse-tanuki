var assert = require("assert");
var fs = require('fs');
var vm = require('vm');
var path = './javascript-code-challenge/validation.js';
var code = fs.readFileSync(path);
vm.runInThisContext(code);

describe('validation function', function(){
    it('validates the first string', function(){
        assert.deepEqual(validation('Ze Za Nj QZja\nRhfa QRZZaZZaj'), ["Ze VALID", "Za VALID", "Nj INVALID", "QZja VALID", "Rhfa VALID", "QRZZaZZaj VALID"]);
    })
});

