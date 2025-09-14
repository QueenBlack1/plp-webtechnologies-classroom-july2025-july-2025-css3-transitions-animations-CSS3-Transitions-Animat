function multiplyNumbers(a, b) {
  return a * b;
}

let globalVar = "I am global!";

function showScope() {
  let localVar = "I am local!";
  console.log(globalVar); // Accessible
  console.log(localVar);  // Accessible only here
}

document.getElementById("calc-btn").addEventListener("click", function() {
  let result = multiplyNumbers(10, 3); 
  document.getElementById("calc-result").textContent = "10 × 3 = " + result;
  showScope();
});

const animateBtn = document.getElementById("animate-btn");
const box = document.querySelector(".box-to-animate");

animateBtn.addEventListener("click", function() {
  box.classList.toggle("animate");
});
