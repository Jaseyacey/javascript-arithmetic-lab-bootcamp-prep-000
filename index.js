
var a = 1;
var b = 80;
function add(a,b) {
  return a + b;
}

var a = 40;
var b = 60;
function subtract (b, a) {
  return b - a;
}

var a = 2;
var b = 3.4;
function multiply(a, b) {
  return a * b;
}

var a = 5;
var b = 2.5;
function divide(a,b) {
  return a / b;
}

function inc(n){
  var n;
  n++;
  return n;
}

function dec(n){
  var n;
  n--;
  return n;
}

parseInt('0xF', 16);
parseInt('F', 16);
parseInt('17', 8);
parseInt(021, 8);
parseInt('015', 10);   // parseInt(015, 10); will return 15
parseInt(15.99, 10);
parseInt('15,123', 10);
parseInt('FXX123', 16);
parseInt('1111', 2);
parseInt('15 * 3', 10);
parseInt('15e2', 10);
parseInt('15px', 10);
parseInt('12', 13);
