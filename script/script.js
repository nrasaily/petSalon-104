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
    if(isValid(newPet)){
        petList.push(newPet);
        displayTable();
        clearInputs();
    }
    
}

function isValid(pet){
    let validation = true;
    if(pet.name===""){
        validation = false;
        alert("The name of the pet should not be empty");
    }
    if(pet.age==""){
        alert("The age of the pet should not be Empty");
    }

    if(pet.gender==""){
        alert(" should not be empty")

    }
    if(pet.breed==""){
    }
    if(pet.service==""){
        alert("should not be empty")
        
    }
    if(pet.type==""){
        
        alert("should not be empty")
    }
    return validation;
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
let pet1 = new Pet ("Scooby",65,"Male","dane", "mixed", "grooming", "dog");
let pet2 = new Pet ("Scrappy",55,"Male","Mixed", "hon", "cleaning", "dog")
let pet3 = new Pet ("Holy", 12, "male", "Mixed", "Nails", "cat")
//push the pets into the array

petList.push(pet1, pet2, pet3);
displayTable();

}

window.onload=init;// wait to render HTML
