
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
