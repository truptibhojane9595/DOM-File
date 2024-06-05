// Recursive Function - Function calling itself

// 1. base condition - stop the function calling
// 2. recursive condition - function calling itself

// function calling(){
//     if(condition){
//         Stop Calling the function     //base condition
//     }
//     calling();  // recursive condition
// }

// calling();

// Counter - 5 to 1

// function counter(number){
//     if(number < 1){     // base condition
//         return 1;
//     }
//     console.log(number);
//     counter(number-1)
// }

// counter(5);

// 5
// 4
// 3
// 2
// 1

// Factorial of a number
// 2 = 2*1 = 2
// 3 = 3*2*1 = 6
// 4 = 4*3*2*1 = 24

// function factorial(num){
//     if(num == 0){
//         return 1
//     }
//     return num * factorial(num-1)
// }

// console.log(factorial(4));


// Call Stack  - LIFO (Last In First Out)

// 4 * factorial(3); 4 * 6 = 24
// factorial(3) = 3 * factorial(2); = 3 * 2 =6
// factorial(2) = 2 * factorial(1); = 2 * 1 = 2
// factorial(1) - 1* factorial(0); = 1 * 1 = 1
// 1 (Factorail(0))

// Recursion - Function Calling itself
// 1. Base condition - stop the function calling
// 2. Recursive condition - function calling itself

// inside function body

// function calling(){
//     return calling();
// }
// calling();


// factorial of a number
// 2 = 2*1 = 2
// 5 = 5*4*3*2*1 = 120 

// By using Loop
// function findFactorial(num){
//     let sum = 1;
//     for(let i = num; i >= 1; i--){   
//         sum = sum*i;                    
//     }
//     console.log(sum);
// }
// findFactorial(5);

// By using Recursion
// function fact(num){  // num = 2, 1 , 0
//     if(num < 0){
//         return "Invalid number";
//     }
//     if(num == 0){  // base condition = true
//         return 1;
//     }

//     return num  * fact(num-1); 
// }
// console.log(fact(1));

// num  = 5;
// 5 * fact(4), 5 * 24 = 120
// 4 * fact(3), 4 * 6 = 24
// 3 * fact(2), 3 * 2 = 6
// 2 * fact(1), 2 * 1 = 2
// fact 1 = 1 * fact(0) = 1 * 1 = 1
// stop

// example - 2 (Counter)
// function counter(n){
//     if(n > 10){ 
//         return 1
//     }
//     console.log(n)
//     return counter(n+1)
// }

// counter(1);

// console.log(Math.pow(3,3)); 
// 27 = 3*3*3*3

// Find Power of a number using Recursion

// function power(b,n){
//     if (n==0){
//         return 1;
//     }
//     else {
//         return b*power(b,n-1);
//     }
// }
// const b=3;
// const n=1;
// const p=power(b,n);
// console.log(p);

// const arr = [1,5,2];
// console.log(arr.slice(1));

// Find sum of array elements using Recursion
function sumArray(arr) {
    if (arr.length === 0) {
      return 0;
    }
    return arr[0] + sumArray(arr.slice(1));
  }
  const arr = [2];
  console.log(sumArray(arr));

//   [1,5,2] = 1 + sumArray([5,2]) = 1 + 7 = 8
//   [5,2] = 5 + sumArray([2]) = 5 + 2 = 7
//   [2] = 2 + sumArray([]) =  2 + 0 = 2
//   [] = 0