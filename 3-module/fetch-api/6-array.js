// A module that handles everything that has to do with an array
const cars = ["Toyota","BMW", "Honda", "Ford","Benz"]
console.log(cars[4])
// Get the number of elements in an array
console.log(cars.length)
//Add an element to an array
cars.push("Nissan","Volvo", "Nissan")
console.log(cars)
cars.unshift("Kia", "Hyundai", "Tesla" )
console.log(cars)
// Removing from an array
cars.pop()
console.log(cars)
cars.shift()
console.log(cars)
// Get the index of an element in an array
console.log(cars.indexOf("Ford"))
//To get the last element in an array
console.log(cars[cars.length-1])
// To check elements in the middle
console.log(cars[Math.floor(cars.length /2)])