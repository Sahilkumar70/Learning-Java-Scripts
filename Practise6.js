// Create a new button element give it a text "click me", background color or red text color of white. 
// insert the button as the first element inside the body tag.? 

let newbtn = document.createElement("button");
newbtn.innerHTML = "Click Me";
newbtn.style.backgroundColor = "red";
newbtn.style.color = "white";
 
document.querySelector("body").prepend(newbtn);
