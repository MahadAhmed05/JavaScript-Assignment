// CHAPTER 4 - VARIABLE NAMES: LEGAL & ILLEGAL

//1)
// var name1 = "Mahad", name2 = "Ali", name3 = "Ahmed";

//2)
// Legal
// var name = "Mahad";
// var name123 = "Mahad";
// var $name = "Mahad";
// var _name = "Mahad";
// var name_last = "Mahad";

// Illegal
// var last name = "mahad";
// var 123name = "mahad";
// var name& = "mahad";
// var first-name = "mahad";
// var 22name = "mahad";

//3)
//a)
// console.log("Rules for naming JS variables");
// //b
// console.log("Variable names can only contain alphabets, numbers, $ and _. For example $my_1stVariable");
// // c
// console.log("Variable must begin with a letter, $ or _. For example $name, _name or name");
// //d
// console.log("Variables names are case sensitive");
// //e
// console.log("Variables names should not be JS keywords");

//CHAPTER 5 - MATH EXPRESSIONS

//1)
// var num1 = 3;
// var num2 = 5;
// var sum = num1 + num2;
// console.log(sum);

//2)
// Subtraction
// var num1 = 3;
// var num2 = 5;
// var sum = num1 - num2;
// console.log(sum);

// Multiplication
// var num1 = 3;
// var num2 = 5;
// var sum = num1 * num2;
// console.log(sum);

// Division
// var num1 = 20;
// var num2 = 5;
// var sum = num1 / num2;
// console.log(sum);

// Modulus
// var num1 = 20;
// var num2 = 5;
// var sum = num1 % num2;
// console.log(sum);

//3)
//a)
// var num1;
// console.log("Value after variable declaration is :", num1);
// num1 = 5;
// console.log("Initial Value :", num1);
// ++num1;
// console.log("Value after increament is:", num1);
// num1 = num1 + 7;
// console.log("Value after addition is:", num1);
// --num1;
// console.log("Value after decrement is :", num1);
// num1 = num1 % 3;
// console.log("The remainder is :", num1);

//4)
// var movieTcket = 600
// var totalPrice = movieTcket * 5
// console.log("Total cost to buy 5 tickets to a movie is",totalPrice);

//5)
// console.log("Table of 4");
// console.log("4 x 1 =",4*1);
// console.log("4 x 2 =",4*2);
// console.log("4 x 3 =",4*3);
// console.log("4 x 4 =",4*4);
// console.log("4 x 5 =",4*5);
// console.log("4 x 6 =",4*6);
// console.log("4 x 7 =",4*7);
// console.log("4 x 8 =",4*8);
// console.log("4 x 9 =",4*9);
// console.log("4 x 10 =",4*10);

//6)
// var celsiusTemp = 25;
// var CtoF = (celsiusTemp * 9) / 5 + 32;
// console.log(`${celsiusTemp}C is ${CtoF}F`);

// var fahrenheitTemp = 70;
// var FtoC = ((fahrenheitTemp - 32) * 5) / 9;
// console.log(`${fahrenheitTemp}F is ${FtoC}C`);

//CHAPTER 6 - MATH EXPRESSIONS

//1)
// var a = 10;
// console.log("RESULT \nThe value of a is :", a);
// ++a;
// console.log("The value of ++a is :", a);
// console.log("Now the value of a is :", a);
// console.log("The value of a++ is :", a);
// a++;
// console.log("Now the value of of a is:", a);
// --a;
// console.log("The value of --a is:", a);
// console.log("Now the value of a is :", a);
// console.log("the value of a-- is:", a);
// a--;
// console.log("Now the value of a is :", a);

//2)
// var a = 2;
// var b = 1;
// var result = --a - --b + ++b + b--;
// console.log(result);

//3)
// let greeting = prompt("Write Greeting")
// console.log(greeting);

//5)
var num = parseInt(prompt("Enter A Number"));
if (num) {
  console.log("Table of", num);
  console.log(`${num} x 1 = ${num * 1}`);
  console.log(`${num} x 2 = ${num * 2}`);
  console.log(`${num} x 3 = ${num * 3}`);
  console.log(`${num} x 4 = ${num * 4}`);
  console.log(`${num} x 5 = ${num * 5}`);
  console.log(`${num} x 6 = ${num * 6}`);
  console.log(`${num} x 7 = ${num * 7}`);
  console.log(`${num} x 8 = ${num * 8}`);
  console.log(`${num} x 9 = ${num * 9}`);
  console.log(`${num} x 10 = ${num * 10} `);
} else {
  console.log("Table of 5");
  console.log("5 x 1 =", 5 * 1);
  console.log("5 x 2 =", 5 * 2);
  console.log("5 x 3 =", 5 * 3);
  console.log("5 x 5 =", 5 * 4);
  console.log("5 x 5 =", 5 * 5);
  console.log("5 x 6 =", 5 * 6);
  console.log("5 x 7 =", 5 * 7);
  console.log("5 x 8 =", 5 * 8);
  console.log("5 x 9 =", 5 * 9);
  console.log("5 x 10 =", 5 * 10);
}
