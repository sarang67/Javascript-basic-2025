import "./style.css";

const app = document.getElementById("app");

app.innerHTML = `<h1>Modern JavaScript: Basic</h1>`;

/*
// declrative way
//[1,2,3].forech((element , index , arr)=> {...} , thisArg)
// [1,2,3].map((elem)=> elem*2) // // brand new array [2,4,6]
// [1,2,3].filter((elem)=> elem > 1) // // brand new array [2,3]
// [true , true , fale].some((elem)=>{ return  !elem })  // false is availabe
// [].find() --> find the element else return undefined
// [].findIndex() --> find the element index else -1

// [].reduce((prev , next , index , arr)=> {} , inilizevalue)

*/

// //console.log(items);
// console.log(Array.prototype);

// // [].every method

// const result = [true, true, false].every((element) => {
//   console.log(element);
//   return element;
// });

// //
// [true, true, false].every((elem) => elem);

// const res2 = [true, true, true].every((elem) => Boolean(elem));
// console.log("----");
// const res3 = [true, true, true].every(Boolean);
/*
const items = [
  {
    id: "🍔",
    name: "super burger",
    price: 399,
    promo: false,
    stock: true,
  },
  {
    id: "🍟",
    name: "Jumbo fries",
    price: 199,
    promo: false,
    stock: true,
  },
  {
    id: "🍾",
    name: "big cola",
    price: 299,
    promo: true,
    stock: false,
  },
];

// const isStockAvailable = items.every((elem) => {
//   //console.log(elem);
//   return elem.stock;
// });

let isStockAvailable = true;

for (let i = 0; i < items.length; i++) {
  let item = items[i];
  if (!item.stock) {
    isStockAvailable = false;
    break;
  }
}

if (isStockAvailable) {
  console.log("all items are available , you can purchase any.");
} else {
  const itemNotFound = items.find((elem) => !elem.stock);
  console.log(itemNotFound);
  console.log(
    `All items are not availabl, and the item name is ${itemNotFound.name}`
  );
}

*/

/*
//[].find();

const items = [
  {
    id: "🍔",
    name: "super burger",
    price: 399,
    promo: false,
    stock: true,
  },
  {
    id: "🍟",
    name: "Jumbo fries",
    price: 199,
    promo: false,
    stock: true,
  },
  {
    id: "🍾",
    name: "big cola",
    price: 299,
    promo: true,
    stock: false,
  },
];

const isFriesItemValable = items.find((elem) => elem.id === "🍟");
const friesIndex = items.findIndex((elem) => elem.id === "🍟");
console.log(friesIndex);
console.log(isFriesItemValable);

if (isFriesItemValable) {
  console.log(
    `Yes fries is availabl and the price of fries is ${isFriesItemValable.price}`
  );
}

const elem = [1, 2, 3, 4, 5, 6, 7].find((elem) => elem === 4);
console.log(elem);

console.log(["a", "b", "c"].find((elem) => elem === "c"));
*/

// reduces
const items = [
  {
    id: "🍔",
    name: "super burger",
    price: 399,
    promo: false,
    stock: true,
  },
  {
    id: "🍟",
    name: "Jumbo fries",
    price: 199,
    promo: false,
    stock: true,
  },
  {
    id: "🍾",
    name: "big cola",
    price: 299,
    promo: true,
    stock: false,
  },
];

const totalPrise = items.reduce((prev, next) => {
  console.log(prev, next);
  return prev + next.price; // become a prev
}, 0);

console.log(totalPrise);

/*
//[].reduce((prev, next, index, Array) => {}, "initialvalue");

const result = [1, 2, 3, 4, 5].reduce((prev, next) => {
  console.log(prev, next);
  return prev + next;
});
console.log(result);

console.log("--------------");

const result2 = [1, 2, 3, 4, 5].reduce((prev, next) => {
  console.log(prev, next);
  return prev + next;
}, 10);

console.log(result2);
*/
