/*Things to include in website:

About me personally - husband, queens, power lifter, gamer, marvel and anime lover (maybe put video up of a lift?)
Professional life - SBU BME, Siemens Engineer, now trying to be SW developer
Resume
Links (contact me) -  email and social media links - linkedin, twitter, GitHub
Pictures?
Projects? Can leave this blank for now
*/


const button = document.getElementById("button1");
const popup = document.getElementById("popup")
const closebutton = document.getElementById("closebutton");
const overlay = document.getElementById("overlay");

button.addEventListener("click", function () { 
    overlay.style.display = "initial"
    popup.style.display = "initial"
})

closebutton.addEventListener("click", function () { 
    overlay.style.display = "none"
    popup.style.display = "none"})


