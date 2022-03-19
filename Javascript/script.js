//Arrays in javascript
/*
var car = ["raj", "shubhum", "yash"];
console.log(car[0]);

//   Objects in javascript
var person = {
  firstname: "Raj",
  lastname: "Pakhurde",
  age: 18,
};
var sentence =
  "My name is " +
  person.firstname +
  " and my last name is " +
  person.lastname +
  " and my age is " +
  person.age;
console.log(sentence);

//If you want to delete properties from arrays
delete person.firstname;

// use 'IN' in conditional operator to check propeties are present in array or not
var z = "firstname" in person ? true : false;
console.log(z);
var x = 1;
console.log(typeof x);

// if else statement in javascript

var x = 1;

if (x > 5) {
  console.log("You can play games");
} else {
  console.log("You can't play games you are under age");
}

// switch statement in javascript
var grade = "A";

switch (grade) {
  case "A":
    console.log("The student has A grade");
    break;
  case "B":
    console.log("The student has B grade");
    break;
  default:
    console.log("Your child  has fail the exam");
    break;
}
//second example

switch (
  new Date().getDay() //if we want to know the no of day we uss existing class in javascript
) {
  case 1: // new Date().getDay()
    console.log("Today is Monday");
    break;
  case 2:
    console.log("Today is Tuesday ");
    break;
  case 3:
    console.log("Today is Wednesday");
    break;
  case 4:
    console.log("Today is Thursday ");
    break;
  case 5:
    console.log("Today is Friday ");
    break;
  case 6:
    console.log("Today is Staturday");
    break;
  case 7:
    console.log("Today is Sunday ");
    break;
}

// loops in javascript

//Example of for loop
for (let int = 1; int <= 5; int++) {
  console.log(int);
}

//Example of while loop
var int = 1;
while (int <= 5) {
  console.log(int);
  int++;
}
/*
//Example of do while loop
var int = 1;
do {
  console.log(int);
  int++;
} while (int <= 3);

// Example for in loop
var temp = " ";
var person = {
  firstname: "Raj",
  lastname: "pakhurde",
  age: 18,
};

for (value in person) {
  temp = `${temp + person[value]} `;
}
console.log(temp);

//Example for of loop
var alphabets = ["A", "B", "C", "D"];
var target = "A";
var count = 0;
for (value of alphabets) {
  if ((value = target)) {
    count += 1;
    count++;
  }
}

console.log(count);

// to find the letter in a particular string using for of loop in Javascript  (for of = for each )

var string = "Harry";
var target = "r";
var count = 0;

for (value of string) {
  if (value == target) {
    count++;
  }
}
console.log(count);

// Functions in Javascript

function showme(num) {
  alert(num * num);
}

function info() {
  return "Hello how are you";
}
console.log(info());

var add = new Function("num1", "num2", "return num1 + num2");
console.log(add(2, 3));

var power = new Function("num1", "num2", "return Math.pow(num1,num2)");
console.log(2, 3);


//call , Apply , bind
     //call method
function Emp(id, name) {
  this.id = id;
  this.name = name;
}
function PermanentEmp(id, name) {
  Emp.call(this, id, name);
}
function TempEmp(id, name) {
  Emp.call(this, id, name);
}
var pEmp = new PermanentEmp(1, "RajPakhurde");
var tEmp = new PermanentEmp(2, "suyash patil");

console.log(pEmp.id + " " + pEmp.name);
console.log(tEmp.id + " " + tEmp.name);

// Apply method
var arr = [3, 4, 5, 5, 6, 6, 7];

var max = Math.max.apply(null, arr);
var min = Math.min.apply(null, arr);

console.log(max);
console.log(min);

var arr1 = [2, 3, 4];
var arr2 = [5, 6, 7];
console.log(arr1);
arr2.push.apply(arr1, arr2);
console.log(arr1);


// bind method

var website = {
  name: "learnvern",
  getName: function () {
    return this.name;
  },
};
var unboundGetName = website.getName;
var boundGetName = unboundGetName.bind(website);
console.log(boundGetName());


// tostring method

function add(num1, num2) {
  return num1 + num2;
}
console.log(add.toString());
console.log("The addition of 2 and 3 is " + add(2, 3));


function employee(id, name, salary) {
  this.id = id;
  this.name = name;
  this.salary = salary;

  this.updateSalary = updateSalary;
  function updateSalary(newSalary) {
    this.salary = newSalary;
  }
}
var e = new employee(2, "Pratik patel", 40000);
console.log("Salary of " + e.name + " is : " + e.salary);

e.updateSalary(50000);
console.log("Salary of " + e.name + " is : " + e.salary);


//BOM Browser Object Model\
// window Object
window.alert("This is learnver");

console.log(this.window);

// confirm method
function message() {
  var temp = confirm("Are you sure");

  if (temp == true) {
    alert("The value is true");
  } else {
    alert("The value is false");
  }
}

// propt method

function message() {
  var temp = prompt("What is your age?");
  alert("Your age is " + temp);
}

// open method

function message() {
  open("http//www.leetcode.com");
}

//settimeouts

function message() {
  setTimeout(function () {
    alert("You are Awesome");
  }, 2000);
}

// close method
function message() {
  close();
}

var a;
console.log(typeof a);


// History Object
console.log(history.lenght);

//forward method()
function goforward() {
  history.forward();
}

//backward method()
function gobackward() {
  history.back();
}

//go method()
function functiongo() {
  history.go(2); // 2 for next 2 pages
  history.go(-2);  // -2 for pervious 2 pages
}


// Navigator Object
// some properties are deprecated

//appName
console.log("appName : " + navigator.apop);
//appversion
console.log("appVersion " + navigator.appVersion);
// cookieEnabled
console.log(" " + navigator.userAgent);
// language
console.log(" " + navigator.language);
// userLanguage
console.log(" " + navigator.userLanguage);
// plugins
console.log(" " + navigator.plugins);
// systemLanguage
console.log(" " + navigator.systemLanguage);
// platform
console.log(" " + navigator.platform);
// onLine
console.log(" " + navigator.onLine);


// Screen object
// we can see all screen related information by using screen object.
console.log(window.screen);
*/

// Document object Model (DOM)
function Yourname() {
  var name = document.getElementsByClassName("name").value;
  alert("Your name is : " + name);
}

var getAge = prompt("Enter your Age :");
document.getElementsByClassName("age").innerText = age;
