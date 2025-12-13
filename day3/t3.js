
let student={
    name:"daksh",
    age:21,
    course:"js"
};

console.log(student.name)
console.log(student.age)
console.log(student.course)

student.city="delhi";
delete student.age;

console.log(student.name)
console.log(student.age)
console.log(student.course)
console.log(student.city)

for(let key in student){
console.log(key,student[key]);
}



let person={
    name:"daksh",
    age:23,
    address:{city:"prayagraj",pin:211008}
};
console.log("old City:", person.address.city);

person.address.city = "Mumbai";

console.log("Updated City:", person.address.city);


// Create a normal JavaScript object
let student = {
    name: "Rahul",
    age: 22,
    course: "JavaScript"
};

// TASK 15: Convert object to JSON string
let jsonString = JSON.stringify(student);

// Print JSON string
console.log("JSON String:");
console.log(jsonString);

// TASK 16: Convert JSON string back to object
let objectAgain = JSON.parse(jsonString);

// Print converted object
console.log("Converted Back Object:");
console.log(objectAgain);

// Access values after conversion
console.log("Name:", objectAgain.name);
console.log("Age:", objectAgain.age);
console.log("Course:", objectAgain.course);
