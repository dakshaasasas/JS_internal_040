// Array Practice - JavaScript

// 1) Create an array of 5 fruits and print each fruit using a for loop.
let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
console.log("1) Initial array:");
for (let i = 0; i < fruits.length; i++) {
  console.log(`- [${i}] ${fruits[i]}`);
}
console.log(""); // blank line for readability

// 2) Add "Papaya" at the end using push() and then remove the last element using pop().
console.log("2) push('Papaya') then pop():");
fruits.push("Papaya");
console.log("After push:", fruits);
let removedLast = fruits.pop();
console.log("Popped (removed) last element:", removedLast);
console.log("After pop:", fruits);
console.log("");

// 3) Add "Kiwi" at the beginning using unshift() and remove first using shift().
console.log("3) unshift('Kiwi') then shift():");
fruits.unshift("Kiwi");
console.log("After unshift:", fruits);
let removedFirst = fruits.shift();
console.log("Shifted (removed) first element:", removedFirst);
console.log("After shift:", fruits);
console.log("");

// 4) Check if "Mango" exists in array using includes().
console.log('4) Check if "Mango" exists with includes():');
const hasMango = fruits.includes("Mango");
console.log("Contains 'Mango'?", hasMango);
console.log("");

// 5) Find index of "Banana" using indexOf().
console.log('5) Find index of "Banana" using indexOf():');
const bananaIndex = fruits.indexOf("Banana");
if (bananaIndex !== -1) {
  console.log(`'Banana' found at index: ${bananaIndex}`);
} else {
  console.log("'Banana' not found in the array (indexOf returned -1).");
}
console.log("");

// Extra: final array state
console.log("Final array state:", fruits);
