//  Events = 
// 1 = Event bubbling
// 2 = Event capturing or trickling 

//...................................... Event bubbling...................................................

// const Grandparent = document.querySelector(".grandparent");
// const Parent = document.querySelector(".parent");
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
//     alert("Grandparent Bubbling");
// })

// Parent.addEventListener("click", () => {
//     e.stopPropagation();
//     alert("Parent Bubbling");
// })

// Child.addEventListener("click", () => {
//     e.stopPropagation();
//     alert("Child Bubbling");
// })

// Event capturing or trickling
// const Grandparent = document.querySelector(".grandparent");
// const Parent = document.querySelector(".parent");
// const Child = document.querySelector(".child");


// Grandparent.addEventListener("click",(e)=>{
// e.stopPropagation();

//     alert("Grandparent Bubbling");
// },{capture:true}
// )

// Parent.addEventListener("click",(e)=>{
// e.stopPropagation();

//     alert("Parent Bubbling");
// },{capture:true}
// )

// Child.addEventListener("click",(e)=>{
// e.stopPropagation();

//     alert("Child Bubbling");
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

//     alert("Grandparent Bubbling");
// },{once:true}
// )

// Parent.addEventListener("click",(e)=>{
// e.stopPropagation();

//     alert("Parent Bubbling");
// },{once:true}
// )

// Child.addEventListener("click",(e)=>{
// e.stopPropagation();

//     alert("Child Bubbling");
// },{once:true}
// )

//for capturing
// const Grandparent = document.querySelector(".grandparent");
// const Parent = document.querySelector(".parent");
// const Child = document.querySelector(".child");


// Grandparent.addEventListener("click",(e)=>{
// e.stopPropagation();

//     alert("Grandparent capturing");
// },{once:true,capture:true}
// )

// Parent.addEventListener("click",(e)=>{
// e.stopPropagation();

//     alert("Parent capturing");
// },{once:true,capture:true}
// )

// Child.addEventListener("click",(e)=>{
// e.stopPropagation();

//     alert("Child capturing");
// },{once:true,capture:true}
// )

//.........................................removeevenlistener.............................................

// function printGrandParent(){
//     console.log('grandParent bubbling');
// }

// grandParent.addEventListener("click", printGrandParent);

// setTimeout(() => {
//     grandParent.removeEventListener("click", printGrandParent);
// }, 2000)


// To remove the element after a given time using a button

const button = document.querySelector('#btn');

function printGrandParent(){
    console.log('grandParent bubbling');
}

grandparent.addEventListener("click", printGrandParent);

function removeGrandParent(){
    setTimeout(() => {
        grandparent.removeEventListener("click", printGrandParent);
    }, 2000)
}

button.addEventListener('click', removeGrandParent);