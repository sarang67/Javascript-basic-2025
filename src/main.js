import "./style.css";

const app = document.getElementById("app");

app.innerHTML = `<h1>Modern JavaScript: Basic</h1>`;

// hoisting
/*
// declare
console.log(two);
console.log(one);
var one;
one = 1;

var two = 2;
console.log(one);
*/
/*
// hoisting phae
var one;  --> all varoable declared on top by Js while hositing
var two;  --> all varoable declared on top by Js while hositing

console.log(two);
console.log(one);
one = 1;
two = 2;
console.log(one);

*/

/*

// hoisting work with the function

console.log(add);
console.log(addExp);
console.log(addArrow);

add(10, 20);

function add(a, b) {
  console.log(a, b);
}

var addExp = function (a, b) {
  console.log(a, b);
};

var addArrow = (a, b) => {
  console.log(a, b);
};

*/

/*
  In hositing Phase

  var addExp;
  var addArrow;

  function add(a, b) {
    console.log(a, b);
  }

console.log(add);
console.log(addExp);
console.log(addArrow);


 addExp = function (a, b) {
  console.log(a, b);
};

 addArrow = (a, b) => {
  console.log(a, b);
};

in hOsisting all variable declartion go to the top (only variable decltaion), 
and all function literal go to the top (complete function)

*/

// function rest parameter (...)

/*
function makePrice() {
  console.log(arguments);

  //  console.log(Array.isArray([]));
  //  console.log(Array.isArray("sa"));
  console.log(Array.isArray(arguments));

  let convertArgumetToArray = Array.from(arguments);
  console.log(convertArgumetToArray);

  let total = 0;
  for (let i = 0; i < convertArgumetToArray.length; i++) {
    console.log(total);
    total = total + convertArgumetToArray[i];
  }

  console.log(`total value ${total}`);
}

makePrice(10, 20, 30, 40, 50, 60, 70, 80);

console.log("============================");

// var ...allValues = [10, 20, 30, 40, 50, 60, 70, 80] behind the screne
//p1 = 10 , ...allvalue = []

function makePrice2(p1, p2, ...allValues) {
  console.log(p1, p2);
  console.log(allValues);
  console.log(Array.isArray(allValues));

  let total = 0;
  for (let i = 0; i < allValues.length; i++) {
    console.log(total);
    total = total + allValues[i];
  }

  console.log(`total value ${total}`);
}

makePrice2(10, 20, 30, 40, 50, 60, 70, 80);
*/

/*
// function return value

// a = 10 , b = 20
function add(a, b) {
  console.log("from inside the function", a + b);
  // return a + b;
  // i can return anything
  //return new String("sasas");

  // implicit retrun
  //return undefined;
}

let result = add(10, 20);
console.log("outside of function", result);

function test() {
  // implicit retun undefined
}

console.log(test());
*/

/*
// functions are objects

function logParameter(params) {
  console.log(params);
  console.log(typeof params);

  if (typeof params === "function") {
    console.log("--->");
    params();
  }

  return function test2() {
    console.log("I am function two");
  };
}

logParameter([]);
logParameter("prateek");
logParameter({ name: "sakshi" });

function test() {
  console.log("I am test fn");
}

let grabReturnFunction = logParameter(test);
console.log(grabReturnFunction());

function greet() {
  console.log("hi");
}

console.dir(greet);

// reading the property from object

console.log(greet.name);

// write a new property or update propertu
greet.language = "english";

console.dir(greet);

// write a function method
greet.whichLanguageUsedByGreetFn = function () {
  console.log(` greet function used  ${greet.language}`);
};

greet.whichLanguageUsedByGreetFn();

let simpleINfo = {
  name: "sarang",
};

console.log(simpleINfo);
simpleINfo.language = "english";
console.log(simpleINfo);
simpleINfo.whichLanguageUsedByGreetFn = function () {
  console.log(` greet function used  ${greet.language}`);
};
console.log(simpleINfo);

*/

// function closure and function scopes

/*

closure is the behaviour of function in the javascript
child funcction acces the proprty of its parent function , when its parent function contxt of excetion is already completed

scope : access power

function can access first from their defined variable in their scope , then t goes to its parent scope , then its goes to the it granparenr or most top scope to acces the variable or function

*/

/*

// file level scope
var one = 1;
var three = 333;

function testchild() {
  // testchild scope
  console.log("I am from file scope");
}

function test() {
  // test scope
  var two = 2;
  //var three = 33;

  function testchild() {
    // testchild scope
    //var three = 3;
    console.log(three);
  }

  testchild();
}

test();

console.log(three);

*/

//function execution

var one;
var two;

one = 1;
two = 2;

function test() {
  var three;
  three = 3;
  console.log("test");
  function test2child() {}
}

function test2() {
  var four;
  four = 3;
  console.log("test2");
}

function test3() {
  var five;
  five = 5;
  console.log("test3");
}

test();
test2();
test3();
