console.log("character sets in regular expression");

// const regex = /^h/i;
// const str = "Harry bhai";
// let result = regex.exec(str);
// console.log("The result form exec is ",result);
// if(regex.test(str)){
//     console.log(`The string ${str} match the expression ${regex.source}`);
// }
// else{
//     console.log(`The string ${str} does not match the expression ${regex.source}`);
// }

// character sets

//const regex = /h[aty]rry/;   // can be a, t or y.
//const regex = /h[a-z]rry/;   // can be any character from a to z.
let regex = /h[aty]rry/;   // cannot be any of character a,t or y.
// but what we gonna do if we  want to match every character other then "aty". then we use carrat(^) symbol. here carrat symbol works as a does not match.
 //regex = /h[^aty]rry/;
 // we can use multiple charset.
 //regex = /h[^aty]rr[yu]/; // cannot of any a,t, or y + can be of  y or u.
 regex = /h[a-zA-Z]rr[Yuy]/; // can be any character form a to z or from A to Z + can be Y, u or y.
 regex = /h[a-zA-Z]rr[Yuy0-9]/; // can be any character form a to z or from A to Z + can be Y, u,y or any digit from 0 to 9.
let str = "hirr9 bhai";
let result = regex.exec(str);
console.log("The result form exec is ",result);
if(regex.test(str)){
    console.log(`The string ${str} match the expression ${regex.source}`);
}
else{
    console.log(`The string ${str} does not match the expression ${regex.source}`);
}

//  quantifiers :- it is used to specify the quantity of a certain character.

//regex = /har{2}y/;  //  r can exactly occour 2 times.
//str = "harry bhai";
regex = /har{0,3}y/;  //  r can exactly occour 2 times.
str = "hay bhai";     //  r can be occour exactly from 0 to 3 times.
result = regex.exec(str);
 console.log("The result form exec is ",result);
 if(regex.test(str)){
     console.log(`The string ${str} match the expression ${regex.source}`);
 }
 else{
     console.log(`The string ${str} does not match the expression ${regex.source}`);
 }

//  groupings :- we use parenthesis for grouping.


regex = /(har){2}/;  //  har can exactly occour 2 times.
str = "harhar bhai"; 
regex = /(har){2}([0-9]r){3}/;  //  har can exactly occour 2 times.
str = "harhar1r2r3r bhai"; 
result = regex.exec(str);
 console.log("The result form exec is ",result);
 if(regex.test(str)){
     console.log(`The string ${str} match the expression ${regex.source}`);
 }
 else{
     console.log(`The string ${str} does not match the expression ${regex.source}`);
 }
