import "./style.css";

const app = document.getElementById("app");

app.innerHTML = `<h1>Modern JavaScript: Basic</h1>`;

/*
// type cheking in string

console.log(typeof "avinash");
console.log(typeof "0");
console.log(String(1000) instanceof String);
console.log(new String(1000) instanceof String);
*/
/*
// string methods

console.dir(String);
console.log(String.prototype);

let myString = new String("avinash");
// mystring can access all the prototype methods of String function
console.log(myString.toUpperCase());
console.log("AVINASH".toLowerCase());
console.log("AVINASH".charAt(6));

console.log("sarang jumar jain".indexOf("r"));
console.log("sarang jumar jain".indexOf("z"));

if ("str".indexOf("s") === -1) {
  console.log("match not found");
} else {
  console.log("match found do something");
}

console.log("sarang kumar jain".replace("sarang", "avinash"));
console.log("sarang kumar jain".replace(/sarang/, "avinash"));

console.log("sarang jumar jain".includes("sar"));

console.log("avinash".slice(0, 2));
console.log("avinash".slice(0, 5));
console.log("avinash".slice(0, -1));
console.log("avinash".slice(0, -2));

console.log("sarang~kumar~jain".split("~"));
console.log("sarang~kumar~jain".split(/~/));
console.log("sarang~kumar~jain".split("kumar"));

console.log("          1234 5678 4321 9876                        ".trim());
console.log("          1234 5678 4321 9876                        ".trimEnd());

// static method ustility method
console.log(String.fromCharCode(67));
*/

/*
// Boolean in depth

//literaal way

const isMarried = true;
const hasChild = false;

console.log(isMarried, hasChild);

// boolean function
console.log(Boolean(true));
console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean({}));
console.log(Boolean([]));
console.log(!![]);
console.log(!!undefined);

// boolean function constructor avoid to use

console.log(new Boolean(true));

// boolean type check

console.log(typeof true);
console.log(Boolean(true) instanceof Boolean);
console.log(new Boolean(true) instanceof Boolean);
console.log(typeof new Boolean(true));

// immutabilty
const isMarried1 = true;
let hasChild1 = false;

console.log(isMarried1);
console.log(hasChild1);

hasChild1 = !isMarried;

console.log(isMarried1);
console.log(hasChild1);

// Boolean function constructor

console.dir(Boolean);
console.log(Boolean.prototype);

let myBoolean = true;
console.log(myBoolean.valueOf());
*/

/*
// undefined and null

var myName;
myName = "sakshi";

myName = null;

console.log(myName);

console.log(!!undefined);
console.log(!!null);
*/

// Functions is depth

// function declration

var test = 10;

function add() {
  console.log("I am a add function");
}
console.log(add);
console.log(add.name);

// calling the function
add();

// parameter (no1 , no2)
function add2(no1, no2) {
  console.log(no1, no2);
}

// passing the argument(10,20)
add2(10, 20);

// anonymus function or Function expression

const addExpression = function () {
  console.log("addExpression fuction");
};

addExpression();
console.log(addExpression);
console.log(addExpression.name);

// function are object in the javascript , you can call the function , additinally , you can treat this as object , measn you can attach property , read property

const addExpression1 = function (no1, no2) {
  console.log("addExpression fuction");
  console.log(no1 + no2);
};

addExpression1(10, 20);

// Arrow function , shorthand function

const addArrow = () => {
  console.log("I am add arrow function");
};

const addArrow2 = (no1, no2) => {
  console.log(no1 + no2);
};

const addArrow3 = (no1, no2) => console.log(no1 + no2);

const addArrow4 = (no1, no2) => {
  console.log(no1, no2);
  console.log("this is addArrow4 function");
};

/*
You cant do it like that
   (no1, no2) =>  console.log(no1 , no2) console.log('this is addArrow3 function')
  

*/

addArrow();
addArrow2(20, 30);
addArrow3(50, 20);
addArrow4(10, 20);

//
//function by function constructor

let numA = "a";
let numB = "b";

const sumFunction = new Function(numA, numB, "return a + b");
console.log(sumFunction(5, 5)); // Output: 10

console.log(sumFunction(5, 5)); // Output: 10

// function is a object

console.log(Function);
console.dir(Function);
