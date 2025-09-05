import "./style.css";

const app = document.getElementById("app");

app.innerHTML = `<h1>Modern JavaScript: Basic</h1>`;

// object merging

/*
let courseInformation = {
  trainer: "sarang jain",
  id: "webtrainer",
  cty: "pune",
  courseFees: { js: 500, react: 500, angular: 500 },
};

let moreInfo = {
  phoneNo: 1234568,
  country: "india",
};

// object.assign , and spread operator

const mergeOBject = Object.assign({}, courseInformation, moreInfo, {
  slot: "morning",
});

const mergeOBject2 = { ...courseInformation, ...moreInfo, slot: "morning" };

//console.log(courseInformation);
//console.log(moreInfo);

//console.log(mergeOBject);
//console.log(mergeOBject2);
*/

/*
let courseInformation = {
  trainer: "sarang jain",
  id: "webtrainer",
  cty: "pune",
  courseFees: { js: 500, react: 500, angular: 500 },

};

*/
/*
let courseInformation = {
  trainer: "sarang jain",
  id: "webtrainer",
  cty: "pune",
};

let courseFees = { js: 500, react: 500, angular: 500 };

console.log(courseInformation);
console.log(courseFees);

console.log(Object.assign({}, courseInformation, courseFees));
console.log({ ...courseInformation, courseFees });
*/

/*

// Object type checking

let courseInformation = {
  trainer: "sarang jain",
  id: "webtrainer",
  cty: "pune",
};

console.log(typeof courseInformation);
console.log(typeof {});
console.log(typeof []);
console.log(typeof null); // this is the error , wiered behaviour of js
console.log(typeof undefined);

console.log(courseInformation instanceof Object);
console.log({} instanceof Object);
console.log([] instanceof Object);
console.log(null instanceof Object);
console.log(new Object() instanceof Object);

console.log(Object.prototype.toString.call(courseInformation));
console.log(Object.prototype.toString.call([]));
console.log(Object.prototype.toString.call(null));
console.log(Object.prototype.toString.call(5));
console.log(Object.prototype.toString.call("sarang"));
console.log(Object.prototype.toString.call(new Date()));
console.log(Object.prototype.toString.call(undefined));

if (Object.prototype.toString.call(5) === "[object Number]") {
}

*/

/*
// iteration of Object  imperative way

let courseInformation = {
  trainer: "sarang jain",
  id: "webtrainer",
  cty: "pune",
};

// for in

for (let prop in courseInformation) {
  console.log(prop);
  console.log(courseInformation[prop]);
}

*/

/*

// looping object using declrative way
let courseInformation = {
  trainer: "sarang jain",
  id: "webtrainer",
  cty: "pune",
};

let callbak = (element) => {
  console.log(element);
  console.log(courseInformation[element]);
};

let courseInformationKeys = Object.keys(courseInformation);
console.log(courseInformationKeys);


courseInformationKeys.forEach((elemet) => {
  console.log(elemet);
  console.log(courseInformation[elemet]);
});
*/

// Array in depth

/*
// Array   --> speciak kind of object, ordered data structure
// Object ---> they unordered data struture

// preferred way array literal

let myInformation = [];

myInformation = ["sarang ", "35", "pune"];

// pass by refrence address ,

const myInformationRef = myInformation;
myInformationRef.push(100);
myInformation.push(500);

let test = myInformation;

test.push(1000);

console.log(myInformation);
console.log(myInformationRef);

console.log(myInformationRef === test);
console.log(myInformationRef === myInformation);

console.log(5 === 5);
console.log([] === []);
console.log({} === {});
console.log((() => {}) === (() => {}));

// using function construtore (not a preferred way)

console.log(new Array());
console.log(new Array(1, 2, 3, 4));
console.log(new Array("a", "b", "c"));

console.log(Array());
console.log(Array(1, 2, 3, 4));
console.log(Array("a", "b", "c"));

// array is a collection of similar kind of data --> java . cPP , .net

// javascript --> array is the collection of anything

console.log(
  new Array(
    1,
    "sarang",
    true,
    {},
    [],
    () => {},
    () => {}
  )
);

let collection = [
  {},
  true,
  "sarang",
  function () {
    console.log("I am a fn an d from array element");
  },
  () => {},
  [1, 2, 3],
  new Object(),
  new String(),
  new Date(),
];

console.log(collection);

console.log(collection[3]);
collection[3]();

*/
/*
// array inde and properties element

let trainerInfo = ["saranhg jain", "pune", "Front end developer"];

// access the element
console.log(trainerInfo[0]);
console.log(trainerInfo["1"]);

// last element
console.log(trainerInfo.length);
console.log(trainerInfo[trainerInfo.length - 1]);

// array is a special kind of object

trainerInfo[0] = "sarang kymar jain";

console.log(trainerInfo);
//trainerInfo.testProperty = "I am value of test property";
//console.log(trainerInfo.testProperty);
//console.log(trainerInfo["testProperty"]);

// empty the array
//trainerInfo = [];
trainerInfo.length = 0;
console.log(trainerInfo);
*/

// multidimensional aray : array inside array
// [[] , [] , []]
/*
const drinks = [
  ["cola", 50],
  ["pepi", 500],
  ["mango", 5000],
];

console.log(drinks);

console.log(drinks[0]);
console.log(drinks[1]);
console.log(drinks[2]);

const colaInPricefo = drinks[0][1];
const pepiPriceInfo = drinks[1][1];
const mangoPriceInfo = drinks[2][1];

console.log(colaInPricefo, pepiPriceInfo, mangoPriceInfo);
*/

// destructure way

/*
const drinks = [
  ["cola", 50],
  ["pepi", 500],
  ["mango", 5000],
];
const [cola, pepsi, mango] = drinks;

console.log(cola);
console.log(pepsi);
console.log(mango);

*/

/*
let obj = { one: 1, two: 2, three: 3 };

const { two, three } = obj;
*/
/*
const drinks1 = [
  ["cola", 50],
  ["pepi", 500],
  ["mango", 5000],
  ["mirinda", "10"],
];
const [cola, ...rest] = drinks1;

console.log(cola);
console.log(rest);
*/

/*
const drinks2 = [
  ["cola", 50],
  ["pepi", 500],
  ["mango", 5000],
  ["mirinda", "10"],
];
const [colaInfo, , mangoInfo] = drinks2;

console.log(colaInfo);
//console.log(pepsi);
console.log(mangoInfo);

const [name, cost] = colaInfo;
console.log(` drink name is ${name} and cost is ${cost}`);
*/

const drinks2 = [
  ["cola", 50],
  ["pepi", 500],
  ["mango", 5000],
  ["mirinda", "10"],
];
const [colaInfo, [pepsename, pepsicost], [mangoname, mangocost]] = drinks2;

console.log(colaInfo, pepsename, pepsicost, mangoname, mangocost);
