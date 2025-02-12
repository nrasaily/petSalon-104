function displayPet(){
    let cardSection = document.getElementById("petNames");
    let result ="";

    for(let i=0; i<petList.length; i++){
        let pet = petList[i];
        result += `
        <div id=${i} class="card" style="width: 18rem;">
        
            <div class="card-body">
                <h5 class="card-title"> Name: ${pet.name}</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">Age: ${pet.age}</h6>
                <p class="card-text">Gender: ${pet.gender}</p>
                <p class="card-text">Breed: ${pet.breed}</p>
            
            </div>
        </div>
        `
    }
    cardSection.innerHTML = result;
}

function displayTable(){
    let petRows = document.getElementById("petRows");
    let rows="";
    for(let i=0; i<petList.length; i++){
        let pet = petList[i];
    rows +=`
    <tr id=${i}>
        <td>${pet.name}</td>
        <td>${pet.age}</td>
        <td>${pet.gender}</td>
        <td>${pet.breed}</td>
        <td>${pet.service}</td>
        <td>${pet.type}</td>
    `;
    }
    petRows.innerHTML=rows;
}
