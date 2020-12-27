var test = document.getElementById('test');
var menu = document.createElement('ul');


var item1 = document.createElement('li');
var item2 = document.createElement('li');
item1.innerHTML = "치킨";
item2.innerHTML = "돈까스";

menu.appendChild(item1);
menu.appendChild(item2);
test.appendChild(menu);

test.appendChild(document.createElement('br'));

var readInput = function() {
  var input1 = document.getElementById('input1');
  console.log(input1.value);
};

var btn1 = document.getElementById('btn1');
btn1.onclick = readInput;


btn1.onclick = function() {
  console.log("click");
  var input1 = document.getElementById('input1');
  console.log(input1.value);
}