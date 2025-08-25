import "./style.css";

const app = document.getElementById("app");

app.innerHTML = `<h1>Modern JavaScript: Basic</h1>`;

// decison making

/*
// if else elseif

const condition = true;

if (condition) {
  console.log("yes");
} else {
  console.log("No");
}

if (condition) {
  console.log("yes");
}

const number = 1000;
let result;

if (number === 1) {
  result = "one";
} else if (number === 99) {
  result = "ninety-nine";
} else if (number === 1000) {
  result = "one thousand";
} else {
  result = "no match";
}

console.log(result);

// ternary operator or statement

// let result  = exp ? true : false ;
const num = 1000;
let result1 = num === 100 ? "one thousand" : "no match";
console.log(result1);

const anotherNumber = 1000;
let anotherResult;

anotherResult =
  anotherNumber === 1
    ? "one"
    : anotherNumber === 99
    ? "ninety niine"
    : anotherNumber === 1000
    ? "one thousand"
    : "no match";

console.log(anotherResult);

// switch statement
console.log("----------------------");

const anotherNumber3 = "99";
let anotherResult3;

switch (anotherNumber3) {
  case "1": {
    anotherResult3 = 1;
    break;
  }

  case "99": {
    anotherResult3 = "ninety nine";
    console.log(anotherResult3);
    break;
  }

  case "1000": {
    anotherResult3 = "one thosand";
    break;
  }

  default: {
    anotherResult3 = "no match";
  }
}

console.log(anotherResult3);
*/

// Number in dpth

/*
// number literal and function constructor

// literal this is the most preferred way to create a number datatatypess
const literalNumber = 99;
console.log(literalNumber);

const literalNumber2 = 99.95;
console.log(literalNumber2);

// function syntax
// performing a type conversion , this is not preferred way to create a number datat types
console.log(Number(99));
console.log(Number("99"));
console.log(Number("99px"));

// function constructor syntax
//create a object wrapper  , and we have to always avoid it to use when create a number

console.log(new Number(99));
console.log(new Number("99"));
console.log(new Number("99px"));
*/

/*
//2 number with floating pints and deal with decimal number

console.log(99.99);
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.30000000000000004);

console.log(0.5 + 0.2);

console.log(100 / 3);

const price = 9.33;
const qty = 3;

console.log(price * qty);

const anotherPrice = 9.33;
const scalePrice = 9.33 * 100; // firt u need to convert int
const anotherQty = 3;
console.log((scalePrice * anotherQty) / 100);
*/

/*
// isNan; not a number

console.log(NaN);

// global isNaN(1) ==> Number(1) --> NAN or valid number

console.log(isNaN(1));
console.log(isNaN("sarang jain"));

console.log("-----------");

// Number.isNAN()
console.log(Number.isNaN(1));
console.log(Number.isNaN("sarang jain"));
console.log(Number.isNaN(NaN));
*/

/*
isNaN(value)

Type-coercing version.

Converts the input to a number, then checks if it's NaN.
*/

/*
Number.isNaN(value)
Strict version.
Returns true only if the value is actually the NaN value and is of type number.
No type coercion.

*/

/*
Use Number.isNaN() when you want to strictly check for the NaN value.

Avoid isNaN() in most cases because it can lead to misleading results due to coercion.

*/
