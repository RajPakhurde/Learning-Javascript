//Assignment 1
/*
// Problem no 1
function showme() {
  alert("You have clicked Alert button");
}

// Problem no 2

var x = 10;
console.log(x);
var x = "RAj";
console.log(x);
var x = true;
console.log(x);

// Problem no 3

var fruits = ["mango", "banana", "apple", "orange", "graps", "promoganate"];

function showme() {
  alert(fruits);
}

// Problem no 4

var info = {
  firstname: "Raj",
  lastname: "Pakhurde",
  age: 18,
};

console.log(
  `The person ${info.firstname} ${info.lastname} having age ${info.age} is a Kind hearted one.`
);
console.log(
  "The person " +
    info.firstname +
    info.lastname +
    " having age " +
    info.age +
    " is a kind hearted person"
);

// Problem no 5

var x = 5;
var y = 3;
console.log(x + y);
var x = 8;
var y = "8";

// if (x == y) {
//   console.log("True");
// }
if (x === y) {
  console.log("True");
} else {
  console.log("False");
}
console.log(typeof x);
console.log(typeof y);

if (x) {
  console.log("Welcome to learnvern");
}

// Assignment 2

// Problem 1

var name = false;
if (name == true) {
  console.log("value of name is true");
} else {
  console.log("value of name is false");
}

// Problem 2

var date = new Date().getDay();

if (date == 1) {
  console.log("Monday");
} else if (date == 2) {
  console.log("Tuesday");
} else if (date == 3) {
  console.log("Wednesday");
} else if (date == 4) {
  console.log("Thusday");
} else if (date == 5) {
  console.log("Friday");
} else if (date == 6) {
  console.log("Saturday");
} else {
  console.log("Sunday");
}

//Problem 3

switch (new Date().getDay()) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thusday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
}

// Problem 4

var Weekdays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thusday",
  "Friday",
  "Saturday",
  "Sunday",
];

// for (i = 0; i <= Weekdays.length; i++) {
//   console.log(Weekdays[i]);
// }
var i = 0;
// while (i <= Weekdays.length) {
//   console.log(Weekdays[i]);
//   i++;
// }
// do {
//   console.log(Weekdays[i]);
//   i++;
// } while (i <= Weekdays.length);

// for (const e of Weekdays) {
//   console.log(e);
// }

// Problem 5

function displayname() {
  alert("RAJ");
}

// Problem 6

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var max = Math.max.apply(null, numbers);

console.log(max);

// Problem 7

var Person = {
  name: "RAj",
  getName: function () {
    return this.name;
  },
};
var show = Person.getName;
var showName = show.bind(Person);

console.log(showName());


// Assignment 3
//Problem 1
//  var name = prompt("Enter your name ");
var age = prompt("Enter your age ");

document.writeln("Your name is : " + name);

document.writeln("Your age is : " + age);


// Problem 2

function alertbox() {
  setTimeout(function () {
    alert("RAj");
  }, 5000);
}

// Problem 3

function lastpage() {
  history.back();
}

function goback() {
  history.go(-5);
}
function checklength() {
  console.log(history.length);
}

// Problem 4

document.write(navigator.appName);
document.write("<br>");
document.write(navigator.appVersion);
document.write("<br>");
document.write(navigator.cookieEnabled);
document.write("<br>");
document.write(navigator.plugins);
document.write("<br>");
document.write(navigator.userAgent);


// Assignment 5

// Problem 1

<label for="" id="firstname">kejiieo</label>
  var firstname = prompt("Enter your firstname :");
  document.getElementById("firstname").innerText = firstname;
  */
