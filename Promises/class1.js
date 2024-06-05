// Promises -
// a promise is an object that may produce a single value some time in the future:
// either a resolved value, or a reason that it's not resolved (e.g., a network error occurred).
// A promise may be in one of 3 possible states: fulfilled, rejected, or pending.

//  Why used Promises -  to Perform async operations

// pending - initial state
// fulfilled - value
// rejected - reason

// How to create a Promise - using Promise constructor

// let isParty = function (result) {
//   return new Promise(function (resolve, reject) {
//     // let party = false;
//     if (result) {
//       resolve("Party is on");
//     } else {
//       reject("Party is off");
//     }
//   });
// };

// let isGiftRecieved = function () {
//   return new Promise(function (resolve, reject) {
//     let gift = true;
//     if (gift) {
//       resolve(true);
//     } else {
//       reject(false);
//     }
//   });
// };

// isGiftRecieved()
//   .then((result) => {
//     console.log(result);
//     return isParty(result);
//   })
//   .then((result) => {
//     console.log(result, "result");
//   })
//   .catch((error) => {
//     if (!error) {
//       console.log("No Gift");
//     }
//     console.log(error, "error");
//   });

//................................................................................................................

// Promises - 
// a promise is an object that may produce a single value some time in the future:
// either a resolved value, or a reason that it's not resolved (e.g., a network error occurred).


// Made a promise
// Mom - Kitchen (Chai)
// Go to Market - Buy a packet of Milk.

// Async Task
// You - Promise (Milk Ka packet lekar aaoge).
// Mom - Prepare these things Tea , Boil, Adrak, Cardamom

// Situation
// 1. Pending - You are in the market.
// 2. Fulfilled - You are back with a packet of milk.
// 3. rejected - Milk Packet mila hi nahi, Friends, Accidient, Paise ghum gaye , Ice-cream kha liye.


// errors- 
// 1. Network Error
// 2. Syntax Error
// 3. Server Error
// 4. Timeout Error

// Syntax - 

// How to create a promise - using Promise constructor

// let x = new Promise((resolve, reject)=>{
//     console.log("Promise is created");
//     setTimeout(()=>{
//         resolve("Promise is resolved")
//         // reject("rejected")
//     }, 4000)
// });

// Methods of Promise
// then() - resolve
// catch() - reject
// finally() - resolve or reject

// x.then((resolvedValue)=>{
//     console.log("the Status of promise",resolvedValue);
//     // console.log("Promise is Closed");
// }).catch((rejectedvalue)=>{
//     console.log("the Status of promise",rejectedvalue);
//     // console.log("Promise is Closed");
// }).finally(()=>{
//     console.log("Promise is Closed");
// })

// Hotel Scenario

// Hotel Enter
// Order Food
// Food is preparing - 10 mins
// eating - 20 mins
// payment - 10 mins



// function preparedFood(){
//     return new Promise((resolve, reject)=>{
//         let rice = true;
//         if(rice){
//             setTimeout(()=>{
//                 resolve("Food is being prepared and delivered to your table");
//             }, 7000)
//         }
//         else{
//             reject("Food is not available");    
//         }
//     })
// }


// function eating(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve("Eating Food");
//         }, 3000)
//     })
// }


// function payment(){
//     return new Promise((resolve, reject)=>{
//         let moneyInWallet = false;
//         if(moneyInWallet){
//             setTimeout(()=>{
//                 resolve("Payment");
//             }, 2000)
//         }
//         else{
//             reject("No Money, Bhag jao or Washing plates");
//         }
      
//     })
// }


// function visitngHotel(){
//     console.log("Entering the Hotel");
//     console.log("Order Food - Kheer");
//     preparedFood()
//     .then((value)=>{
//         console.log(value);
//         return eating();
//     }).then((value)=>{
//         console.log(value);
//         return payment();
//     }).then((value)=>{
//         console.log(value);
//     }).catch((error)=>{
//         console.log(error);
//     }).finally(()=>{
//         console.log("Thank you for visiting the hotel");
//     })

// }

// visitngHotel()


// Proimse.all() - All promises should be resolved
// Promises.any() - Any one promise should be resolved
// promises.race() - First promise should be resolved

let promise1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject("Promise 1 is reject");
    }, 3000)
})

let promise2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Promise 2 is resolved");
    }, 5000)
})

// Promise.all([promise1, promise2]).then((values)=>{
//     console.log(values);
// }).catch((error)=>{
//     console.log(error);
// })

// Promise.race([promise1, promise2]).then((values)=>{
//     console.log(values);
// }).catch((error)=>{
//     console.log(error);
// })

Promise.any([promise1, promise2]).then((values)=>{
    console.log(values);
}
).catch((error)=>{
    console.log(error);
})







