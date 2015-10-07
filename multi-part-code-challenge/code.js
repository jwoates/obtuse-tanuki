
    $('#primeBtn').click(function() {
      $('#primeNumbs').text('');

      var primes = 0; //THow many primes we have.
      var primeCounter = 2; //Start counting up 
      while (primes < 100) {
        var isPrime = true;

        for (var i = 2; i < primeCounter; i++) { //See if the number is divisible by anything other than itself
          if (primeCounter % i == 0 && primeCounter !== i) {
            isPrime = false;
            break; //It's not prime, no need to continue checking if it's divisible by other numbers.
          };
        };

        if (isPrime == true) {
          primes++;
          $('#primeNumbs').append( '<li>' + primeCounter + '</li>');
        };
        primeCounter++;
      } //while

    });

    $('#primeClear').click(function() {
      $('#primeNumbs').text('');
    });

    //
    //
    $('#textBtn').click(function() {
      var editableText = document.getElementById('editable').innerHTML;
      editableText = editableText.split('<br>');
      var finalString = '';
      for (var i = 0; i < editableText.length; i++) {
        if (editableText[i].length > 0) {
          finalString += '<blockquote>' + editableText[i] + '</blockquote>'
          if(finalString.length > 1) { finalString += '\n'; }
        };
      };
      document.getElementById('editableResult').innerHTML = finalString;
    });
    //
    //

    $('#pairBtn').click(function() {
      $('#sumNumbers').text('');
      //This is converting our user input to numbers. 
      var numbersTemp = $('#numInput').val().split(',');
      var numbers = [];
      for (var i = 0; i < numbersTemp.length; i++) {
        (!isNaN(parseInt(numbersTemp[i])) ? numbers.push(parseInt(numbersTemp[i])) : null );
      };

      var sum = parseInt($('#sumInput').val());

      for (var i = 0; i < numbers.length; i++) { //For each number in the array....
        for (var j = i; j < numbers.length; j++) { //Compare it with every other number in the array. j = i ensures that each solution won't come up twice, i.e. both 4+1 and 1+4.
          if (numbers[i] + numbers[j] == sum) {
            $('#sumNumbers').append(numbers[i] + ' + ' + numbers[j] + ' = ' + sum + '<br/>');
          };
        };
      };
    });

    $('#cargoCalculate').click(function() {
      $('#cargoList').text('');
      var weight = parseInt($('#cargoLbs').val());

      var fleet = {
        "sportscars": parseInt($('#cargoSport').val()),
        "famcars": parseInt($('#cargoFam').val()),
        "trucks": parseInt($('#cargoTruck').val()),
        "minivs": parseInt($('#cargoMiniv').val()),
        "cargovans": parseInt($('#cargoVan').val())
      };

      var results = [];
      var leftovers = distribute(weight, fleet, results);

      // function distribute (load, cars, res) {
      //   if (load >= 1500) {
      //     if (cars.trucks > 0) { //Do we have a truck?
      //       cars.trucks--;
      //       results.push(['truck', (load > 1500 ? 1500 : load)]); //Use a truck with 1500 if there's more, the remainder if not.
      //       load -= 1500;
      //       distribute(load, cars, res);
      //     }
      //   } else if (load >= 800 && load < 1500) ;
      // }

      function distribute (load, cars, res) {
        if (load > 0) {
          for (var i = 0; i < cars.trucks; i++) { 
            if (load > 0) {
              cars.trucks--;
              res.push({'name': 'truck', 'load': (load > 1500 ? 1500 : load)}); //Use a sportscar with 100 if there's more, the remainder if not.
              (load>1500 ? load = load-1500 : load=0);
            }
          };
          for (var i = 0; i < cars.cargovans; i++) { 
            if (load > 0) {
              cars.cargovans--;
              res.push({'name': 'cargo van', 'load': (load > 800 ? 800 : load)}); //Use a sportscar with 100 if there's more, the remainder if not.
              (load>800 ? load = load-800 : load=0);
            }
          };
          for (var i = 0; i < cars.famcars; i++) { 
            if (load > 0) {
              cars.famcars--;
              res.push({'name': 'family car', 'load': (load > 300 ? 300 : load)}); //Use a sportscar with 100 if there's more, the remainder if not.
              (load>300 ? load = load-300 : load=0);
            }
          };
          for (var i = 0; i < cars.minivs; i++) { 
            if (load > 0) {
              cars.minivs--;
              res.push({'name': 'minivan', 'load': (load > 200 ? 200 : load)}); //Use a sportscar with 100 if there's more, the remainder if not.
              (load>200 ? load = load-200 : load=0);
            }
          };
          for (var i = 0; i < cars.sportscars; i++) {
          if (load > 0) {
              cars.sportscars--;
              res.push({'name': 'sportscar', 'load': (load > 100 ? 100 : load)}); //Use a sportscar with 100 if there's more, the remainder if not.
              (load > 100 ? load = load-100 : load=0);
            }
          };    
          return load;      
        }

      } 
      console.log(results);

      for (var i = 0; i < results.length; i++) {
        $('#cargoList').append('<li>A ' + results[i].name + " carrying " + results[i].load + 'lbs</li>');
      };
      if (leftovers) {
        $('#cargoList').append('<li>You have ' + leftovers + 'lbs leftover to carry. ' + (leftovers > 50 ? 'That\'s a lot.' : 'That\'s not too bad.'));
      }

    });

