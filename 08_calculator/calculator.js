const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(arr) {
	return arr.reduce((sum,current)=> sum + current,0);
};

const multiply = function(arr) {
  return arr.reduce((sum,current)=> sum * current,1);
};

const power = function(a, b) {
	let sum = a;
  b--;
  while (b > 0){
    sum *= a;
    b--;
  }
  return sum;
};

const factorial = function(a) {
	let sum = 1;
  while (a > 0){
    sum *= a;
    a--;
  }
  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
