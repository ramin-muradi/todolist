//check inp


//clicking btn
let button = document.querySelector(".btn");
let inp = document.querySelector(".input-box");
let inpValue = inp.value.trim();
button.addEventListener("click", btnclicked);
function btnclicked() {
    console.log("ok");
    if (inpValue.trim() === "" || inpValue === null) {
        alert("لطفا فیلد را خالی نگذارید!");
    } else {
        console.log("ok!");
    }
}
