

$('#validateBtn').click(function() {
  if ($('#validateInput').val() !== '') {
    $('#validated').text('');
        var stringsToValidate = $('#validateInput').val().split(/\s+/g); // \s+ means it won't stumble over multiple spaces between strings 
        for (var i = 0; i <  stringsToValidate.length; i++) {
          $('#validated').append('<div class="alert alert-' + (validate(stringsToValidate[i]) ? 'success' : 'danger') + ' role="alert">' + stringsToValidate[i] + ' is <b>' + (validate(stringsToValidate[i]) ? 'valid' : 'not valid') + '</b></div>');
        };
      };
    });

function validate (word) {

    /**
     * We can confirm and implenet these factors, based off the provided rules:
     * 1) Only lowercase a-j and uppercase Z, N, L, Q, and R are allowed
     * 2) a lowercase letter on its own is [VALID]. Two of them together are not.
     * 3) Z[VALID] = [VALID]
     * 4) N[VALID][VALID] = [VALID]. N can be substituted for L, Q, or R also.
     *
     * This function will find character patterns that are [VALID], and replace them with the number 1. At the end, if the string consists of anything other than 1's, we can say it is not valid.
     */

     /*Right off the bar, we're going to prevent any string with non-valid characters from continuing.*/
     if (!/^(Z|N|L|Q|R|[a-j])+$/g.test(word)) {
      return null;
    }

    //First, look for any Z_
    while (/Z([a-j]|1)/g.test(word)) {
      console.log(word);
      word = word.replace(/Z([a-j]|1)/g, '1');
    }
    
    //Then any N__, L__, etc
    while (/(N|L|Q|R)1([a-j]|1)/g.test(word)) {
      word = word.replace(/(N|L|Q|R)1([a-j]|1)/g, '1');
      console.log(word);

      //There's a chance we'll have some more Z_'s now.
      while (/Z([a-j]|1)/g.test(word)) {
        word = word.replace(/Z([a-j]|1)/g, '1');
        console.log(word);
      }
    }

    //In case there are any characters left. This will only validate characters that are by themselves. 1j1 is valid. 1jj1 is not.
    word = word.replace(/1?[a-j]1?/g,'1');
    console.log(word);

    return ( /^1+$/g.test(word) ? 1 : 0)
  }
