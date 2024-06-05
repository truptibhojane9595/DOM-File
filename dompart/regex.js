//Regular expression

// excl() : this function will retrun an array for match or null for no match
// test() : return true or false
// match() : it will return an array of result or null
// search() : return index of first match else -1
// replace() : retrun nrw replace string with all the replacement

// modifier : 
// g , i 

// metacharacter :
// \ | ( ) { } [ ] 
// ^ : starting
//  $ : ending
//  *: match more any 0 or more Char
//  +
//   ? : ueing for optional thing
// . : single char is match any

// quantifier :
// * + ? 

// Bracket :
// { } [ ]



//...........................exec() method.........
// let str = "This is a improve file";
// let reg = / imporve /;
// let r = reg.exec(str);
// console.log(r);


//.............................test() method.................
// let str = "This is a Improve file";
// let reg = /imporve/i;
// let r = reg.test(str);
// console.log(r);

//..............................match() method.................
// let str = "This is a Improve file";
// let reg = /imporve/g;
// let r = str.match(reg);
// console.log(r);


//...........................search() method.........................
// let str = "This is a Improve file";
// let reg = /Improve/g;
// let r = str.search(reg);
// console.log(r);

//...........................replace() method..........................
// let str = "This is a Improve file";
// let reg = /Improve/g;
// let r = str.replace(reg,"code");
// console.log(r);

//...........................metacharacter..............................
let str = "This is a Improve file";
let reg = /Improve/g;
reg = /^This/;
if(reg.test(str)){
    console.log("yes");
}
else{
    console.log("no");
}
