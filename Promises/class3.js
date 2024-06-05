// Callback - 
// A callback function is a function that is passed as an argument to another function, 
// to be “called back” at a later time. 
// A function that accepts other functions as arguments is called a higher-order function, 
// which contains the logic for when the callback function gets executed. 
// It’s a way to make sure certain code doesn’t execute until other code has already finished execution. 
// Callback functions are used in JavaScript to perform asynchronous operations.


// const sayBye = ()=> "Bye";

// function sayHii(callback){
//     const data = callback();
//     return "Hii" + data;
// }

// const result = sayHii(sayBye);    //sayBye is a callback function, SayHii is a higher order function
// console.log(result);


// Hotel Enter
// Order Food
// Food is preparing - 10 mins
// delivered to table - 5 mins
// eating - 20 mins
// payment - 10 mins
// Leave Hotel


function preparedFood(foodDelivered){
    setTimeout(()=>{
        console.log("Food is being prepared");
        console.log("Food is ready");
        foodDelivered();
    }, 10000);

}

function deliveredFood(iameating){
    setTimeout(()=>{
        console.log("Food is delivered to your table");
        iameating();
    }, 5000)
   
}

function eatingFood(doingPayment){
    setTimeout(()=>{
        console.log("Eating Food");
        doingPayment();      
    }, 2000)
}

function payment(iamleaving){
    setTimeout(()=>{
        console.log("Payment");
        iamleaving();
    }, 1000)
}

function leaveHotel(){
    console.log("Leave the Hotel");
}




// function visitingHotel(){
//     console.log("Entering the Hotel");
//     console.log("Order Food - Biryani ");
//     preparedFood(()=>{
//         deliveredFood(()=>{
//             eatingFood(()=>{
//                 payment(()=>{
//                     leaveHotel(()=>{
//                         console.log("Thank you for visiting the hotel");
//                     })
//                 })
//             })
//         })
//     })   
// }

// visitingHotel();


// Callback Hell - Pyramid of Doom
// Callback Hell is a phenomenon that afflicts a JavaScript developer
// when they try to execute multiple asynchronous operations one after the other.


// ATM
// Enter ATM
// Insert Card
// Processing - 5 seconds
// Enter Pin - 2 seconds
// Withdraw Money - 5 seconds
// Collect Cash - 1 second
// Leave ATM












