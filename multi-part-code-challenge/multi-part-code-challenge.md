# Multi-part-code-challenge
A code challenge featuring multiple tasks, generate primes, work with the DOM API, create pairs from a varied array, and allocate cargo using an object-oriented style.

I've included the different parts below:

##Prime Numbers
Write a function to print out the first 100 prime numbers.

##DOM APIs
Using the DOM APIs, write a routine to change every paragraph in a contenteditable div into a
blockquote.

##Finding Pairs
Write a function: findSumPairs(intArr, sumTotal)
that searches an array of integers (intArr, which could have positive and/or negative values) to
find pairs that add up to sumTotal.
For example:

````
findSumPairs([-1, 0, 1, 2], 3) >
[[1,2]]
````

````
findSumPairs([-1, 0, 1, 2], 1) >
[[1, 2], [0, 1]]
````


##Object Oriented Programming - Cargo Allocation
Given the following types of vehicles and their respective capacities:

- SportsCar small trunk w/100lb capacity
- FamilyCar large trunk w/300lb capacity
- Truck 2 doors, bed w/1500lb capacity
- MiniVan small rear storage area w/200lb capacity
- CargoVan large rear storage area with 800lb capacity


Write a page/script using object oriented coding style with a text box for each each vehicle type, a text box
for the cargo to be allocated, and a calculate button. When the calculate button is clicked a div on the page
should have the cargo allocation written to it. Use of utilities like class.js are fine so long as they result in
clean and readable js.

### Example 1:

````
INPUT:
SportsCar: 1
FamilyCar: 3
Truck: 4
MiniVan: 2
CargoVan: 1
Cargo: 7356
````

#### OUTPUT:

````
allocating 7356 lbs of cargo
a SportsCar with 100 lbs
a FamilyCar with 300 lbs
a FamilyCar with 300 lbs
a FamilyCar with 300 lbs
a Truck with 1500 lbs
a Truck with 1500 lbs
a Truck with 1500 lbs
a Truck with 1500 lbs
a MiniVan with 200 lbs
a MiniVan with 156 lbs
a CargoVan with 0 lbs
we have 0 lbs of cargo left over
````

### Example 2:

````
INPUT:
SportsCar: 1
FamilyCar: 6
Truck: 1
MiniVan: 2
CargoVan: 3
Cargo: 7356
````

#### OUTPUT:

````
allocating 7356 lbs of cargo
a SportsCar with 100 lbs
a FamilyCar with 300 lbs
a FamilyCar with 300 lbs
a FamilyCar with 300 lbs
a FamilyCar with 300 lbs
a FamilyCar with 300 lbs
a FamilyCar with 300 lbs
a Truck with 1500 lbs
a MiniVan with 200 lbs
a MiniVan with 200 lbs
a CargoVan with 800 lbs
a CargoVan with 800 lbs
a CargoVan with 800 lbs
we have 1156 lbs of cargo left over
````