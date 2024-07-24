//Activity 1: Function Declaration
//Task 1: Write a function to check if a number is even or odd and log the result to the console.
function even_odd(num) {
    if (num % 2 === 0) {
        console.log(`${num} is even.`);
    } else {
        console.log(`${num} is odd.`);
    }
}
//Task 2: Write a function to calculate the square of a number and return the result.
function squarethenumber(num) {
    return num * num;
}

//ex = squarethenumber(4)
//output= 16

//Activity 2: Function Expression
//Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
const findmax = function(a, b) {
   if(a>b){
    return a;
   }
   else{
    return b;
   }
};
//findmax(7,6)
// ouput 7
//Task 4: Write a function expression to concatenate two strings and return the result

const concatenateStrings = function(str1, str2) {
    return str1 + str2;
};
//Activity 3: Arrow Functions
//Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
const sum = (a, b) => a + b;
//Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
const checkcharacter = (str, char) => str.includes(char);
//Activity 4: Function Parameters and Default Values
//Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
function multiply(a, b = 1) {
    return a * b;
}
console.log(multiply(4, 5));  // 20
//Task 8 Write a function that takes a person’s name and age and returns a greeting message. Provide a default value for the age.
function info_about(name, age = 30) {
    return `Hello, my name is ${name} and I am ${age} years old.`;
}
//Activity 5: Higher-Order Functions
//Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.
function repeatFunction(func, times) {
    for (let i = 0; i < times; i++) {
        func();
    }
}
repeatFunction(sum(3,5), 3);
//Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.
function high_order_function(func1,func2, value){
    return func2(func1(value));
}
high_order_function(squarethenumber(),even_odd(),10);
