// console.log("dom");

// let boxes = document.getElementsByClassName("box");
// console.log(boxes);
// boxes[2].style.backgroundColor = "pink";


// let boxes = document.getElementsByClassName("box");
// document.getElementById("red").style.backgroundColor = "red";        // id select
// document.querySelector(".box").style.backgroundColor = "yellow";     //first class select
// document.querySelector("#box").style.backgroundColor = "yellow";     //first id element select

// console.log(document.querySelectorAll(".box"));

// let boxes = document.getElementsByClassName("box");
// let boxesArray = [...boxes];
// console.log(boxesArray);

document.querySelectorAll(".box").forEach(elem => {
    elem.style.backgroundColor = "green";
})

