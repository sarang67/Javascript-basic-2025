import "./style.css";

const app = document.getElementById("app");

app.innerHTML = `<h1>Modern JavaScript: Basic</h1>`;

// Add element in the array

//const subjects = ["js", "react", "angular", "react-native"];

/*
// mutable : original address  value changed


// add first element , mutable way
console.log(subjects);

const newLength = subjects.unshift("vue");

// add last element . mutable way
subjects.push("ionic");

//console.log(newLength);
console.log(subjects);
*/

/*
// immutable : does not affect to original , and gives brand new array

// add first element , immutable way


const subjects2 = ["vuejs", ...subjects];
const subjects3 = ["vuejs", ...subjects, "ionic"];

console.log(subjects2);
console.log(subjects3);
console.log(subjects);
*/

/*
// remove element
const subjects = ["js", "react", "angular", "react-native"];

// removing first elemt . via mutable way

// const retrunValue = subjects.shift();
// console.log(retrunValue);

console.log(subjects);
subjects.shift();

subjects.pop();
console.log(subjects);
*/

/* 
[].splice(startIndex , deleteditemcount, newelement  )  : remove the element. if necessary then put new element instead of removing element, this is mutable opertaion , original array will be affected, and it will return array of deleted element.

[].slice(startIndex , endIndex)  :- it creates slice , it leaved end index element, and retun sliced array
slice are immutable operation , it returns brand new array

*/

/*
const subjects = ["js", "react", "angular", "react-native"];
// console.log(subjects.slice());
// console.log(subjects.slice(0));
// console.log(subjects.slice(1));
// console.log(subjects.slice(2));
// console.log(subjects.slice(3));

// console.log(subjects.slice(0, 0));
// console.log(subjects.slice(0, 1));
// console.log(subjects.slice(0, 2));
// console.log(subjects.slice(0, 3));

// console.log(subjects.slice(-1));
// console.log(subjects.slice(-2));
// console.log(subjects.slice(-3, -2));

// console.log(subjects.slice(0, -1));
console.log(subjects.slice(0, -2));

console.log(subjects);
*/

/*
const subjects = ["js", "react", "angular", "react-native"];

//console.log(subjects.splice(0));
//console.log(subjects.splice(0, 4));
//console.log(subjects.splice(0, 2, "5"));

console.log(subjects.splice(0));
console.log(subjects);
*/

/*
// // add element in the between
// const subjects = ["js", "react", "angular", "react-native"];

// const index = 2;
// // immutable way
// console.log(subjects.splice(index, 0, "vue"));

// console.log(subjects);

// add element in anywhere or between , via immutable way
const subjects = ["js", "react", "angular", "react-native"];
const index = 4;

console.log(subjects.slice(0, index), "vue", subjects.slice(index));
console.log([...subjects.slice(0, index), "vue", ...subjects.slice(index)]);

console.log(subjects);
*/

/*
// remove element anywhere

// immutable way

const subjects = ["js", "react", "angular", "react-native", "ionic"];

// remove first value
console.log(subjects.slice(1));

// remove last value
console.log(subjects.slice(0, subjects.length - 1));

// removing from between or anywhere
const index = 1;
console.log(subjects.slice(0, index), subjects.slice(index + 1));
console.log([...subjects.slice(0, index), ...subjects.slice(index + 1)]);
console.log(subjects);
*/

// findinh & seraching array item
/*
const subjects = ["js", "react", "angular", "react-native", "ionic"];

console.log(subjects.indexOf("react-native"));
const index = subjects.indexOf("react-native");

if (index !== -1) {
  console.log("Item found", subjects[index]);
}

console.log(subjects.includes("angular19"));
*/
//
/*
const subjectsWithId = [
  { id: 1, name: "JS" },
  { id: 2, name: "react" },
  { id: 3, name: "angular" },
  { id: 4, name: "vue" },
];

//const indexFound = subjectsWithId.findIndex(findElement);

const indexFound = subjectsWithId.findIndex((element) => {
  console.log(element);
  if (element.name === "react") {
    return true;
  }
});

if (indexFound) {
  console.log("item found do the thing");
}

console.log(indexFound);

const foundElementObject = subjectsWithId.find((element) => {
  console.log(element);
  if (element.name === "angular") {
    return true;
  }
});

console.log(foundElementObject);
*/
/*
function findElement(element) {
  //   console.log(element);
  //   console.log(index);
  //   return true;

  if (element.name === "JS") {
    return true;
  }
    
}
  */

/*

console.log("-----------------------");
const subjectsWithId1 = [
  { id: 1, name: "JS" },
  { id: 2, name: "react" },
  { id: 3, name: "angular" },
  { id: 4, name: "vue" },
];

const index2 = subjectsWithId.findIndex(callBack);

function callBack(element) {
  console.log(element);
  if (element.name === "JS") {
    return true;
  }
}

console.log(index2);

const index3 = subjectsWithId.findIndex((element) => {
  console.log(element);
  if (element.name === "JS") {
    return true;
  }
});

console.log(index2);

*/

/*
// array shallow copy and deep copy

const subjectsWithId = [
  "js",
  ["v20", 500],
  "react",
  ["V19", 500],
  "angular",
  ["V18", 500],
];

//let subjectsWithIdClone = subjectsWithId;

//let subjectsWithIdClone = [...subjectsWithId];
//let subjectsWithIdClone = subjectsWithId.slice();
//let subjectsWithIdClone = Array.from(subjectsWithId);

let subjectsWithIdClone = JSON.parse(JSON.stringify(subjectsWithId));

subjectsWithIdClone[0] = "something elese";
subjectsWithIdClone[1][0] = "something elese";

console.log(subjectsWithIdClone);
console.log(subjectsWithId);

*/

/*
// merging array

const subjectsWithId = [
  ["js", 500],
  ["react", 500],
  ["angular", 500],
];

const sub1 = [["sagar", 500]];
const sub2 = ["nikita", 500];

const mergeArray = [...subjectsWithId, ...sub1, ...[sub2]];
console.log(mergeArray);

const mergeArray2 = subjectsWithId.concat(sub1, [sub2], [1, 2, 3]);
console.log(mergeArray2);
*/
