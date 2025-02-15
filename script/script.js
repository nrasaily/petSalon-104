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
        displayPetInfo();
        clearInputs();
        showAlert("A new pet was added", "success");
    }else{
        showAlert("Please, add all the information","danger");
    }
    
}

function isValid(pet){
    let validation = true;

    //reset the style
    inputName.classList.remove("error");
    inputAge.classList.remove("error");
    document.getElementById("alert-error").classList.add("hide");


    if(pet.name===""){
        validation = false;
        inputName.classList.add("error");
    }
    if(pet.age===""){
        validation = false;
        inputAge.classList.add("error");
    }
    if(pet.gender==""){
        validation = false;
        inputGender.classList.add("error");
    }
    if(pet.breed==""){
        validation = false;
        inputBreed.classList.add("error");
    }
    if(pet.service==""){
        validation = false;
        inputService.classList.add("error");
        }
    if(pet.type==""){
        validation = false;
        inputType.classList.add("error");
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

function deletePet(petId){
    //remove from html
    document.getElementById(petId).remove();

    //remove from the array splice()
    petList.splice(petId,1);


    //re-display the table
    displayTable();
    displayPetInfo();

    showAlert("The pet was deleted","warning");
}


function showAlert(msg,type){
    let alertContainer = document.getElementById("alertContainer");
    alertContainer.innerHTML`
    <div id="alert-error" class="alert alert-${type}" role="alert">
        ${msg}
    </div>
    `;
    setTimeout(()=>{
        document.getElementById("alert-error").remove();
    },3000);
}

function init(){
// create 3 pets
    let pet1 = new Pet ("Scooby",65,"Male","dane", "mixed", "grooming", "dog");
    let pet2 = new Pet ("Scrappy",55,"Male","Mixed", "hon", "cleaning", "dog")
    let pet3 = new Pet ("Holy", 12, "male", "Mixed", "Nails", "cat")
    //push the pets into the array

    petList.push(pet1, pet2, pet3);
    displayTable();
    displayPetInfo();
    document.getElementById("alert-error").classList.add("hide");
}

window.onload=init;
