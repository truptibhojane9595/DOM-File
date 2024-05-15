//  Events = 
// 1 = Event bubbling
// 2 = Event capturing or trickling 

//...................................... Event bubbling...................................................

const Grandparent = document.querySelector(".grandparent");
const Parent = document.querySelector(".parent");
// const Child = document.querySelector(".child");

// Grandparent.addEventListener("click",()=>{
//     alert("Grandparent Bubbling");
// })

// Parent.addEventListener("click",()=>{
//     alert("Parent Bubbling");
// })

// Child.addEventListener("click",()=>{
//     alert("Child Bubbling");
// })


//...........................................Event capturing or trickling..............................................

// const Grandparent = document.querySelector(".grandparent");
// const Parent = document.querySelector(".parent");
// const Child = document.querySelector(".child");


// Grandparent.addEventListener("click",()=>{
//     alert("Grandparent capturing");
// },{capture:true}
// )

// Parent.addEventListener("click",()=>{
//     alert("Parent capturing");
// },{capture:true}
// )

// Child.addEventListener("click",()=>{
//     alert("Child capturing");
// },{capture:true}
// )

//..............................................stoppropogation()...............................................

// bubbling
// const Grandparent = document.querySelector(".grandparent");
// const Parent = document.querySelector(".parent");
// const Child = document.querySelector(".child");

// Grandparent.addEventListener("click", (e) => {
//     e.stopPropagation();
//     console.log("Grandparent Bubbling");
// })

// Parent.addEventListener("click", () => {
//     // e.stopPropagation();
//     console.log("Parent Bubbling");
// })

// Child.addEventListener("click", () => {
//     // e.stopPropagation();
//     console.log("Child Bubbling");
// })

// Event capturing or trickling
// const Grandparent = document.querySelector(".grandparent");
// const Parent = document.querySelector(".parent");
// const Child = document.querySelector(".child");


// Grandparent.addEventListener("click",(e)=>{
// e.stopPropagation();

//     alconsole.log("Grandparent capturing");
// },{capture:true}
// )

// Parent.addEventListener("click",(e)=>{
// // e.stopPropagation();

//     console.log("Parent capturing");
// },{capture:true}
// )

// Child.addEventListener("click",(e)=>{
// // e.stopPropagation();

//     console.log("Child capturing");
// },{capture:true}
// )

//............................................................................................................

// if we want to capture the element only once then we can use {once:true} at the event
//for bubbling
// const Grandparent = document.querySelector(".grandparent");
// const Parent = document.querySelector(".parent");
// const Child = document.querySelector(".child");


// Grandparent.addEventListener("click",(e)=>{
// e.stopPropagation();

//     console.log("Grandparent Bubbling");
// },{once:true}
// )

// Parent.addEventListener("click",(e)=>{
// // e.stopPropagation();

//     console.log("Parent Bubbling");
// },{once:true}
// )

// Child.addEventListener("click",(e)=>{
// // e.stopPropagation();

//     console.log("Child Bubbling");
// },{once:true}
// )

//for capturing
// const Grandparent = document.querySelector(".grandparent");
// const Parent = document.querySelector(".parent");
// const Child = document.querySelector(".child");


// Grandparent.addEventListener("click",(e)=>{
// e.stopPropagation();

//     console.log("Grandparent capturing");
// },{once:true,capture:true}
// )

// Parent.addEventListener("click",(e)=>{
// e.stopPropagation();

//     console.log("Parent capturing");
// },{once:true,capture:true}
// )

// Child.addEventListener("click",(e)=>{
// e.stopPropagation();

//     console.log("Child capturing");
// },{once:true,capture:true}
// )

//.........................................removeevenlistener.............................................

// function printGrandParent(){
//     alert('grandParent bubbling');
// }

// grandparent.addEventListener("click", printGrandParent);

// setTimeout(() => {
//     grandparent.removeEventListener("click", printGrandParent);
// }, 5000)


// To remove the element after a given time using a button

const button = document.querySelector('#btn');

function printGrandParent(){
    console.log('grandParent bubbling');
}

grandparent.addEventListener("click", printGrandParent);

function removeGrandParent(){
    setTimeout(() => {
        grandparent.removeEventListener("click", printGrandParent);
    }, 9000)
}

btn.addEventListener('click', removeGrandParent);