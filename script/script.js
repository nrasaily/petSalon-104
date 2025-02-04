let petSalon = {
    name: "The fashion Pet",
    address:{
        street: "Palm Ave",
        zip: "22200"
    }
}

let pet1={
    name: "Scooby",
    age: 66,
    gender: "male",
}
let pet2={
    name: "Scrapy",
    age: 99,
    gender: "male"
}
let pet3={
    name:"Suri",
    age: 77,
    gender: "male",
}

let petList = [pet1, pet2, pet3];

document.getElementById("petCounter").innerHTML = `we have ${petList.length} pets`;
function getPetName(){
    let list = document.getElementById("petNames");
    for(let i=0; i<petList.length; i++){
        console.log(petList[i].name);
        list.innerHTML+= `<li>${petList[i].name}</li>`
    }
}

getPetName();

