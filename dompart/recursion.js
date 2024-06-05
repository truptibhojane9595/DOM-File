//Recursion : function calling itself untill base condition is not satisfied

// function calling() {
//     return calling(); // calling inside a function itself body only
// }

// calling();


//......................................................find factorial..........................................
// function factorial(n) {
//     let result = 1;
//     for (let i = 1; i <= n; i++) {
//         result *= i;
//     }
//     return result;
// }

// let number = 5;
// console.log(factorial(number));



// function factorial(n) {
//     let result = 1;
//     for (let i = n; i >= 1; i--) {
//         result *= i;
//     }
//     return result;
// }

// let number = 5;
// console.log(factorial(number));

// function fact(n) {
//     if (n === 0 || n === 1) {
//         return 1;
//     }
//     return n * fact(n - 1);

// }

// console.log(fact(5));

//..............................................retrun a number from 1 to 10...............................................

// function num(n) {
//     if (n < 1) {
//         return 1; 
//     }
//     console.log(n);
//     num(n - 1); 
// }

// num(10);

// function num(n) {
//     if (n > 10) {
//         return 1; 
//     }
//     console.log(n);
//     num(n + 1); 
// }

// num(1);

//....................................................find Power...............................................
// function power(base, pow) {
//     if (pow === 0) {
//         return 1; 
//     } 
//     return base * power(base, pow - 1); 
// }

// let base = 5;
// let pow = 3;
// console.log(power(base, pow));

//..................................................find sum of array ............................................

// const arr = [1,5,2];

// function Sum(array, i) {
//     if (i < 0) {
//         return 0; 
//     }
//     let k =  array[i] + Sum( array,i - 1); 
//     return k;
// }

// const array = [1, 5, 2];
// console.log(Sum(array, array.length - 1));

// Sum([1, 5, 2], 0) : 1 + 0 = 1.
// Sum([1, 5, 2], 1) : 5 + 1 = 6.
// Sum([1, 5, 2], 2) : 2 + 6 = 8.


// Write a recursive function that takes a number and returns the sum of all the numbers from zero to that number.
// function sum(n) {
//     if(n===0){
//         return 0;
//     }
//     return n+sum(n-1)
// }
// console.log(sum(10))


// Write a recursive function that takes a number ‘n’ and returns the nth number of the Fibonacci number.
// function febo(n){
//     if(n<=1){
//         return n;
//     }
//     return febo(n-1)+febo(n-2);
// }
// console.log(febo(6));

// Write a recursive function that takes a list of numbers as an input and returns the product of all the numbers in the list.
// function product(arr,i=0){
//     if(i === arr.length){
//         return 1;
//     }
//     return arr[i]*product(arr,i+1);
// }
// console.log(product([1,5,2]));

// Write a function that takes a string and returns if the string is a palindrome.
// function palindrome(str){
//     if(str.length <= 1){
//         return true;
//     }
//     if(str[0] !== str[str.length-1]){
//         return false;
//     }
//     return palindrome(str.slice(1,-1));
// }
// console.log(palindrome("kanak"));
// console.log(palindrome("hello"))

// Write a recursive function that takes a string and reverse the string.
// function reverseString(str) {
//     if (str === "") {
//         return ""; 
//     }
//     return reverseString(str.slice(1)) + str[0]; 
// }

// console.log(reverseString("hello")); 

// Write a recursive function that takes an array of words and returns an array that contains all the words capitalized.
// input array :    ['foo', 'bar', 'world', 'hello']
// output array : ['FOO', 'BAR', 'WORLD', 'HELLO']
// function capitalizeWords(arr) {
//     if (arr.length === 0) {
//         return []; 
//     }
//     return [arr[0].toUpperCase()].concat(capitalizeWords(arr.slice(1))); 
// }

// console.log(capitalizeWords(['foo', 'bar', 'world', 'hello'])); 

// Write a recursive function to find sum of range a-b numbers.
// function sum(a, b) {
//     if (a > b) {
//         return 0; 
//     }
//     return a + sum(a + 1, b); 
// }

// console.log(sum(3, 6)); 


