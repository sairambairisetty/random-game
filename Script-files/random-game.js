// let num=Number(document.querySelector(".input_box").value=80);
let num;
let limited_score = 20;
const random = Math.floor(Math.random() * 10 + 1);
// console.log(random);
 document.querySelector(
    ".score_box"
  ).textContent = `Your Score : ${limited_score}`;
  let output = document.querySelector(".display_block");

document.querySelector(".check_button").addEventListener("click", function () {
  let element = Number(document.querySelector(".input_box").value);
  if (!element) {
    return;
  }
  document.querySelector(
    ".score_box"
  ).textContent = `Your Score : ${--limited_score}`;

  
  if (element > random) {
    output.textContent = "its high";
    output.style.backgroundColor = "red";
  }
  if (element < random) {
    output.textContent = "its low";
    output.style.backgroundColor = "red";
  }
  if (element === random) {
    output.textContent = `you got it${random}`;
    output.style.backgroundColor = "green";
  }
});
document.querySelector(".reset_button").addEventListener("click", function () {
  document.querySelector(
    ".score_box"
  ).textContent = `Your Score : ${(limited_score = 20)}`;
  document.querySelector('.input_box').value="";
    output.textContent=" ";
    output.style.backgroundColor="white";

 
});
