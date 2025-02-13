//constructor 



function Service(title,price){
    this.title=title;
    this.price=price;
}


function validService(service){
    let isValidTitle= true
    let isValidPrice= true
    
    if(service.title==""){
        isValidTitle = false;
        $("#texttitle").css("border","1px soled red");
        $("#titleRequirementText").show().css("color","red");
    }
    if(service.price==""){
        isValidTitle = false;
        $("#textprice").css("border","1px soled red");
        $("#priceRequirementText").show().css("color","red");
    }else{
        $("#textprice").css("border","1px soled black");
        $("#priceRequirementText").hide()

        $("#texttitle").css("border","1px soled black");
        $("#titleRequirementText").hide();
    }



    return isValidPrice && isValidTitle
}

function register(){
    console.log("A new service was added");

    let inputTitle=$("#txtTitle").val();
    let inputPrice=$("#txtPrice")

    let newService = new Service(inputTitle,inputPrice);
    if(validService(newService)==true){
        console.log("My service is valid");
        saveService(newService);
    
    
    }

}

function init(){
    //event handler
    // ...on("click" ... )
    $("#btnRegister").on("click",register);
   // let service = new Service("Grooming",30);
    //let service2 = new Service("Vaccines",20)
   // console.log(service,service2);
    //document.getElementById("myElement").classList.add("hidden");



    $("#titleRequirementText").hide();
    $("#priceRequirementText").hide();


}


window.onload=init;