// object constructure
// Object constructor

function Student(name,email,age){
    //properties = values
    this.name = name;
    this.email=email;
    this.age = age;
}
// creating the object

// let objName = new Constructor("value1","value2","value3");
let student1 = new Student("Leo","lmiranda@sdgku.edu",80);

console.log(student1);

let student2 = new student1("Pam","pam@gmail.com",80)
console.log(student2);

let student3 = new student1("Nar", "nar@gmial", 30)