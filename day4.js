// Day 4: Loops

// Activity 1: For Loop

// Task1: Write a program to print numbers from 1 to 10 using a for loop
for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
// Task 2: Write a program to print the multiplication table of 5 using a for loop
  let ans = 5;
for (let i = 1; i <= 10; i++) {
  console.log(ans*i);
}
// Activity 2: While loop

// Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop
let sum = 0;
let i = 1;
while (i <= 10) {
  sum += i;
  i++;
}
console.log("Sum:", sum);
// Task 4: Write a program to print numbers from 10 to 1 using while loop
let j = 10;
while (j >= 1) {
  console.log(j);
  j--;
}
// Activity 3: Do... While Loop
// Task 5: Write a program to print numbers from 1 to 5 using a do... while loop
let k = 1;
do {
  console.log(k);
  k++;
} while (k <= 5);

// Task 6: Write a program to calculate the factorial of a number using a do... while loop
let num=6;
let factorial=1
let j1=1
do{
    fact*=j1;
    j1++;
}while(j1<=num)
console.log("factorial:",factorial);
//Task7:Star pattern
let rows = 5;
for (let i = 1; i <= rows; i++) {
  let pattern = '';
  for (let j = 1; j <= i; j++) {
    pattern += '* ';
  }
  console.log(pattern.trim());
}
// Activity 5: Loop Control Statements 
// Task 8: Write a program to print from 1 to 10, but skip the number 5 using continue statement
for(let i=1;i<=10;i++){
    if(i==5) continue;
    console.log(i);
} 
// Task 9: Write a program to print from 1 to 10, but stop the loop when the number is 7 using break statement
for(let i=1;i<=10;i++){
    if(i==7) break;
    console.log(i);
} 