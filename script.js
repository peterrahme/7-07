// connects "Multiple" button to "Multiple" function
document.getElementById('button').addEventListener('click', multiple)
let total = 0
let first = 0
let second = 0

function multiple () {
  // converting  first, and second to integers
  first = document.getElementById('input').value
  first = parseInt(first)
  second = document.getElementById('enter').value
  second = parseInt(second)
  // This runs loops until set rules are complete 
  for (first; first>0; first --){
  total = total + second
  }
  alert(total)
}
