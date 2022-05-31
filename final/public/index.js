var start = document.getElementsByClassName("modal-start-button")[0]
var close = document.getElementsByClassName("modal-close-button")[0]
var modal_drop = document.getElementById("modal-backdrop")
var instructions = document.getElementById("instructions-modal")
var name = " "
var button_box = document.getElementsByClassName("fortune-button-box")[0]

var buttons = []

window.onload = function(){
  buttons = Array.from(document.getElementsByClassName('fortune-button'))
}

console.log("=== close", close)

close.addEventListener('click', function handleClick() {
    modal_drop.style.display = "none";
    instructions.style.display="none";
});

start.addEventListener('click', function handleClick() {
  modal_drop.style.display = "none";
  instructions.style.display="none";
  name = document.getElementById("name-input").value;
  
});

function changeBtn_value(btn,val){
 btn.innerText=val;
}


function changeInstruction(){
var instr=document.getElementsByClassName("fortune-button-box game-box");
instr.innerText="HELLO"
}
var numBtclicked=0;
var userFinalchoice=""

function changeBtn(btn,clicked){
  numBtclicked++
  if(btn.innerText=="1"){
    changeBtn_value(btn,"6")

  }
  else if(btn.innerText=="2"){
    changeBtn_value(btn,"8")

  }
  else if(btn.innerText=="3"){
    changeBtn_value(btn,"5")

  }
  else if(btn.innerText=="4"){
    changeBtn_value(btn,"7")

  }
  else if(btn.innerText=="5"){
    changeBtn_value(btn,"4")
  }
  else if(btn.innerText=="6"){
    changeBtn_value(btn,"3")

  }
  else if(btn.innerText=="7"){
    changeBtn_value(btn,"2")

  }
  else if(btn.innerText=="8"){
    changeBtn_value(btn,"1")
  }
  else if(btn.innerText=="Sunshiney Blue"){
    changeBtn_value(btn,"1")

  }
  else if(btn.innerText=="Toxic Positivity Pink"){
    changeBtn_value(btn,"2")

  }
  else if(btn.innerText=="Morally Gray"){
    changeBtn_value(btn,"3")

  }
  else if(btn.innerText=="Indecisively(?) White"){
    changeBtn_value(btn,"4")
  }
  if(numBtclicked == 12){
    userFinalchoice = clicked.innerText
    displayFortune()
    console.log("==user string",userFinalchoice);
  }
}


var btn1 = document.getElementById('button-1');
var btn2 = document.getElementById('button-2');
var btn3 = document.getElementById('button-3');
var btn4 = document.getElementById('button-4');
var onStart=document.getElementsByClassName("modal-start-button")[0];

btn1.addEventListener('click', function handleClick() {
  changeBtn(btn1,btn1)
  changeBtn(btn2,btn1)
  changeBtn(btn3,btn1)
  changeBtn(btn4,btn1)
});
btn2.addEventListener('click', function handleClick() {
  changeBtn(btn1,btn2)
  changeBtn(btn2,btn2)
  changeBtn(btn3,btn2)
  changeBtn(btn4,btn2)
  });

btn3.addEventListener('click', function handleClick() {
  changeBtn(btn3,btn3)
  changeBtn(btn1,btn3)
  changeBtn(btn2,btn3)
  changeBtn(btn4,btn3)
});

btn4.addEventListener('click', function handleClick() {
  changeBtn(btn4,btn4)
  changeBtn(btn3,btn4)
  changeBtn(btn2,btn4)
  changeBtn(btn1,btn4)
});


function displayFortune(){
  console.log("works")
  // document.getElementsByClassName("fortune-container")[0].style.display = "none"
  for(var i = 0; i < buttons.length; i++){
    button_box.removeChild(buttons[i])
  }

  //get fortune to display when the button is clicked 
  //handlebars for displaying the fortune (pass in json)
  //pass name in from index.js to a json file? 

  var reveal_fortunebtn = document.createElement('button')
  reveal_fortunebtn.innerText = "Reveal Fortune"
  reveal_fortunebtn.classList.add('fortune-button')
  fortune_container.appendChild(reveal_fortunebtn)

}

  // var userName=""
  // onStart.addEventListener('click', function handleClick() {
  //   userName=document.getElementById("name-input").value;
  // });
