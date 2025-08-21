import "./style.css";

const app = document.getElementById("app");

app.innerHTML = `<h1>Modern JavaScript: Basic</h1>`;

// -------

//decision making  conditional logic

console.log(1 == "1"); // value comparision
console.log(1 === "1"); // strict checking  // value and type comparision

console.log(Boolean(""));
console.log(Boolean(0));
console.log(!!0); // Boolean(0) or !!0

// truthy
console.log(!!true);
console.log(Boolean(true));
console.log(!![]);
console.log(!!{});
console.log(!!"0");
console.log(!!-42);
console.log(!!42);
console.log(!!3.14);

// falsy
console.log(!!false);
console.log(!!"");
console.log(!!0);
console.log(!!undefined);
console.log(!!null);
console.log(!!NaN);
