var input1 = document.getElementById('input1');
var btn1 = document.getElementById('btn1');

var readInput = function() {
  console.log(input1.value);
}



var btn2 = document.createElement('button');
btn2.innerHTML = "버튼2";

btn2.onclick = readInput;

var test = document.getElementById('test');
test.appendChild(document.createElement('br'));
test.appendChild(btn2);