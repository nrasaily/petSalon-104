console.log("welcom to FSD1 104")
// Global variable
let globalVariable = "I am a global variable";

function exampleFunction(){
    // local variable
    let localVariable = "I am a local variable";

    console.log(globalVariable);
    console.log(localVariable);
}
//exampleFunction();

////console.log(globalVariable);
//console.log(localVariable) this is local variable and it cannot be use outside

/*function printCohartInfo(course){
    let cohort = 55
    console.log("Ch-55", course: course);
}*/

//Arrays
let fruits = ["apple", "banana", "orange"];
console.log(`This is an array: ${fruits}`);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[0]);

fruits[1] = "cherry";
console.log(fruits)
console.log(fruits.length)



// addining and removing
fruits.push("watermelon") // adding to the end
fruits.unshift("grape") // adding from the beggining

console.log(fruits);

fruits.pop();
fruits.pop();
fruits.shift() // removing from beggining
console.log(fruits)

//challnge

/*
creat array of student names
use a for loop to iterate thriugh the array
log each students names
 */

let studentsnames = ["mike", "shyam", "Auha", "Arati", "Erika", "Donald", "Akah", "Kabir", "Mart", "Boju", "Baje", "Arjun"]
for( let i=0; i<=studentsnames.length; i++){
    console.log(studentsnames[i]);
    console.log(studentsnames[4]);
    console.log(studentsnames[6]);
    console.log(studentsnames[7]);
}


/* objects
// An object is a collection of key-value pairs. iallow you to group related data together in a structure way

let objectName={
key1: value1,
key2: value2,
key3: value3,
}
*/

let person = {
    name: "michael",
    lastName: "scott",
    age: 40,
    isStudent: false
}
console.log(`The person name is ${person.name} ${person.lastName} and he is ${person.age} years old and he is a ${person.isStudent}`)

//access the properties of an object
console.log(person.lastName);
console.log(person.age);
console.log(person.isStudent);
//example 2
let student1 = {
    name: "suri Biralo",
    email: "suri@gmail.com",
    age: 24,
    address: "111 suri avenue roch, USA"
}

let student2 = {
    name: "pam",
    email: "pam@gmail.com",
    age: 20,
    address: " 233 pam avenue, apartment 4b"
}
let student3 = {
    name: "sam",
    email: "sam@gmail.com",
    age: 40,
    address: " 233 sam avenue, Roc NY USA"
}

let student4 = {
    name: "peter",
    email: "peter@gmail.com",
    age: 26,
    address: "567 road avenue, roc, NY, USA"
}
let studentList = [student1, student2, student3, student4];

console.log("student list: ", studentList.lenght);

document.getElementById("studentCounter").innerHTML =`We have ${studentList.length} students`;

console.log(`Email: ${studentList[1].email}, address: ${studentList[1].address}`);

function getStudentName(){
    let list = document.getElementById("studentNames");
    for(let i=0; i<studentList.lenghth; i++){
        console.log(studentList[i].name);
    }
}
getStudentName();





