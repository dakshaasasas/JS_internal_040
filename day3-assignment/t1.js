// ---------------------------------------------
// TASK 1: Average Marks using reduce()
// ---------------------------------------------
console.log("=== TASK 1: Average Marks ===");

let marks = [80, 90, 70, 85, 95];

// example: calculating average
let average = marks.reduce((sum, val) => sum + val, 0) / marks.length;

console.log("Marks:", marks);
console.log("Average Marks:", average);



// ---------------------------------------------
// TASK 2: Filter Even Numbers
// ---------------------------------------------
console.log("\n=== TASK 2: Even Numbers ===");

let numbers = [1,2,3,4,5,6,7,8,9];

// example: filter only even numbers
let evenNumbers = numbers.filter(num => num % 2 === 0);

console.log("Original Numbers:", numbers);
console.log("Even Numbers:", evenNumbers);



// ---------------------------------------------
// TASK 3: Shopping Cart Total
// ---------------------------------------------
console.log("\n=== TASK 3: Shopping Cart ===");

let cart = {
  item: "Laptop",
  price: 45000,
  quantity: 2
};

// example: total cost calculation
let totalBill = cart.price * cart.quantity;

console.log("Cart:", cart);
console.log("Total Bill:", totalBill);



// ---------------------------------------------
// TASK 4: Movie List (Add + Remove + Print)
// ---------------------------------------------
console.log("\n=== TASK 4: Movie List ===");

let movies = ["KGF", "Pushpa", "Kantara"];

// example: add a movie
movies.push("Jawan");

// example: remove last movie
movies.pop();

console.log("Final Movie List:");
movies.forEach(movie => console.log(movie));



// ---------------------------------------------
// TASK 5: JSON Conversion
// ---------------------------------------------
console.log("\n=== TASK 5: JSON Conversion ===");

let user = { name: "Aman", age: 21, course: "JS" };

// example: convert object to JSON string
let jsonString = JSON.stringify(user);

// example: convert back to object
let userObject = JSON.parse(jsonString);

console.log("Original Object:", user);
console.log("JSON String:", jsonString);
console.log("Converted Back Object:", userObject);



// ---------------------------------------------
// BONUS TASK 6: Find Max Number (No Math.max)
// ---------------------------------------------
console.log("\n=== TASK 6: Max Number Without Math.max ===");

let arr = [10, 40, 25, 80, 15];

let max = arr[0];  // starting point

// example: manual maximum logic
for (let num of arr) {
  if (num > max) max = num;
}

console.log("Array:", arr);
console.log("Maximum Number:", max);



// ---------------------------------------------
// BONUS TASK 7: Convert Names to Uppercase
// ---------------------------------------------
console.log("\n=== TASK 7: Names to Uppercase (map) ===");

let names = ["ram", "shyam", "mohan"];

// example: using map to transform
let upperNames = names.map(n => n.toUpperCase());

console.log("Original Names:", names);
console.log("Uppercase Names:", upperNames);

