
//open aside
let aside = document.querySelector('aside')

function openSide(){
  aside.style.right = '0';
}
function closeSide(){
  aside.style.right = '-200%';
}

let passInput = document.getElementById("pass");
let errorMsg = document.getElementById("errorMsg");
let passConfirm = document.getElementById("passConfirm");
let confirmMsg = document.getElementById("confirmMsg");

confirmMsg.style.display = "none"; // Hide confirmMsg initially

function signUp() {
  errorMsg.style.display = "none"; // Hide errorMsg on each button press

  if (passInput.value.length < 8 && passInput.value.length > 0) {
    errorMsg.style.display = "block";
}
  
  if (passConfirm.value !== passInput.value && passConfirm.value.length > 0) {
    confirmMsg.style.display = "block";
  } else {
    confirmMsg.style.display = "none";
  }
}