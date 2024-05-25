//.................................getComputedStyle
// getComputedStyle = make code short

// let message = document.querySelector(".msg");
// let style = getComputedStyle(message);
// console.log(style.color);

// let style = getComputedStyle(message,"::first-letter");
// console.log(style);


//..................................classname property

let message = document.querySelector(".msg");
// console.log(message.className);

// message.className += " new-class";
// console.log(message.className);

// message.classList.add("new-classname");
// console.log(message.className);


// message.classList.add("new-class","new-class2");
// console.log(message.className);

// message.classList.remove("new-class2");
// console.log(message.className);

// message.classList.replace("new-class2","new-class4");
// console.log(message.className);

// let check = message.classList.contains("new-class");
// console.log(check);

// message.classList.toggle("new-class");

//....................................................
// Box-Model

// offsetheight= content+padding+border
// let boxcal = document.querySelector(".box");
// let width = boxcal.offsetWidth;
// let height = boxcal.offsetHeight;
// console.log(width,height);

// clientWidth = content+padding
// let boxcal = document.querySelector(".box");
// let width = boxcal.clientWidth;
// let height = boxcal.clientHeight;
// console.log(width,height);

//........................................preventDefault()

// let link = document.querySelector("#link");
// link.addEventListener("click",function(e){
//     console.log("link clicked");
//     e.preventDefault();
// })


//...................................................keyword

// keydown
// keyup 
// keypress = charachter and number only

// let input = document.querySelector("#input");
// input.addEventListener("keydown",function(e){
//     console.log("keydown event")
//     console.log(e.key,e.code);
// });

// input.addEventListener("keyup", function (e) {
//     console.log("keyup event");
//     console.log(e.key, e.code);

// });

// input.addEventListener("keypress", function (e) {
//     console.log("keypress event")
//     console.log(e.key, e.code);

// });

// focus
// blur

// let input = document.querySelector("#input");
// input.addEventListener("focus", function (e) {
//     console.log("focus event")
//     e.target.style.backgroundColor= "yellow";

// });

// input.addEventListener("blur", function (e) {
//     console.log("blur event")
//     e.target.style.backgroundColor= "pink";

// });


//.........................delegation()

// let home = document.querySelector("#home");
// home.addEventListener("click",function(e){
//     console.log("home clicked");
// });

// let about = document.querySelector("#about");
// home.addEventListener("click",function(e){
//     console.log("about clicked");
// });

// let service = document.querySelector("#service");
// home.addEventListener("click",function(e){
//     console.log("service clicked");
// });

// let list = document.querySelector("#list");
// list.addEventListener("click", function (e) {
//     let target = e.target;
//     if (target.id == "home") {
//         console.log("home clicked")
//     }
//     else if (target.id == "about") {
//         console.log("about clicked");
//     }
//     else if (target.id == "service") {
//         console.log("services clicked");
//     }
// })

//...........................................HOME WORK

let list = document.querySelector("#list");
list.addEventListener("click", function (e) {
    let target = e.target;
    switch (target.id) {
        case "home":
            console.log("home clicked");
            break;
        case "about":
            console.log("about clicked");
            break;
        case "service":
            console.log("services clicked");
            break;
        default:
            console.log("unknown target clicked");
            break;
    }
});

// what is event target
