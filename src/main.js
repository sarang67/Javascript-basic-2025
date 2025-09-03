import "./style.css";

const app = document.getElementById("app");

app.innerHTML = `<h1>Modern JavaScript: Basic</h1>`;

/*
console.dir(Function);

console.dir(Function.prototype);

function test() {}

test();
console.log(test instanceof Function);

console.log("=================");

function sayHello(p1, p2, p3) {
  console.log("hi");
}


sayHello();
sayHello.call();
sayHello.apply();
const newDefination = sayHello.bind();
console.log(newDefination);
newDefination();
*/

/*

function add(a, b) {
  console.log(a + b);
}

//add(10, 20);
add.call(this, 10, 20);
add.apply(this, [10, 20]);
const fnNewDefination = add.bind(this);
console.log(fnNewDefination);
fnNewDefination(10, 20);

console.log("--------------");

function checkThis() {
  console.log("-->", this);
}

const myArray = [1, 2, 3];
const myObj = { name: "avinash" };
const myString = "sarang";

checkThis();
checkThis.call(myArray);
checkThis.call(myString);
checkThis.call(5);
checkThis.call(true);

//

function getInformation() {
  console.log(this.name, this.age, this.salary);
}

const infomation1 = {
  name: "avinash",
  age: 25,
  salary: 50000,
};

const amarInformation = {
  name: "amar",
  age: 30,
  salary: 500000,
};

getInformation.apply(amarInformation);
getInformation.bind(amarInformation)();

*/

// callbacko function

// a function call another function
/*
function greet(hello, cb) {
  console.log(hello);
  cb("hi from greet function");
}

greet("namstey", function (p1) {
  console.log("I am function", p1);
});

function anyfn(p1) {
  console.log(p1);
  p1(10, 20);
}

anyfn(function (a, b) {
  console.log(a + b);
});

*/

// Object in depth

// object literal . prefreed way

/*


console.log(information);
console.log(information.name);
console.log(information.age);
console.log(information.friends[0]);
console.log(information.address.flatNo);

// Object Functconst information = {
  friends: ["amar", "amit", "sakshi"],
  name: "Deepak",
  age: 30,
  phoneNo: 12345679,
  isMarried: true,
  profession: "software engineere",

  address: {
    flatNo: 201,
    street: "vadgaon sheri",
    state: "mh",
    city: "pune",
    pincode: 411014,
  },
  getInformation: function () {
    console.log(this.age, this.name, this.phoneNo, this.profession);
  },
};ion constructor

let info1 = new Object();
console.log(info1);

let info2 = Object(); // behind the scene new Object()
console.log(info2);

console.log(Object(3));
console.log(Object("sarang"));
console.log(Object(true));
console.log(Object([1, 2, 3]));
console.log(Object(() => {}));
*/

/*
// mutability and pass by refrence or address

// objects are mutable (same location value an be modified) and they are pass by address/refrence

let DeepakInfo = { name: "deepak", age: 30 };
let abhishekInfo = { name: "abhishek", age: 35 };

console.log(DeepakInfo === abhishekInfo);

DeepakInfo = abhishekInfo;

DeepakInfo.address = "vadgaonsheri";

console.log(DeepakInfo);
console.log(abhishekInfo);

let amarInformation = {};
amarInformation = abhishekInfo;
amarInformation.city = "pune";

console.log(DeepakInfo);
console.log(abhishekInfo);
console.log(amarInformation);

console.log(DeepakInfo === abhishekInfo);
console.log(abhishekInfo === amarInformation);

console.log({} === {});

*/
/*
// Object properties method value

const information1 = {
  name: "Deepak",
  age: 30,
  phoneNo: 12345679,
  isMarried: true,
  profession: "software engineere",

  getInformation: function () {
    console.log(this.age, this.name, this.phoneNo, this.profession);
  },

  getInformation1() {
    console.log(this.age, this.name, this.phoneNo, this.profession);
  },

  // arrow function is not recommened as a method
  getInfromation3: () => {
    //console.log(this.age, this.name, this.phoneNo, this.profession);
  },

  "abc 123": "this is valid value",
  100: "i am valid key",
};

information1.getInformation();
information1.getInformation1();
information1.getInfromation3();

console.log(information1);

console.log(information1.name);
// console.log(information1.abc 123);  // not valid
console.log(information1["name"]);
console.log(information1["abc 123"]);

//console.log(information1.100);
console.log(information1[100]);
console.log(information1["100"]);

function getInformation1() {
  console.log(this.age, this.name, this.phoneNo, this.profession);
}

getInformation1.apply(information1);

console.log(information1["phoneNo"]);
console.log(information1["profession"]);
*/

// object shorthand properties

const information1 = {
  name: "Deepak",
  age: 30,
  phoneNo: 12345679,
  getInfo() {
    console.log(this.name, this.age);
  },
};

console.log(information1);

const myName = "Deepak";
const myAge = 30;
const myPhoneNO = 12345679;

const information2 = {
  name: myName,
  age: myAge,
  phoneNo: myPhoneNO,
};

console.log(information2);

// shorthand way to create object

const name = "Deepak";
const age = 30;
const phoneNo = 12345679;

const information3 = {
  name, // name : name
  age, // age : age
  phoneNo, // phoneNo : phoneNo
};

const information5 = {
  name: name,
  age: age,
  phoneNo: phoneNo,
};

console.log(information3);

console.log("--> ", { name, age, phoneNo });

// Dynamic property

let ageKey = "sarang age"; // decided by some logic , key recived by api

const information6 = {
  name: name,
  [ageKey]: age,
  phoneNo: phoneNo,
};

console.log("===>", information6);
