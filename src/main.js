import "./style.css";

const app = document.getElementById("app");

app.innerHTML = `<h1>Modern JavaScript: Basic</h1>`;

/*
// array reverse and sort

let course = ["react", "javascript", "typescript", "angular"];

//let course = [1, 2, 3];

console.log(course.reverse());
console.log(course);

let courseWIthId = [
  { id: 18, name: "angular" },
  { id: 28, name: "javascript" },
  { id: 3, name: "typescript" },
  { id: 45, name: "react" },
];

console.log(courseWIthId.reverse());
console.log(courseWIthId);

let ids = [10, 5, 45, 89];

ids.sort();
console.log(ids);

let course1 = ["react", "javascript", "typescript", "angular"];
course1.sort();
console.log(course1);

let ids2 = [10, 5, 45, 89];
ids2.sort((a, b) => {
  return b - a;
});

ids2.sort((a, b) => b - a);
console.log(ids2);

console.log("=======================");

let courseWIthId1 = [
  { id: 18, name: "angular" },
  { id: 28, name: "javascript" },
  { id: 3, name: "typescript" },
  { id: 45, name: "react" },
];

courseWIthId1.sort((a, b) => {
  return b.id - a.id;
});

courseWIthId1.sort((a, b) => b.id - a.id);
console.log(courseWIthId1);
*/

/*
// Array type checking

console.log(typeof []);
console.log([] instanceof Array);
console.log([] instanceof Object);
console.log(Array() instanceof Object);
console.log(Array() instanceof Array);

console.log(Object.prototype.toString.call([]));

console.log(Array.isArray([]));
console.log(Array.isArray("sarang"));
*/

// array imperative iteration
// let courses = ["react", "javascript", "typescript", "angular"];

// for (let i = 0; i <= courses.length; i++) {
//   const course = courses[i];

//   if (course === "javascript") {
//     console.log("DO with javacript");
//   }
// }

// break and continue

// break : break jumps over the loop short circuit

// continue : 'jump over one iteration'

/*

let courses = ["react", "javascript", "typescript", "angular"];

for (let i = 0; i <= courses.length; i++) {
  const course = courses[i];
  if (course === "typescript") {
    console.log("typescript found and dont run further this iteration");
    continue;
  }
  console.log(course);
}
*/

/*

/*

// array declrative iteration
let test = { one: 1, two: 2, three: 3 };

for (let prop in test) {
  console.log(prop, test[prop]);
}

let courses = ["react", "javascript", "typescript", "angular"];

for (let course of courses) {
  console.log(course);
}

for (let course of "sarang") {
  console.log(course);
}
*/

/*

console.log(Array.prototype);

// Array.prototype.foreach()

let courses = ["react", "javascript", "typescript", "angular"];

courses.forEach((course) => {
  console.log(course);
});

//course.forEach();

[1, 2, 3, 4].forEach((elemet) => {
  console.log(elemet);
});

*/
/*
const items = [
  {
    id: "🍔",
    name: "super burger",
    price: 399,
  },
  {
    id: "🍟",
    name: "Jumbo fries",
    price: 199,
  },
  {
    id: "🍾",
    name: "big cola",
    price: 299,
  },
];

//console.log(items);

// items.forEach((item) => {
//   console.log(item);
//   app.innerHTML =
//     app.innerHTML + `<li>${item.id} ${item.name} ${item.price}</li>`;
// });

// traditinal way imperative way

for (let i = 0; i < items.length; i++) {
  const item = items[i];

  app.innerHTML =
    app.innerHTML + `<li>${item.id} ${item.name} ${item.price}</li>`;
}
*/

/*

// [].map()  : - will return barnd new array for every item
const items = [
  {
    id: "🍔",
    name: "super burger",
    price: 399,
  },
  {
    id: "🍟",
    name: "Jumbo fries",
    price: 199,
  },
  {
    id: "🍾",
    name: "big cola",
    price: 299,
  },
];

// const updatedItems = items.map((item) => {
//   if (item.id === "🍟") {
//     return {
//       ...item,
//       price: item.price / 2,
//     };
//   }
//   return item;
// });

// console.log(updatedItems);

// tradinal way
const updatedItems = [];

for (let i = 0; i < items.length; i++) {
  const item = items[i];
  if (item.id === "🍟") {
    updatedItems.push({ ...item, price: item.price / 2 });
  } else {
    updatedItems.push(item);
  }
}

console.log(updatedItems);

*/
/*
const mappedItems = [1, 2, 3, 4].map((value) => {
  return value * 2;
});

console.log(mappedItems);
console.log(items);
*/

// [].filter() --> gives brand new array with filtered item

/*
const filteredArr = [1, 2, 3, 4].filter((element) => {
  return element > 2;
});

const arr = [true, false, true, false].filter((element) => {
  return element;
});

console.log(arr);
*/
/*
const items = [
  {
    id: "🍔",
    name: "super burger",
    price: 399,
  },
  {
    id: "🍟",
    name: "Jumbo fries",
    price: 199,
  },
  {
    id: "🍾",
    name: "big cola",
    price: 299,
  },
];

// const filterItems = items.filter((item) => {
//   console.log(item);
//   if (item.price > 199) {
//     return true;
//   }
//   return false;
// });

// console.log(filterItems);

// filterItems.forEach((item) => {
//   console.log(`Expensive items are ${(item.id, item.name)}`);
// });

const filterItems = [];

for (let i = 0; i < items.length; i++) {
  const item = items[i];

  if (item.price > 199) {
    filterItems.push(item);
  }
}

console.log(filterItems);

*/

/*
[].foreach() --> will do operation on every element , will not return aything
[].map() --> will do opertion on every element and return updated element , will return brand new array of operationed element
[].filter() --> will check every element , and will return true/false for every element and filtered out vbased on truthy and falsy, and will return brand new array
*/

// [].some()

/*
let greaterThanOne = [1, 2, 3].some((element) => {
  return element > 5;
});

console.log(greaterThanOne);
[].some();
*/

const items = [
  {
    id: "🍔",
    name: "super burger",
    price: 399,
    promo: false,
  },
  {
    id: "🍟",
    name: "Jumbo fries",
    price: 199,
    promo: false,
  },
  {
    id: "🍾",
    name: "big cola",
    price: 299,
    promo: true,
  },
];

const isPromoAvailable = items.some((element) => {
  console.log(items);
  return element.promo;
});

const total = isPromoAvailable
  ? `Full meeal in offer price 500 rs`
  : `Full meeal in full price 897 rs`;
console.log(total);
