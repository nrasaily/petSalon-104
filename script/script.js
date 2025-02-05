let petList=[]; // empty array

let petSalon = {
    name: "The fashion Pet",
    address:{
        street: "Palm Ave",
        zip: "22100"
    }
}

//getting html element
let inputName=document.getElementById("txtName")
let inputAge=document.getElementById("txtAge")
let inputGender=document.getElementById("txtGender")
let inputBreed=document.getElementById("txtBreed")
let inputService=document.getElementById("txtService")
let inputType=document.getElementById("txtType")

// constructor 
// name age gender breed service type
function Pet(name,age,gender,breed,service,type){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
    this.type=type;
}

function register(){
    // get the value from input
    
    //create object using constructor
    let newPet = new Pet(inputName.value,inputAge.value,inputGender.value,inputBreed.value,inputService.value,inputType.value)
    console.log(newPet);

    //push the object into the array
    petList.push(newPet);
    clearInputs();
}
function clearInputs(){
    inputName.value="";
    inputAge.value="";
    inputGender.value="";
    inputBreed.value="";
    inputService.value="";
    inputType.value="";
}
function init(){
// create 3 pets
let pet1 = new Pet ("Scooby",65,"Male","dane");
let pet2 = new Pet ("Scrappy",55,"Male","Mixed")
let pet3 = new Pet ("Holy", 12, "Mixed")
//push the pets into the array

petList.push(pet1, pet2, pet3);

}

window.onload=init;// wait to render HTML
