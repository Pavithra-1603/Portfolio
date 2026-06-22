console.log("Portfolio Loaded");
const text = "MCA Graduate | Python Developer";
let i = 0;

function typeWriter(){
    if(i < text.length){
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter,100);
    }
}

typeWriter();