console.log("Welcome to jQuery");

//js vs jQuery(getting element)
//byId

let htmlElemt = document.getElementById("results");
HTMLElement=$("#results");




//tagname
let htmlElements2 = document.getElementsByTagName("p");
htmlElements2 = $("p");

//byClassName
let htmlElements3 = document.getElementsByClassName ("bg-tomato");
htmlElements3 = $(".bg-tomato");


//Id Selectors
let redParagraph = $("#red").css("background", "red").css("color", "white");

console.log("my red paragrapg", redParagraph);

let blueParagraph = $("#blue").css({
    "background-color": "blue",
    "color": "white"
});

//


// Class selector

    let paragrapgWithBorder = $(".with-border");
    paragrapgWithBorder.css("border","5px solod black");

    paragrapgWithBorder.on("click",function(){
        console.log("clicked");
        $(".with-border").addClass("bg-gray")
    });

// Tag selector
    let paragraphs = $("p");
    paragrapghs.css("cursor","pointer");


function register(){
    let testEntry = $("#testInput").val();
    $("results").append(`<li>${testEntry}</li>`)
}

$("#btnRegister").on("click",register);

("#btnNew").on("click",Click Me)