import "./style.css";

const app = document.getElementById("app");
// app.innerHTML = `<h1>Modern JavaScript: DOM</h1>`;

/*
// node Document fragment

const names = ["amar", "manish", "sunil", "vinay", "Anand"];

// names.forEach((name) => {
//   const liElement = document.createElement("li");
//   liElement.innerText = name;
//   app.append(liElement);
// });

const fragment = document.createDocumentFragment();
names.forEach((name) => {
  const liElement = document.createElement("li");
  liElement.innerText = name;
  fragment.append(liElement);
});

app.append(fragment);
*/

/*
// inserting dom element

const div = document.createElement("div");
const span = document.createElement("span");
const p = document.createElement("p");
const i = document.createElement("i");
const b = document.createElement("b");

//console.log(app, div, span, p, i, b);

app.append(div);
app.prepend(span);
app.append(p);
app.append("askdajsldjalksjdlkasjdl");
// before and after , new way to insert before and after
//p.before(i);
//p.after(b);

// old way to achove before and after

console.log(app);

console.log(p.parentNode);
console.log(p.nextSibling);
console.log(p.previousSibling);

// before and after old way
p.parentNode.insertBefore(i, p);
p.parentNode.insertBefore(b, p.nextSibling);
*/

/*
//  inserting string template
app.innerHTML = `<h1>Modern JavaScript: DOM</h1>
        <ul id="myUl">
          <li>One</li>
        </ul>
`;

const ulElement = document.getElementById("myUl");

ulElement.insertAdjacentHTML("beforebegin", "<p>My ul starts there</p>");
ulElement.insertAdjacentHTML("afterend", "<p>my list end ther</p>");
ulElement.insertAdjacentHTML("afterbegin", "<li>My first li</li>");
ulElement.insertAdjacentHTML("beforeend", "<li>My last li</li>");
console.log(ulElement);

console.log(app);
*/

/*
// replacing dom element
app.innerHTML = `<h1>Modern JavaScript: DOM</h1>
     <div id="divElement">
          Replace ME !!!
     </div>
`;

const divElement = document.getElementById("divElement");
const newDiv = document.createElement("div");

divElement.replaceWith(newDiv);

// setTimeout(() => {
//   console.log("tes");
//   divElement.replaceWith(newDiv);
// }, 5000);

// old way
const anotherNewDiv = document.createElement("div");
anotherNewDiv.innerText = "I will replace";

//newDiv.parentNode.replaceChild(anotherNewDiv, newDiv);

setTimeout(() => {
  newDiv.parentNode.replaceChild(anotherNewDiv, newDiv);
}, 5000);
*/

/*
// cloning the dom elemnt
app.innerHTML = `<h1>Modern JavaScript: DOM</h1>`;

const div = document.createElement("div");
const span = document.createElement("span");
span.innerText = "can you clone me";
div.append(span);

console.log(div);

app.append(div);

const clone = div.cloneNode(false);
console.log(clone);

const clone2 = app.cloneNode(true);
console.log(clone2);
*/

/*
// remove dom element
app.innerHTML = `<h1>Modern JavaScript: DOM</h1>`;

const div = document.createElement("div");
div.innerText = "I am a message";

app.append(div);

// new way
//div.remove();
//app.remove();

// old way
div.parentNode.removeChild(div);
*/

/*
// Querying dom nodes
app.innerHTML = `<h1 class="test">Modern JavaScript: DOM</h1>
    <ul id="ulElem"></ul>
`;

const names = ["amar", "manish", "sunil", "vinay", "Anand"];

const fragment = document.createDocumentFragment();

names.forEach((name) => {
  const liElement = document.createElement("li");
  liElement.innerText = name;
  liElement.className = "li-list";
  console.log(liElement);
  fragment.append(liElement);
});

console.log(fragment);

// querying by getElemetBYID : html element
const ul = document.getElementById("ulElem");
console.log(ul);
ul.append(fragment);

// querying by className : HTMLCollection Live copy
// const liList = document.getElementsByClassName("li-list");
const liList = ul.getElementsByClassName("li-list");
console.log(liList);

//// querying by tagname : HTMLCollection LIve copy

//const liTags = document.getElementsByTagName("li");
const liTags = ul.getElementsByTagName("li");
console.log(liTags);

const newFriend = `<li class="li-list">Suraj</li>`;
//ul.append(newFriend);
console.log(ul.innerHTML);
ul.innerHTML += newFriend;

console.log(liTags);
console.log(liList);

*/

// Querying dom nodes by snapshot
app.innerHTML = `<h1 class="test">Modern JavaScript: DOM</h1>
    <ul id="ulElem"></ul>
`;

const names = ["amar", "manish", "sunil", "vinay", "Anand"];

const fragment = document.createDocumentFragment();

names.forEach((name) => {
  const liElement = document.createElement("li");
  liElement.innerText = name;
  liElement.className = "li-list";
  console.log(liElement);
  fragment.append(liElement);
});

const ul = document.querySelector("#ulElem");
console.log(ul);
ul.append(fragment);

// nodelist : spanshhot copy
const listItems = document.querySelectorAll(".li-list");
console.log(listItems);

const newFriend = `<li class="li-list">Suraj</li>`;

ul.innerHTML += newFriend;

console.log(listItems);

const listItemsUpdated = document.querySelectorAll(".li-list");
console.log(listItemsUpdated);
