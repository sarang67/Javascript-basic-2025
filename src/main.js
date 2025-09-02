import "./style.css";

const app = document.getElementById("app");

app.innerHTML = `<h1>Modern JavaScript: Basic</h1>`;

/*
//function closure

function add(no1, no2) {
  console.log(no1 + no2);
}

add(10, 20);
console.log("------------------------");

function add2(no1, no2) {
  console.log(no1 + no2);

  return function () {
    console.log("test");
  };
}

let addResult = add2(10, 20);
console.log(addResult);
addResult();

console.log("------------------------");

*/

/*
function add3(no1, no2) {
  console.log(no1 + no2);

  return function (no3) {
    console.log(no1 + no2 + no3);
  };
}

let addResult3 = add3(10, 20);
console.log(addResult3);
addResult3(30);

console.log(add3(50, 50));
add3(50, 50)(10);

// another example of closure
function makeCarrPartId(id) {
  const theid = `CART_PART_${id}`;

  return function (name) {
    return `${theid}_${name.toUpperCase()}`;
  };
}


const carPartID = makeCarrPartId(`agsjad124jgf`);
const carPartID = makeCarrPartId(`agsjad124jgf`);

// behind the scene what is happening on line no 60
// carPartID = function (name) {
//     return `${theid}_${name.toUpperCase()}`;
//   };


console.log(carPartID);
console.log(carPartID("left door"));
console.log(carPartID("right door"));
console.log(carPartID("side mirror"));

*/

/*
// default parameter

function makeRecipi(name = "pavbhaji") {
  console.log(`I am making recipie and its name is ${name.toUpperCase()}`);

  // if (!name) {
  //   // default value
  //   name = "pavbhaji";
  //   console.log(`I am making recipie and its name is ${name.toUpperCase()}`);
  // } else {
  //   console.log(`I am making recipie and its name is ${name.toUpperCase()}`);
  // }

  // if (name) {
  //   console.log(`I am making recipie and its name is ${name.toUpperCase()}`);
  // } else {
  //   console.log("no recipie available");
  // }
}

makeRecipi("pasta");
makeRecipi("pizza");
makeRecipi();

*/

/*
iifes  :- Immediately invoked function expression
*/

/*
(function () {
  console.log("hello");
})();

(function (name) {
  console.log(`hello ${name}`);
})("skashi");

(function (a, b) {
  console.log(a + b);
})(10, 20);

var test = "sarang";
*/

// type chking in function

// console.log(typeof function () {});
// console.log(function () {} instanceof Function);
// console.log(new Function() instanceof Function);

// nature of this keyword
console.log("===================");
console.log(this); // undefine  // undefined because of use strict by defaulyt

function test() {
  console.log(this);
}

test();

let testexp = function () {
  console.log(this); // undefined because of use strict by defaulyt
};

let tesarrow = () => {
  console.log(this); // undefined because of use strict by defaulyt
};

tesarrow();
