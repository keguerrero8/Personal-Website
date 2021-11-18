const button = document.getElementsByClassName("buttonBox");
const popup = document.getElementsByClassName("popup")
const closebutton = document.getElementsByClassName("closebutton");
const overlay = document.getElementById("overlay"); 

for (let i=0; i < button.length; i++) {
    button[i].addEventListener("click", function () { 
        overlay.style.display = "initial"
        popup[i].style.display = "initial"
    })

    closebutton[i].addEventListener("click", function () { 
        overlay.style.display = "none"
        popup[i].style.display = "none"
    })
}





