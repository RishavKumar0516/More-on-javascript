console.log("For of vs For In loops");

pepole = ["Harry", "Rishav", "Skillf", "Shubham"];

//Traditional for loop.
for(let index = 0; index < pepole.length;index++){
    const element = pepole[index];
    console.log(element);
}

//------------ITERATING AN OBJECT----------
let obj = {
    name : "harry",
    language : "javascript",
    hobbies : "Android app development"
}
//console.log(obj);

//  1.1   iterating an object using Traditional for loop.
// for(let index = 0; index < Object.keys(obj).length;index++){
//     const element = obj[Object.keys(obj)[index]];
//     console.log(element);
// }

//  1.2   iterating an object using for in loop.
//
for (const key in obj) {
        console.log( obj[key]);
}

//  ------------  ITERATING A STRING -------------
//  1.1  ITERATING A STRING USING FOR IN LOOP
//   FOR in := we use for in loop when we want to grab the keys of object and then    iterate the object.
//we can use for in with strings to loop through all the characters.
 let myString = "This is my string";
// for(let char in myString){
//     console.log(myString[char]);
// }

//  1.2   iterating using Traditional for loop.
// for(let index = 0; index < myString.length;index++){
//      console.log(myString[index]);
// }


console.log("*************ITERATING USING FOR OF LOOP***************");
//FOR of :- string and array are iterable so we can easily use for of loop  iterate them. so for of loop is used when we need iterating.
 //iterating an array
 for (let name of pepole) {
     console.log(name);
 }
 //iterating a string
 for (let character  of myString) {
     console.log(character);
 }
