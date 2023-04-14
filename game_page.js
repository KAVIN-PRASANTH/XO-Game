let val = document.querySelectorAll(".all");
let congratulation_img1 = document.getElementById("congratulation_img1");
let congratulation_img2 = document.getElementById("congratulation_img2");
let congratulation_text = document.getElementById("congratulation_text");
let round = document.getElementById("round");
let button = document.getElementById("button");
let playername_xo_box = document.getElementById("table2_playernames");
let score_player1 = document.querySelectorAll(".p1");
let table1_name_value = document.querySelectorAll(".table1_allclass");

let player1_name, player2_name, NumberOfRounds;
let score_count_x = 0, score_count_o = 0;
let count = 0, round_count = 1, sol;
var arr = [];

NumberOfRounds = sessionStorage.getItem('Rounds');
player1_name = sessionStorage.getItem('player_one');
player2_name = sessionStorage.getItem('player_two');



playername_xo_box.innerHTML = player1_name + "---X" + "&nbsp;&nbsp;&nbsp;&nbsp;" + "vs" + "&nbsp;&nbsp;&nbsp;&nbsp;" + player2_name + "---O";

table1_name_value[0].innerHTML = player1_name;

table1_name_value[2].innerHTML = player2_name;


function box(a) {
  let variable = val[a].innerHTML;
  if (variable == '') {
    //swaping x and y
    if (count % 2 == 0) {
      sol = "X";

    }
    else {
      sol = "O";
    }
    val[a].innerHTML = sol;
    count++;
    //assign x and y to particular index of a new array
    arr[a] = sol;
  }
  //finish button setting
  if (NumberOfRounds == 1 &&round_count == 1|| (NumberOfRounds == 2 && round_count == 2) || (NumberOfRounds == 3 && round_count == 3)) {
    button.innerHTML = "FINISH";
  }
  else {
    button.innerHTML = "NEXT ROUND";
  }

  // ...........validation part........................
  // winner checking for X part
  if (arr[0] == 'X' && arr[1] == 'X' && arr[2] == 'X') {
    for (i = 0; i < 3; i++) {
      val[i].style.backgroundColor = "green";
      val[i].style.color = "blue";
      val[i].style.transition = ".2s";
    }
    congratulation_img1.style.display = "none";
    congratulation_img2.style.display = "block";
    congratulation_text.innerHTML = "╰☆☆ 𝕽𝖔𝖚𝖓𝖉 ☆☆╮" + round_count + "<br>" + "&nbsp;&nbsp;☆𝖜𝖎𝖓𝖓𝖊𝖗☆:" + player1_name;
    congratulation_text.style.color = "white";
    congratulation.style.transition = ".2s";
    button.style.display = "block";
    score_count_x++;
    table1_name_value[1].innerHTML = score_count_x;
  }
  else if (arr[3] == 'X' && arr[4] == 'X' && arr[5] == 'X') {
    for (i = 3; i < 6; i++) {
      val[i].style.backgroundColor = "green";
      val[i].style.color = "blue";
      val[i].style.transition = ".2s";
    }
    congratulation_img1.style.display = "none";
    congratulation_img2.style.display = "block";
    congratulation_text.innerHTML = "WINNER IS:" + player1_name;
    congratulation_text.style.color = "white";
    congratulation.style.transition = ".2s";
    button.style.display = "block";
    score_count_x++;
    table1_name_value[1].innerHTML = score_count_x;
  }
  else if (arr[6] == 'X' && arr[7] == 'X' && arr[8] == 'X') {
    for (i = 6; i < 9; i++) {
      val[i].style.backgroundColor = "green";
      val[i].style.color = "blue";
      val[i].style.transition = ".2s";
    }
    congratulation_img1.style.display = "none";
    congratulation_img2.style.display = "block";
    congratulation_text.innerHTML = "WINNER IS:" + player1_name;
    congratulation_text.style.color = "white";
    congratulation.style.transition = ".2s";
    button.style.display = "block";
    score_count_x++;
    table1_name_value[1].innerHTML = score_count_x;
  }
  //---------------vertical-------------------------
  else if (arr[0] == 'X' && arr[3] == 'X' && arr[6] == 'X') {
    for (i = 0; i < 7; i++) {
      val[i].style.backgroundColor = "green";
      val[i].style.color = "blue";
      val[i].style.transition = ".2s";
      i = i + 2;
    }
    congratulation_img1.style.display = "none";
    congratulation_img2.style.display = "block";
    congratulation_text.innerHTML = "WINNER IS:" + player1_name;
    congratulation_text.style.color = "white"; congratulation.style.transition = ".2s";
    button.style.display = "block";
    score_count_x++;
    table1_name_value[1].innerHTML = score_count_x;
  }
  else if (arr[1] == 'X' && arr[4] == 'X' && arr[7] == 'X') {
    val[1].style.backgroundColor = "green";
    val[1].style.color = "blue";
    val[1].style.transition = ".2s";

    val[4].style.backgroundColor = "green";
    val[4].style.color = "blue";
    val[4].style.transition = ".2s";

    val[7].style.backgroundColor = "green";
    val[7].style.color = "blue";
    val[7].style.transition = ".2s";

    congratulation_img1.style.display = "none";
    congratulation_img2.style.display = "block";
    congratulation_text.innerHTML = "WINNER IS:" + player1_name;
    congratulation_text.style.color = "white";
    congratulation.style.transition = ".2s";
    button.style.display = "block";
    score_count_x++;
    table1_name_value[1].innerHTML = score_count_x;

  }
  else if (arr[2] == 'X' && arr[5] == 'X' && arr[8] == 'X') {
    for (i = 2; i < 9; i++) {
      val[i].style.backgroundColor = "green";
      val[i].style.color = "blue";
      val[i].style.transition = ".2s";
      i = i + 2;
    }
    congratulation_img1.style.display = "none";
    congratulation_img2.style.display = "block";
    congratulation_text.innerHTML = "WINNER IS:" + player1_name;
    congratulation_text.style.color = "white";
    congratulation.style.transition = ".2s";
    button.style.display = "block";
    score_count_x++;
    table1_name_value[1].innerHTML = score_count_x;

  }
  else if (arr[0] == 'X' && arr[4] == 'X' && arr[8] == 'X') {
    for (i = 0; i < 9; i++) {
      val[i].style.backgroundColor = "green";
      val[i].style.color = "blue";
      val[i].style.transition = ".2s";
      i = i + 3;
    }
    congratulation_img1.style.display = "none";
    congratulation_img2.style.display = "block";
    congratulation_text.innerHTML = "WINNER IS:" + player1_name;
    congratulation_text.style.color = "white";
    congratulation.style.transition = ".2s";
    button.style.display = "block";
    score_count_x++;
    table1_name_value[1].innerHTML = score_count_x;
  }
  else if (arr[2] == 'X' && arr[4] == 'X' && arr[6] == 'X') {
    for (i = 2; i <= 6;) {
      val[i].style.backgroundColor = "green";
      val[i].style.color = "blue";
      val[i].style.transition = ".2s";
      i = i + 2;
    }
    congratulation_img1.style.display = "none";
    congratulation_img2.style.display = "block";
    congratulation_text.innerHTML = "WINNER IS:" + player1_name;
    congratulation_text.style.color = "white";
    //congratulation.style.transition=".2s";
    button.style.display = "block";
    //i=i+1;
    score_count_x++;
    table1_name_value[1].innerHTML = score_count_x;

  }
  //---------------------------------------------------------------------------------------------------------------------------------------//
  // winner checking for O part

  //-----------------Horizontal-------------------------------------//
  else if (arr[0] == 'O' && arr[1] == 'O' && arr[2] == 'O') {
    for (i = 0; i < 3; i++) {
      val[i].style.backgroundColor = "green";
      val[i].style.color = "blue";
      val[i].style.transition = ".2s";
    }
    congratulation_img1.style.display = "none";
    congratulation_img2.style.display = "block";
    congratulation_text.innerHTML = "WINNER IS:" + player2_name;
    congratulation_text.style.color = "white";
    congratulation.style.transition = ".2s";
    button.style.display = "block";
    score_count_o++;
    table1_name_value[3].innerHTML = score_count_o;
  }
  else if (arr[3] == 'O' && arr[4] == 'O' && arr[5] == 'O') {
    for (i = 3; i < 6; i++) {
      val[i].style.backgroundColor = "green";
      val[i].style.color = "blue";
      val[i].style.transition = ".2s";
    }
    congratulation_img1.style.display = "none";
    congratulation_img2.style.display = "block";
    congratulation_text.innerHTML = "WINNER IS:" + player2_name;
    congratulation_text.style.color = "white";
    congratulation.style.transition = ".2s";
    button.style.display = "block";
    score_count_o++;
    table1_name_value[3].innerHTML = score_count_o;
  }
  else if (arr[6] == 'O' && arr[7] == 'O' && arr[8] == 'O') {
    for (i = 6; i < 9; i++) {
      val[i].style.backgroundColor = "green";
      val[i].style.color = "blue";
      val[i].style.transition = ".2s";
    }
    congratulation_img1.style.display = "none";
    congratulation_img2.style.display = "block";
    congratulation_text.innerHTML = "WINNER IS:" + player2_name;
    congratulation_text.style.color = "white";
    congratulation.style.transition = ".2s";
    button.style.display = "block";
    score_count_o++;
    table1_name_value[3].innerHTML = score_count_o;

  }
  //---------------vertical----------------//
  else if (arr[0] == 'O' && arr[3] == 'O' && arr[6] == 'O') {
    for (i = 0; i < 7; i++) {
      val[i].style.backgroundColor = "green";
      val[i].style.color = "blue";
      val[i].style.transition = ".2s";
      i = i + 2;
    }
    congratulation_img1.style.display = "none";
    congratulation_img2.style.display = "block";
    congratulation_text.innerHTML = "WINNER IS:" + player2_name;
    congratulation_text.style.color = "white";
    congratulation.style.transition = ".2s";
    button.style.display = "block";
    score_count_o++;
    table1_name_value[3].innerHTML = score_count_o;
  }
  else if (arr[1] == 'O' && arr[4] == 'O' && arr[7] == 'O') {

    for (i = 1; i <= 7;) {
      val[i].style.backgroundColor = "green";
      val[i].style.color = "blue";
      val[i].style.transition = ".2s";
      i = i + 3;
    }
    /* val[4].style.backgroundColor="green";
     val[4].style.color="blue";
     val[4].style.transition=".2s";

     val[7].style.backgroundColor="green";
     val[7].style.color="blue";
     val[7].style.transition=".2s";*/
    congratulation_img1.style.display = "none";
    congratulation_img2.style.display = "block";
    congratulation_text.innerHTML = "WINNER IS:" + player2_name;
    congratulation_text.style.color = "white";
    congratulation.style.transition = ".2s";
    button.style.display = "block";
    score_count_o++;
    table1_name_value[3].innerHTML = score_count_o;

  }
  else if (arr[2] == 'O' && arr[5] == 'O' && arr[8] == 'O') {
    for (i = 2; i < 9; i++) {
      val[i].style.backgroundColor = "green";
      val[i].style.color = "blue";
      val[i].style.transition = ".2s";
      i = i + 2;
    }
    congratulation_img1.style.display = "none";
    congratulation_img2.style.display = "block";
    congratulation_text.innerHTML = "WINNER IS:" + player2_name;
    congratulation_text.style.color = "white";
    congratulation.style.transition = ".2s";
    button.style.display = "block";
    score_count_o++;
    table1_name_value[3].innerHTML = score_count_o;

  }
  else if (arr[0] == 'O' && arr[4] == 'O' && arr[8] == 'O') {
    for (i = 0; i < 9; i++) {
      val[i].style.backgroundColor = "green";
      val[i].style.color = "blue";
      val[i].style.transition = ".2s";
      i = i + 3;
    }
    congratulation_img1.style.display = "none";
    congratulation_img2.style.display = "block";
    congratulation_text.innerHTML = "WINNER IS:" + player2_name;
    congratulation_text.style.color = "white";
    congratulation.style.transition = ".2s";
    button.style.display = "block";
    score_count_o++;
    table1_name_value[3].innerHTML = score_count_o;
  }
  else if (arr[2] == 'O' && arr[4] == 'O' && arr[6] == 'O') {
    for (i = 2; i <= 6;) {
      val[i].style.backgroundColor = "green";
      val[i].style.color = "blue";
      val[i].style.transition = ".2s";
      i = i + 2;
    }
    congratulation_img1.style.display = "none";
    congratulation_img2.style.display = "block";
    congratulation_text.innerHTML = "WINNER IS:" + player2_name;
    congratulation_text.style.color = "white";
    congratulation.style.transition = ".2s";
    button.style.display = "block";
    i = i + 1;
    score_count_o++;
    table1_name_value[3].innerHTML = score_count_o;
  }
  else if (count == 9) {

    if (NumberOfRounds == 1) {
      alert("MATCH DRAW");
      window.open('index.html', '_self');

    }
    else {
      alert("MATCH DRAW");
      button.style.display = "block";
     
    }

  }
}

function next_round() {
  for (i = 0; i < 9; i++) {
    val[i].innerHTML = '';
    val[i].style.backgroundColor = "black";
    arr[i] = 0;
    val[i].style.color = "white";
  }
  if (round_count == NumberOfRounds) {
    var player1_score = table1_name_value[1].innerHTML;
    var player2_score = table1_name_value[3].innerHTML;
    if (player1_score > player2_score) {
      alert(player1_name + " is the final winner");
      window.open('index.html', '_self');
    }
    else if (player1_score == player2_score) {

      alert("FINALLY MATCH  DRAW");
      window.open('index.html', '_self');

    }
    else {
      alert(player2_name + " is the final winner");
      window.open('index.html', '_self');
    }
  }
  round_count++;
  round.innerHTML = "╰☆☆ 𝕽𝖔𝖚𝖓𝖉 ☆☆╮" + round_count;
  button.style.display = "none";
  count = 0;
  congratulation_img1.style.display = "block";
  congratulation_img2.style.display = "none";
  congratulation_text.innerHTML = "TIME IS GOING";
}



