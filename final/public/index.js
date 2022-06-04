var start = document.getElementsByClassName("modal-start-button")[0]
var close = document.getElementsByClassName("modal-close-button")[0]
var modal_drop = document.getElementById("modal-backdrop")
var instructions = document.getElementById("instructions-modal")
var modal_drop2 = document.getElementById("modal-backdrop2")
var create = document.getElementById("create-fortune-modal")
var name = " "
var color = -1
var first_num = -1
var second_num = -1
var fortune_card = document.getElementsByClassName("fortune-card")[0]
var fortune_container = document.getElementsByClassName("fortune-container")[0]
var colors = ["Sunshiney Blue","Toxic Positivity Pink","Morally Gray","Indecisively(?) White"];

var instBt = document.getElementById("navlink-instructions")

instBt.addEventListener('click', function handleClick(event) {
  console.log("hello!")
  modal_drop.style.display = "block";
  instructions.style.display="block";
  document.getElementsByClassName("name-input-element")[0].style.display="none";
  start.style.display="none";
  event.preventDefault()
});


var addFortBt = document.getElementById("navlink-create")

addFortBt.addEventListener('click', function handleClick(event) {
  console.log("hello!")
  modal_drop2.style.display = "block";
  create.style.display="block";
  event.preventDefault()
});

var btn1 = document.getElementById('button-1');
var btn2 = document.getElementById('button-2');
var btn3 = document.getElementById('button-3');
var btn4 = document.getElementById('button-4');
var onStart=document.getElementsByClassName("modal-start-button")[0];

window.onload = function(){

  btn1.innerText = colors[0]
  btn2.innerText = colors[1]
  btn3.innerText = colors[2]
  btn4.innerText = colors[3]

}

btn1.addEventListener('click', color_button_click);
btn2.addEventListener('click', color_button_click);
btn3.addEventListener('click', color_button_click);
btn4.addEventListener('click', color_button_click);

close.addEventListener('click', function handleClick() {
    modal_drop.style.display = "none";
    instructions.style.display="none";
});

start.addEventListener('click', function handleClick() {
  var name_input = document.getElementById("name-input").value;
  if(name_input==""){
    alert("Please enter a name to begin.")
  }
  else{
    modal_drop.style.display = "none";
    instructions.style.display="none";
    name=name_input
  }

  log_vars();

});

function color_button_click(index) {
  // todo get button that was clicked
  // store text of button in volor variable

  var color_button = event.target
  color = color_button.innerText
  log_vars();

  btn1.addEventListener('click', number_button_click);
  btn2.addEventListener('click', number_button_click);
  btn3.addEventListener('click', number_button_click);
  btn4.addEventListener('click', number_button_click);

  var nums = generate_randnums(8, 4)

  btn1.innerText = nums[0]
  btn2.innerText = nums[1]
  btn3.innerText = nums[2]
  btn4.innerText = nums[3]

}

function log_vars(){
  console.log("-----------------------");
  console.log("name: ", name);
  console.log("color: ", color);
  console.log("first num: ", first_num);
  console.log("second num:", second_num);
  console.log("-----------------------");
}

function number_button_click(index){

  var num_button = event.target
  if(first_num === -1){
    first_num = num_button.innerText
  } else if(second_num === -1){
    second_num = num_button.innerText
  } else{
    var url = document.URL
    url = url + name + "/"+ (color-1)
    console.log("new url: ", url)
    window.location.href = url
    return;
  }

  log_vars();

  var nums = generate_randnums(8, 4)

  btn1.innerText = nums[0]
  btn2.innerText = nums[1]
  btn3.innerText = nums[2]
  btn4.innerText = nums[3]

}

function generate_randnums(max_val, size){
  var rand_nums = [];
  while(rand_nums.length < size){
    var r = Math.floor(Math.random()* max_val) + 1;
    if(rand_nums.indexOf(r) === -1) rand_nums.push(r);
  }


  return rand_nums


}
