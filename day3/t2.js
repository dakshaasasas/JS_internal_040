// Higher-Order Methods Practice (Basic Level)

// 6) Create an array of numbers [2, 4, 6, 8] and return a new array with 
// each value doubled using map().
console.log("6) map() → double values");

let nums1 = [2, 4, 6, 8];
let doubled = nums1.map(num => num * 2);

console.log("Original:", nums1);
console.log("Doubled:", doubled);
console.log("");


// 7) From numbers [10, 25, 30, 5, 60] filter values greater than 20.
console.log("7) filter() → values > 20");

let nums2 = [10, 25, 30, 5, 60];
let filtered = nums2.filter(num => num > 20);

console.log("Original:", nums2);
console.log("Filtered (>20):", filtered);
console.log("");


// 8) Find sum of numbers [1, 2, 3, 4, 5] using reduce().
console.log("8) reduce() → sum of array");

let nums3 = [1, 2, 3, 4, 5];
let sum = nums3.reduce((acc, curr) => acc + curr, 0);

console.log("Numbers:", nums3);
console.log("Sum:", sum);
console.log("");
