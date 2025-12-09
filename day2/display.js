// initial declarations (from your notes)
let a = 23;
var b = 21;
const c = 78;
d = 88; // implicit global (not recommended but matches the note)

// 1) Display all values
console.log("Initial values -> a, b, c, d:", a, b, c, d);

// 2) Try to change value of each & show error message if any
// (we'll update and catch errors where needed)
try {
  a = 30;              // allowed: let can be reassigned
  console.log("a changed to", a);
} catch (e) {
  console.error("Error changing a:", e.message);
}

try {
  b = 40;              // allowed: var can be reassigned
  console.log("b changed to", b);
} catch (e) {
  console.error("Error changing b:", e.message);
}

try {
  c = 90;              // NOT allowed: const cannot be reassigned --> throws TypeError
  console.log("c changed to", c);
} catch (e) {
  console.error("Error changing c:", e.message);
}

try {
  d = 100;             // allowed: implicit global can be reassigned
  console.log("d changed to", d);
} catch (e) {
  console.error("Error changing d:", e.message);
}

// show values after attempted changes
console.log("Values after attempted changes -> a, b, c, d:", a, b, c, d);

// 3) Redeclare variable with same name & initialize with new value & display output
// Note: redeclare rules:
//   - var can be redeclared in same scope
//   - let and const cannot be redeclared in the same scope (SyntaxError if tried)
//   - you *can* declare let/const with the same name inside a new block

// Redeclare var (works)
var b = 999;
console.log("After redeclaring var b:", b);

// Redeclare let in same scope -> will cause a SyntaxError if written directly.
// To demonstrate safely, show a block scope redeclaration (this is allowed):
{
  let a = 500;    // new block scope, different from outer 'a'
  console.log("Inside block: redeclared let a =", a);
}
console.log("Outside block: original let a remains =", a);

// Redeclare const in a new block (allowed there)
{
  const c = 777;
  console.log("Inside block: new const c =", c);
}
// outside block original c is unchanged
console.log("Outside block: original const c remains =", c);

// Attempting to redeclare let/const in same scope (uncommenting the lines below
// in the same scope would throw a SyntaxError at parse time):
// let a = 600;    // SyntaxError: Identifier 'a' has already been declared
// const c = 800;  // SyntaxError: Identifier 'c' has already been declared


// Short explanation / takeaways (be blunt)

// let and var can be reassigned. const cannot.

// var can be redeclared in the same scope; let and const cannot be redeclared in the same
//  scope (that throws a SyntaxError).

// You can declare let/const with the same name inside a new block ({ ... }) — that 
// creates a new separate variable scoped to that block.

// d = 88 without var/let/const creates an implicit global in non-strict mode —
//  avoid this in real code; always declare variables explicitly.

