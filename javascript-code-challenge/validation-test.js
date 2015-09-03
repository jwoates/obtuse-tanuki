require('./validation.js');
var assert = require("assert");

describe('validation function', function(){
    it('validates the first string', function(){
        assert.deepEqual(validation('Ze Za Nj QZja\nRhfa QRZZaZZaj'), ["Ze VALID", "Za VALID", "Nj INVALID", "QZja VALID", "Rhfa VALID", "QRZZaZZaj VALID"]);
    })
});

