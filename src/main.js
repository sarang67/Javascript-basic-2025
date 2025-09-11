import "./style.css";

const app = document.getElementById("app");

app.innerHTML = `<h1>Javascript DOM!!!</h1>`;

/*
// dom nodes and dom type
console.log(document);
console.dir(document);

// html node
console.log(document.documentElement);

// head

console.log(document.head);

// body
console.log(document.body);

console.dir(document.body);
//document.body = new HTMLBODYELEMT()

console.log(document.head.constructor.name);
console.log(document.body instanceof HTMLBodyElement);
console.log(document.body instanceof HTMLElement);
console.log(document.body instanceof Element);
console.log(document.body instanceof Node);
console.log(document.body instanceof EventTarget);

// nodde type number
console.log(document.body.nodeType);
console.log(document.nodeType);

// nodde type number
console.log(document.body.tagName);
console.log(document.tagName);
*/

/*
// creating dom element
const myDiv = document.createElement("div");
const myTextNode = document.createTextNode("Javascript DOM");
const myCOmmnet = document.createComment(
  "there is no comment this is just for testing"
);

console.log(app);
console.log(myDiv);
console.log(myTextNode);
console.log(myCOmmnet);

// inserted the dom element
myDiv.append(myTextNode);
app.append(myDiv);
app.append(myCOmmnet);

*/

/*
// CHange dom node content :  by seeting text

console.log(app);

// using innerHTML

app.innerHTML = `<h1>             Javascript DOM!!!</h1>`;

// using innerTexr

//app.innerText = `<h1>Javascript DOM!!!</h1>`;

// innerCOntent

//app.textContent = ` Javascript DOM!!!`;

let h1Tag = document.createElement("h1");
h1Tag.innerText = "This is heading";
h1Tag.style.display = "none";

console.log(h1Tag);

app.append(h1Tag);

// getting the text
console.log(app.innerHTML);
console.log(app.innerText);
console.log(app.textContent);

app.innerHTML = app.innerHTML + "test1";
app.innerHTML = app.innerHTML + `<div> test<div/>`;
*/

// innerHTML vs createelement for dom creation

//const {label, type} = { label: "FIrst Name", type: "text" };
// function craeteInputElement({ label, type = "text" }) {
//   const labelElement = document.createElement("label"); // <label></label>
//   const inputElement = document.createElement("input"); // <input>

//   labelElement.innerText = label; //<label>FIrst Name</label>
//   inputElement.type = "type"; // <input type="text">

//   labelElement.append(inputElement);

//   return labelElement;
//   console.log(labelElement, inputElement);
// }

// const nameField = craeteInputElement({ label: "FIrst Name", type: "text" });
// console.log(nameField);
// app.append(nameField);

// using innerhtml & string backtick

function craeteInputElement({ label, type = "text" }) {
  return `
      <label>
        ${label}
       <input type= ${type}>
      </label>
     
     `;
}
const nameField = craeteInputElement({ label: "FIrst Name", type: "text" });
app.innerHTML += nameField;
//app.append(nameField);
