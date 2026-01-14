// a();  hosting
// b();
//Function Statement
function a() {
  console.log("a called");
}
// a();

//Function Expression

var b = function () {
  console.log("b called");
};
// b();

//function declaration
// function declaration and function experession both are same
//function anonymous
// donst having own identity
//function are very beatuiful in js.

// function (){

// }
//Named Function Expression
var c = function xyz() {
  console.log("c called");
};
c();
// xyz(); //error

//Difference between parameters and arguments
function d(p1, p2) {
  //parameters (placeholders)
  console.log("d called", p1, p2);
}
d(10, 20); //arguments (values passed)

//First Class Functions : passing another function inside the function.

var b = function (param1) {
  console.log(param1);
};
function xyz() {}
b(xyz);
