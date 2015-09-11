window.onload = function() {

	var vehicleFactory = new VehicleFactory();
	byId("calculate").onclick = calculate;

	function calculate() {
		var vehicles = [];

		var numSportsCars = parseInt(byId('sportsCar').value);
		var numFamilyCars = parseInt(byId('familyCar').value);
		var numTrucks = parseInt(byId('truck').value);
		var numMiniVans = parseInt(byId('miniVan').value);
		var numCargoVans = parseInt(byId('cargoVan').value);
		var totalCargo = parseInt(byId('cargo').value);

		// add all vehicles to array
		function addCars(carType, num) {
			for (var i = 0; i < num; i++) {
				vehicles.push(vehicleFactory.createVehicle(carType));
			}
		}

		addCars("SportsCar", numSportsCars);
		addCars("FamilyCar", numFamilyCars);
		addCars("Truck", numTrucks);
		addCars("MiniVan", numMiniVans);
		addCars("CargoVan", numCargoVans);

		// clear output and write with current data
		var output = byId("output");
		var numVehicles = vehicles.length;
		var currVehicle, currLbs;

		output.innerHTML = "";
		output.innerHTML += "<p>allocating " + totalCargo + " lbs of cargo<p>";

		for (var i = 0; i < numVehicles; i++) {
			currVehicle = vehicles[i];
			
			// determine lbs that the vehicle will hold
			if (totalCargo == 0) {
				currLbs =  0;
			}
			else if (currVehicle.capacity > totalCargo) {
				currLbs = totalCargo;
			}
			else {
				currLbs = currVehicle.capacity;
			}

			output.innerHTML += "<p>a " + currVehicle.carType + " with " + currLbs + " lbs</p>";

			totalCargo -= currVehicle.capacity;
			if (totalCargo < 0) totalCargo = 0;
		}

		output.innerHTML += "<p>we have " + totalCargo + " lbs of cargo left over";

	}

	// vehicle object
	function Vehicle(carType, capacity) {
		this.carType = carType
		this.capacity = capacity;
	}

	// factory for creating vehicles of different types
	function VehicleFactory() {
		this.createVehicle = function(carType) {
			switch (carType) {
				case "SportsCar":
					return new Vehicle("SportsCar", 100);
				case "FamilyCar":
					return new Vehicle("FamilyCar", 300);
				case "Truck":
					return new Vehicle("Truck", 1500);
				case "MiniVan":
					return new Vehicle("MiniVan", 200);
				case "CargoVan":
					return new Vehicle("CargoVan", 800);
				default: 
					return;
			}
		}
	}

	// I get sick of writing document.getElementById
	function byId(id) {
		return document.getElementById(id);
	}
}