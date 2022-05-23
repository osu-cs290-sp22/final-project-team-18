var start = document.getElementsByClassName("modal-start-button")[0]
var close=document.getElementsByClassName("modal-close-button ")[0]
var modal_drop= document.getElementById("modal-backdrop")
var instructions=document.getElementById("instructions-modal")

start.onclick = function() {
    modal_drop.style.display = "none";
    instructions.style.display="none";
}

close.onclick = function() {
    modal_drop.style.display = "none";
    instructions.style.display="none";
}