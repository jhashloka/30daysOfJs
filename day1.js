// Activity 1: Variable Declaration

// Task 1: Declare a variable using `var`, assign it a number, and log the value to the console.

var num = 8;
console.log(num); // Output: 8

// Task 2: Declare a variable using `let`, assign it a string, and log the value to the console.

let string = "Welcome ";
console.log(string); // Output: Welcome

// Activity 2: Constant Declaration

// Task 3: Declare a variable using `const`, assign it a boolean value, and log the value to the console.

const answer = true;
console.log(answer); // Output: true

// Activity 3: Data Types

// Task 4: Create variables of different data types and log each variable's type using the `typeof` operator.

let number = 26; // Number
let str = "Shloka"; // String
let bool = true; // Boolean
let object1= {name: "Shloka", DOB : 2005}; // Object
let array = [1, 2, 3, 4, 5]; // Array

console.log(typeof number); // Output: number
console.log(typeof str); // Output: string
console.log(typeof bool); // Output: boolean
console.log(typeof object1); // Output: object
console.log(typeof array); // Output: object (Arrays are a type of object in JavaScript)

// Activity 4: Reassigning Variables

// Task 5: Declare a variable using `let`, assign it an initial value, reassign a new value, and log both values to the console.

let toupdate = 10;
console.log(toupdate); // Output: 1
toupdate =20;
console.log(toupdate); // Output: 2

// Activity 5: Understanding `const`

// Task 6: Try reassigning a variable declared with `const` and observe the error.

const constVariable = 78;
console.log(constVariable); // Output: 78
// Feature Request:

// 1. Variable Types Console Log: Write a script that declares variables of different data types and logs both the value and type of each variable to the console.

// Note I am using variables declared above from  line no. 24 to 28 

console.log("Value: ", number, ", Type: ", typeof num2);
// Output: Value:  26, Type: number

console.log("Value: ", str, ", Type: ", typeof str2);
// Output: Value:  Shloka, Type: string

console.log("Value: ", bool, ", Type: ", typeof bool2);
// Output: Value:  true , Type: boolean

console.log("Value: ", object1, ", Type: ", typeof object1);
// Output: Value:  {name: "Shloka", Number : 2005} , Type: object

console.log("Value: ", array, ", Type: ", typeof array);
// Output: Value:  [1, 2, 3, 4, 5], Type: object (Arrays are a type of object in JavaScript)



// 2. Reassignment Demo: Create a script that demonstrates the difference in behavior between `let` and `const` when it comes to reassignment.

let initial = "initial value";
console.log(initial); // Output: initial value
initial = "Updated Value";
console.log(initial); // Output: updated value

const fixed_value = "This is fixed value";
console.log(fixed_value); // Output: This is fixed value
// Uncommenting the next line will cause an error
// fixedValue = "This is fixed value"; // Error: Assignment to constant variable.