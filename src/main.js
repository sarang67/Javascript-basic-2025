import "./style.css";

const app = document.getElementById("app");

app.innerHTML = `<h1>Modern JavaScript: Basic</h1>`;

/*

// converting to number

console.log(parseInt("211px"));
console.log(parseInt("211"));
console.log(parseInt("211.123"));

console.log(parseFloat("55"));
console.log(parseFloat("55.45"));
console.log(parseFloat("55.45px"));

console.log(parseInt(101010, 10));
console.log(parseInt(101010, 2));
console.log(parseInt(101010, 8));
console.log(parseInt(101010, 16));

console.log(Number("55"));
console.log(Number("55.55"));
console.log(Number(false));
console.log(Number("555e10"));

console.log(+"555");
console.log(-"555");
console.log(10 + +"555");
*/

/*
//
// number immutabilty : all premitive type are immutable, same address will not change ever in case of premitive
// all premitive type are assigned by value

const immutableNo = 99;

let refrneceNumber = immutableNo; //refrneceNumber = 99 (new addres, and pass by value)

refrneceNumber = immutableNo + 10;

console.log(immutableNo);
console.log(refrneceNumber);
*/

/*
// type checking
let test = 10;
console.log(typeof 99);
console.log(typeof test);
console.log(99 instanceof Number);

let instance = new Number(50);
console.log(instance);
console.log(instance instanceof Number);
console.log(new Number(100) instanceof Number);
*/
/*
//Number Methods
console.dir(Number);
console.dir(Number.prototype);

// Every function constructor would have one prototype propety
// proptype property will have multiple methods function
// thses methods can be used by any valid number (literal/ object/instance) by default
// every function constructotor would have static properties
// and these static properties (utility) can be used by directly with function name , no need of any instance or literal value

// prototype properties
console.log((99).toFixed());
console.log((99).toFixed(4));
console.log((99.354).toFixed(2));

console.log((99.123).toPrecision(6));
console.log(parseFloat((99.123).toPrecision(6)));

let noinstance = new Number(10);
console.log(noinstance);
console.log(noinstance.valueOf());

//static properties
console.log(Number.EPSILON);
console.log(Number.isInteger(20.5));
console.log(Number.isInteger(20));
*/

/*
// string data types

// sting literal

let greet = "Hello world";
// let greet1 = 'Hello world';

console.log("Hello 'Rajesh'");
console.log('Hello "Sakshi"');

console.log("this is basic's class.");
console.log("Hello 'sarang'  \"This is js class\" !");

console.log("my" + "pasta is very testy" + "!!!");

let anotherGreet = `Hello world`;
console.log(`
  My information
  ===============
  name ==> 'sarang jain'


  age ==> 36


  address ==> 'mumbai'

  `);

console.log("one");

let one = 1;
let isHappy = false;
console.log(`please get the value ${one}`);
console.log(`please get the value ${(2.234).toFixed(2)}`);

console.log(`I am happy ${isHappy ? ":)" : ":("} `);

console.log(greet);
console.log(anotherGreet);

// string function for the type conversion  and for string creation (avoid)

console.log(String(55));
console.log(String("55"));
console.log(String(true));
console.log(String(10 + 10));
console.log(String({ name: "sarang" }));
console.log(String([1, 2, 3, 4]));
console.log(String(["one", "two", "three"]));

// using function constructor (we should avoid it)

console.log(new String(1000));
*/
