import "./style.css";

const app = document.getElementById("app");

app.innerHTML = `<h1>Modern JavaScript: Basic</h1>`;

// object destructuring

/*
let courseInformation = {
  trainer: "sarang jain",
  id: "xyz123",
  phoneNo: 123456789,
  city: "pune",
  currentCourse: "JS-React",
  corsefee: { js: 500, react: 500, angular: 500 },
};

let trainerName = courseInformation.trainer;
let trainerID = courseInformation.id;
let trainerJsFees = courseInformation.corsefee.js;

console.log(trainerName, trainerID, trainerJsFees);

let id = "someid";

// destructure
let { trainer, id: myTrainerID, phoneNo, city, corsefee } = courseInformation;
let { js, react, angular } = corsefee;

console.log(trainer, myTrainerID, phoneNo, city, corsefee);
console.log(js, react, angular);
console.log(courseInformation);

*/
/*
// destructure
let courseInformation = {
  trainer: "sarang jain",
  id: "xyz123",
  phoneNo: 123456789,
  city: "pune",
  currentCourse: "JS-React",
  corsefee: { js: 500, react: 500, angular: 500 },
};

// const { trainer, id, corsefee, ...restObject } = courseInformation;
// const { js, react, angular } = corsefee;
// console.log(corsefee);
// console.log(trainer, id, restObject);
// console.log(js, react, angular);

const {
  trainer,
  id: myId,
  corsefee: { js, react, angular },
  ...restObject
} = courseInformation;

console.log(js, react, angular);
console.log(myId);

*/

/*
// object proprty value exist

let courseInformation = {
  trainer: "sarang jain",
  id: "xyz123",
  phoneNo: 123456789,
  city: "pune",
  currentCourse: "JS-React",
  corsefee: { js: 500, react: 500, angular: 500 },
  id1: 12123,
};

courseInformation.trainer;
courseInformation["trainer"];

console.log(courseInformation);

console.log(courseInformation.id1);

if (courseInformation.id1) {
  console.log("id1 does exist");
}

// via for in loop
console.log("-----------");
for (let prop in courseInformation) {
  console.log("object property or key--> ", prop);
  console.log("object property's value --> ", courseInformation[prop]);
  console.log("####");
  if (courseInformation[prop] === "pune") {
    console.log("Trainer lives in pune");
  }
}

// value existence

console.log(Object.values(courseInformation));
console.log(Object.values(courseInformation).includes("sarang jainsasas"));

// propery existence
console.log(Object.keys(courseInformation));
console.log(Object.keys(courseInformation).includes("currentCourse"));

if (Object.keys(courseInformation).includes("currentCourse")) {
  console.log("currentCourse key exist in the object");
}

let courseInformation2 = {
  trainer: "sarang jain",
  id: "xyz123",
  phoneNo: 123456789,
  city: "pune",
  currentCourse: "JS-React",
  corsefee: { js: 500, react: 500, angular: 500 },
  //   hasOwnProperty: function () {
  //     return false;
  //   },
};

//console.log(courseInformation2.hasOwnProperty("city"));
//console.log(Object.prototype.hasOwnProperty.call(courseInformation2, "city"));

courseInformation2.hasOwnProperty("trainer");

console.log(Object.prototype.hasOwnProperty(courseInformation2, "trainer"));
*/

/*
// object property and value update

let courseInformation2 = {
  trainer: "sarang jain",
  id: "xyz123",
  phoneNo: 123456789,
  city: "pune",
  currentCourse: "JS-React",
  corsefee: { js: 500, react: 500, angular: 500 },
};

//trainer;
// courseInformation2.trainer = "sarang kumar jain";
// courseInformation2.country = "india";

// courseInformation2["city"] = "mumbai";
// courseInformation2["profession"] = "trainer";

function addUpdateProp(key, value) {
  courseInformation2[key] = value;
}

addUpdateProp("trainer", "sarang kumar jain");
addUpdateProp("country", "india");

console.log(courseInformation2);
*/

/*

// object remove property delete

let courseInformation2 = {
  trainer: "sarang jain",
  id: "xyz123",
  phoneNo: 123456789,
  city: "pune",
  currentCourse: "JS-React",
  corsefee: { js: 500, react: 500, angular: 500 },
};

// slow and recommneded not to use
//delete courseInformation2.id;

courseInformation2.id = null;
if (courseInformation2.id) {
  console.log("do based on id");
}

console.log("--->", courseInformation2.hasOwnProperty("id"));

console.log(courseInformation2);

// best way

let courseInformation3 = {
  trainer: "sarang jain",
  id: "xyz123",
  phoneNo: 123456789,
  city: "pune",
  currentCourse: "JS-React",
  corsefee: { js: 500, react: 500, angular: 500 },
};

const { id, ...restCourseInformation3 } = courseInformation3;

console.log(courseInformation3);
console.log(restCourseInformation3);
*/

// spread operator (...) , rest operator (...)
/*
     rest operator ....rest  = spread operator  ...spread
*/
/*
let corsefee = { js: 500, react: 500, angular: 500 };
let emptyObject = { ...corsefee };

console.log(corsefee);
console.log(emptyObject);
*/

// object cloning shallow (first level ) and deep copy (nested level)

let courseInformation = {
  trainer: "sarang jain",
  id: "xyz123",
  corsefee: { js: 500, react: 500, angular: 500 },
};

//let courseInformationClone = courseInformation;
//let courseInformationClone = Object.assign({}, courseInformation);
//let courseInformationClone = { ...courseInformation };

//let courseInformationClone = Object.assign({}, courseInformation);
// let courseInformationClone = { ...courseInformation };

// courseInformationClone.id = 123456;
// courseInformationClone.corsefee.react = 5000; // deep change

// console.log("clone --> ", courseInformationClone);
// console.log("original--->", courseInformation);

// how to deal with deep copy
// JSON : Javascript object natiation

let courseInformationSTringFY = JSON.stringify(courseInformation); // jso objet --> json
let courseInformationClonefromJson = JSON.parse(courseInformationSTringFY); // json --> javascript object

console.log(courseInformationSTringFY);
console.log(courseInformationClonefromJson);

courseInformationClonefromJson.id = "spm oythetr id";
courseInformationClonefromJson.corsefee.react = 50000000;

console.log("cloining -->", courseInformationClonefromJson);
console.log("original--->", courseInformation);
