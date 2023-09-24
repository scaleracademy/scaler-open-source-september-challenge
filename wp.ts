// Initialize an array
const numbers = [1, 2, 3, 4, 5];
const fruits = ["apple", "banana", "cherry"];

// Adding Elements
numbers.push(6); // Adds 6 to the end of 'numbers'
fruits.unshift("orange"); // Adds 'orange' to the beginning of 'fruits'

// Removing Elements
numbers.pop(); // Removes the last element from 'numbers'
fruits.shift(); // Removes the first element from 'fruits'

// Slicing
const slicedNumbers = numbers.slice(1, 4); // Returns a new array with elements [2, 3, 4]

// Mapping and Transforming
const squaredNumbers = numbers.map((num) => num * num); // Returns [1, 4, 9, 16, 25]

// Filtering
const evenNumbers = numbers.filter((num) => num % 2 === 0); // Returns [2, 4]

// Reducing
const sumOfNumbers = numbers.reduce((acc, num) => acc + num, 0); // Returns 15

// Sorting
fruits.sort(); // Sorts 'fruits' alphabetically

console.log("Modified numbers:", numbers);
console.log("Modified fruits:", fruits);
console.log("Sliced numbers:", slicedNumbers);
console.log("Squared numbers:", squaredNumbers);
console.log("Even numbers:", evenNumbers);
console.log("Sum of numbers:", sumOfNumbers);