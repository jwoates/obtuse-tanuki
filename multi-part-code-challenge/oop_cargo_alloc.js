$(function() {
	
	//Constructor
	function Car(name, capacity){
		this.capacity = capacity;
		this.name = name;
	}

	//override the class's toString
	Car.prototype.toString = function(cargoLeft)
	{
		if(cargoLeft < this.capacity && cargoLeft > 0){
   			return "a " + this.name + " with " + cargoLeft + " lbs";
		}else if(cargoLeft < this.capacity && cargoLeft < 0){
			return "a " + this.name + " with 0 lbs";
		}else{
			return "a " + this.name + " with " + this.capacity + " lbs";
		}
	}

	function display(cars,cargo){
		var str = "<p>allocating " + cargo + " lbs of cargo <br/>";
		for(var i = 0; i < cars.length; i++){
			str = str + cars[i].toString(cargo) + "<br/>";
			cargo = cargo - cars[i].capacity;
		}
		if(cargo < 0){cargo = 0;}
		str = str + "we have " + cargo + " lbs of cargo left over</p>";
		console.log(str);
		$("#ans").html(str);
	}

	//generate the form dynamically
	var names = ["Sportscar","FaimilyCar","Truck","MiniVan","CargoVan","Cargo"];
	var str = "";
	$.each(names, function(i,value){
		str += "<div><label>"+ names[i] +":</label> " + 
			"<input type=\"number\" name=" + names[i] + "></div>";	
	});
	str += "<div><input type=\"submit\"/></div>";
	$("form").html(str);

	//get info and populate div on form submission
	$("form").submit(function(event){
		var names = ["Sportscar","FaimilyCar","Truck","MiniVan","CargoVan"];
		var capacities = [100,300,1500,200,800];
		var cars = [];
		var capacity = 0;
		$.each(names, function(i,value){
			var numberCars = $("input[name=\'" + names[i] + "'").val();
			if (numberCars){
				for(var j = 0; j < numberCars; j++){
					cars.push(new Car(names[i],capacities[i]));
				}
			}		
		});
		display(cars,$("input[name=Cargo]").val());
		
		//prevent form submission
		return false;
	});

});
