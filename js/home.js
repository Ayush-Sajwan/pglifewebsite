// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("signclose")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "flex";
    modal.style.alignItems = "flex-start";
    modal.style.justifyContent = "center";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}




// Get the modal
var loginmodal = document.getElementById("logModal");

// Get the button that opens the modal
var loginbtn = document.getElementById("button");


// Get the <span> element that closes the modal
var logspan = document.getElementsByClassName("loginclose")[0];

// When the user clicks on the button, open the modal
loginbtn.onclick = function() {
    loginmodal.style.display = "flex";
    loginmodal.style.alignItems = "flex-start";
    loginmodal.style.justifyContent = "center";
}

// When the user clicks on <span> (x), close the modal
logspan.onclick = function() {
    loginmodal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == loginmodal) {
        loginmodal.style.display = "none";
    }
}

let ham=document.getElementsByClassName('hamburger');

let nav=document.getElementsByClassName('navbuttons');

let patty1=document.querySelector(".patty1");
let patty2=document.querySelector(".patty2");
let patty3=document.querySelector(".patty3");

function change(){

    if(patty1.className=="patty1 newpatty1"){
        patty1.className="patty1";
        patty3.className="patty3";
        patty2.style.opacity="1";

    }
    else{
    patty1.className="patty1 newpatty1";
    patty3.className="patty3 newpatty3";
    patty2.style.opacity="0";
    }
}

ham[0].onclick=()=>{

    change();
    if(nav[0].style.display=="block"){
        nav[0].style.display="none";
    }
    else{
        nav[0].style.display="block"; 
       
    }
}


function checkMediaQuery() {
    // If the inner width of the window is greater then 768px
    if (window.innerWidth > 769 ) {
      nav[0].style.display="flex";
    }
    else if(window.innerWidth <769){
        nav[0].style.display="none";
    }
  }
  
  // Add a listener for when the window resizes
  window.addEventListener('resize', checkMediaQuery);