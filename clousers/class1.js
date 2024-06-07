// A closure is the combination of a function bundled together(enclosed)
// with references to its surrounding state(the lexical environment). 
// In other words, a closure gives you access to an outer function's 
// scope from an inner function. In JavaScript, closures are created 
// every time a function is created, at function creation time.



// Clousure -
// Functions can access variables from its parent scope even after the parent function has finished executing.
// Functions bundled together with its lexical environment form a clousure.
// updated value of a variable is available to the inner function.


// const obj = {
//     name:"puran",
//     age:"developer",
//     say(name){
//         console.log(this.name,this.age,name);
//     }
// }
// obj.say("puja");



// let naem = "am";
// function pri(){
//     console.log(this.naem);
// }
// pri()


// function say(){
//     var name = "am";
// }

// if(true){
//    var name1 = "amit"
// }



// let name = "amit";
// var name1 = "puram";
// const name3 = "rahul";
// function sayhii(){
//     console.log("hii");
// }
// function  print (){
    // console.log(this.name);
    // console.log(this.name1);
    // console.log(this.name3);
//     sayhii()
//     this.sayhii();
// }
// print()


// // console.log(this.name);
// // console.log(this.name1);
// // console.log(this.name3);
// // let a = 20;
// function say(){
// let  a= 10;
// console.log(a);
// return function my(){
//     // let a =2;
// console.log(a);
// }
// }


// let r= say()
// r();
// // my();

// function show() {
//     let a = 10;
//     return function show2() {
//         let a = 50
//         return function show3() {
//             let a =100;
//             console.log(a);
//         }
//     }
// }

// let result = show("hello");
// let result2=result();
// result2();




// function add(a){
//     return add2
// }
// function add2(){
//     console.log(a);
// }
// let re = add(5);
// console.log(re);
// re();


// function add(a){
//     return function add2(){
//         console.log(a);
//     }
// }
// add(5)();  // Outputs: 5



// var c = 0;
// function counter(){
//     return function (){
//         c++;
//         console.log(c);
//     }
//     // return increment
// }
// let result = counter();
// // console.log(result);
// result();
// result();
// result();
// result();



// function get(){
//      let  username = "puran";
//      let password="12345";
//      let count = 0;

//      return function(){
//         let cred={
//             name:username ,
//             pass:password,
//         }
//         if ( count % 3 == 0){
//             count+=1;
//             return cred;
//         }
//         // return cred;
//         count+=1;
//      }
// }
// let r = get();
// console.log(r());
// console.log(r());
// console.log(r());
// console.log(r());





// function get() {
//     let firstname = "Trupti";
//     let count = 0;

//     return function () {
//         if (count % 3 ==2) {
//             count++;
//             return firstname;
//         }

//         return false;

//     }
// }

// let r = get();
// console.log(r());
// console.log(r());
// console.log(r()); 


// function get() {
//     let firstname = "Trupti";
//     let count = 0;

//     return function () {
//         if (count === 3) { 
//             count++;
//             return firstname;
//         } else {
//             count++;
//             return false;
//         }
//     }
// }

// let r = get();
// console.log(r()); 
// console.log(r()); 
// console.log(r()); 



// function multiply(a){
//  return function mul(b){
//     return function mull2(c){
//         return a*b*c ;
//     }
//  }
// }


// (currying) :Currying in JavaScript is a technique of transforming a function 
// that takes multiple arguments into a sequence of functions that each take a single argument.

// let result = multiply(10)(5)(2);
// let result2=result(5);
// console.log(result2(2));
// console.log(result);