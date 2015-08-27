var assert = require("assert");
var fs = require('fs');
var vm = require('vm');
var path = './javascript-code-challenge/validation.js';
var code = fs.readFileSync(path);
vm.runInThisContext(code);

describe('validation function', function(){
    it('validates the input', function(){
        assert.equal(validation('Ze'), 'Ze VALID');
    })
});
