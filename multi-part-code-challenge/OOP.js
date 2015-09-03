$( document ).ready(function() {
    $('#cargoForm').submit(function(e){
        var inputs = ['SportsCar', 'FamilyCar', 'Truck', 'MiniVan', 'CargoVan', 'CargoSize'];
        for(i = 0; i < inputs.length; i++){
           // var inputs[i] = $('#'+ inputs[i]).val();

        }
        var sportsCar = $('#SportsCar').val();
        var familyCar = $('#FamilyCar').val();
        var truck = $('#Truck').val();
        var miniVan = $('#MiniVan').val();
        var cargoVan = $('#CargoVan').val();
        var cargoSize = $('#CargoSize').val();
        var calculateCargo = new CalculateCargo(sportsCar, familyCar, truck, miniVan, cargoVan, cargoSize);
        calculate(calculateCargo, cargoSize);
        e.preventDefault();
    });
    var CalculateCargo = function(sportsCar, familyCar, truck, miniVan, cargoVan, cargoSize){

        this.sportsCar = {
            name : 'sports car',
            number : parseInt(sportsCar),
            capacity : 100
            };
        this.familyCar ={
            name : 'family car',
            number : parseInt(familyCar),
            capacity: 300
        };
        this.truck = {
            name : 'truck',
            number : parseInt(truck),
            capacity : 1500
        };
        this.miniVan = {
            name : 'mini van',
            number : parseInt(miniVan),
            capacity : 200
        };
        this.cargoVan = {
            name : 'cargo van',
            number : parseInt(cargoVan),
            capacity : 800
        };
    };
    var calculate = function(calculateCargo, cargoSize){
        var totalAllocatedCargo = 0;
        for(property in calculateCargo){
            var AllocatedCargo = calculateCargo[property].number * calculateCargo[property].capacity;
            $('#output').append('<p>' + calculateCargo[property].number + " " + calculateCargo[property].name +  " with " + AllocatedCargo + " lb" + "</p>");
            totalAllocatedCargo = totalAllocatedCargo + AllocatedCargo;
        }
        var leftCargo = totalAllocatedCargo - parseInt(cargoSize);
        console.log(leftCargo);
        if(leftCargo < 0){
            $('#output').append("<p>" + "we have " + Math.abs(leftCargo) + " lbs of cargo left over");
        }else{
            $('#output').append("<p>"  + "we have 0 lbs of cargo left over" + "</p>");
        }

    };

});