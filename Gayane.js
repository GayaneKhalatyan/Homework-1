//N1
let a = +prompt();
let b = +prompt();
let x = a + b;
let y = a - b;
let c = a * b;
let d = a / b;
let f = a % b;


//N2.1

let name = "My name is Gayane,";
let age = "I am 27.";
let a = name + " " + age


//N2.2

let name = prompt();
let age = +prompt();
let a = "My name is " + name + ", " + "I am " + age + ".";


//N3

let a = +prompt();
if( a % 2 == 0){
console.log("no");
} else {
console.log("yes");
};


//N4


let a = +prompt();
if ( a < 0) {
console.log("yes");
} else {
console.log("no");
};


//N5

let a = +prompt();
let b = +prompt();
if ( a % b == 0 || b % a == 0) {
    console.log(1);
} else {
    console.log(0)
};


//N6


let months = +prompt();
if (months==1){
    console.log("January");
} else if (months==2) {
	console.log("February");
} else if (months==3) {
	console.log("March");
} else if (months==4) {
	console.log("April");
} else if (months==5) {
	console.log("May");
} else if (months==6) {
	console.log("June");
} else if (months==7) {
	console.log("July");
} else if (months==8) {
	console.log("August");
} else if (months==9) {
	console.log("September");
} else if (months==10) {
	console.log("October");
} else if (months==11) {
	console.log("November");
} else if (months==12) {
	console.log("December");
};


//N7


let a = +prompt()
let b = +prompt()
let c = +prompt()

if (a > b && a > c) {
	console.log(a + " is maximum");
} else if (b > c && b > a) {
	console.log(b + " is maximum")
} else if (c > a && c > b) {
	console.log(c + " is maximum")
} else {
	console.log("There is no maximum value in this numbers.")
}
