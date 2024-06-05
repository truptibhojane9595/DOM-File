//  let fragment = new DocumentFragment() 
// //OR ....let fragment = document.createDocumentFragment();
// let languages = ["HTML","CSS","JAVASCRIPT"];
// let langele = document.querySelector("#language");
// languages.forEach((language) => {
//    let li = document.createElement("li");
//    li.innerHTML = language;
//    fragment.appendChild(li);
// });

// langele.appendChild(fragment);

//.............................................after() method........................................

// let langele = document.querySelector("ul");
// let addlanguages = ["python","java"];

// const items = addlanguages.map((language)=>{
//     const li = document.createElement("li");
//     li.innerHTML= language;
//     return li;
// })

// langele.lastchild.after(...items);


//..............clonenode() method.......................
//syntax

//let cloneNode = originalnode.cloneNode(deep);
// If we use true as an argument, it will clone the node and all its children. If we use false, it will clone only the node.

// let langele = document.querySelector("ul");
// let clonelangele = langele.cloneNode(false);
// clonelangele.id = "newlang";
// document.body.appendChild(clonelangele);


//...........................removechild() method

// syntax
// let childnode = parentnode.removechild(childnode);

// let langele = document.querySelector("ul");
// langele.removeChild(langele.lastElementChild); //remove the last child


// remove all the children of the ul element
// let langele = document.querySelector("#language");
// langele.innerHTML="";  //remove all the children of the ul element

// while (langele.lastChild){
//     langele.removeChild(langele.lastChild);
// }  //remove all children of ul element

//..................insertbefore() method

// syntax
// parentnode .insertbefore(newnode,existingnode);

// let langele = document.querySelector("#language");

// let newlang = document.createElement("li");
// newlang.innerHTML="python";

// langele.insertBefore(newlang,langele.firstElementChild);
// langEl.insertBefore(newLang, langEl.firstElementChild); // Inserts the newLang before the second child of the ul element.
// langele.insertBefore(newlang,langele.children[1]);

//insertAfter() method

// let langele = document.querySelector("#language");

// function insertAfter(newNode,existingNode){
//     existingNode.parentNode.insertBefore(newNode,existingNode.nextSibling);
// }

// let newLang = document.createElement("li");
// newLang.innerHTML="python";
// insertAfter(newlang,langele.lastElementChild);



