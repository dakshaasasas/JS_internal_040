// ------------------------------
// 1) Sum of two numbers
// ------------------------------
function sum(a, b) {
    return a + b;
}
// Example:
console.log("1) sum(3,5) =", sum(3,5));


// ------------------------------
// 2) Print "Hello <name>"
// ------------------------------
function greet(name) {
    return `Hello ${name}`;
}
// Example:
console.log("2) greet('Aar Paar') =", greet("Aar Paar"));


// ------------------------------
// 3) Check Even or Odd
// ------------------------------
function isEven(n) {
    return n % 2 === 0;
}
// Example:
console.log("3) isEven(4) =", isEven(4));


// ------------------------------
// 4) Celsius to Fahrenheit
// ------------------------------
function cToF(c) {
    return (c * 9/5) + 32;
}
// Example:
console.log("4) cToF(0) =", cToF(0));


// ------------------------------
// 5) Maximum among 3 numbers
// ------------------------------
function maxOf3(a, b, c) {
    return Math.max(a, b, c);
}
// Example:
console.log("5) maxOf3(2, 9, 5) =", maxOf3(2,9,5));


// ------------------------------
// 6) Find string length
// ------------------------------
function strLength(s) {
    return s.length;
}
// Example:
console.log("6) strLength('Hello') =", strLength("Hello"));


// ------------------------------
// 7) Toggle Boolean
// ------------------------------
function toggleBool(b) {
    return !b;
}
// Example:
console.log("7) toggleBool(true) =", toggleBool(true));


// ------------------------------
// 8) Concatenate strings
// ------------------------------
function concat(...parts) {
    return parts.join('');
}
// Example:
console.log("8) concat('Hello',' ','World') =", concat("Hello"," ","World"));


// ------------------------------
// 9) Positive / Negative / Zero
// ------------------------------
function sign(n) {
    if (n > 0) return "Positive";
    if (n < 0) return "Negative";
    return "Zero";
}
// Example:
console.log("9) sign(-3) =", sign(-3));


// ------------------------------
// 10) var, let and const example
// ------------------------------
function scopeExamples() {
    var x = 1;
    let y = 2;
    const z = 3;
    return { x, y, z };
}
// Example:
console.log("10) scopeExamples() =", scopeExamples());


// ------------------------------
// 11) Multiplication Table
// ------------------------------
function multiplicationTable(n, upTo = 10) {
    let result = "";
    for (let i = 1; i <= upTo; i++) {
        result += `${n} x ${i} = ${n * i}\n`;
    }
    return result;
}
// Example:
console.log("11) multiplicationTable(5):\n" + multiplicationTable(5));


// ------------------------------
// 12) Sum of first N natural numbers
// ------------------------------
function sumFirstN(n) {
    return n * (n + 1) / 2;
}
// Example:
console.log("12) sumFirstN(10) =", sumFirstN(10));


// ------------------------------
// 13) Switch-case Day Name
// ------------------------------
function dayName(n) {
    switch (n) {
        case 0: return "Sunday";
        case 1: return "Monday";
        case 2: return "Tuesday";
        case 3: return "Wednesday";
        case 4: return "Thursday";
        case 5: return "Friday";
        case 6: return "Saturday";
        default: return "Invalid";
    }
}
// Example:
console.log("13) dayName(3) =", dayName(3));


// ------------------------------
// 14) Factorial
// ------------------------------
function factorial(n) {
    if (n < 0) return NaN;
    let result = 1;
    for (let i = 2; i <= n; i++) result *= i;
    return result;
}
// Example:
console.log("14) factorial(5) =", factorial(5));


// ------------------------------
// 15) Voting Eligibility
// ------------------------------
function canVote(age) {
    return age >= 18;
}
// Example:
console.log("15) canVote(20) =", canVote(20));


// ------------------------------
// 16) Check Prime Number
// ------------------------------
function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;

    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
}
// Example:
console.log("16) isPrime(29) =", isPrime(29));


// ------------------------------
// 17) Sum of digits of a number
// ------------------------------
function sumOfDigits(n) {
    let sum = 0;
    while (n > 0) {
        sum += n % 10;
        n = Math.floor(n / 10);
    }
    return sum;
}
// Example:
console.log("17) sumOfDigits(123) =", sumOfDigits(123));


// ------------------------------
// 18) Reverse a String
// ------------------------------
function reverseString(s) {
    let result = "";
    for (let i = s.length - 1; i >= 0; i--) {
        result += s[i];
    }
    return result;
}
// Example:
console.log("18) reverseString('hello') =", reverseString("hello"));


// ------------------------------
// 19) Print Grade Based on Marks
// ------------------------------
function grade(marks) {
    if (marks >= 90) return "A";
    if (marks >= 75) return "B";
    if (marks >= 50) return "C";
    return "Fail";
}
// Example:
console.log("19) grade(88) =", grade(88));


// ------------------------------
// 20) Operation Based on Operator
// ------------------------------
function operate(a, b, op) {
    switch (op) {
        case "+": return a + b;
        case "-": return a - b;
        case "*": return a * b;
        case "/": return b !== 0 ? a / b : Infinity;
        case "%": return a % b;
        default: return "Invalid Operator";
    }
}
// Example:
console.log("20) operate(10,5,'/') =", operate(10,5,'/'));


// ------------------------------
// 21) Count Vowels in a string
// ------------------------------
function countVowels(s) {
    let vowels = "aeiouAEIOU";
    let count = 0;
    for (let ch of s) {
        if (vowels.includes(ch)) count++;
    }
    return count;
}
// Example:
console.log("21) countVowels('Hello World') =", countVowels("Hello World"));


// ------------------------------
// 22) Fibonacci Series up to N terms
// ------------------------------
function fibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    let arr = [0, 1];
    while (arr.length < n) {
        arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    }
    return arr;
}
// Example:
console.log("22) fibonacci(7) =", fibonacci(7));


// ------------------------------
// 23) Minimum and Maximum in Array
// ------------------------------
function minMax(arr) {
    let min = arr[0], max = arr[0];
    for (let num of arr) {
        if (num < min) min = num;
        if (num > max) max = num;
    }
    return { min, max };
}
// Example:
console.log("23) minMax([3,7,1,9]) =", minMax([3,7,1,9]));


// ------------------------------
// 24) Menu-driven program using Switch
// ------------------------------
function menu(op, a, b) {
    switch (op) {
        case 1: return a + b;
        case 2: return a - b;
        case 3: return a * b;
        case 4: return b !== 0 ? a / b : Infinity;
        default: return "Invalid Option";
    }
}
// Example:
console.log("24) menu(1,5,4) =", menu(1,5,4));


// ------------------------------
// 25) Check Armstrong Number
// ------------------------------
function isArmstrong(n) {
    let sum = 0;
    let digits = n.toString().split('');
    let power = digits.length;

    for (let d of digits) {
        sum += Math.pow(Number(d), power);
    }

    return sum === n;
}
// Example:
console.log("25) isArmstrong(153) =", isArmstrong(153));

