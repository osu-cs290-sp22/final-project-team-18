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


var btn1 = document.getElementById('button-1');
var btn2 = document.getElementById('button-2');
var btn3 = document.getElementById('button-3');
var btn4 = document.getElementById('button-4');

btn1.addEventListener('click', function handleClick() {
  btn1.innerHTML = "1"
});
btn2.addEventListener('click', function handleClick() {
    btn2.innerHTML = "2"
  });

  btn3.addEventListener('click', function handleClick() {
    btn3.innerHTML = "3"
  });
  btn4.addEventListener('click', function handleClick() {
    btn4.innerHTML = "4"
  });