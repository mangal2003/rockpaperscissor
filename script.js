var rockuser = document.getElementById("rockop");
var paperuser = document.getElementById("paperop");
var scissoruser = document.getElementById("scissorop");
var blank = document.getElementById("blank1");
var blank2 = document.getElementById("blank2");

function rock() {
  rockuser.style.display = "block";
  scissoruser.style.display = "none";
  paperuser.style.display = "none";
  blank.style.display = "none";
  cpu(0);
}

function paper() {
  paperuser.style.display = "block";
  scissoruser.style.display = "none";
  rockuser.style.display = "none";
  blank.style.display = "none";
  cpu(1);
}
function scissor() {
  paperuser.style.display = "none";
  scissoruser.style.display = "block";
  rockuser.style.display = "none";
  blank.style.display = "none";
  cpu(2);
}

function cpu(selection) {
  var id = ["rockcpu", "papercpu", "scissorcpu"];
  var index = Math.floor(Math.random() * 3);
  takeId = id[index];
  var hide1 = document.getElementById("rockcpu");
  var hide2 = document.getElementById("papercpu");
  var hide3 = document.getElementById("scissorcpu");
  hide1.style.opacity = 0;
  hide2.style.opacity = 0;
  hide3.style.opacity = 0;
  blank2.style.opacity = 0;
  var show = document.getElementById(`${takeId}`);
  show.style.opacity = 1;
  let declare = document.getElementById("declare");
  setTimeout(() => {
    if (selection === index) {
      declare.innerHTML = "Match Draw..!";
    }
    if (selection == 0 && index == 1) {
      declare.innerHTML = "CPU WINS..!🤩🥳";
    }
    if (selection == 0 && index == 2) {
      declare.innerHTML = "YOU WINS..!🤩🥳";
    }
    if (selection == 1 && index == 0) {
      declare.innerHTML = "YOU WINS..!🤩🥳";
    }
    if (selection == 1 && index == 2) {
      declare.innerHTML = "CPU WINS..!🤩🥳";
    }
    if (selection == 2 && index == 0) {
      declare.innerHTML = "CPU WINS..!🤩🥳";
    }
    if (selection == 2 && index == 1) {
      declare.innerHTML = "YOU WINS..!🤩🥳";
    }
    setTimeout(() => {
      declare.innerHTML = "🙄🙄🙄";
    }, 800);
  }, 500);
}
