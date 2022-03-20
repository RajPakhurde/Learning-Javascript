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


// Document object Model (DOM)
function Yourname() {
  var name = document.getElementsByClassName("name").value;
  alert("Your name is : " + name);
}

var getAge = prompt("Enter your Age :");
document.getElementsByClassName("age").innerText = age;

var getbox = document.getElementsByClassName("box");
var btn = document.querySelector(".btn");

btn.addEventListener("onclick", function () {
  console.log("hello");
  var flag = true;
  var textArea = "<textarea rows='5' cols='70'></textarea>";
  if (flag) {
    document.getElementsByClassName("body").innerHTML = textArea;
    flag = false;
  } else {
    document.getElementsByClassName("body").innerHTML = " ";
    flag = true;
  }
});


// Form validation using Javascript
// checking input name should not be empty and password must be more than 6 charaters;

function  validationForm(){
  var name = document.myform.name.value;
  var password = document.myform.password.value;

  if (name == null || name == " "){
    alert("name cannot be blank");
    return false;
  }
  else if (password.length < 6 ){
    alert("Password must be more than 6 charachters");
    return false;
  }
}
// checking telephone no is number only not charcter
function validationForm(){
         var telephone = document.myform.Telephone.value;

         if (isNaN(telephone)){
           document.getElementById("erortelephone").innerHTML = "Entered Telephone Number is not correct" ;
         }
         else{
           return true;
         }
       }

 // Email valadition checking enter email is correct or not .
  function validationform(){
         var email = document.myform.email.value;
         var atposition = email.indexOf('@');
         var dotpositon = email.indexOf('.');
         
        if (atposition<1 || dotpositon<atposition+2 || dotpositon+2 >= email.length){
          alert("enter correct email id ");
          return false;
        }
       }

// Cookies in Javascript
1) when a user sends a request ot the Sever, then each of that request is treated as a new request sent by the different user.
2) so to recognize the old user, we need ot add the cookie with the response from the sever. 
3) browser at the client - side. 
4 )Now, whenever a user sends request to the sever, the cookie is added with that requwst automatically. Due to eh cookie, the Server recognizes the users.


Synatax
document.cookie = "name=value";

  <input type="button" value="Set cookie" onclick="setcookie()">
      <input type="button" value="get cookie" onclick="getcookie()">
     <script>
       function setcookie(){
       
         document.cookie= "companyname = Learnvern";
       }
       function getcookie(){
         if(document.cookie.length != 0){
          var array = document.cookie.split("=");    // We use .split(" ") to separate the array
           alert("company name: " + array[0] + "\nValue :" + array[1]);
         }
         else{
           alert("Cookie is not set");
         }
       }
     </script>
     <select id="color" onchange="getcolor()">
      <option value="selectvalue">--select value--</option>
      <option value="cyan">cyan</option>
      <option value="lightgreen">lightgreen</option>
      <option value="red">red</option>
    </select>

    <script>
      function getcolor(){
        var value = document.getElementById("color").value;

        if (value != "selectvalue"){
          document.bgColor = value;
          document.cookie = "color=" + value; 
        }
        window.onload = function(){        // we use window.onload for not refeshing the page while we come back to that page
          if (document.cookie.length != 0){
            var array = document.cookie.split("=");
            document.getElementById("color").value = array[1];
            document.bgColor = array[1];
          }
        }
      }
    </script>

    // Javascript provides some optional  attributes that enhance the functionality of cookies. Here, is the list of some attributes with their description.

    expires  = It maintains the state of a cookie up to the specified date and time. 
    max-age =  It maintains the state of a cookie up to the specified time. Here, time is given in seconds.
    path    = It expands the scopte of the cookie to all the pages of a wevsite.
    domain = It is used to specify the domain for which the cookie is valid.
   
   The cookie expires atttribute  provides one of the ways to create a persistent cookie. Here, a date and tiem are declared that represents the active period of a cookie. once the declared time is passsed, a cookie is deleted automatically.
   
   expires = document.cookie= "companyname = Learnvern; expires=Mon, 21 mar 2002 19:06:00 IST";
*/
